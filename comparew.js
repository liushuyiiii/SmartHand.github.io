// 当DOM内容加载完成时触发动画
document.addEventListener("DOMContentLoaded", () => {
  // 定义要显示的文本
  const text = "开启舒适居家生活";
  // 获取用于显示动画的容器元素
  const container = document.querySelector(".animated-text");

  //   循环为每个字符创建一个span元素，包括空格
  text.split("").forEach((char) => {
    const span = document.createElement("span");
    span.className = "letter";
    span.innerHTML = char === " " ? "&nbsp;" : char;
    container.appendChild(span);
  });

  //   获取所有的字母元素
  const letters = document.querySelectorAll(".letter");
  const totalLetters = letters.length;
  //   延迟增量，单位毫秒
  const delayIncrement = 100;

  //   定义一个缓动函数，用于动画平滑过渡
  function easeInOutQuart(t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  }

  //   动画函数
  function animateLetters(forward = true) {
    letters.forEach((letter, index) => {
      // 计算延迟时间，使用缓动函数进行平滑处理
      const normalizedIndex =
        Math.max(index, totalLetters - 1 - index) / (totalLetters - 1);
      const easedDelay = easeInOutQuart(normalizedIndex);
      const delay = easedDelay * (totalLetters - 1) * delayIncrement;

      //   使用setTimeout实现动画效果
      setTimeout(() => {
        letter.style.setProperty("--wght", forward ? 700 : 100);
        letter.style.setProperty("--wdth", forward ? 300 : 150);
        letter.style.setProperty("--opacity", forward ? 1 : 0.25);
        letter.style.setProperty(
          "--letter-spacing",
          forward ? "0.05em" : "0em"
        );
      }, delay);
    });

    // 设置下一个动画周期的超时，实现动画循环播放
    setTimeout(() => {
      animateLetters(!forward);
    }, 4000);
  }

  //   开始播放动画
  animateLetters();
});

const titles=document.querySelectorAll('.titles a');  //标题集合
const imgs=document.querySelectorAll('.imgs a');  //图片集合
let curIndex=0,timer=null;  //当前banner下标，定时器

// 移除active样式
function removeActive(){
    titles.forEach(item=>{
        item.classList.remove('active');
    })
    imgs.forEach(item=>{
        item.classList.remove('active');
    })
}

// 切换banner
function changeBanner(index){
    removeActive();
    titles[index].classList.add('active');
    imgs[index].classList.add('active');
}

// 自动播放banner
function autoBanner(){
    timer=setInterval(function(){
        curIndex++;
        if(curIndex>titles.length-1){
            curIndex=0;
        }
        changeBanner(curIndex);
    },3000)
}

// 遍历绑定鼠标事件
titles.forEach((item,index)=>{
    // 鼠标移入事件
    item.addEventListener('mouseenter',function(){
        curIndex=index;
        changeBanner(index);
        clearInterval(timer);
    })
    // 鼠标移出事件
    item.addEventListener('mouseleave',function(){
        autoBanner();
    })
})

// 初始化自动播放banner
autoBanner();


 // JavaScript to handle scrolling to sections
  document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // 修正后的侧边栏交互
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 修正子菜单点击事件
document.querySelectorAll('.submenu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId) {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 增加悬停延迟消失
let menuTimer;
document.querySelectorAll('.has-submenu').forEach(menu => {
    menu.addEventListener('mouseleave', () => {
        menuTimer = setTimeout(() => {
            menu.querySelector('.submenu').style.display = 'none';
        }, 300);
    });
    menu.addEventListener('mouseenter', () => {
        clearTimeout(menuTimer);
    });
});
