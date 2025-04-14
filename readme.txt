项目说明文档
本项目为一个智能家居相关的网页项目，包含多个页面和脚本文件。以下是各文件的详细说明：


运行说明：
1.首先运行aapp.py启动后端，后端跳出以下内容即表示后端运行成功（该后端用于保证手势识别的目标检测）
D:\python\anaconda3\envs\yolov5\python.exe C:\Users\21339\PycharmProjects\SmartHand\aapp.py
class_name:{0: 'one', 1: 'two_up', 2: 'two_up_inverted', 3: 'three', 4: 'three2', 5: 'four', 6: 'fist', 7: 'palm', 8: 'ok', 9: 'peace', 10: 'peace_inverted', 11: 'like', 12: 'dislike', 13: 'stop', 14: 'stop_inverted', 15: 'call', 16: 'mute', 17: 'rock', 18: 'no_gesture'}
 * Serving Flask app 'aapp'
 * Debug mode: off
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on all addresses (0.0.0.0)
 * Running on http://127.0.0.1:5000
 * Running on http://10.54.41.188:5000
Press CTRL+C to quit
2.打开loginw.html，运行前端，进行注册登录，即可访问我们的网页
3.登录成功后即可跳转到首页，具体内容可以在首页的导航栏上浏览
4.其中ai助手在页面的右下角，可以进行ai问答。建模视频在产品展示-智能家电-点击家居的名字即可浏览
（注：只有部分智能家电才有建模视频）
购物车界面在家居商城页面中，点击右下角的购物车图标即可访问购物车界面


建议
建议网页缩放90%以获得最佳的浏览体验。


具体内容：
一、Python 脚本文件
1.`aapp.py`
产品展示-实时系统页面中的手势识别后端运行代码，用于处理与手势识别相关的业务逻辑。
2.`ademo.py`
基于 YOLOv5 的手势识别脚本，主要用于目标检测，识别特定的手势。

二、HTML 文件
1.`aboutus.html`
“关于我们”页面，向用户介绍项目团队或公司的相关信息。
2.`ai.html`
调用千问大模型 API 的界面，仅包含 AI 模型相关内容，为用户提供与 AI 交互的功能。
3.`cart.html`
智能家居网页中，点击右下角购物车图标跳转到的购物车界面，显示用户所选商品的信息。
4.`comparew.html`
智能家电页面，展示各种智能家电的图片、名称和简要介绍，同时提供按房间分类查看家电的功能。
5.`guide.html`
定制指南页面，介绍智能家居系统的不同组成部分，如控制中心、安防产品等，并展示部分智能家电的图片和说明。
6.`indexw.html`
项目的首页，通常作为网站的入口，展示网站的主要信息和导航。
7.`jiesuan.html`
订单结算界面，显示购物车中的商品清单和待支付金额，提供支付宝和微信支付两种支付方式的选择，并展示支付二维码。
8.`loginw.html`
用户登录和注册页面，支持用户注册新账号和使用已有账号登录系统。
9.`product.html`
产品展示页面，可能展示智能家居的全屋智能相关内容。
10.`shoppingmall.html`
家居商城页面，为用户提供智能家居产品的购物服务。
11.`techshow.html`
技术介绍页面，介绍智能家居系统所涉及的技术。
12.`xiyiji.html`
展示洗衣机的 3D 建模视频，提供返回智能家电页面的按钮。
13.`youyanji.html`
可能是关于油烟机的详细介绍页面。
14.`zhinengyinxiang.html`
可能是关于智能音箱的详细介绍页面。

三、CSS 文件
1.`aboutus.css`
为“关于我们”页面提供样式设计，确保页面的视觉效果。
2.`comparew.css`
为智能家电页面提供样式设计，包括图片展示、分类菜单等的样式。
3.`gouwuche.css`
为购物车界面提供样式设计，美化购物车页面的显示效果。
4.`guide.css`
为定制指南页面提供样式设计，使页面布局和风格更加美观。
5.`indexw.css`
为首页提供样式设计，打造良好的用户体验。
6.`loginw.css`
为登录和注册页面提供样式设计，提升页面的可读性和美观度。
7.`product.css`
为产品展示页面提供样式设计，使产品展示更加清晰。
8.`shoppingmall.css`
为家居商城页面提供样式设计，优化购物界面的视觉效果。
9.`techshow.css`
为技术介绍页面提供样式设计，使技术内容展示更加专业。

四、JavaScript 文件
1.`comparew.js`
为智能家电页面提供动画效果，如字母动画等，增强页面的交互性。
2.`guide.js`
可能为定制指南页面提供一些交互功能或特效。
3.`lunbotu.js`
可能用于实现轮播图效果，通常用于展示多张图片。
4.`product.js`
为产品展示页面提供交互功能，如产品展示的切换等。
5.`pyscript.js`
可能与 Python 脚本的交互有关，用于在网页中调用 Python 功能。
6.`script.js`
可能包含一些通用的脚本逻辑，为多个页面提供支持。

五、其他文件
1.`yolov5s.pt`
YOLOv5 的预训练模型文件，用于目标检测任务。



