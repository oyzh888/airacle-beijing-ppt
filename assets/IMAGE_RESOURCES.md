# 图片素材收集清单（按 PPT 页组织）

> 用法：每一项下面都给了「搜索链接」和「推荐候选图」。直接点进去挑图，下载后放进 `assets/images/` 或 `assets/team/`。
> 所有 Unsplash / Pexels / Pixabay 图片**免费可商用**，不用署名（署名更好）。
> 你是 Adobe 员工，也可以直接用 **Adobe Stock**（公司授权）和 **Firefly**（生成）产出版权完全干净的图。

**在 Markdown 里直接看图**：各节下的 **🖼 本地预览** 使用同目录下 `md-preview/` 里已放入的缩略图（相对路径嵌入）。预览为主题相近的示例图；最终选图仍以同一节上方的 **Unsplash 单页链接**为准。

---

## 🎯 快速入口（推荐先逛这几个）

| 站点 | 用途 | 链接 |
|------|------|------|
| Unsplash | 真实摄影图 | https://unsplash.com/s/photos/ |
| Pexels | 照片+视频 | https://www.pexels.com/search/ |
| Pngtree | 科技感透明PNG | https://pngtree.com/so/ |
| Freepik | 插画/PNG/PPT素材 | https://www.freepik.com/search |
| Adobe Stock | 内部可用 | https://stock.adobe.com/search |
| Adobe Firefly | AI生成（强推） | https://firefly.adobe.com |
| DiceBear | 快速生成头像 | https://www.dicebear.com/playground |

---

## ✨ 透明高级感 PNG（适合做「大气装饰层 / 飞入动画」）

你要的通常是：**主体精致、边缘干净、透光/金属/全息质感强**，导出为 **真正带 Alpha 通道的 PNG**（不要用 JPG 抠半透明，会一圈灰边）。下面这些是「找透明 PNG」比 Unsplash 摄影图更合适的地方；公司场景继续优先 **Adobe Stock / Firefly**。

### 🥇 优先从这些站筛「Transparent / PNG」

| 站点 | 适合什么高级感 | 怎么筛透明 | 链接 |
|------|----------------|-----------|------|
| **Adobe Stock** | 玻璃/全息 HUD、粒子、霓虹线框、科技感叠层（质量最稳） | 搜索后用筛选器选 **PNG / 抠图 / 透明背景**（界面会随产品线更新） | https://stock.adobe.com/search?k=holographic+transparent |
| **Adobe Firefly**（生成） | 独一无二、整套风格统一（不易撞素材） | 导出时尽量选 **PNG**；Prompt 里强调 `transparent background`（生成结果仍需放大检查边缘） | https://firefly.adobe.com |
| **Freepik** | 矢量转 PNG、玻璃拟态、几何金线、抽象科技插图 | 左侧筛选 **PNG / PSD**，优先看「Premium」里更像「发布会 Keynote」那一类 | https://www.freepik.com/search?format=search&query=holographic%20png |
| **PNGtree** | 海量科技风透明 PNG（光效、电路、地球线框） | 关键词 + 选 **PNG**；注意每日免费次数与商用条款 | https://pngtree.com/so/holographic |
| **Storyset**（Freepik 旗下） | 扁平插画场景，下载时可配色调 | 导出 **PNG**，背景选透明 | https://storyset.com |
| **Pixabay** | 免费素材兜底 | 筛选 **PNG**，再肉眼确认棋盘格透明 | https://pixabay.com/images/search/transparent%20png/?search_source=navbar |

### 🔎 复制即用的英文关键词（搜「高级感 / 大屏感」）

把下面词丢进 Adobe Stock / Freepik / PNGtree 的搜索框（可组合 2～3 个词）：

- **全息 / 玻璃科技**：`holographic hud png`、`glass morphism ui png`、`futuristic interface transparent`
- **线条 / 粒子 / 光效**：`neon circuit lines png`、`particle flare overlay png`、`light streak transparent png`
- **地球 / 数据**：`wireframe globe png`、`digital earth hologram png`、`data flow lines png`
- **抽象高级**：`gold geometric lines png`、`luxury gradient ribbon png`、`abstract chrome shape png`

