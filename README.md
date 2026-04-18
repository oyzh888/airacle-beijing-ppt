# Airacle - 北京政府答辩 PPT

> 全球AI驱动的智能营销科技公司 · Silicon Valley × Beijing

## 在线访问

**https://beijing.airacle.tech**

## 项目结构

```
├── index.html                    # 主页壳 (加载所有模块)
├── css/
│   └── style.css                 # 全部样式 (带 TOC 注释)
├── js/
│   ├── background.js             # Three.js 星空 + 光球视差
│   ├── cursor.js                 # 自定义光标 + 磁吸卡片
│   └── deck.js                   # 幻灯片引擎 + GSAP 动画
├── slides/                       # 每页一个文件，各改各的
│   ├── 01-cover.inc
│   ├── 02-company.inc
│   ├── 03-team.inc
│   ├── 04-demo-openclaw.inc
│   ├── 05-demo-tech.inc
│   ├── 06-business.inc
│   ├── 07-contribution.inc
│   └── 08-vision.inc
├── assets/                       # 素材目录
│   ├── images/                   # 公司照片、活动、出差
│   ├── videos/                   # 产品演示 (<50MB)
│   └── team/                     # 团队头像
├── .github/workflows/deploy.yml  # GitHub Actions 自动部署
├── deploy.sh                     # 手动一键部署脚本
└── README.md
```

## 自动部署 (已配置)

```
push 到 main → GitHub Actions → Cloudflare Pages → beijing.airacle.tech 自动更新
```

## 团队协作

```bash
# 1. Clone
git clone https://github.com/oyzh888/airacle-beijing-ppt.git
cd airacle-beijing-ppt

# 2. 编辑你负责的页面
#    例如改团队页: vim slides/03-team.inc
#    例如改样式:   vim css/style.css
#    例如加图片:   cp photo.jpg assets/images/

# 3. Push (自动部署)
git add -A && git commit -m "update: 更新团队信息" && git push
```

## 怎么改内容

### 改某一页的内容
直接编辑 `slides/XX-xxx.inc`，里面是纯 HTML 片段

### 加图片/视频
1. 放到 `assets/images/` 或 `assets/videos/`
2. 在 slide 里引用: `<img src="assets/images/xxx.jpg">`

### 改样式
编辑 `css/style.css`，有 TOC 注释方便定位

### 加新页
1. 创建 `slides/09-new-slide.inc`
2. 在 `index.html` 的 `slideFiles` 数组里加上路径
3. 在 `js/deck.js` 的 `labels` 数组里加标签名

## 操作方式

| 方式 | 操作 |
|------|------|
| 键盘 | ← → 翻页，数字键 1-8 跳转，Home/End |
| 鼠标 | 滚轮翻页，点击左右箭头 |
| 触屏 | 左右滑动 |
| 导航 | 右侧 Minimap（悬停显示标签） / 底部导航条 |

## 内容 (8页)

| # | 文件 | 内容 |
|---|------|------|
| 1 | `01-cover.inc` | 封面 |
| 2 | `02-company.inc` | 公司概况 (中美双总部 · 数据统计) |
| 3 | `03-team.inc` | 核心团队 (北京5人 + 美国4人) |
| 4 | `04-demo-openclaw.inc` | Demo 1 — OpenClaw AI网红员工 |
| 5 | `05-demo-tech.inc` | Demo 2&3 — AI生成技术 + App |
| 6 | `06-business.inc` | 商务拓展 & 影响力 (时间线+图片墙) |
| 7 | `07-contribution.inc` | 社会贡献 & 发展愿景 |
| 8 | `08-vision.inc` | 愿景致谢 |
