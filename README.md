# B站视频列表导出工具

[简体中文](README.md) | [English](README.en.md)

<div align="center">

![Version](https://img.shields.io/badge/版本-1.0.0-blue.svg)
![License](https://img.shields.io/badge/许可证-MIT-green.svg)
![Tampermonkey](https://img.shields.io/badge/Tampermonkey-兼容-orange.svg)

一键导出 B 站 UP 主的视频列表到 CSV 文件，支持标题、封面、播放量、时长、发布时间等字段。

[功能特性](#功能特性) · [安装使用](#安装使用) · [快速开始](#快速开始) · [导出字段](#导出字段) · [使用文档](docs/USAGE.md) · [常见问题](docs/FAQ.md)

</div>

---

## 预览

![工具界面](docs/images/示意1.png)

![导出按钮](docs/images/示意2.png)

## 功能特性

- ✅ **一键导出**：点击按钮或快捷键即可导出当前页面的视频列表
- 🗂️ **完整数据**：序号、标题、BV 号、链接、封面、时长、播放量、发布时间
- ⌨️ **快捷键**：`Ctrl+Shift+E` 快速触发
- 🧊 **不挡内容**：侧边悬浮按钮，鼠标悬停展开
- 📄 **CSV 格式**：导出为 CSV，Excel/WPS 直接打开
- 🔒 **安全可靠**：纯前端实现，不上传任何数据
- 🛰️ **绕过限制**：Data URI 方式下载，规避 CSP 限制

## 安装使用

### 方式一：Tampermonkey（推荐）

1. 安装 Tampermonkey 扩展
   - [Chrome/Edge](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/)
2. 安装脚本
   - 点击 [安装脚本](src/bilibili_video_exporter.user.js)
   - 或复制 `src/bilibili_video_exporter.user.js` 到 Tampermonkey

### 方式二：浏览器控制台

1. 打开 B 站 UP 主投稿页，按 `F12` 打开开发者工具
2. 切到 `Console` 标签，复制 `src/bilibili_export_console.js` 代码并回车

更多细节请查看 [使用文档](docs/USAGE.md)。

## 快速开始

1. 访问 UP 主主页，点击 “投稿” 标签
2. 等待视频列表加载完成
3. 点击右侧的 📥 按钮或按 `Ctrl+Shift+E`
4. 等待导出完成，CSV 文件会自动下载

> 提示：B 站列表为懒加载，若要导出更多视频，请向下滚动加载完整列表后再导出。

## 导出字段

| 字段   | 说明         | 示例                                           |
|--------|--------------|------------------------------------------------|
| 序号   | 视频序号     | 1                                              |
| 标题   | 视频标题     | 如何使用 B 站导出工具                          |
| BV 号  | 视频唯一标识 | BV1xx411c7mD                                   |
| 链接   | 视频完整链接 | https://www.bilibili.com/video/BV1xx411c7mD    |
| 封面   | 封面图片 URL | https://i0.hdslb.com/...                      |
| 时长   | 视频时长     | 10:23                                          |
| 播放量 | 播放次数     | 1.2 万                                         |
| 发布时间 | 发布日期   | 2025-01-02                                     |

## 技术实现

- **DOM 解析**：使用 CSS 选择器提取页面数据
- **Data URI**：绕过 CSP 限制实现文件下载
- **备用方案**：下载失败时自动复制到剪贴板
- **去重处理**：自动过滤重复的视频

## 文档

- [使用文档](docs/USAGE.md) — 详细使用教程
- [常见问题](docs/FAQ.md) — FAQ
- [更新日志](CHANGELOG.md) — 版本历史
- [贡献指南](CONTRIBUTING.md) — 如何贡献

## 贡献

欢迎提交 Issue 或 Pull Request！

## 作者

**Cool灬浩**

- B 站主页：[https://space.bilibili.com/228962838](https://space.bilibili.com/228962838)
- GitHub：[@Cool灬浩](https://github.com/your-username)

## 开源协议

本项目基于 [MIT](LICENSE) 协议开源。

## 免责声明

本工具仅供学习交流使用，请勿用于商业用途。使用本工具产生的任何问题，作者不承担责任。

## 打赏支持

如果这个工具对你有帮助，欢迎请作者喝杯奶茶：

<img src="docs/images/打赏码.jpg" alt="打赏码" width="240">

<div align="center">

如果这个项目对你有帮助，请给个 ⭐ Star 支持一下！

</div>
