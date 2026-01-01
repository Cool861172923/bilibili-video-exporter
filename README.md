# B站视频列表导出工具

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Tampermonkey](https://img.shields.io/badge/Tampermonkey-compatible-orange.svg)

一键导出B站UP主的视频列表到CSV文件，支持导出标题、封面、播放量、时长、发布时间等信息。

[功能特性](#功能特性) • [安装使用](#安装使用) • [使用教程](#使用教程) • [常见问题](#常见问题)

</div>

---

## 📸 预览

![工具界面](docs/images/示意1.png)

![导出按钮](docs/images/示意2.png)

## ✨ 功能特性

- 🎯 **一键导出** - 点击按钮或使用快捷键即可导出当前页面的所有视频
- 📊 **完整数据** - 导出序号、标题、BV号、链接、封面、时长、播放量、发布时间
- ⌨️ **快捷键支持** - `Ctrl+Shift+E` 快速触发导出
- 🎨 **优雅UI** - 侧边悬浮按钮，不遮挡内容，鼠标悬停展开
- 💾 **CSV格式** - 导出为CSV文件，可用Excel/WPS直接打开
- 🔒 **安全可靠** - 纯前端实现，不上传任何数据
- 🚀 **绕过限制** - 使用Data URI方式，绕过CSP限制

## 📦 安装使用

### 方式一：Tampermonkey脚本（推荐）

1. **安装Tampermonkey扩展**
   - [Chrome/Edge](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/)

2. **安装脚本**
   - 点击 [安装脚本](src/bilibili_video_exporter.user.js)
   - 或手动复制 `src/bilibili_video_exporter.user.js` 内容到Tampermonkey

3. **使用**
   - 访问任意B站UP主的投稿页面
   - 右侧会出现 📥 图标
   - 点击图标或按 `Ctrl+Shift+E` 导出

### 方式二：浏览器控制台

1. 打开B站UP主投稿页面
2. 按 `F12` 打开开发者工具
3. 切换到 `Console` 标签
4. 复制 `src/bilibili_export_console.js` 的内容
5. 粘贴到控制台并回车

## 📖 使用教程

详细教程请查看：[使用文档](docs/USAGE.md)

### 快速开始

1. 访问UP主主页，点击"投稿"标签
2. 等待视频列表加载完成
3. 点击右侧的 📥 按钮或按 `Ctrl+Shift+E`
4. 等待导出完成，CSV文件会自动下载

### 导出更多视频

B站采用懒加载机制，默认只显示部分视频：

1. 向下滚动页面，加载更多视频
2. 等待所有视频加载完成
3. 再次点击导出按钮

## 📋 导出字段说明

| 字段 | 说明 | 示例 |
|------|------|------|
| 序号 | 视频序号 | 1 |
| 标题 | 视频标题 | "如何使用B站导出工具" |
| BV号 | 视频唯一标识 | BV1xx411c7mD |
| 链接 | 视频完整链接 | https://www.bilibili.com/video/BV1xx411c7mD |
| 封面 | 封面图片URL | https://i0.hdslb.com/... |
| 时长 | 视频时长 | 10:23 |
| 播放量 | 播放次数 | 1.2万 |
| 发布时间 | 发布日期 | 2025-01-02 |

## 🔧 技术实现

- **DOM解析** - 使用CSS选择器提取页面数据
- **Data URI** - 绕过CSP限制实现文件下载
- **备用方案** - 下载失败时自动复制到剪贴板
- **去重处理** - 自动过滤重复的视频

## 🤝 贡献指南

欢迎提交Issue和Pull Request！

## 👤 作者

**Cool灬浩**
- B站主页：[https://space.bilibili.com/228962838](https://space.bilibili.com/228962838)
- GitHub：[@Cool灬浩](https://github.com/your-username)

## 📄 开源协议

本项目采用 [MIT](LICENSE) 协议开源。

## ⚠️ 免责声明

本工具仅供学习交流使用，请勿用于商业用途。使用本工具产生的任何问题，作者不承担任何责任。



<div align="center">

如果这个项目对你有帮助，请给个 ⭐️ Star 支持一下！

</div>
