# Bilibili Video Exporter

[简体中文](README.md) | [English](README.en.md)

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Tampermonkey](https://img.shields.io/badge/Tampermonkey-compatible-orange.svg)

Export any Bilibili creator's video list to CSV with one click. Supports title, cover, views, duration, publish time, and more.

[Features](#features) · [Install](#install) · [Quick Start](#quick-start) · [Fields](#export-fields) · [Docs](docs/USAGE.md) · [FAQ](docs/FAQ.md)

</div>

---

## Preview

![UI](docs/images/示意1.png)

![Export button](docs/images/示意2.png)

## Features

- ✅ **One-click export**: Button or hotkey to export the current page
- 🗂️ **Complete data**: Index, title, BV id, link, cover, duration, views, publish time
- ⌨️ **Hotkey**: `Ctrl+Shift+E` to trigger quickly
- 🧊 **Non-intrusive UI**: Floating sidebar button, expands on hover
- 📄 **CSV output**: Opens directly in Excel/WPS
- 🔒 **Client-side only**: Pure frontend, no data upload
- 🛰️ **CSP-safe**: Uses Data URI to avoid download blocks

## Install

### Option 1: Tampermonkey (recommended)

1. Install Tampermonkey extension  
   - [Chrome/Edge](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)  
   - [Firefox](https://addons.mozilla.org/firefox/addon/tampermonkey/)
2. Install script  
   - Click [Install script](src/bilibili_video_exporter.user.js)  
   - Or copy `src/bilibili_video_exporter.user.js` into Tampermonkey

### Option 2: Browser console

1. Open the creator's video page on Bilibili and press `F12`
2. Switch to `Console`, paste the code from `src/bilibili_export_console.js`, and hit Enter

See [usage doc](docs/USAGE.md) for details.

## Quick Start

1. Open the creator homepage and click the "投稿" tab
2. Wait for the video list to load
3. Click the 📥 button on the right or press `Ctrl+Shift+E`
4. CSV will download automatically when export finishes

> Tip: The list is lazy-loaded. Scroll down to load all videos before exporting if you want the full list.

## Export Fields

| Field      | Description            | Example                                       |
|------------|------------------------|-----------------------------------------------|
| Index      | Video index            | 1                                             |
| Title      | Video title            | 回顾过往 展望未来 AI + XR                     |
| BV         | Unique video id        | BV1GgiFBVErV                                  |
| Link       | Full video URL         | https://www.bilibili.com/video/BV1GgiFBVErV   |
| Cover      | Cover image URL        | https://i2.hdslb.com/bfs/archive/4bc247e7a0...|
| Duration   | Video duration         | 36:53                                         |
| Views      | Play count             | 112                                           |
| Published  | Publish date           | 2025-12-20                                    |

## Example Usage

Example of exported CSV file format:

```csv
序号,标题,BV号,链接,封面,时长,播放量,发布时间
1,"回顾过往 展望未来 AI + XR",BV1GgiFBVErV,"https://www.bilibili.com/video/BV1GgiFBVErV/?spm_id_from=333.1387.upload.video_card.click","https://i2.hdslb.com/bfs/archive/4bc247e7a0b7c56ef04433a346d9651f6a9f9416.jpg@672w_378h_1c.webp",36:53,112,
2,"普通摄像头 实现虚拟汽车 手势交互 Unity MediaPipe",BV1oNqkBzEGz,"https://www.bilibili.com/video/BV1oNqkBzEGz/?spm_id_from=333.1387.upload.video_card.click","https://i2.hdslb.com/bfs/archive/736459c995d58e63551dd4ba05c94cd423649e5b.jpg@672w_378h_1c.webp",02:02,802,2025-12-20
```

The exported file can be opened directly in Excel, WPS, or other spreadsheet software for data analysis and organization.

## Docs

- [Usage](docs/USAGE.md)
- [FAQ](docs/FAQ.md)
- [Changelog](CHANGELOG.md)
- [Contributing](CONTRIBUTING.md)

## Contributing

Issues and PRs are welcome!

## Author

**Cool灬浩**

- Bilibili: [https://space.bilibili.com/228962838](https://space.bilibili.com/228962838)
- GitHub: [@Cool灬浩](https://github.com/your-username)

## License

MIT, see [LICENSE](LICENSE).

## Intended Use

This tool is designed to help Bilibili creators collect their own video data for AI-powered analysis, summaries, and aggregations. Do not use it for improper purposes. Always comply with applicable laws and platform rules; users assume all responsibility for misuse.

## Disclaimer

For learning and communication only; do not use for commercial purposes. Use at your own risk.

## Support the project

If this tool helps you, you can buy the author a milk tea:

<img src="docs/images/打赏码.jpg" alt="Tip QR" width="240">

<div align="center">

If you like this project, a ⭐ Star is appreciated!

</div>
