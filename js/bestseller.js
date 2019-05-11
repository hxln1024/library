// //
    $(".backTop").click(function(){
        document.body.scrollTop=0;
    })
// ...
$(".shortCut").click(function() {
    if($(".shortCutLayer").css("display")=="none"){
        $(".shortCutLayer").show(1500);
    }else {
        $(".shortCutLayer").hide("slow");
    }
});

// 快速导航
!(function(){
    $(".sidebarNav dt").click( function () {     
        if($(this).children("span").text()=="快速导航"){
            $(".nav-top").css({zIndex:800});
            $(".dropWrap").css({zIndex:800});
            $("#wrapper").css({zIndex:800});
            $(this).children("span").text("收起").css({background: "url(../images/bestseller-imgs/sidebarleftarrow.png) no-repeat left",backgroundSize: "0.11rem 0.23rem"})
            $(".sidebarNav dd").css({display:"block",zIndex:999})
            $(".maskLayer").css({"display":"block"})
        }else{
            $(".nav-top").css({zIndex:999});
            $(".dropWrap").css({zIndex:999});
            $("#wrapper").css({zIndex:968});
            $(this).children("span").text("快速导航").css({background: "url(../images/bestseller-imgs/sidebarrightarrow.png) no-repeat left",backgroundSize: "0.11rem 0.23rem"})
            $(".sidebarNav dd").css({display:"none",zIndex:995})
            $(".maskLayer").css({"display":"none"})
        }
    })
})()
// =====
!(function(){
    $(".nav-top li").each(function(){
        var index=$(this).index();
        $(this).click(function () {
            if ($(".dropItem").eq(index).hasClass("active")) {
                $(".maskLayer").css({"display":"none"})
                $(this).css({ border: "0.02rem solid #fff",borderBottom: "none",background: "none"});
                $(this).children("span").css({color: "#333333",background: "#f3f3f3"});
                // 执行隐藏
                $(".dropItem").eq(index).removeClass("active");
            } else {
                $(".maskLayer").css({"display":"block"})
                $(this).css({border: "0.02rem solid #f3f3f3",
                borderBottom:"none",background: "#fff"}).siblings().css({ border: "0.02rem solid #fff",borderBottom: "none",background: "none"});
                $(this).children("span").css({color: "#dc2230",background:"#fff"}).parent().siblings().children("span").css({color: "#333333",background: "#f3f3f3"});
                // 显示
                $(".dropItem").eq(index).addClass("active").siblings().removeClass("active");
            }
        })
    })
})()


function Ajax(page){
    $.ajax({
        type:"POST",
        url:"../php/data.php", 
        data : "cid="+page,
        success:function(result){
            // console.log(result);
            var data=JSON.parse(result);
            // console.log(data);
            // var str="";
            for(var i=0;i<data.length;i++){
                str+='<li><a href="/sub/bestdetails.html"><div class="bookWrap"><div class="left"><img src="'+data[i].picture+'" alt=""></div><div class="right"><p class="p-name">'+data[i].named+'</p><p class="p-author"><span>'+data[i].author+'</span><span>'+data[i].press+'</span></p><div class="p-comm"><img src="../images/bestseller-imgs/full.png" alt=""><img src="../images/bestseller-imgs/full.png" alt=""><img src="../images/bestseller-imgs/full.png" alt=""><img src="../images/bestseller-imgs/full.png" alt=""><img src="../images/bestseller-imgs/full.png" alt=""><span>'+data[i].comments+'评论</span></div><div class="pSize"><p class="p-size">领劵满200减100</p></div><p class="p-price"><span class="sellprice">'+data[i].price+'</span><span class="discount">('+data[i].discount+')</span><span class="price">'+data[i].cost+'</span></p><p class="p-shopping"><i class="addCar"></i><i class="collect confirmBtn" ></i></p></div></div></a></li>'
            }  
            $(".substance ul").html(str); 

            var lists=document.getElementsByClassName("confirmBtn");  
            for(var j=0;j<lists.length;j++){
                // 弹框
                lists[j].addEventListener('tap', function() {
                    mui.confirm(' ','你还未登录,是否登陆?', function() {
                    
                    })
                }); 
            } 
        }
    })
}

var str="";
Ajax(1);

var myScroll,
    pullDownEl, pullDownOffset,
    pullUpEl, pullUpOffset;

/** * 下拉刷新 （自定义实现此方法） 
 * myScroll.refresh();  * // 数据加载完成后，调用界面更新方法 */
function pullDownAction() {
    // 此处省略ajax的加载
    str="";
    Ajax(1);
    setTimeout(function () {
        myScroll.refresh();
    }, 400);

}
var j = 2;
function pullUpAction() {
    var page = j++;
    setTimeout(function () { //模拟加载延迟的效果
       
        Ajax(page);
        myScroll.refresh();
        $(".header").css("display","none")
        // $(".nav-top").css({position: "fixed",top:0,bottom:0,left:0,right:0})
        $(".content").css({top:0})
        $(".backTop").css({display:"block",zIndex:1000})
    }, 400);
}
/** * 初始化iScroll控件 */
function loaded() {
    pullDownEl = document.getElementById('pullDown');
    pullDownOffset = pullDownEl.offsetHeight;
    pullUpEl = document.getElementById('pullUp');
    pullUpOffset = pullUpEl.offsetHeight;
    myScroll = new IScroll('#wrapper', {
        probeType: 2 //probeType属性，表明此插件，可以监听scroll事件,如果没有probeType属性，说明不能监听scroll事件
        //当probeType：2的时候，松开鼠标不会触发scroll事件
        //当probeType：3的时候，松开鼠标还会触发scroll事件
    });
    myScroll.on('refresh', function () {
        if (pullDownEl.className.match('loading')) {
            pullDownEl.className = '';
            pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
        } else if (pullUpEl.className.match('loading')) {
            // console.log('refresh-有loading');
            pullUpEl.className = '';
            pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
        }
        // console.log('refresh');
    });

    myScroll.on('scroll', function () {
        // console.log("scroll");
        // console.log(this.y); //-80
        // console.log(this.maxScrollY);  //-65
        if (this.y > 5 && !pullDownEl.className.match('flip')) {
            // console.log('y>5无flip');
            pullDownEl.className = 'flip';
            pullDownEl.querySelector('.pullDownLabel').innerHTML = '松手开始更新...';
            //此时，可以发起ajax请求，请求新数据，重新渲染页面
        } else if (this.y < 5 && pullDownEl.className.match('flip')) {
            pullDownEl.className = '';
            pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
            // console.log('y<5有flip');
        } else if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
            // console.log('y<-79无flip');
            pullUpEl.className = 'flip';
            pullUpEl.querySelector('.pullUpLabel').innerHTML = '松手开始更新...';
        } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
            // console.log('y>-69有flip');
            pullUpEl.className = '';
            pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
        }
    });
    myScroll.on('scrollEnd', function () {
        // console.log('scrollEnd');

        if (pullDownEl.className.match('flip')) {
            // console.log('scrollEnd,pullDown有flip');
            pullDownEl.className = 'loading';
            pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';
            pullDownAction();
        } else if (pullUpEl.className.match('flip')) {
            // console.log('scrollEnd-pullUp有flip,要加载数据');
            pullUpEl.className = 'loading';
            pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';
            pullUpAction();
        }
    });

}
//初始化绑定iScroll控件 
document.addEventListener('touchmove', function (e) {
    e.preventDefault();
}, false);
document.addEventListener('DOMContentLoaded', loaded, false);