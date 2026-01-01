# 开发文档

## 项目结构与文档分工

```
.
├─ README.md            # 主 README（中文）
├─ README.en.md         # 英文 README
├─ CHANGELOG.md         # 更新日志
├─ CONTRIBUTING.md      # 贡献指南
├─ src/                 # 源码（Tampermonkey & 控制台脚本）
├─ docs/
│  ├─ USAGE.md          # 统一的详细使用教程（含图文速览）
│  ├─ FAQ.md            # 常见问题
│  ├─ DEVELOPMENT.md    # 本开发文档
│  └─ images/           # 文档图片
└─ .github/             # GitHub 配置
```

导航约定：
- 用户入口：`README.md`（中文）和 `README.en.md`（英文）
- 详细教程：`docs/USAGE.md`
- Q&A：`docs/FAQ.md`
- 开发/发布：本文件 `docs/DEVELOPMENT.md`

## 技术栈

- **纯JavaScript** - 无依赖
- **DOM API** - 页面数据提取
- **Blob/Data URI** - 文件下载
- **Tampermonkey** - 脚本管理

## 核心功能实现

### 1. 数据提取

使用CSS选择器从页面提取视频信息：

```javascript
const videoCards = document.querySelectorAll('[class*="video-card"]');
```

### 2. CSV生成

```javascript
const csvContent = '\ufeff' + csvRows.join('\n');  // UTF-8 BOM
```

### 3. 文件下载

使用Data URI绕过CSP限制：

```javascript
const dataUri = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent);
```

### 4. 快捷键

```javascript
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'E') {
        exportVideos();
    }
});
```

## 调试

1. 打开浏览器控制台（F12）
2. 查看日志输出
3. 检查错误信息

## 测试

测试场景：
- ✅ 正常导出
- ✅ 无视频情况
- ✅ 大量视频（100+）
- ✅ 特殊字符标题
- ✅ 下载失败备用方案

## 发布流程

1. 更新版本号（package.json）
2. 更新CHANGELOG.md
3. 提交代码
4. 创建GitHub Release
5. 发布到Greasy Fork

---

**维护者：** Cool灬浩 ([B站主页](https://space.bilibili.com/228962838))
**最后更新：** 2026-01-02
