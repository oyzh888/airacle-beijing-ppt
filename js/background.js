/**
 * background.js
 *
 * Layer 1 — bgCanvas (z-index:0, behind text):
 *   Stars + constellation lines
 *
 * Layer 2 — fgCanvas (z-index:15, in front of text):
 *   Translucent floating 3D geometry that "interweaves" with content
 *   Creates depth illusion — some shapes drift in front, some behind
 *
 * + Ambient mesh blob parallax (CSS elements)
 */

// Shared mouse state
const _mouse = { x: 0, y: 0, nx: 0, ny: 0 };
document.addEventListener('mousemove', e => {
  _mouse.x = e.clientX; _mouse.y = e.clientY;
  _mouse.nx = e.clientX / innerWidth - .5;
  _mouse.ny = e.clientY / innerHeight - .5;
});

// ============================================================
// LAYER 1: STARFIELD (behind everything)
// ============================================================
(function initStarfield() {
  const c = document.getElementById('bgCanvas');
  if (!c) return;
  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 1, 1000);
  cam.position.z = 1;
  const renderer = new THREE.WebGLRenderer({ canvas: c, alpha: true, antialias: true });
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

  // Stars
  const N = 1500;
  const geo = new THREE.BufferGeometry();
  const pos = new Float32Array(N * 3), col = new Float32Array(N * 3), sizes = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    pos[i*3] = (Math.random() - .5) * 700;
    pos[i*3+1] = (Math.random() - .5) * 700;
    pos[i*3+2] = (Math.random() - .5) * 700;
    const tc = new THREE.Color().setHSL(.55 + Math.random() * .2, .5 + Math.random() * .3, .4 + Math.random() * .4);
    col[i*3] = tc.r; col[i*3+1] = tc.g; col[i*3+2] = tc.b;
    sizes[i] = .5 + Math.random() * 2.5;
  }
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  const starMat = new THREE.ShaderMaterial({
    uniforms: { time: { value: 0 } },
    vertexShader: `
      attribute float size; varying vec3 vColor; uniform float time;
      void main(){
        vColor = color;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (200.0 / length(mv.xyz)) * (0.8 + 0.2 * sin(time + position.x * 0.1));
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `
      varying vec3 vColor;
      void main(){
        float d = length(gl_PointCoord - 0.5);
        if(d > 0.5) discard;
        gl_FragColor = vec4(vColor, smoothstep(0.5, 0.1, d) * 0.7);
      }`,
    transparent: true, vertexColors: true, depthWrite: false
  });
  scene.add(new THREE.Points(geo, starMat));

  // Constellation lines
  const lg = new THREE.BufferGeometry(); const lp = [];
  const near = [];
  for (let i = 0; i < Math.min(250, N); i++) near.push(new THREE.Vector3(pos[i*3], pos[i*3+1], pos[i*3+2]));
  for (let i = 0; i < near.length; i++)
    for (let j = i + 1; j < near.length; j++)
      if (near[i].distanceTo(near[j]) < 45) lp.push(near[i].x, near[i].y, near[i].z, near[j].x, near[j].y, near[j].z);
  lg.setAttribute('position', new THREE.Float32BufferAttribute(lp, 3));
  scene.add(new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: 0x0066ff, transparent: true, opacity: .04 })));

  window.addEventListener('resize', () => { cam.aspect = innerWidth / innerHeight; cam.updateProjectionMatrix(); renderer.setSize(innerWidth, innerHeight); });

  let t = 0;
  (function anim() {
    requestAnimationFrame(anim);
    t += .004;
    starMat.uniforms.time.value = t;
    scene.rotation.y += .00012;
    scene.rotation.x += .00006;
    cam.position.x += (_mouse.nx * 2 - cam.position.x) * .01;
    cam.position.y += (-_mouse.ny * 2 - cam.position.y) * .01;
    cam.lookAt(scene.position);
    renderer.render(scene, cam);
  })();
})();

// ============================================================
// LAYER 2: FLOATING 3D GEOMETRY (in front of text — interweaves)
// ============================================================
(function initFloatingGeometry() {
  const c = document.getElementById('fgCanvas');
  if (!c) return;
  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(50, innerWidth / innerHeight, 0.1, 100);
  cam.position.z = 30;
  const renderer = new THREE.WebGLRenderer({ canvas: c, alpha: true, antialias: true });
  renderer.setSize(innerWidth, innerHeight);
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));

  // Wireframe material — ghostly, translucent
  function wireMat(color, opacity) {
    return new THREE.MeshBasicMaterial({
      color, wireframe: true, transparent: true, opacity,
      depthWrite: false, blending: THREE.AdditiveBlending
    });
  }

  // Edge-glow material (slightly thicker lines, different color)
  function edgeMat(color, opacity) {
    return new THREE.LineBasicMaterial({
      color, transparent: true, opacity,
      depthWrite: false, blending: THREE.AdditiveBlending
    });
  }

  // ---- Create floating shapes ----
  const shapes = [];

  // Helper: create a wireframe mesh + its edge lines
  function addShape(geometry, color, opacity, position, scale, rotSpeed) {
    const mesh = new THREE.Mesh(geometry, wireMat(color, opacity * 0.4));
    mesh.position.copy(position);
    mesh.scale.setScalar(scale);
    scene.add(mesh);

    const edges = new THREE.EdgesGeometry(geometry);
    const line = new THREE.LineSegments(edges, edgeMat(color, opacity));
    line.position.copy(position);
    line.scale.setScalar(scale);
    scene.add(line);

    shapes.push({
      mesh, line, rotSpeed,
      basePos: position.clone(),
      floatOffset: Math.random() * Math.PI * 2,
      floatSpeed: .3 + Math.random() * .4,
      floatAmp: .8 + Math.random() * 1.2
    });
  }

  // Icosahedron — top right area
  addShape(
    new THREE.IcosahedronGeometry(1, 1),
    0x00d4ff, 0.12,
    new THREE.Vector3(14, 8, -5), 3.5,
    { x: .001, y: .002, z: .0005 }
  );

  // Octahedron — left side
  addShape(
    new THREE.OctahedronGeometry(1, 0),
    0x7b68ee, 0.10,
    new THREE.Vector3(-16, -4, -8), 2.8,
    { x: .0015, y: .001, z: .002 }
  );

  // Torus — center-ish, large and subtle
  addShape(
    new THREE.TorusGeometry(1, .35, 8, 20),
    0x00d4ff, 0.06,
    new THREE.Vector3(2, -10, -12), 4.5,
    { x: .0008, y: .0015, z: .0003 }
  );

  // Dodecahedron — top left
  addShape(
    new THREE.DodecahedronGeometry(1, 0),
    0xff6b9d, 0.08,
    new THREE.Vector3(-12, 10, -6), 2.2,
    { x: .002, y: .0008, z: .0015 }
  );

  // Small tetrahedrons scattered
  for (let i = 0; i < 5; i++) {
    addShape(
      new THREE.TetrahedronGeometry(1, 0),
      [0x00d4ff, 0x7b68ee, 0x00ffb0, 0xff6b9d, 0xffd700][i],
      0.07 + Math.random() * .05,
      new THREE.Vector3(
        (Math.random() - .5) * 35,
        (Math.random() - .5) * 22,
        -3 - Math.random() * 15
      ),
      .8 + Math.random() * 1.2,
      { x: .002 + Math.random() * .003, y: .002 + Math.random() * .003, z: .001 + Math.random() * .002 }
    );
  }

  // Large ring — very subtle, background depth
  addShape(
    new THREE.TorusGeometry(1, .08, 6, 40),
    0x7b68ee, 0.04,
    new THREE.Vector3(8, 3, -18), 8,
    { x: .0003, y: .0008, z: .0002 }
  );

  // Box frame — right side
  addShape(
    new THREE.BoxGeometry(1, 1, 1),
    0x00ffb0, 0.07,
    new THREE.Vector3(18, -8, -10), 2,
    { x: .0012, y: .002, z: .001 }
  );

  window.addEventListener('resize', () => {
    cam.aspect = innerWidth / innerHeight;
    cam.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  });

  let t = 0;
  (function anim() {
    requestAnimationFrame(anim);
    t += .008;

    shapes.forEach(s => {
      // Rotate
      s.mesh.rotation.x += s.rotSpeed.x;
      s.mesh.rotation.y += s.rotSpeed.y;
      s.mesh.rotation.z += s.rotSpeed.z;
      s.line.rotation.copy(s.mesh.rotation);

      // Float (gentle sine wave drift)
      const fy = Math.sin(t * s.floatSpeed + s.floatOffset) * s.floatAmp;
      const fx = Math.cos(t * s.floatSpeed * .7 + s.floatOffset) * s.floatAmp * .5;
      s.mesh.position.x = s.basePos.x + fx;
      s.mesh.position.y = s.basePos.y + fy;
      s.line.position.copy(s.mesh.position);
    });

    // Mouse parallax — shapes react to cursor
    cam.position.x += (_mouse.nx * 4 - cam.position.x) * .02;
    cam.position.y += (-_mouse.ny * 3 - cam.position.y) * .02;
    cam.lookAt(new THREE.Vector3(0, 0, -5));

    renderer.render(scene, cam);
  })();
})();

// ============================================================
// AMBIENT BLOB PARALLAX (CSS elements)
// ============================================================
(function initBlobParallax() {
  const blobs = document.querySelectorAll('.mesh-blob');
  if (!blobs.length) return;
  (function upd() {
    blobs.forEach((b, i) => {
      const f = (i + 1) * 25;
      b.style.transform = `translate(${_mouse.nx*f}px,${_mouse.ny*f}px)`;
    });
    requestAnimationFrame(upd);
  })();
})();
