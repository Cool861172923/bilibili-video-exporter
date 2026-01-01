// ==UserScript==
// @name         B站视频列表导出工具
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  在B站UP主投稿页面添加导出按钮，一键导出视频列表到CSV（包含标题、封面、播放量、时长、发布时间等）
// @author       Cool灬浩 (https://space.bilibili.com/228962838)
// @match        https://space.bilibili.com/*/video*
// @match        https://space.bilibili.com/*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    // 等待页面加载完成
    function waitForElement(selector, timeout = 10000) {
        return new Promise((resolve, reject) => {
            const startTime = Date.now();
            const timer = setInterval(() => {
                const element = document.querySelector(selector);
                if (element) {
                    clearInterval(timer);
                    resolve(element);
                } else if (Date.now() - startTime > timeout) {
                    clearInterval(timer);
                    reject(new Error('Element not found'));
                }
            }, 100);
        });
    }

    // 创建导出按钮
    function createExportButton() {
        const button = document.createElement('button');
        button.innerHTML = '📥';
        button.title = '导出视频列表 (Ctrl+Shift+E)';
        button.style.cssText = `
            position: fixed;
            top: 120px;
            right: 0;
            z-index: 9999;
            width: 48px;
            height: 48px;
            padding: 0;
            background: linear-gradient(135deg, #00a1d6 0%, #00b5e5 100%);
            color: white;
            border: none;
            border-radius: 8px 0 0 8px;
            font-size: 20px;
            cursor: pointer;
            box-shadow: -2px 2px 8px rgba(0, 161, 214, 0.3);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            white-space: nowrap;
        `;

        // 悬停效果 - 展开显示文字
        button.onmouseenter = () => {
            button.innerHTML = '📥 导出视频列表';
            button.style.width = '160px';
            button.style.fontSize = '14px';
            button.style.fontWeight = 'bold';
            button.style.paddingLeft = '12px';
            button.style.paddingRight = '16px';
            button.style.justifyContent = 'flex-start';
            button.style.boxShadow = '-4px 4px 12px rgba(0, 161, 214, 0.4)';
        };
        button.onmouseleave = () => {
            button.innerHTML = '📥';
            button.style.width = '48px';
            button.style.fontSize = '20px';
            button.style.fontWeight = 'normal';
            button.style.paddingLeft = '0';
            button.style.paddingRight = '0';
            button.style.justifyContent = 'center';
            button.style.boxShadow = '-2px 2px 8px rgba(0, 161, 214, 0.3)';
        };

        button.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            exportVideos();
        };
        document.body.appendChild(button);
        return button;
    }

    // 导出视频列表
    function exportVideos() {
        console.log('=== B站视频列表导出工具 ===');

        const videos = [];
        const processedBVs = new Set();

        // 查找所有视频卡片
        const videoCards = document.querySelectorAll('[class*="video-card"]');

        if (videoCards.length === 0) {
            alert('❌ 未找到视频列表\n\n请确保：\n1. 在UP主主页的"投稿"标签页\n2. 页面已完全加载\n3. 可以看到视频列表');
            return;
        }

        console.log(`找到 ${videoCards.length} 个视频卡片`);

        // 提取每个视频的信息
        videoCards.forEach((card, index) => {
            try {
                // 提取BV号和链接
                const linkEl = card.querySelector('a[href*="BV"]');
                if (!linkEl) return;

                const bvMatch = linkEl.href.match(/BV[\w]+/);
                if (!bvMatch) return;

                const bvid = bvMatch[0];
                if (processedBVs.has(bvid)) return;
                processedBVs.add(bvid);

                // 提取封面
                let coverUrl = '';
                const imgEl = card.querySelector('img');
                if (imgEl) {
                    coverUrl = imgEl.src || imgEl.getAttribute('data-src') || '';
                }

                // 提取标题
                let title = '';
                const titleSelectors = ['[class*="title"]', 'a[title]', 'h3', 'h4'];
                for (const selector of titleSelectors) {
                    const el = card.querySelector(selector);
                    if (el) {
                        const titleText = el.getAttribute('title') || el.textContent?.trim();
                        if (titleText && !titleText.match(/^\d+:\d+$/)) {
                            title = titleText;
                            break;
                        }
                    }
                }

                if (!title) return;

                // 提取时长、播放量、发布时间
                const allText = card.textContent;
                const durationMatch = allText.match(/\d{1,2}:\d{2}/);
                const duration = durationMatch ? durationMatch[0] : '';

                let playCount = '';
                let publishDate = '';
                const spans = card.querySelectorAll('span');

                for (const span of spans) {
                    const text = span.textContent.trim();
                    if (text.match(/^\d{4}-\d{2}-\d{2}$/)) {
                        publishDate = text;
                    } else if (text.match(/^[\d.]+万?$/) && !text.includes(':') && text !== duration) {
                        const num = parseFloat(text);
                        if (text.includes('万') || num >= 10) {
                            playCount = text;
                        }
                    }
                }

                videos.push({
                    序号: videos.length + 1,
                    标题: title,
                    BV号: bvid,
                    链接: linkEl.href,
                    封面: coverUrl,
                    时长: duration,
                    播放量: playCount,
                    发布时间: publishDate
                });
            } catch (e) {
                console.warn(`提取第 ${index + 1} 个视频时出错:`, e.message);
            }
        });

        console.log(`成功提取 ${videos.length} 个视频`);

        if (videos.length === 0) {
            alert('❌ 未能提取到视频数据');
            return;
        }

        // 生成CSV
        const headers = ['序号', '标题', 'BV号', '链接', '封面', '时长', '播放量', '发布时间'];
        const csvRows = [headers.join(',')];

        videos.forEach(v => {
            const row = [
                v.序号,
                `"${v.标题.replace(/"/g, '""')}"`,
                v.BV号,
                `"${v.链接}"`,
                `"${v.封面}"`,
                v.时长,
                v.播放量,
                v.发布时间
            ];
            csvRows.push(row.join(','));
        });

        // 下载CSV - 使用Data URI方式绕过CSP限制
        const csvContent = '\ufeff' + csvRows.join('\n');
        const filename = `bilibili_videos_${Date.now()}.csv`;

        try {
            // 使用Data URI方式
            const dataUri = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvContent);
            const a = document.createElement('a');
            a.href = dataUri;
            a.download = filename;
            a.style.display = 'none';

            document.body.appendChild(a);
            a.click();

            setTimeout(() => {
                document.body.removeChild(a);
            }, 100);

            alert(`✓ 成功导出 ${videos.length} 个视频到CSV文件！`);

        } catch (error) {
            console.error('下载失败:', error);

            // 备用方案：复制到剪贴板
            try {
                navigator.clipboard.writeText(csvContent).then(() => {
                    alert(`⚠ 直接下载失败，但CSV内容已复制到剪贴板！\n\n请手动：\n1. 新建文本文件\n2. 粘贴内容（Ctrl+V）\n3. 保存为 .csv 文件\n\n共 ${videos.length} 个视频`);
                }).catch(() => {
                    alert(`❌ 下载失败\n\n请尝试：\n1. 刷新页面重试\n2. 查看控制台的CSV内容`);
                    console.log('CSV内容：', csvContent);
                });
            } catch (e) {
                alert(`❌ 下载失败: ${error.message}`);
                console.log('CSV内容：', csvContent);
            }
        }
    }

    // 添加快捷键监听
    function setupKeyboardShortcut() {
        document.addEventListener('keydown', (e) => {
            // Ctrl+Shift+E 触发导出
            if (e.ctrlKey && e.shiftKey && e.key === 'E') {
                e.preventDefault();
                console.log('快捷键触发：Ctrl+Shift+E');
                exportVideos();
            }
        });
    }

    // 初始化：页面加载完成后添加按钮
    function init() {
        // 检查是否在UP主空间页面
        if (window.location.href.includes('space.bilibili.com')) {
            // 等待页面加载完成
            setTimeout(() => {
                createExportButton();
                setupKeyboardShortcut();
                console.log('B站视频列表导出工具已加载');
                console.log('提示：可使用快捷键 Ctrl+Shift+E 快速导出');
            }, 2000);
        }
    }

    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
