
$(document).ready(function(e) {
    $(".shortCut").click(function(e) {
        $(".shortCutLayer").toggle();
    });
});
// 弹框
document.getElementsByClassName("confirmBtn").addEventListener('tap', function() {
    // var btnArray = ['取消', '确认'];
    mui.confirm('您确定要删除该商品吗？', function(e) {
        console.log(e.index);
        if (e.index == 1) {
        
        //   $(".activeList ul").remove()
        } 
    })
});
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

function isSelectAll() {
    var isSelectall = false;
    $(".J_check").each(function () {
        console.log($('.J_check'))
        if (!$(this).hasClass("selected")) {
            isSelectall = true;
            return false;
        }
    })
    if (isSelectall) { $(".J_selectALL").removeClass("selectAll"); } else { $(".J_selectALL").addClass("selectAll"); }
    var isSubmit = false;
    $(".J_check").each(function () {
        if ($(this).hasClass("selected")) {
            isSubmit = true;
            return false;
        }
    })
    if (isSubmit) { $("#J_submitBtn").addClass("cur") } else { $("#J_submitBtn").removeClass("cur") }
}
//  换购商品切


// var tst = document.querySelector("mui .mui-popup-buttons");

// console.log(tst);
