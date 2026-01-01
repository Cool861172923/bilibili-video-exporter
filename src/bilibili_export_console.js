// B站视频列表导出脚本 - 修复版
// 适配2024年B站新页面结构
// 使用方法：在UP主投稿页面，按F12打开控制台，粘贴此代码并回车

(function() {
    console.log('=== B站视频列表导出工具 (修复版) ===');
    console.log('开始从页面提取视频信息...\n');

    const videos = [];
    const processedBVs = new Set();

    // 查找所有视频卡片容器
    const videoCards = document.querySelectorAll('[class*="video-card"]');
    console.log(`✓ 找到 ${videoCards.length} 个视频卡片\n`);

    if (videoCards.length === 0) {
        alert('❌ 未找到视频列表\n\n请确保：\n1. 在UP主主页的"投稿"标签页\n2. 页面已完全加载\n3. 可以看到视频列表');
        return;
    }

    console.log('开始提取视频信息...');
    console.log('─'.repeat(60));

    videoCards.forEach((card, index) => {
        try {
            // 1. 提取BV号和链接
            const linkEl = card.querySelector('a[href*="BV"]');
            if (!linkEl) return;

            const bvMatch = linkEl.href.match(/BV[\w]+/);
            if (!bvMatch) return;

            const bvid = bvMatch[0];
            if (processedBVs.has(bvid)) return;
            processedBVs.add(bvid);

            // 2. 提取封面图片
            let coverUrl = '';
            const imgEl = card.querySelector('img');
            if (imgEl) {
                coverUrl = imgEl.src || imgEl.getAttribute('data-src') || '';
            }

            // 2. 提取标题 - 在整个卡片中查找
            let title = '';

            // 尝试多种方式找标题
            const titleSelectors = [
                '[class*="title"]',
                'a[title]',
                'h3',
                'h4',
                '.title'
            ];

            for (const selector of titleSelectors) {
                const el = card.querySelector(selector);
                if (el) {
                    const titleText = el.getAttribute('title') || el.textContent?.trim();
                    // 过滤掉时长格式的文本（如 "792002:02"）
                    if (titleText && !titleText.match(/^\d+:\d+$/)) {
                        title = titleText;
                        break;
                    }
                }
            }

            if (!title) return; // 没有标题就跳过

            // 3. 提取时长、播放量、发布时间等信息
            const allText = card.textContent;

            // 提取时长（格式：MM:SS 或 HH:MM:SS）
            const durationMatch = allText.match(/\d{1,2}:\d{2}/);
            const duration = durationMatch ? durationMatch[0] : '';

            // 提取播放量和发布时间（查找span元素）
            let playCount = '';
            let publishDate = '';
            const spans = card.querySelectorAll('span');

            for (const span of spans) {
                const text = span.textContent.trim();

                // 匹配发布时间格式（如：2025-09-22）
                if (text.match(/^\d{4}-\d{2}-\d{2}$/)) {
                    publishDate = text;
                }
                // 匹配播放量格式（纯数字、带万、带.的数字）
                // 排除时长格式（包含冒号）
                else if (text.match(/^[\d.]+万?$/) && !text.includes(':') && text !== duration) {
                    // 进一步验证：播放量通常是较大的数字或带"万"
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

            if (videos.length % 20 === 0) {
                console.log(`  已提取 ${videos.length} 个视频...`);
            }
        } catch (e) {
            console.warn(`  ⚠ 提取第 ${index + 1} 个卡片时出错:`, e.message);
        }
    });

    console.log('─'.repeat(60));
    console.log(`\n✓ 提取完成！成功提取 ${videos.length} 个视频\n`);

    if (videos.length === 0) {
        alert('❌ 未能提取到视频数据\n\n可能原因：\n1. 页面结构已变化\n2. 视频尚未加载完成\n\n建议：滚动页面确保视频加载后重试');
        return;
    }

    // 生成CSV内容
    console.log('正在生成CSV文件...');
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

    // 下载CSV文件 - 使用Data URI方式绕过CSP限制
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

        console.log('✓ 导出完成！');
        console.log(`\n文件名: ${filename}`);
        console.log(`视频数量: ${videos.length}`);
        console.log('\n可以用Excel打开查看\n');

        // 显示前5个视频作为预览
        console.log('前5个视频预览：');
        videos.slice(0, 5).forEach(v => {
            console.log(`${v.序号}. ${v.标题} (${v.BV号})`);
        });

        alert(`✓ 成功导出 ${videos.length} 个视频到CSV文件！\n\n提示：\n• 如需导出更多视频，请滚动页面加载后再次运行\n• 当前页面显示的视频都已导出`);

    } catch (error) {
        console.error('❌ 下载失败:', error);

        // 备用方案：复制到剪贴板
        try {
            navigator.clipboard.writeText(csvContent).then(() => {
                alert(`⚠ 直接下载失败，但CSV内容已复制到剪贴板！\n\n请手动：\n1. 新建文本文件\n2. 粘贴内容（Ctrl+V）\n3. 保存为 .csv 文件\n\n共 ${videos.length} 个视频`);
                console.log('✓ CSV内容已复制到剪贴板');
            }).catch(() => {
                alert(`❌ 下载和复制都失败了\n\n请查看控制台的CSV内容手动复制`);
                console.log('\n=== CSV内容 ===');
                console.log(csvContent);
            });
        } catch (e) {
            alert(`❌ 下载失败: ${error.message}\n\n请查看控制台的CSV内容`);
            console.log('\n=== CSV内容 ===');
            console.log(csvContent);
        }
    }
})();
