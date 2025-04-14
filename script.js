const scrollText = document.getElementById('scroll-text');
const scrollContainer = document.querySelector('.scroll-container');//获取页面上第一个具有scroll-container类名的元素
const endPosition = 2150; // 设置滚动结束的位置（以像素为单位）
let scrollSpeed = 3; // 设置滚动速度（数值越大，滚动越快）
let currentPosition = 0;//跟踪scrollSpeed当前的滚动位置

function scrollTextDown() {
    currentPosition += scrollSpeed;//每次调用，都根据滚动速度增加当前位置
    if (currentPosition >= endPosition) {//当达到或超过结束位置时，清除定时器，停止滚动
        clearInterval(scrollInterval); // 当达到结束位置时停止滚动
    } else {
        scrollText.style.top = `-${currentPosition}px`; // 更新文本的位置，使其向下滚动
    }
}

const scrollInterval = setInterval(scrollTextDown, 100); // 每100毫秒调用一次scrollTextDown函数，从而实现滚动效果