中文站（千图/摄图等）也可用对应词：**全息**、**玻璃质感**、**HUD 科技**、**粒子光效**、**透明 PNG**，下载前务必看清 **商用授权**。

### 📌 PPT 里显得「贵」的快速法则（避免廉价感）

1. **少即是多**：一页只放 **1～2 个**大透明装饰，其余留白；不要用一堆小贴纸。
2. **对齐栅格**：装饰元素对齐标题或内容栏边缘，避免「随机飘一张 PNG」。
3. **分辨率**：尽量找 **长边 ≥ 2500px** 的 PNG；插入后不要暴力拉大超过原尺寸。
4. **混合模式**：深色底上可试 **柔光 / 线性减淡（添加）**；浅色底避免过曝霓虹。
5. **版权**：对外正式场合（政府/客户）优先 **Adobe Stock / 自家 Firefly / 明确 CC0 协议**；聚合站单图授权要逐张确认。

### 📁 存放建议（可选）

透明叠层可与实拍分开，避免和背景图混在一起：

```
assets/images/overlays/     # 透明 PNG：光效、线框、HUD、粒子等
```

---

## 📄 第1页：封面（01-cover.inc）

**需要**：2 张暗黑科技感透明/深色 PNG，飞入特效用。主题：AI 神经网络 + 全息地球。

### 🔍 搜索链接
- Unsplash：https://unsplash.com/s/photos/neural-network
- Unsplash：https://unsplash.com/s/photos/holographic-globe
- Pngtree（免费PNG）：https://pngtree.com/so/neural-network
- Pngtree：https://pngtree.com/so/holographic-earth
- Freepik：https://www.freepik.com/search?query=ai%20neural%20network%20dark

### 💡 推荐候选（直接可下）
- https://unsplash.com/photos/a-computer-generated-image-of-a-human-head-L5Q-6Hb5hpo
- https://unsplash.com/photos/a-computer-generated-image-of-a-globe-surrounded-by-purple-lines-AxxcvhkKNWQ
- https://unsplash.com/photos/a-blue-and-purple-abstract-background-with-lots-of-dots-nGrfKmtwv24

### 🖼 本地预览（主题近似）

| 神经网络感 | 地球 / 数据流 | 网点抽象 |
| :---: | :---: | :---: |
| ![](md-preview/01-neural-ai.jpg) | ![](md-preview/01-globe-data.jpg) | ![](md-preview/01-abstract-nodes.jpg) |

### 🎨 Firefly 生成 Prompt（推荐）
```
1. "dark abstract neural network brain, glowing blue and purple nodes,
   transparent background, cyberpunk aesthetic, ultra detailed"
2. "holographic earth globe with glowing data lines, dark background,
   sci-fi futuristic, cinematic lighting"
```

---

## 📄 第2页：公司概况（02-company.inc）

**需要**：3 张 —— ①北京顺义办公室 ②硅谷办公室 ③AI 科技感抽象底图。

### 🔍 搜索链接
- 北京办公室：https://unsplash.com/s/photos/beijing-office
- 现代办公室：https://unsplash.com/s/photos/modern-office-interior
- 硅谷：https://unsplash.com/s/photos/silicon-valley-office
- 科技感底图：https://unsplash.com/s/photos/abstract-tech-blue
- Pexels 办公室：https://www.pexels.com/search/modern%20office/

### 💡 推荐候选
- 北京CBD夜景：https://unsplash.com/photos/city-skyline-during-night-time-7lryofJ0H9s
- 现代办公空间：https://unsplash.com/photos/people-sitting-on-chair-in-front-of-table-while-holding-pens-during-daytime-pwhHbs3EKAc
- 硅谷谷歌总部：https://unsplash.com/s/photos/google-headquarters
- 科技蓝底：https://unsplash.com/photos/a-blue-abstract-background-with-lines-and-dots-hwLAI5lRhdM

### 🖼 本地预览（主题近似）

| 城市夜景 | 办公室 | 科技蓝底 |
| :---: | :---: | :---: |
| ![](md-preview/02-beijing-night.jpg) | ![](md-preview/02-modern-office.jpg) | ![](md-preview/02-tech-blue.jpg) |

