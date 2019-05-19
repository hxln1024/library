// window.onload=function() {
   
    var sGoodlist=getCookie("aGoodList");
    var aGoodList=sGoodlist?JSON.parse(sGoodlist):[];
       
   
   
        var oLi=document.createElement('li');    
       
        oLi.innerHTML='<div class="listCheckBox J_check">选中</div><div class="book"><div class="bookInner"><div class="bookCover"><a href="###"><img src="'+aGoodList[0].url+'"></a></div><div class="bookText"><div class="bookname"><a href="###">'+aGoodList[0].title+'</a></div><div class="priceWrap"><span class="salesPrice">&yen;<i>'+aGoodList[0].price+'</i></span><span class="total"></span><span class="price">&yen;<i>'+aGoodList[0].prices+'</i></span></div><div class="oparateArea"><div class="countEdit"><span class="decrement"></span><input  type="text" value='+aGoodList[0].amount+'><span class="increment"></span></div><div class="otherEdit"><i class="addFav">收藏</i> <i class="delete confirmBtn">删除</i></div></div><div class="activeSelect"><i>促销活动</i><span>2个可选</span></div></div></div></div>'
        $(".activeList ul").append(oLi);
        $(".content").css("display","block");
        $(".footer").css("display","block");
        $(".noProductWrap").css("display","none")
//         var oAbtn=$("#addCart");
//         // console.log(oAbtn)
//         // oAbtn.index=i;
//         oAbtn.onclick=function() {
//             //商品数量没删除一次减一件
//             if (aGoodList[0].amount>1) {
//                 aGoodList[0].amount--
//             }
//             else
//             {
//                 //剩余一件商品删除该对象
//                 $(".activeList ul").removeChild(this.parentNode);
//                 // aGoodList.splice(this.index,1)//掌握splice的应用
//             }
//             //将最新商品保存到cookie
//             setCookie("aGoodList",JSON.stringify(aGoodList),7);
//             // window.location.reload();
        
//     }
// // }


// window.onload=function() {

//     var sGoodlist=getCookie("aGoodList");
//     var aGoodList=sGoodlist?JSON.parse(sGoodlist):[];
//     for (var i = 0; i < aGoodList.length; i++) {
//         var oLi=document.createElement('li');    
//         oLi.innerHTML='<div class="listCheckBox J_check">选中</div><div class="book"><div class="bookInner"><div class="bookCover"><a href="###"><img src="'+aGoodList[0].url+'"></a></div><div class="bookText"><div class="bookname"><a href="###">'+aGoodList[0].title+'</a></div><div class="priceWrap"><span class="salesPrice">&yen;<i>'+aGoodList[0].price+'</i></span><span class="total"></span><span class="price">&yen;<i>'+aGoodList[0].prices+'</i></span></div><div class="oparateArea"><div class="countEdit"><span class="decrement"></span><input  type="text" value='+aGoodList[0].amount+'><span class="increment"></span></div><div class="otherEdit"><i class="addFav">收藏</i> <i class="delete confirmBtn">删除</i></div></div><div class="activeSelect"><i>促销活动</i><span>2个可选</span></div></div></div></div>'
//         $(".activeList ul").append(oLi);
//              $(".activeList ul").append(oLi);
//         $(".content").css("display","block");
//         $(".footer").css("display","block");
//         $(".noProductWrap").css("display","none")
//         var oAbtn=getTagByClassName("btn_group");
//         oAbtn[i].index=i;
//         oAbtn[i].onclick=function() {
//             //商品数量没删除一次减一件
//             if (aGoodList[this.index].amount>1) {
//                 aGoodList[this.index].amount--
//             }
//             else
//             {
//                 //剩余一件商品删除该对象
//                 $(".activeList ul").removeChild(this.parentNode);
//                 aGoodList.splice(this.index,1)//掌握splice的应用
//             }
//             //将最新商品保存到cookie
//             setCookie("aGoodList",JSON.stringify(aGoodList),7);
//             window.location.reload();
//         } 
//     }
// }
