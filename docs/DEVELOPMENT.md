# 开发文档

## 项目结构

```
bilibili-video-exporter/
├── src/                          # 源代码目录
│   ├── bilibili_video_exporter.user.js   # Tampermonkey脚本
│   └── bilibili_export_console.js        # 控制台脚本
├── docs/                         # 文档目录
│   ├── USAGE.md                 # 使用文档
│   ├── FAQ.md                   # 常见问题
│   └── images/                  # 图片资源
├── .github/                      # GitHub配置
├── README.md                     # 英文README
├── README.zh-CN.md              # 中文README
├── CHANGELOG.md                 # 更新日志
├── CONTRIBUTING.md              # 贡献指南
├── LICENSE                      # 开源协议
├── .gitignore                   # Git忽略文件
└── package.json                 # 项目配置
```

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
