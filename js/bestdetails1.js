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
function detail(page){
    $.ajax({
        type:"POST",
        url:"../php/bestdetails.php", 
        data : "cid="+page,
        success:function(result){
            var data=JSON.parse(result);
            console.log(data);
            var str1="";
                str1+=`<div class="bookCover">
                <div class="bookPic">
                    <img src="${data[0].picture}" alt="${data[0].named}" id="imgBook">
                    <div class="tejiaIcon"></div>
                </div>
                <div class="rederScore">
                    <div class="rederScoreInner"><span> 读者评分<br>${data[0].grade}</span> </div>
                </div>
            </div>
            <div class="bookInfor">
                <h1>${data[0].named}</h1>
                <p>${data[0].descs}</p>
            </div>
            <div class="bookPrice">
                <div class="salePrice" id="divPrice">
                    <span class="urerLeave">1星价</span>
                    <span class="price">${data[0].price}</span>
                    <span class="discount">(${data[0].discount})</span>
                </div>
                <div class="otherPrice">
                    <span class="startPrice">
                        2星价${data[0].purchase}
                    </span>
                    <span class="originalPrice">
                        定价${data[0].cost}
                    </span>
                </div>
            </div>
            <div class="activeList">
                <a href="###">5万种图书|每满75减20</a>

            </div>
            <div class="inforLInk">
                <div class="inforLinkItem" id="lblAuthor">
                    <a
                        href="###">作者：${data[0].author}</a>
                </div>
                <div class="inforLinkItem" id="divPublish">
                    <a href="###">出版社：${data[0].press}<span class="arrowIcon"></span></a>
                </div>
                <div class="inforLinkItem">
                    <a href="###">排名：小说畅销榜 <i>1</i> 位<span class="arrowIcon"></span></a>
                </div>


                <div class="inforLinkItem">
                    <a href="###">分类：小说 &gt; 外国小说 &gt; 俄罗斯 </a><span class="arrowIcon"></span>
                </div>
            </div>

            <div class="service">
                <ul>
                    <li>正版好图书</li>
                    <li>全场满69包邮</li>
                    <li>特价书1折起</li>
                </ul>
            </div>
            <div class="reminder">
                <p>温馨提示：5折以下图书主要为出版社尾货，大部分为全新，个别图书品相8.9成新、切口有划线标记、光盘等附件不全</p>
            </div>
        </div>`
         
            $("#book").html(str1); 
        }
    })
}
detail(4)
//
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
                            <img data-original="${data[i].picture}"
                                alt="${data[i].named}" class="lazyImg" src="../images/bestseller-imgs/zwt.jpg">
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
        },
        complete:function(){
            $("img.lazyImg").lazyload({
                effect:"fadeIn"
            })
        }

    })
}
Ajax(2);
$(".fiveStartMoreLink a").click(function(){
    Ajax(3)
    $(".fiveStartMoreLink").remove()
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
                            <img data-original="${data[i].picture}"
                            alt="${data[i].named}" class="lazyImg" src="../images/bestseller-imgs/zwt.jpg">
                        </div>
                        <p class="name">${data[i].named}</p>
                        <div class="priceWrap"><span class="price">${data[i].price}</span><span
                                class="original">${data[i].cost}</span></div>
                    </div>
                </a>
            </li>`
            }  
            $(".fiveStartList ul").html(str); 
        },
        complete:function(){
            $("img.lazyImg").lazyload({
                effect:"fadeIn"
            })
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
