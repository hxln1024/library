document.getElementById("confirmBtn").addEventListener('tap', function() {
    var btnArray = ['取消', '确认'];
    mui.confirm('您确定要删除该商品吗？',  function(e) {
        // if (e.index == 1) {
        //     info.innerText = '你刚确认MUI是个好框架';
        // } else {
        //     info.innerText = 'MUI没有得到你的认可，继续加油'
        // }
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