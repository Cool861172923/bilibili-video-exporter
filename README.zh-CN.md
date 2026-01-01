# B站视频列表导出工具

[English](README.md) | 简体中文

<div align="center">

![Version](https://img.shields.io/badge/版本-1.0.0-blue.svg)
![License](https://img.shields.io/badge/许可证-MIT-green.svg)
![Tampermonkey](https://img.shields.io/badge/Tampermonkey-兼容-orange.svg)

一键导出B站UP主的视频列表到CSV文件，支持导出标题、封面、播放量、时长、发布时间等信息。

[功能特性](#功能特性) • [快速开始](#快速开始) • [使用文档](docs/USAGE.md) • [常见问题](docs/FAQ.md)

</div>

---

## ✨ 功能特性

- 🎯 **一键导出** - 点击按钮或快捷键即可导出
- 📊 **完整数据** - 序号、标题、BV号、链接、封面、时长、播放量、发布时间
- ⌨️ **快捷键** - `Ctrl+Shift+E` 快速触发
- 🎨 **优雅UI** - 侧边悬浮按钮，不遮挡内容
- 💾 **CSV格式** - Excel/WPS直接打开
- 🔒 **安全可靠** - 纯前端，不上传数据
- 🚀 **绕过限制** - Data URI方式，稳定可靠

## 🚀 快速开始

### 安装Tampermonkey

1. 安装浏览器扩展：
   - [Chrome/Edge](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/)

2. 安装脚本：
   - 点击 [安装脚本](src/bilibili_video_exporter.user.js)
   - 或手动复制代码到Tampermonkey

### 使用方法

1. 访问B站UP主投稿页面
2. 点击右侧 📥 图标或按 `Ctrl+Shift+E`
3. 等待导出完成，CSV自动下载

详细教程：[使用文档](docs/USAGE.md)

## 📋 导出字段

| 字段 | 说明 |
|------|------|
| 序号 | 视频序号 |
| 标题 | 视频标题 |
| BV号 | 视频唯一标识 |
| 链接 | 视频完整URL |
| 封面 | 封面图片URL |
| 时长 | 视频时长 |
| 播放量 | 播放次数 |
| 发布时间 | 发布日期 |

## 📖 文档

- [使用文档](docs/USAGE.md) - 详细使用教程
- [常见问题](docs/FAQ.md) - FAQ
- [更新日志](CHANGELOG.md) - 版本历史
- [贡献指南](CONTRIBUTING.md) - 如何贡献

## 🤝 贡献

欢迎提交Issue和Pull Request！

## 👤 作者

**Cool灬浩**
- B站主页：[https://space.bilibili.com/228962838](https://space.bilibili.com/228962838)
- GitHub：[@Cool灬浩](https://github.com/your-username)

## 📄 开源协议

[MIT](LICENSE) © 2026

## ⚠️ 免责声明

本工具仅供学习交流使用，请勿用于商业用途。

---

<div align="center">

如果这个项目对你有帮助，请给个 ⭐️ Star！

</div>