### ⚠️ 最好方案
**真的去公司拍**：顺义办公室拍 2-3 张（前台、工位、会议室），硅谷让 Steve 拍几张发过来。真实照片 > 任何素材图。

---

## 📄 第3页：核心团队（03-team.inc）

**需要**：9 位成员真实头像（北京 5 人：Minxuan, Penny, Jack, Jingqiong, Judy；美国 4 人：Steve + 3 位）。

### 最佳方案
1. **真人头像**（最推荐）：统一白/灰背景，手机竖拍，1:1 裁剪成 400×400。
2. **过渡方案**：用 DiceBear 生成风格统一的卡通头像。

### 🔍 DiceBear 在线生成（免费）
- https://www.dicebear.com/playground
- 推荐风格：`notionists`, `avataaars`, `personas`, `lorelei`
- 直接 URL（把 seed 换成每个人名字）：
  ```
  https://api.dicebear.com/7.x/notionists/svg?seed=Minxuan
  https://api.dicebear.com/7.x/notionists/svg?seed=Penny
  https://api.dicebear.com/7.x/notionists/svg?seed=Jack
  https://api.dicebear.com/7.x/notionists/svg?seed=Jingqiong
  https://api.dicebear.com/7.x/notionists/svg?seed=Judy
  https://api.dicebear.com/7.x/notionists/svg?seed=Steve
  ```

### 🖼 预览（DiceBear，同一风格占位）

在线 PNG（需联网渲染；把下方 URL 里的 `seed=` 改成人名即可与上文「直接 URL」一致）。美国侧另外 3 人可用占位 seed，到手换真人头像。

