	$(function(){
        var cartNum=0;
        $("#addCart").on('click',function(event){
            var e = event || window.event;
            var $this = $(this);
            var shopCart=$("#gotoCart");
            var shop=$("#addCart");
            var offset = $("#gotoCart").offset();
            var addCart = $("#addCart").offset();
            var addImg=$(this).parent().parent().parent().parent().prev().find('#imgBook').eq(0)
            var cloneImg=addImg.clone();
            cloneImg.css({
                'width':'250px',
                'height':'250px',
                'position':'fixed',  
                'left':addCart.left + parseInt($this.width()) / 2, 
                'top': e.clientY,   
                 'margin-top' :'-40px' ,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                'z-index':'1000',
                'opacity':'.5',
               
            });
            cloneImg.appendTo($('body')).animate({
                'width':'50px',
                'height':'50px',
               'left': offset.left + parseInt($("#gotoCart").width()) / 2,
                'top': offset.top - $(document).scrollTop(),
            
           
            },500,function(){
                cloneImg.animate({
                    'width':0,
                    'height':0 ,
                    'margin-top':'0'
                },function(){
                    $('#popone').html(++cartNum);
                    $(this).detach()
                })
            })
        })
    })

    
       /*网页加载完成后执行的事件*/
window.onload=function() {
    var oAbtn=document.getElementById("addCart");
        oAbtn.onclick=function() {
           
        //     // var goodId=this.getAttribute('data-id');
        //     // var goodSrc=this.getAttribute('data-url');
        //     // var goodTitle=this.getAttribute('data-title');
        //     // var goodPrice=this.getAttribute('data-price');
        //     // var goodAmount=this.getAttribute('data-amount');
        // 图片地址
            var goodSrc=$(this).parent().parent().parent().parent().prev().find('#imgBook')[0].src;
        
            var goodTitle=$(this).parent().parent().parent().parent().prev().children(".bookProduct").children(".bookInfor").children(0).html()
            // console.log(goodTitle)
            var a=$(this).parent().parent().parent().parent().prev().children(".bookProduct").children(".bookPrice").children(".salePrice").children(".price").html()
            var goodPrice=a.replace(/[^\d|.]/g, '');
            // console.log(1111,goodPrice)
            var b=$(this).parent().parent().parent().parent().prev().children(".bookProduct").children(".bookPrice").children(".otherPrice").children(".originalPrice").html()
            var goodPrices=b.replace(/[^\d|.]/g, '');
            // console.log(222221,goodPrices)
            var goodAmount=$(this).parent().parent().prev().children("#gotoCart").children(".iconBtnInner").children(0).html();
            console.log(goodAmount)
            
        //     //创建货物对象并赋值
            var oGood={
                url:goodSrc,
                title:goodTitle,
                price:goodPrice,
                prices:goodPrices,
                amount:goodAmount
            };
        //     //读取内存中的cookie信息
            var sGoodlist=getCookie("aGoodList")
            //获取货物数组，如果货物数组存在则在此基础上进行修改数据，不存在则创建新的数组存储货物对象
            var aGoodList=sGoodlist?JSON.parse(sGoodlist):[];
            //判断是否存在将要添加到购物车的货物
            var whetherExsits=aGoodList.every(function(v) {
                if (v.id===oGood.id) {
                    //存在修改购物车的货物数量
                    v.amount++;
                    return false;
                }
                return true;
            });
            //不存在则将货物对象追加到数组
            if (whetherExsits) {
                aGoodList.push(oGood);
            }
            setCookie("aGoodList",JSON.stringify(aGoodList),7);
        
    }



// for (var i = 0; i < oAbtn.length; i++) {
//     oAbtn[i].onclick=function() {
//         var goodSrc=$(this).parent().parent().parent().parent().prev().find('#imgBook')[0].src;
//                     console.log(goodSrc)
//                     // console.log(goodId)
//                     // // var goodI.=this.getAttribute('data-url');
//                     var goodTitle=$(this).parent().parent().parent().parent().prev().children(".bookProduct").children(".bookInfor").children(0).html()
//                     console.log(goodTitle)
//                     var a=$(this).parent().parent().parent().parent().prev().children(".bookProduct").children(".bookPrice").children(".salePrice").children(".price").html()
//                     var goodPrice=a.replace(/[^\d|.]/g, '');
//                     console.log(1111,goodPrice)
//                     var b=$(this).parent().parent().parent().parent().prev().children(".bookProduct").children(".bookPrice").children(".otherPrice").children(".originalPrice").html()
//                     var goodPrices=b.replace(/[^\d|.]/g, '');
//                     console.log(222221,goodPrices)
//                     var goodAmount=$(this).parent().parent().prev().children("#gotoCart").children(".iconBtnInner").children(0).html();
//                     console.log(goodAmount)
                    
//                 //     //创建货物对象并赋值
//                     var oGood={
//                         url:goodSrc,
//                         title:goodTitle,
//                         price:goodPrice,
//                         prices:goodPrices,
//                         amount:goodAmount
//                     };
//                 //     //读取内存中的cookie信息
//                     var sGoodlist=getCookie("aGoodList")
//                     //获取货物数组，如果货物数组存在则在此基础上进行修改数据，不存在则创建新的数组存储货物对象
//                     var aGoodList=sGoodlist?JSON.parse(sGoodlist):[];
//                     //判断是否存在将要添加到购物车的货物
//                     var whetherExsits=aGoodList.every(function(v) {
//                         if (v.title===oGood.title) {
//                             //存在修改购物车的货物数量
//                             v.amount++;
//                             return false;
//                         }
//                         return true;
//                     });
//                     //不存在则将货物对象追加到数组
//                     if (whetherExsits) {
//                         aGoodList.push(oGood);
//                     }
//                     setCookie("aGoodList",JSON.stringify(aGoodList),7);
    
// }
// }
}
