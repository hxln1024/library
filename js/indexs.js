// banner轮播图
var mySwiper = new Swiper('.banner1', {
  loop: true,
  autoplay: 2000, //可选选项，自动滑动
  pagination: '.swp1',
  paginationClickable: true,
  speed: 500,
})

var mySwiper = new Swiper('.banner2', {
  loop: true,
  autoplay: 2000, //可选选项，自动滑动
  pagination: '.swp2',
  paginationClickable: true,
  speed: 500,
})

//   上下滚动公告
function noticeUp(obj, top, time) {
  $(obj).animate({
    marginTop: top
  }, time, function () {
    $(this).css({
      marginTop: "0"
    }).find(":first").appendTo(this);
  })
}
$(function () {
  // 调用 公告滚动函数
  setInterval("noticeUp('.active','-35px',500)", 2000);
});

// 淘书团
var tst = document.querySelectorAll(".tstList ul li a");
// console.log(tst);
var dz = document.querySelectorAll(".hottockList a");
var cx = document.querySelectorAll(".sellHotList a");
// console.log(cx);
//  淘书团板块
!(function () {
  window.onload = function () {
    ajax({
      type: "POST",
      url: "../php/indexs.php",
      param: "cid=1",
      success: function (data) {
        if (data !== "数据不存在") {
          var obj = JSON.parse(data);
          // console.log(obj);
          var str = "";
          for (var i = 0; i < obj.length; i++) {
            // str= "<img class='img' src='"+obj[i].picture+"'>"+"<p class='name'>"+obj[i].descs+"</p>";
            // console.log(str);
            // st[i].innerHTML=str;
            str = "<div class='bookWrap'><div class='cover'><img src='" + obj[i].picture + "'></div><p class='name'>" + obj[i].descs + "<span>团</span></p><div class='priceWrap'><div class='Tprice'>团购价：<span>" + obj[i].purchase + "</span></div><div class='discountWrap'><span class='original'>原价：" + obj[i].cost + "</span><span class='discount'>" + obj[i].discount + "</span></div></div></div>";
            // console.log(str);
            tst[i].innerHTML = str;

          }
        }
      }
    })
    ajax({
      type: "POST",
      url: "../php/indexs.php",
      param: "cid=2",
      success: function (data) {
        if (data !== "数据不存在") {
          var obj = JSON.parse(data);
          // console.log(obj);
          var str = "";
          for (var i = 0; i < obj.length; i++) {
            str = "<div class='bookWrap'><div class='cover'><img src='" + obj[i].picture + "'></div><p class='name'>" + obj[i].named + "</p><div class='startWrap'><span class='full'></span><span class='full'></span><span class='full'></span><span class='full'></span><span class='half'></span><b>" + obj[i].comments + "条评论</b></div><div class='priceWrap'><span class='price'>" + obj[i].price + "</span><span class='original'>" + obj[i].cost + "</span></div><div class='review'><span>[好评]</span>" + obj[i].descs + "</div></div>";
            // console.log(str);
            dz[i].innerHTML = str;

          }
        }
      }
    })
  }

})()
// 畅销榜首页数据
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
          str += "<li><a><div class='bookWrap'><div class='cover'><img class='lazy' src='../images/indexs/zwt.jpg' data-original='" + obj.picture + "' ></div><p class='name'>" + obj.named + "</p><div class='priceWrap'><span class='price'>" +'¥'+ obj.price + "</span><span class='original'>" +'¥'+ obj.cost + "</span></div></div></a></li>";

        }

        $('.sellHotList ul').append(str);


      },
      complete: function () {
        $("img.lazy").lazyload({
          effect: "fadeIn"
        });
      },

    })
  })


  // 畅销榜分页数据渲染
  !(function () {
    //当tab被hover时
    //定义一把锁
    // $(".tab ul li.on").each(function(){
    //     $(this).attr("flag",true);

    // })
    $(".tab ul li").each(function () {
      $(this).click(function () {
        var page = $(this).index() + 3;
        // console.log(page)
        // console.log($(this).attr("flag"))
        // if($(this).attr("flag")=="true"){
        $.ajax({
          type: "POST",
          url: "../php/indexs.php",
          data: "cid=" + page,
          success: function (result) {
            var data = JSON.parse(result);
            // console.log(data.length); //6
            var str1 = "";
            for (var i = 0; i < data.length; i++) {
              var obj = data[i];
              // console.log(obj)
              str1 += "<li><a><div class='bookWrap'><div class='cover'><img class='lazy' src='../images/indexs/zwt.jpg' data-original='" + obj.picture + "' ></div><p class='name'>" + obj.named + "</p><div class='priceWrap'><span class='price'>" +'¥'+ obj.price + "</span><span class='original'>" +'¥'+ obj.cost + "</span></div></div></a></li>";

            }

            // console.log(str1)
            // console.log($(".sellHotList ul").eq(page-3))
            $(".sellHotList ul").html(str1);


          },
          complete: function () {
            $("img.lazy").lazyload({
              effect: "fadeIn"
            });
          },
        })
        // }
        //关门下锁
        // $(this).attr("flag",false);
      })
    })

  })()

  // var navs=document.getElementsByClassName("sellHotNavFixed")[0];
  // console.log(navs)
  // window.onscroll=function(){
  //   console.log(navs.getBoundingClientRect().top)
  //   if(navs.getBoundingClientRect().top<=88){
     
  //   }

  // }
  $(window).scroll(function () {
    var h = $(window).scrollTop();
    // console.log(h)
    var sellHotNav = $(".sellHotNavWrap").offset().top;
    // console.log(sellHotNav)
    if (h >sellHotNav) {

        $(".sellHotNavFixed").addClass("fixed");
        $(".header").hide();
    } 
    else {
        $(".sellHotNavFixed").removeClass("fixed");
        $(".header").show();
    }
    // if (h > 400) {
    //     $('.fixed_box').show();
    // } else {
    //     $('.fixed_box').hide()
    // }
   if(h>sellHotNav) {$(".sort_tab li").click(function(){
      // console.log($(".sort_tab li"))
     
      $(".header").show();
      $(".sellHotNavFixed").removeClass("fixed");
    
    })}
})


