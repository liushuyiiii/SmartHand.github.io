window.onload = function() {
    const wrap = document.getElementById('wrap');
    const pic = [...document.getElementById('pic').children];
    const list = [...document.getElementById('list').children];
    const videos = [...document.querySelectorAll('.banner_p li video')];
    let currentIndex = 0;
    let progressTimer = null;

    // 移除视频的 loop 属性
    videos.forEach(video => {
        video.removeAttribute('loop');
    });

    // 初始化视频元数据
    videos.forEach(video => {
        video.addEventListener('loadedmetadata', initProgressSystem);
        video.addEventListener('ended', handleVideoEnd);
    });

    // 初始化进度系统
    function initProgressSystem() {
        // 确保所有视频都已加载
        if (!videos.every(v => v.readyState > 0)) return;

        // 移除旧事件监听
        videos.forEach(video => {
            video.removeEventListener('timeupdate', updateProgress);
        });

        startSlide(currentIndex);
    }

    // 启动轮播
    function startSlide(index) {
        // 隐藏所有视频
        pic.forEach(item => item.style.display = "none");

        // 显示当前视频
        const currentVideo = videos[index];
        pic[index].style.display = "block";
        currentVideo.currentTime = 0;
        currentVideo.play();

        // 重置进度条
        resetProgress();

        // 绑定实时进度更新
        currentVideo.addEventListener('timeupdate', updateProgress);
    }

    // 重置所有进度条
    function resetProgress() {
        list.forEach(item => {
            const bar = item.querySelector('.progress-bar');
            bar.style.transitionDuration = '0s';
            bar.style.width = '0%';
            // 强制重绘
            void bar.offsetWidth;
        });
    }

    // 进度同步（精度校准）
    function updateProgress() {
        const currentVideo = videos[currentIndex];
        const progress = (currentVideo.currentTime / currentVideo.duration) * 100;
        const progressBar = list[currentIndex].querySelector('.progress-bar');
        progressBar.style.transition = `width 0.3s ease`; // 添加平滑过渡效果
        progressBar.style.width = `${progress}%`;
    }

    // 视频结束处理
    function handleVideoEnd() {
        clearTimeout(progressTimer);
        nextSlide();
    }

    // 切换下一视频
    function nextSlide() {
        currentIndex = (currentIndex + 1) % videos.length;
        startSlide(currentIndex);
    }

    // 页码鼠标悬停切换
    list.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            // 停止当前播放
            videos[currentIndex].pause();
            currentIndex = index;
            startSlide(currentIndex);
        });
    });

    // 初始启动
    initProgressSystem();
};