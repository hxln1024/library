// 点击右侧显示菜单
!(function () {
    $("#shortCut").click(function () {
        $('.shortCutLayer').toggle('slow');
    })
})()
!(function () {
    $(".sidebarNav dl dt").click(function () {
        console.log($('.sidebarNav dl dd'))
        console.log($('.sidebarNav dl dd').position().left)
        if(($('.sidebarNav dl dd').position().left)>=54){
            $(".sidebarNav dl dt span").html("快速<br>导航") 
            $(".sidebarNav dl dt span").css({
                "background":"url('../images/common/sidebarrightarrow.png') no-repeat left",
                "background-size": "0.11rem 0.23rem"
            })
         }
         else{
            $(".sidebarNav dl dt span").html("收起") 
            $(".sidebarNav dl dt span").css({
                "background":"url('../images/common/sidebarleftarrow.png') no-repeat left",
                "background-size": "0.11rem 0.23rem"
            })
         }
        $('.sidebarNav dl dd').toggle('slow');
    })
})()

// 弹出框
!(function () {
    layui.use('layer', function () {
        var $ = layui.jquery,
            layer = layui.layer;
        //触发事件
        var active = {
            confirmTrans: function () {
                //配置一个透明的询问框
                layer.msg('浏览器不支持此功能<br>请关注"中国网"微信公众号分享', {
                    time: 2000, //20s后自动关闭
                    anim: 1, //弹出动画
                    // btn: ['知道了']
                });
            },
        };
        $('.layui-btn').on('click', function () {
            var othis = $(this),
                method = othis.data('method');
            active[method] ? active[method].call(this, othis) : '';
        });

    });
})()

// 返回顶部
!(function () {
    var fixed_box = document.getElementsByClassName("fixed_box")[0];
    var backTop=document.getElementsByClassName("backTop")[0];
    function scroll() {
        // 开始封装自己的scrollTop
        if (window.pageYOffset !== undefined) {
            // ie9+ 高版本浏览器
            // 因为 window.pageYOffset 默认的是0,所以需要判断
            return {
                left: window.pageXOffset,
                top: window.pageYOffset
            }
        }
        else if (document.compatMode === "CSS1Compat") {
            // 标准浏览器,来判断有没有声明DTD
            return {
                left: document.documentElement.scrollLeft,
                top: document.documentElement.scrollTop
            }
        }
        return {
            // 未声明 DTD
            left: document.body.scrollLeft,
            top: document.body.scrollTop
        }
    }
    // 用scroll事件模拟盒子距离最顶端的距离
    window.onscroll = function () {
        // 每次屏幕滑动，把屏幕卷去的值赋给leader，模拟获取显示区域距离顶部的距离
        leader = scroll().top;
        // console.log(leader);

        if (leader >= 200) {
            if(fixed_box){
              fixed_box.style.display = "block";  
            }else{
               backTop.style.display = "block"; 
            }           
            
        } else {
            if(fixed_box){
                fixed_box.style.display = "none";  
              }else{
                 backTop.style.display = "none"; 
              }  
        }
    }
})()


