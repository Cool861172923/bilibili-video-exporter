# 贡献指南

感谢你考虑为 B站视频列表导出工具 做出贡献！

## 如何贡献

### 报告Bug

如果你发现了Bug，请：

1. 检查 [Issues](https://github.com/your-repo/issues) 是否已有相同问题
2. 如果没有，创建新Issue，包含：
   - 清晰的标题
   - 详细的问题描述
   - 复现步骤
   - 预期行为 vs 实际行为
   - 截图（如果适用）
   - 浏览器版本和操作系统

### 提出新功能

1. 先在Issues中讨论你的想法
2. 说明功能的用途和价值
3. 等待维护者反馈

### 提交代码

1. Fork本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建Pull Request

## 开发指南

### 代码规范

- 使用4空格缩进
- 变量命名使用驼峰命名法
- 添加必要的注释
- 保持代码简洁易读

### 测试

在提交PR前，请确保：

- 在Chrome和Firefox上测试
- 测试不同UP主的页面
- 测试边界情况（无视频、大量视频等）

## 行为准则

- 尊重他人
- 接受建设性批评
- 专注于对项目最有利的事情
