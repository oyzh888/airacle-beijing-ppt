# Airacle - 北京政府答辩 PPT

> 全球AI驱动的智能营销科技公司 · Silicon Valley × Beijing

## 🔗 在线访问

**https://beijing.airacle.tech**

## ✨ 特性

- Three.js 神经网络星空背景（自定义Shader粒子）
- GSAP 电影级页面转场动画
- 自定义光标 + 拖尾粒子效果
- 3D磁吸卡片交互（鼠标跟随倾斜）
- 数字滚动计数器 + Shimmer进度条
- 右侧Minimap + 底部导航 + 键盘/滚轮/触屏支持
- 完全响应式设计

## 🚀 自动部署

Push 到 `main` 分支 → GitHub Actions 自动部署到 Cloudflare Pages

### 首次设置 GitHub Secrets

在 repo Settings → Secrets and variables → Actions 中添加：

| Secret Name | Value |
|-------------|-------|
| `CLOUDFLARE_API_TOKEN` | Cloudflare API Token |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare Account ID |

## 📁 结构

```
├── index.html           # 主演示文件（单文件，零依赖构建）
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions 自动部署
└── README.md
```

## 🎮 操作方式

| 方式 | 操作 |
|------|------|
| 键盘 | ← → 翻页，数字键 1-8 跳转，Home/End |
| 鼠标 | 滚轮翻页，点击左右箭头 |
| 触屏 | 左右滑动 |
| 导航 | 右侧 Minimap / 底部导航条 |

## 📝 内容 (8页)

1. 封面
2. 公司概况
3. 核心团队
4. 产品 Demo 1 — OpenClaw AI网红员工
5. 产品 Demo 2&3 — AI生成技术 + App
6. 商务拓展 & 行业影响力
7. 社会贡献 & 发展愿景
8. 愿景致谢