| Minxuan | Penny | Jack |
| :---: | :---: | :---: |
| ![](https://api.dicebear.com/7.x/notionists/png?seed=Minxuan&size=160) | ![](https://api.dicebear.com/7.x/notionists/png?seed=Penny&size=160) | ![](https://api.dicebear.com/7.x/notionists/png?seed=Jack&size=160) |
| Jingqiong | Judy | Steve |
| ![](https://api.dicebear.com/7.x/notionists/png?seed=Jingqiong&size=160) | ![](https://api.dicebear.com/7.x/notionists/png?seed=Judy&size=160) | ![](https://api.dicebear.com/7.x/notionists/png?seed=Steve&size=160) |
| US 同事（占位） | US 同事（占位） | US 同事（占位） |
| ![](https://api.dicebear.com/7.x/notionists/png?seed=US-Colleague-1&size=160) | ![](https://api.dicebear.com/7.x/notionists/png?seed=US-Colleague-2&size=160) | ![](https://api.dicebear.com/7.x/notionists/png?seed=US-Colleague-3&size=160) |

### 专业头像素材（如果有人还没头像顶上用）
- https://unsplash.com/s/photos/professional-headshot
- https://www.pexels.com/search/portrait%20professional/

---

## 📄 第4页：OpenClaw Demo（04-demo-openclaw.inc）

**需要**：2 张飞入特效 PNG + demo 背景。主题：赛博朋克电路 / 数据流。

### 🔍 搜索链接
- https://unsplash.com/s/photos/cyberpunk-circuit
- https://unsplash.com/s/photos/data-stream
- https://unsplash.com/s/photos/matrix-code
- https://pngtree.com/so/cyberpunk-png
- https://pngtree.com/so/circuit-board-png

### 💡 推荐候选
- 电路板：https://unsplash.com/photos/a-computer-chip-with-the-letter-a-on-top-of-it-FnA5pAzqhMM
- 紫色数据流：https://unsplash.com/photos/a-purple-background-with-a-bunch-of-lines-and-dots-gypjdCvUsaw
- 矩阵代码：https://unsplash.com/photos/green-and-black-computer-screen-npxXWgQ33ZQ

### 🖼 本地预览（主题近似）

| 电路 / 芯片感 | 紫色线条 | 代码绿屏 |
| :---: | :---: | :---: |
| ![](md-preview/04-circuit-chip.jpg) | ![](md-preview/04-purple-lines.jpg) | ![](md-preview/04-matrix-green.jpg) |

### 📸 产品截图（自己出）
- Telegram 对话截图：直接在 Telegram 里把 AI 员工对话框截图（手机/网页版都行）
- Web 后台截图：Chrome 开发者工具 → 设备模式切成 Desktop 1920×1080 截图最干净

---

## 📄 第5页：技术产品（05-demo-tech.inc）

**需要**：2 张科技飞入图 + AI 生成作品样例 + App 截图。

### 🔍 搜索链接（背景飞入）
- https://unsplash.com/s/photos/ai-abstract
- https://unsplash.com/s/photos/geometric-tech
- https://pngtree.com/so/ai-technology-png

### 💡 AI 作品样例（你们自己产品生成的最好）
直接从你们 Jack 的算法产出里选 4-6 张最好看的就行，风格多样化：
- 1 张写实人像
- 1 张动漫风
- 1 张产品摄影
- 1 张场景插画

### App 截图
- iPhone 边框模板：https://mockuphone.com/ （上传截图 → 自动加手机边框）
- 或用 Figma 的 Mockup 插件

---

## 📄 第6页：商务拓展（06-business.inc）⭐⭐⭐⭐⭐

**需要**：6 张真实照片 —— Snapchat 参访、沙特网红合作、欧洲出差、NeurIPS、NVIDIA GTC。

### ⚠️ 最重要：这页必须用真实照片
这是向政府证明你们"真的在做国际业务"的关键一页，用素材图一眼假。

### 从哪儿找
1. **团队微信/飞书群翻聊天记录**（出差时肯定拍了合影）
2. **每个人相册**（Minxuan/Steve/Judy 手机里翻）
3. **LinkedIn** 上发过的出差动态
4. **邮件附件**（会议合影）

### 如果真的一张都没有，应急方案
- Snapchat HQ：https://unsplash.com/s/photos/snapchat 或 Google 图搜 "Snap Inc headquarters" 取新闻配图（需标注来源）
- 沙特：https://unsplash.com/s/photos/riyadh
- NeurIPS：https://unsplash.com/s/photos/tech-conference
- NVIDIA GTC：https://unsplash.com/s/photos/nvidia-conference 或去 GTC 官网拿官方照

但**强烈建议**：再忙也花 30 分钟翻翻手机找真实照片。这页的说服力 10 倍于其他任何页。

---

## 📄 第7页：社会贡献（07-contribution.inc）

纯数据页，**不需要配图**。✅

---

## 📄 第8页：愿景致谢（08-vision.inc）

**需要**：2 张飞入特效 —— 宇宙星云 + 极光/光晕。

### 🔍 搜索链接
- https://unsplash.com/s/photos/nebula
- https://unsplash.com/s/photos/aurora
- https://unsplash.com/s/photos/cosmos
- https://www.pexels.com/search/galaxy/

### 💡 推荐候选
- 星云：https://unsplash.com/photos/blue-and-purple-galaxy-wallpaper-Oze6U2m1oYU
- 极光：https://unsplash.com/photos/green-aurora-borealis-Rk8fHGGeiLw
- 银河：https://unsplash.com/photos/milky-way-photography-ln5drpv_ImI

### 🖼 本地预览（主题近似）

| 星云 | 极光 / 夜空 | 银河 / 星空 |
| :---: | :---: | :---: |
| ![](md-preview/08-nebula.jpg) | ![](md-preview/08-aurora.jpg) | ![](md-preview/08-milky-way.jpg) |

### 🎨 Firefly Prompt
```
"cosmic nebula with purple and blue hues, stars shining,
 hopeful and futuristic, cinematic wide shot"
```

---

## 📁 建议的文件组织

下载后建议这样放：
```
assets/
├── md-preview/         # 本清单内嵌预览缩略图（可选，仅方便在 MD 里看图）
├── images/
│   ├── overlays/       # 透明高级感 PNG（光效/HUD/粒子叠层，可选）
│   ├── 01-cover/       # 封面飞入图
│   ├── 02-company/     # 办公室照片
│   ├── 04-demo/        # OpenClaw 相关
│   ├── 05-tech/        # 技术产品图
│   ├── 06-business/    # 商务真实照片 ⭐
│   └── 08-vision/      # 星云/极光
└── team/               # 9个头像（已有目录）
```

---

## ✅ 优先级建议（按紧急度）

| 优先级 | 任务 | 估时 |
|--------|------|------|
| ⭐⭐⭐⭐⭐ | **第6页商务真实照片**（翻手机就行） | 30 min |
| ⭐⭐⭐⭐⭐ | **第3页团队真实头像**（让大家自己发） | 1 day |
| ⭐⭐⭐⭐⭐ | **第2页办公室真实照片**（去公司拍） | 1 hour |
| ⭐⭐⭐⭐ | 第4-5页产品截图 | 1 hour |
| ⭐⭐⭐ | 第1/4/5/8页科技飞入图（Unsplash挑） | 1 hour |

---

**最后一条建议**：科技感飞入图全部用 **Adobe Firefly** 生成一遍，风格最统一、最不会撞图、版权完全干净。你是 Adobe 员工，这是最划算的方案。

---

# 🎨 Firefly Prompt 合集：第 1/4/5/8 页飞入图（统一视觉系统）

**设计思路**：全套用同一视觉语言，避免"东一张西一张"：
- 🎨 **配色**：深夜蓝 (#0A0E27) 打底 + 电光青 (#00E5FF) + 紫罗兰 (#A855F7) + 金属香槟 (#E8D4A2) 点缀
- ✏️ **风格**：矢量线框（wireframe）+ 全息粒子 + 细金属线条，**绝对不要**摄影真实感
- 🧊 **透明**：所有图都强调 "isolated on transparent background, large negative space, only subject visible"
- 📐 **构图**：单一主体居中或偏一侧，留大量空白给文字

**Firefly 通用参数设置**：
- Content Type：**Art**（不要用 Photo）
- Aspect Ratio：正方形或 16:9
- Style → Effects：加 `Line drawing`、`Wireframe`、`Neon`
- Color and Tone：`Cool tones` / `Vibrant colors`
- Lighting：`Studio light` / `Backlit`

---

## 📄 第 1 页 · 封面（公司定位：AI 驱动营销科技）

### Prompt 1-A｜AI 大脑 × 数据神经网络（主视觉）
```
Elegant vector wireframe of a human brain made of glowing neural network
nodes and thin circuit lines, data points flowing along the synapses,
electric cyan and violet gradient, luxury holographic style,
isolated on transparent background, large empty negative space,
minimal composition, ultra-detailed fine line art, premium keynote aesthetic,
NOT photorealistic, vector illustration
```

### Prompt 1-B｜全息地球 × 全球触达（呼应中美双总部）
```
Transparent holographic wireframe earth globe made of thin golden and cyan
latitude lines, glowing connection arcs between continents suggesting global
network, floating data particles around, dark cosmic void background,
minimal luxury sci-fi style, isolated on transparent PNG,
vector line art, high-end tech keynote visual, lots of empty space
```

### Prompt 1-C｜粒子星云 LOGO 光环（可做标题背景装饰）
```
Delicate swirl of glowing particles forming a soft circular halo,
cyan-to-violet gradient, subtle gold highlights, thin light streaks,
transparent background, ethereal and luxurious, minimalist abstract,
vector-like precision, premium product launch aesthetic
```

---

## 📄 第 4 页 · OpenClaw Demo（AI 员工 / 智能体系统）

> 业务关键词：Telegram AI 员工、对话智能体、自动化工作流、网红管理调度

### Prompt 4-A｜AI 智能体网络（核心视觉）
```
Vector wireframe diagram of an AI agent orchestration system:
central glowing hexagonal core node connected by thin cyan lines to
smaller orbital agent nodes, each with tiny icons suggesting chat bubbles
and workflow steps, floating holographic UI panels around,
isolated on transparent background, dark mode luxury UI aesthetic,
electric blue and violet accents, ultra-clean line art, minimal and premium,
NOT photoreal, vector illustration style
```

### Prompt 4-B｜对话数据流（AI 员工 × 社交平台）
```
Abstract vector visualization of conversation data streams:
flowing ribbons of light connecting stylized chat bubble icons,
translucent holographic message cards floating in space,
thin circuit traces underneath, cyan and magenta gradient,
transparent background with large empty areas, luxury HUD interface style,
isolated subject, keynote-quality tech illustration
```

### Prompt 4-C｜赛博电路板底纹（作为区块背景装饰）
```
Elegant minimalist circuit board pattern in thin golden lines on
deep navy background, sparse and luxurious, soft glowing nodes at
intersections, empty negative space dominates 70% of the frame,
premium tech aesthetic, vector line art, isolated decorative element
```

---

## 📄 第 5 页 · 技术产品（AI 内容生成引擎：图像 / 视频 / 短剧）

> 业务关键词：多模态生成、图像/视频/短剧、创意内容、AIGC

### Prompt 5-A｜多模态内容生成漏斗（主视觉）
```
Vector wireframe illustration of a multi-modal AI content generation system:
prompt input transforming through layered translucent holographic panels
into multiple output formats — stylized icons for image frames, video reels,
and script pages floating out, connected by flowing light ribbons,
electric cyan and violet palette with gold highlights,
isolated on transparent background, luxury keynote tech art,
minimal clean vector lines, lots of negative space
```

### Prompt 5-B｜创意粒子爆发（象征内容生成的瞬间）
```
Burst of fine glowing particles radiating outward from a single point,
mixed with thin gold and cyan light streaks, some particles morphing into
tiny abstract shapes (frames, waves, pixels), ethereal and luxurious,
isolated on transparent background, dark mode,
minimal high-end abstract composition, vector-like precision
```

### Prompt 5-C｜媒体矩阵线框（短剧 / 影像作品）
```
Array of floating translucent rectangular frames arranged in depth,
thin glowing borders, subtle holographic shimmer, suggesting a grid of
AI-generated media content, dark navy void around them, cyan edge light,
isolated on transparent background, luxury UI kit aesthetic,
vector line drawing, premium keynote visual
```

---

## 📄 第 8 页 · 愿景致谢（未来 / 全球化 / 希望）

### Prompt 8-A｜星云光晕 × 远景（主视觉）
```
Serene cosmic scene: soft glowing nebula with violet-to-cyan gradient,
delicate gold particles drifting, thin starlight streaks,
a subtle wireframe arc suggesting horizon or orbital path,
isolated on transparent background with gentle fade,
hopeful luxurious cinematic mood, minimal composition,
vector-inspired illustration, NOT photorealistic
```

### Prompt 8-B｜极光光带 × 地平线（致谢页装饰）
```
Elegant abstract aurora ribbons flowing across empty dark space,
translucent layers of cyan, magenta and gold light,
fine particle dust, minimal and luxurious,
isolated on transparent background, large negative space,
vector-like smooth gradients, premium closing slide aesthetic
```

### Prompt 8-C｜光之桥（连接现在与未来，呼应封面全球主题）
```
Thin glowing light bridge curving through cosmic void,
fine gold and cyan filaments, scattered particles along the arc,
suggesting a path forward into the future,
isolated on transparent background, minimal and hopeful,
luxury keynote finale visual, vector illustration
```

---

## 🛠 使用小技巧

1. **每个 prompt 跑 4 张**，Firefly 一次出 4 个变体，挑最干净的那张。
2. 如果出来不够"透明"，加这段到末尾：
   `pure black or transparent background, no environment, subject only, isolated asset for compositing`
3. 想让 **线条更细更贵气**：加 `hairline strokes, 1px lines, precise technical drawing`
4. 想要**和你们品牌色一致**：把 prompt 里的 "electric cyan and violet" 换成 Airacle 品牌主色（如果有品牌色告诉我，我重写一版）
5. 生成后在 **Photoshop / Photopea** 里用「魔棒 + 容差 20」点黑色背景 → 删除 → 导出 PNG，透明效果最干净。
6. **风格统一的关键**：全程只用第一张出来的**种子图当参考**（Firefly 里 "Match style"），后面每张都以它为基准，这样 8 张图风格 100% 一致。

---

# 🔥 V2 · 编辑级海报 Prompt（Keynote / 发布会 级别）

> **风格参考**：VR/元宇宙海报、现代 SaaS Landing Page、5G Tech Opener
> 核心特征：**纯黑底 + 单一巨大 3D 主体 + 玻璃拟态 UI 卡片漂浮 + 霓虹 rim light + 倾斜视角**
> 这版比 V1 更"贵"、更像发布会视觉，不是插画感。

## 🎨 统一视觉语言（每张图都遵守）

| 要素 | 规则 |
|------|------|
| 底色 | `pure deep black (#000) or very dark navy (#0A0A12)` |
| 爆点色 | 每张图**只用一个** → 电光青 / 霓虹紫 / 薄荷绿 / 品牌紫 |
| 主体 | **一个**超大 3D 物体（chrome / liquid glass / holographic） |
| 光 | `strong rim light, cinematic studio lighting, soft falloff` |
| UI 元素 | 漂浮的 **玻璃拟态**（glassmorphism）卡片/按钮/工具栏，不是线框 |
| 构图 | 倾斜视角 isometric 或 three-quarter view，主体偏一侧，**留 40%+ 空白** |
| 质感 | `editorial poster, magazine cover quality, product launch aesthetic` |
| 禁止 | `NO wireframe, NO flat illustration, NO cartoon, NO stock photo look` |

## 📐 通用 prompt 骨架（套这个就对了）

```
[主体描述], deep pure black background,
one single [色] neon rim light from the side,
floating glassmorphism UI cards with blurred translucent surface around it,
tilted three-quarter perspective, cinematic studio lighting,
massive negative space, editorial keynote poster aesthetic,
ultra sharp product render, 8k, moody and luxurious,
NOT illustration, NOT wireframe, photoreal 3D render
```

---

## 📄 第 1 页 · 封面（主视觉：Airacle = AI × 全球营销）

### 1-A｜液态金属 AI 大脑（主推）
```
A single massive liquid chrome brain sculpture floating in pure black void,
reflective metallic surface with subtle violet and cyan iridescence,
one strong neon purple rim light from the left edge,
a few blurred glassmorphism UI cards floating around it showing faint
analytics graphs and chat bubble icons,
tilted three-quarter view, cinematic product render,
massive empty black space on the right for title text,
editorial keynote poster aesthetic, 8k ultra detail,
photoreal 3D render, NOT illustration
```

### 1-B｜全息玻璃地球（呼应中美双总部）
```
A single translucent glass earth globe with soft inner violet glow,
delicate gold meridian lines, floating in infinite pure black space,
one cyan rim light carving its edge, a few minimalist glassmorphism
location pin chips floating beside it labeled with blurred city names,
shallow depth of field, cinematic luxury tech aesthetic,
massive negative space, editorial magazine cover quality,
photoreal 3D render, moody and premium
```

### 1-C｜霓虹字形 × Airacle（大标题海报型）
```
Giant bold typography "AI" rendered as polished chrome material,
strong cyan-to-violet gradient light wrapping one edge,
pure black background, a thin vertical neon light streak behind the letters,
small glassmorphism tag chips floating near the letters,
minimalist editorial poster composition, 5G tech opener style,
massive negative space, cinematic, high-end corporate launch aesthetic
```

---

## 📄 第 4 页 · OpenClaw Demo（AI 员工 / 智能体系统）

### 4-A｜主视觉：AI 智能体核心体（主推）
```
A single glossy obsidian hexagonal 3D core with soft violet inner glow
floating center-left in pure black void, one mint green rim light on its edge,
several floating glassmorphism chat bubble cards around it with blurred
conversation previews, one larger translucent dashboard panel tilted
in the background showing faint workflow nodes,
three-quarter tilted perspective, cinematic studio lighting,
editorial keynote poster style, massive empty space on the right,
photoreal 3D render, NOT illustration, luxury product launch aesthetic
```

### 4-B｜漂浮的 AI 对话 UI（产品感最强）
```
Editorial product shot: a stack of floating glassmorphism chat interface
cards in mid-air, each card blurred translucent dark with neon violet
accent buttons, subtle depth of field, one glowing cursor arrow,
pure black background, strong cyan rim light from below,
isometric tilted angle like a premium SaaS landing page,
massive negative space, cinematic, 8k product render,
Apple keynote aesthetic, NOT flat design
```

### 4-C｜抽象 Orb 装饰（区块标题用）
```
A single small polished metallic chrome orb with violet iridescence,
floating in deep black space, one mint green neon rim light,
subtle lens flare, lots of empty void around it,
minimalist editorial decoration, cinematic luxury render,
photoreal 3D, premium keynote style
```

---

## 📄 第 5 页 · 技术产品（AI 图像/视频/短剧生成引擎）

### 5-A｜主视觉：创意引擎液态核心（主推）
```
A single massive liquid chrome torus with deep emerald green iridescent
surface floating in pure black void, reflective and glossy,
one yellow-green neon rim light carving its curve,
floating glassmorphism UI cards around it: a media toolbar with small
square icons on top, a "Texture Material" panel on the lower left with
blurred sliders, a speech bubble tag saying a short phrase,
tilted three-quarter perspective, shallow depth of field,
editorial SaaS landing page aesthetic, cinematic product render,
massive negative space, 8k ultra detail, NOT illustration
```

### 5-B｜多模态内容矩阵（图/视频/短剧）
```
A row of three floating glossy black-glass screen panels tilted in 3D space,
each with soft violet inner glow and blurred preview content,
subtle cyan rim light on their edges, connected by thin light trails,
pure black infinite background, editorial product composition,
massive empty space above, cinematic studio lighting,
Apple-event keynote poster aesthetic, photoreal 3D render
```

### 5-C｜粒子爆发 × 创意瞬间
```
A single burst of glossy chrome liquid droplets scattering outward
from a central point, each droplet reflecting violet and mint highlights,
pure black void around them, one strong cyan rim light from below,
cinematic high-speed product photography aesthetic,
massive negative space, editorial magazine cover quality,
photoreal 3D render, luxury moody lighting
```

---

## 📄 第 8 页 · 愿景致谢（未来 / 全球化 / 希望）

### 8-A｜主视觉：光柱 × 地平线（主推）
```
A single tall vertical column of soft blue-to-violet gradient light
rising from a dark horizon in pure black void, faint particle dust around,
one subtle cyan rim glow on the edge of the light,
extreme minimalism like a 5G technology corporate opener,
massive negative space on both sides for title text,
cinematic moody atmosphere, editorial poster aesthetic,
photoreal render, luxurious and hopeful
```

### 8-B｜液态星球 × 远景
```
A single small glossy chrome planet with soft violet atmospheric glow
floating in deep black cosmic void, delicate gold particle trails orbiting,
one cyan rim light on its edge, extreme negative space,
cinematic luxury sci-fi aesthetic, editorial magazine cover,
photoreal 3D render, minimal and hopeful, NOT illustration
```

### 8-C｜结束光幕（闭幕页用）
```
A soft vertical beam of iridescent light (cyan fading to violet)
splitting a pure black frame, subtle film grain, minimalist editorial,
5G tech opener aesthetic, massive empty black space,
cinematic closing shot composition, photoreal render
```

---

## 🎯 让效果再提一档的 5 个细节

1. **只出 3D 渲染，不要插画**：prompt 里强调 `photoreal 3D render, NOT illustration, NOT wireframe` 是最重要的 —— 这正是参考图和你之前那套矢量图的**最大区别**。
2. **Firefly 里必须**：Content Type 选 **Photo**（不要选 Art！），Style 加 `Studio lighting`、`Dramatic light`、`Glossy`，Color 选 `Cool tones`。
3. **一张图一个主体**：不要贪心。参考图之所以高级就是因为**画面只有一个东西**。每次生成前问自己："我这张图的主角是谁？"
4. **玻璃拟态 UI 是灵魂**：这是让图"像产品发布会"而不是"像壁纸"的关键。prompt 里一定要有 `floating glassmorphism UI cards` 或 `translucent blurred panels`。
5. **出图后二次合成**：生成的图如果 UI 卡片不够像你们产品，可以在 Figma / PS 里把你们**真实的 OpenClaw 截图**抠出来叠在 3D 主体旁边，就变成"你们自己的发布会素材"了。

## 💡 一句话记忆法

> **"纯黑底 × 一个液态 3D 主体 × 单色霓虹 rim light × 漂浮玻璃 UI × 倾斜视角 × 巨大留白 = Keynote 级视觉"**

