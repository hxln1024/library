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
// php请求数据
function Ajax(page){
    $.ajax({
        type:"POST",
        url:"../php/bestdetails.php", 
        data : "cid="+page,
        success:function(result){
            var data=JSON.parse(result);
            // console.log(data);
            var str="";
            for(var i=0;i<data.length;i++){
                str+=`<li>
                <a href="###">
                    <div class="bookWrap">
                        <div class="cover">
                            <img src="${data[i].picture}"
                                alt="${data[i].named}" class="">
                        </div>
                        <p class="name">${data[i].named}</p>
                        <p class="author">${data[i].author}</p>
                        <div class="priceWrap"><span class="price">¥22.5</span><span
                                class="original">¥46.0</span></div>
                    </div>
                </a>
            </li>`
            }  
            $(".fiveStartList1 ul").html(str); 
        }
    })
}
Ajax(2);
$(".fiveStartMoreLink a").click(function(){
    Ajax(3)
})
function last(page){
    $.ajax({
        type:"POST",
        url:"../php/bestdetails.php", 
        data : "cid="+page,
        success:function(result){
            var data=JSON.parse(result);
            // console.log(data);
            var str="";
            for(var i=0;i<data.length;i++){
                str+=`<li>
                <a href="###">
                    <div class="bookWrap">
                        <div class="cover">
                            <img src="${data[i].picture}"
                                alt="${data[i].named}" class="">
                        </div>
                        <p class="name">${data[i].named}</p>
                        <div class="priceWrap"><span class="price">${data[i].price}</span><span
                                class="original">${data[i].cost}</span></div>
                    </div>
                </a>
            </li>`
            }  
            $(".fiveStartList ul").html(str); 
        }
    })
}
last(3)
// ...
$(".shortCut").click(function() {
    if($(".shortCutLayer").css("display")=="none"){
        $(".shortCutLayer").show(1500);
    }else {
        $(".shortCutLayer").hide("slow");
    }
});
