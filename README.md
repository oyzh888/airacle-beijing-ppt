# Airacle - 北京政府答辩 PPT

> 全球AI驱动的智能营销科技公司 · Silicon Valley × Beijing

## 在线访问

**https://beijing.airacle.tech**

## 特性

- Three.js 神经网络星空背景（自定义Shader粒子 + 星座连线）
- GSAP 电影级页面转场（缩放 + 位移 + 模糊）
- 自定义光标 + 拖尾粒子 + 悬停放大
- 3D磁吸卡片（鼠标跟随 perspective 倾斜 + 径向高光）
- 数字滚动计数器 + Shimmer 进度条
- 字符拆分弹入动画（封面标题）
- 右侧 Minimap + 底部导航 + 键盘/滚轮/触屏
- Unsplash 实景图片素材
- 完全响应式设计

## 部署

### 方法一：一键脚本（推荐）

```bash
export CLOUDFLARE_API_TOKEN="your_token"
./deploy.sh
```

### 方法二：Cloudflare Dashboard 连接 GitHub（全自动）

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages
2. 找到 `beijing-airacle` 项目 → Settings → Builds & deployments
3. 点击 "Connect to Git" → 授权 GitHub → 选择 `oyzh888/airacle-beijing-ppt`
4. Build settings: 无需构建命令，输出目录填 `.`（根目录）
5. 保存后，每次 push 到 main 自动部署

### 方法三：手动 wrangler

```bash
npx wrangler pages deploy . --project-name=beijing-airacle
```

## 结构

```
├── index.html    # 主演示文件（单文件，零构建依赖）
├── deploy.sh     # 一键部署脚本
└── README.md
```

## 操作方式

| 方式 | 操作 |
|------|------|
| 键盘 | ← → 翻页，数字键 1-8 跳转，Home/End |
| 鼠标 | 滚轮翻页，点击左右箭头 |
| 触屏 | 左右滑动 |
| 导航 | 右侧 Minimap（带标签） / 底部导航条 |

## 内容 (8页)

1. 封面
2. 公司概况（中美双总部 · 动态数据统计）
3. 核心团队（北京5人 + 美国4人）
4. 产品 Demo 1 — OpenClaw AI网红员工
5. 产品 Demo 2&3 — AI生成技术 + App
6. 商务拓展 & 行业影响力（时间线 + 图片墙）
7. 社会贡献 & 发展愿景（动态进度条）
8. 愿景致谢

## 团队协作

```bash
git clone https://github.com/oyzh888/airacle-beijing-ppt.git
cd airacle-beijing-ppt
# 编辑 index.html
git add -A && git commit -m "update: xxx" && git push
# 然后运行 ./deploy.sh 部署
```
