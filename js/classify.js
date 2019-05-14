//滚动条插件
var ScrollLeft = new IScroll('#menuLeft', {
    mouseWheel: true,
    scrollbars: true
});


// banner图
var swiper = new Swiper('.swiper-container', {
    pagination: {
            el: '.swiper-pagination',
    },
    autoplay: 1000,
    loop: true,
});


//点击左侧目录
$(function () {
$(".menu-left-ul li").click(function () {
// alert("ddd");
$(this).siblings('li').removeClass('on');

$(this).addClass('on');

});
}); 

// tab图书切换

$('#ulFoot li').tap(function () {
    var i = $(this).index();//下标第一种写法
    $(this).addClass('active').siblings().removeClass('active');
    $('.menu-right-content  .content-item').eq(i).show().siblings().hide();
});