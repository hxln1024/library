// $(document).ready(function(e) {
//     $(".shortCut").click(function(e) {
//         $(".shortCutLayer").toggle();
//     });
// });
//头部列表点击实现
$("#shortCut").click(function (event) {
    $(".shortCutLayer").toggle();
    event.stopPropagation();
    event.preventDefault();
})
$(".shortCutLayer").click(function () {
    event.stopPropagation();
})
$(window).click(function () {
    $(".shortCutLayer").hide();
})
// $(".shortCut").on("click",function(){
//     if ($(".shortCutLayer").css("display")=='block'){
//         $(".shortCutLayer").hide();
      
//     }else{
//         $(".shortCutLayer").show();
      
//     }
// });

// 删除弹框
var lists=document.getElementsByClassName("confirmBtn")
// console.log(lists)
for(var i=0;i<lists.length;i++){
    
    lists[i].addEventListener('click', function() {
        var thisNode=this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        console.log(thisNode)
        // var btnArray = ['取消', '确认'];
        mui.confirm('您确定要删除该商品吗？', function(e) {
            console.log(e.index);
            if (e.index == 1) {
            
            thisNode.remove()
            } 
        })
    });
}

// 为你推荐
$(function () {
    $.ajax({
        // type:'POST',
        url: "../php/indexs.php",
        dataType: 'json',
        async: true,
        data: 'cid=3',
        success: function (data) {
            // console.log(data)
            var str = "";
            for (var i = 0; i < data.length; i++) {
                var obj = data[i];
                // console.log(obj)
                str += "<li><a><div class='cover'><img class='lazy' src='../images/indexs/zwt.jpg' data-original='" + obj.picture + "'></div><div class='name'>" + obj.named + "</div><div class='priceWrap'><span>" + obj.price + "</span><del>" + obj.cost + "</del></div></a></li>";

            }

            $('.recomandCon ul').append(str);


        },
        complete: function () {
            $("img.lazy").lazyload({
                effect: "fadeIn"
            });
        },

    })
})

//增加
$(".increment").on("click", function () {
    var a=$(this).parent().parent().parent().prev().parent().parent().prev().addClass("selected")
    console.log(a)
    var num = $(this).prev().val(); //获取商品初始数量1
    console.log(num)
    $(this).prev().val(Number(num) + 1); //此时已将数字直接写入标签内，是动作
   
    var buynum = $(this).prev().val(); //得到+1之后的商品数量，即购买数量
    console.log(222,buynum)
    var price = $(this).parent().parent().prev().children().children().html(); //获取商品单价
    console.log(price)
  $(this).parent().parent().prev().children(".total").html(parseFloat((buynum * Number(price)).toFixed(2)))
  console.log((buynum * Number(price)).toFixed(2))
   
  
   //        console.log(smallPrice);
    allPrice();
    checkNum();
});
//减少
$(".decrement").on("click", function () {
    var a=$(this).parent().parent().parent().prev().parent().parent().prev().addClass("selected")
    console.log(a)
    var num = $(this).next().val(); //获取此时商品数量
    if (num > 1) {
        $(this).next().val(Number(num) - 1); //此时已将数字直接写入标签内，是动作
        var buynum = $(this).next().val(); //得到-1之后的商品数量，即购买数量
        var price = $(this).parent().parent().prev().children().children().html(); //获取商品单价
        console.log(price)
        $(this).parent().parent().prev().children(".total").html(parseFloat((buynum * Number(price)).toFixed(2)))
   
    } else {
        alert("再点就没了");
    }
    allPrice();
    checkNum();
});
//全选
$(".allSelect").click(function () {

    if ($(this).hasClass("selectAll")) {
        $(this).removeClass("selectAll")
        $(".listCheckBox").removeClass("selected");
        $(".settlement").removeClass("cur")
        
    } else {
        $(this).addClass("selectAll")
        $(".listCheckBox").addClass("selected");
        $(".settlement").addClass("cur")

       
    }
    
    allPrice();
    checkNum();
});

//单选
$(".listCheckBox").click(function () {

    // var check = $(".check").length;
    // console.log(check)
    // var checked = $("check:checked").length;
    // console.log(checked)
    if ($(this).hasClass("selected")) {
        $(this).removeClass("selected")
       
    } else {
        $(this).addClass("selected")
        $(".settlement").addClass("cur")
       
        var num = $(this).next().children().children(".bookText").children(".oparateArea").children(".countEdit").children("input").val(); //获取商品初始数量1
        console.log(num)
        // $(this).prev().val(Number(num) + 1); //此时已将数字直接写入标签内，是动作
       
        // var buynum = $(this).prev().val(); //得到+1之后的商品数量，即购买数量
        // console.log(222,buynum)
        var buynum=num;
        var price = $(this).next().children().children(".bookText").children(".priceWrap").children(".salesPrice").children().html() //获取商品单价
        console.log(price)
        $(this).next().children().children(".bookText").children(".priceWrap").children(".total").html(parseFloat((buynum * Number(price)).toFixed(2)))
        allPrice();
        checkNum();
      }
    
    var check = $(".listCheckBox").length;
    console.log(check)
    var checked = $(".selected").length;
    console.log(checked)
    
    if (check == checked) {
        $(".allSelect").addClass("selectAll");
       
       
    } else {
        $(".allSelect").removeClass("selectAll");
       
    }
    if(checked==0){
        $(".settlement").removeClass("cur")
       
    }
    allPrice();
    checkNum();
});

function checkNum() {
    var num = 0;
    $(".listCheckBox").each(function () {
        if ($(this).hasClass("selected")) {
            // console.log(this);
            
            var b = $($(this).next().children().children(".bookText").children(".oparateArea").children(".countEdit").children()[1]).val();
           
            num += Number(b);
        }
    });
    $(".settlement span i").html(num);
}
function allPrice() {
    var sum = 0;
    $(".listCheckBox").each(function () {
        if ($(this).hasClass("selected")) {
            var a = $($(this).next().children().children(".bookText").children(".priceWrap").children()[1]).html();
            //单类商品数量
            console.log(a);
            sum +=Number(a);
        }
    });
    $(".totalMoney .money").html(sum);
    // console.log($(".totalMoney i"))
}