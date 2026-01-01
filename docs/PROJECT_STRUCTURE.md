# 项目文件说明

## 📁 目录结构

```
bilibili-video-exporter/
│
├── 📄 README.md                 # 项目主页（英文）
├── 📄 README.zh-CN.md          # 项目主页（中文）
├── 📄 LICENSE                  # MIT开源协议
├── 📄 CHANGELOG.md             # 版本更新日志
├── 📄 CONTRIBUTING.md          # 贡献指南
├── 📄 package.json             # 项目配置文件
├── 📄 .gitignore              # Git忽略规则
│
├── 📂 src/                     # 源代码目录
│   ├── bilibili_video_exporter.user.js    # Tampermonkey脚本（推荐）
│   └── bilibili_export_console.js         # 控制台脚本
│
├── 📂 docs/                    # 文档目录
│   ├── USAGE.md               # 详细使用教程
│   ├── FAQ.md                 # 常见问题解答
│   ├── DEVELOPMENT.md         # 开发文档
│   └── images/                # 文档图片资源
│
└── 📂 .github/                # GitHub配置
    └── workflows/             # GitHub Actions（未来）
```

## 📝 文件说明

### 根目录文件

| 文件 | 说明 |
|------|------|
| README.md | 项目主页，包含功能介绍、快速开始等 |
| README.zh-CN.md | 中文版项目主页 |
| LICENSE | MIT开源协议 |
| CHANGELOG.md | 版本更新历史 |
| CONTRIBUTING.md | 如何为项目做贡献 |
| package.json | 项目元数据和依赖 |
| .gitignore | Git版本控制忽略规则 |

### src/ 源代码

| 文件 | 说明 | 使用方式 |
|------|------|----------|
| bilibili_video_exporter.user.js | Tampermonkey脚本 | 安装到Tampermonkey |
| bilibili_export_console.js | 控制台脚本 | 复制到浏览器控制台运行 |

### docs/ 文档

| 文件 | 说明 |
|------|------|
| USAGE.md | 详细使用教程，包含安装、使用、故障排除 |
| FAQ.md | 常见问题解答 |
| DEVELOPMENT.md | 开发者文档，技术实现说明 |
| images/ | 文档中使用的图片资源 |

## 🚀 快速导航

- **想要使用？** → 查看 [README.md](../README.md)
- **遇到问题？** → 查看 [FAQ.md](FAQ.md)
- **详细教程？** → 查看 [USAGE.md](USAGE.md)
- **想要贡献？** → 查看 [CONTRIBUTING.md](../CONTRIBUTING.md)
- **开发相关？** → 查看 [DEVELOPMENT.md](DEVELOPMENT.md)

---

**最后更新：** 2026-01-02
