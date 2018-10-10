# qqpaneldrag


qq面板简单实现 
一些要点：
雪碧图的定位
cursor：move 拖拽
style="ime-mode:disabled"  禁止语言切换
autocomplete="on"指用户在文本框输入前几个字母或是汉字的时候，该控件就能从存放数据的文本或是数据库里将所有以这些字母开头的数据提示给用户

js

见图解
对盒子做定位的时候就是定位左上角
鼠标按下时候的onmounsedown时候的左侧距离 如果是clientX 那么光标是在面板左上的 光标相对于面板的位置应为 event.clientX-面板左侧间距
当鼠标onmousemove的时候 面板左侧的距离 为e.clientX-光标的相对位置
光标相对于面板的位置是恒定不变的
不这样设定 光标永远在左上 因为clientX就是定义在左上
不能整个屏幕移动 设置可以移动最大宽度为屏幕宽度-面板宽度
getByClass注意兼容
winW=document.documentElement.clientWidth || document.body.clientWidth,
event = event || window.event
