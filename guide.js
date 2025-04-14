 // 获取视频元素
  var video = document.getElementById('myVideo');

  // 检查浏览器是否支持自动播放
  if (video.canPlayType('video/mp4')) {
    video.play();
  } else {
    // 如果不支持自动播放，可以在这里添加事件监听器来控制播放
    video.addEventListener('click', function() {
      video.play();
    });
  }