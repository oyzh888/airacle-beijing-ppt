/**
 * Three.js Neural Network Starfield Background
 * + Ambient Mesh Blob parallax
 */

(function initStarfield() {
  const c = document.getElementById('bgCanvas');
  if (!c) return;
  const scene = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 1, 1000);
  cam.position.z = 1;
  const r = new THREE.WebGLRenderer({ canvas: c, alpha: true, antialias: true });
  r.setSize(innerWidth, innerHeight);
  r.setPixelRatio(Math.min(devicePixelRatio, 2));

  // Stars
  const N = 2000;
  const g = new THREE.BufferGeometry();
  const pos = new Float32Array(N * 3), col = new Float32Array(N * 3), sizes = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    pos[i*3] = (Math.random() - .5) * 700;
    pos[i*3+1] = (Math.random() - .5) * 700;
    pos[i*3+2] = (Math.random() - .5) * 700;
    const tc = new THREE.Color().setHSL(.55 + Math.random() * .2, .5 + Math.random() * .3, .4 + Math.random() * .4);
    col[i*3] = tc.r; col[i*3+1] = tc.g; col[i*3+2] = tc.b;
    sizes[i] = .5 + Math.random() * 2.5;
  }
  g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  g.setAttribute('color', new THREE.BufferAttribute(col, 3));
  g.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

  const starMat = new THREE.ShaderMaterial({
    uniforms: { time: { value: 0 } },
    vertexShader: `
      attribute float size;
      varying vec3 vColor;
      uniform float time;
      void main(){
        vColor = color;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (200.0 / length(mv.xyz)) * (0.8 + 0.2 * sin(time + position.x * 0.1));
        gl_Position = projectionMatrix * mv;
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      void main(){
        float d = length(gl_PointCoord - 0.5);
        if(d > 0.5) discard;
        float a = smoothstep(0.5, 0.1, d);
        gl_FragColor = vec4(vColor, a * 0.8);
      }
    `,
    transparent: true, vertexColors: true, depthWrite: false
  });
  const stars = new THREE.Points(g, starMat);
  scene.add(stars);

  // Constellation lines
  const lg = new THREE.BufferGeometry(); const lp = [];
  const near = [];
  for (let i = 0; i < Math.min(300, N); i++) near.push(new THREE.Vector3(pos[i*3], pos[i*3+1], pos[i*3+2]));
  for (let i = 0; i < near.length; i++)
    for (let j = i + 1; j < near.length; j++)
      if (near[i].distanceTo(near[j]) < 40) { lp.push(near[i].x, near[i].y, near[i].z, near[j].x, near[j].y, near[j].z); }
  lg.setAttribute('position', new THREE.Float32BufferAttribute(lp, 3));
  const lines = new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: 0x0066ff, transparent: true, opacity: .04 }));
  scene.add(lines);

  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => { mx = (e.clientX / innerWidth - .5) * .6; my = (e.clientY / innerHeight - .5) * .6; });
  window.addEventListener('resize', () => { cam.aspect = innerWidth / innerHeight; cam.updateProjectionMatrix(); r.setSize(innerWidth, innerHeight); });

  let t = 0;
  (function anim() {
    requestAnimationFrame(anim);
    t += .005;
    starMat.uniforms.time.value = t;
    stars.rotation.y += .00015; stars.rotation.x += .00008;
    lines.rotation.y += .00015; lines.rotation.x += .00008;
    cam.position.x += (mx * 3 - cam.position.x) * .015;
    cam.position.y += (-my * 3 - cam.position.y) * .015;
    cam.lookAt(scene.position);
    r.render(scene, cam);
  })();
})();

// Ambient blob parallax
(function initBlobParallax() {
  const blobs = document.querySelectorAll('.mesh-blob');
  if (!blobs.length) return;
  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX / innerWidth - .5; my = e.clientY / innerHeight - .5; });
  (function upd() {
    blobs.forEach((b, i) => { const f = (i + 1) * 25; b.style.transform = `translate(${mx*f}px,${my*f}px)`; });
    requestAnimationFrame(upd);
  })();
})();
