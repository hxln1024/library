// banner轮播图
var mySwiper = new Swiper('.banner1', {
  loop:true,
  autoplay: 2000,//可选选项，自动滑动
  pagination: '.swp1',
  paginationClickable: true,
  speed:500,
})

var mySwiper = new Swiper('.banner2', {
  loop:true,
  autoplay: 2000,//可选选项，自动滑动
  pagination: '.swp2',
  paginationClickable: true,
  speed:500,
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
          //  console.log(data);
          
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
   
   if(h>sellHotNav) {$(".sort_tab li").click(function(){
      // console.log($(".sort_tab li"))
      window.scrollTo(0, parseInt($(".sellHotNavWrap").offset().top) - 74);
      $(".header").show();
      $(".sellHotNavFixed").removeClass("fixed");
    
    })}
})

// 返回顶部
!(function () {
  var fixed_box = document.getElementsByClassName("fixed_box")[0];
  var backTop = document.getElementsByClassName("backTop")[0];
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
      if (fixed_box) {
        fixed_box.style.display = "block";
      } else {
        backTop.style.display = "block";
      }

    } else {
      if (fixed_box) {
        fixed_box.style.display = "none";
      } else {
        backTop.style.display = "none";
      }
    }
  }
})()

// 底部菜单切换
!(function () {
  $(".webNav li").click(function () {
    $(this).addClass("cur");
    $(this).siblings().removeClass("cur");
    if ($(this).index() == 0) {
      $(this).find("img").attr("src", "images/common/home.png");
      $(".kind").find("img").attr("src", "images/common/kind.png");
    }
    if ($(this).index() == 1) {
      console.log($(".home").find("img"))
      $(this).find("img").attr("src", "images/common/kind1.png");
      $(".home").find("img").attr("src", "images/common/home1.png");
    }
  })
})()



