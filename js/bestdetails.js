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