# Assets 素材目录

## 目录结构

```
assets/
├── images/       ← 通用图片素材 (公司照片、活动、出差等)
├── videos/       ← 产品演示视频、宣传片 (<50MB 放这里)
├── team/         ← 团队成员头像
└── README.md     ← 本文件
```

## 使用方法

在 slide HTML 文件中引用素材：
```html
<!-- 图片 -->
<img src="assets/images/snapchat-visit.jpg" alt="Snapchat 参访">

<!-- 视频 (嵌入播放) -->
<video src="assets/videos/demo-openclaw.mp4" autoplay muted loop></video>

<!-- 团队头像 -->
<img src="assets/team/steve.jpg" alt="Steve">
```

## 注意事项

- 图片建议压缩到 < 500KB (用 squoosh.app)
- 视频建议 < 50MB (超过的用外部链接)
- 文件名用小写英文 + 短横线 (如 `snapchat-visit.jpg`)
- Push 后自动部署到 beijing.airacle.tech
