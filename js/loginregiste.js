// 点击右上角侧边栏显示出来
$(document).ready(function () {
    // 头部快捷键  点击显示 再点击隐藏

    $(".rightBtn").tap(function (event) {
        $(".sider-nav").toggle();
        event.stopPropagation();
        event.preventDefault();
    })
    // 点击显示部分不会隐藏
    $(".sider-nav").tap(function () {
        event.stopPropagation();
    })
    // 点击任意位置让sider-nav隐藏
    $(window).tap(function () {
        $(".sider-nav").hide();
    })
    // $(".rightBtn").click(function (event) {
    //     $(".sider-nav").toggle();
    //     event.stopPropagation();
    //     event.preventDefault();
    // })
    // // 点击显示部分不会隐藏
    // $(".sider-nav").click(function () {
    //     event.stopPropagation();
    // })
    // // 点击任意位置让sider-nav隐藏
    // $(window).click(function () {
    //     $(".sider-nav").hide();
    // })
})




//如果输入框内有内容则显示清除按钮 
$(".input").each(function (key, val) {
    var $this = $(this);
    // 当键盘弹起的时候
    $(".input").on("keyup", function () {
        // 判断当输入框内的内容不是空的时候，让对应的的清除按钮显示出来，否则隐藏
        if ($this.val() != "") {
            $this.parent(".userInput").find(".clearInput").show();
        } else {
            $this.parent(".userInput").find(".clearInput").hide();
        }

    })
})



// // 改变提交按钮状态，封装了一个函数
// function changeBtn() {
//     var flag = true;
//     // 当用户输入框的长度大于0和值不为空的时候flag为false
//     if ($("#userName").length > 0 && $.trim($("#userName").val()) == "") {
//         flag = false;
//     }
//     // 当密码输入框的长度大于0和值不为空的时候flag为false
//     if ($("#userPas").length > 0 && $.trim($("#userPas").val()) == "") {
//         flag = false;
//     }
//     // 当图形验证码输入框的长度大于0和值不为空的时候和没有hidden属性时flag为false
//     if ($("#imgcode").length > 0 && $.trim($("#imgcode").val()) == "" && !$("#imgcode").is(":hidden")) {
//         flag = false;
//     }
//     // 判断flag时添加btnOk类名、
//     if (flag) {
//         $(".nextLogin").addClass("btnOk");
//     } else {
//         $(".nextLogin").removeClass("btnOk");
//     }
// }



// 清除功能，点击叉叉小按钮，input输入框内所有内容清空 调用changeBtn() 
$(".clearInput").tap(function () {
    $(this).parent(".userInput").find("input").val("");
    $(this).hide();
    // changeBtn();
})


//点击隐藏按钮让密码显示出来
$(".eye").tap(function () {
    var _this = $(this)
    if (_this.hasClass("show")) {
        $(".pas-input").attr("type", "passwrod");
        _this.removeClass("show");
    } else {
        $(".pas-input").attr("type", "text");
        _this.addClass("show");
    }
})


// // 点击自动更换图形验证码
function identifyImg() {
    $(".imgWrap canvas").attr("src", "https://login.yiguo.com/verifycode?_t=" + new Date().getTime());
}
$(".imgWrap canvas").click(function () {
    identifyImg();
})

$(function () {
    var show_num = [];
    draw(show_num);

    $("#canvas").on('click', function () {
        draw(show_num);
    })
    $(".nextLogin").on('click', function () {
        var val = $("#imgInput").val().toLowerCase();  //转换成小写

        var error = $('.error');
        var errText = $('.err-text')
        console.log(error)
        var num = show_num.join("");
        if (val == '') {
            error.css("display", "block")
            errText.text("请输入验证码");
            setTimeout(() => {
                error.css("display", "none")
            }, 1000)

        } else if (val == num) {
            error.css('display', 'block')
            // errText.text("请稍后...")
            setTimeout(() => {
                // location.href="index.html"
            }, 1000)
            $("#imgInput").val('');
            draw(show_num);
            return true;
        } else {
            // alert('验证码错误！请重新输入！');
            error.css('display', 'block');
            errText.text("验证码错误，请重新输入！");
            setTimeout(() => {
                error.css('display', 'none')
            }, 1000)
            $("#verification").val('');
            draw(show_num);
        }
    })
})

function draw(show_num) {
    var canvas_width = $('#canvas').width();
    var canvas_height = $('#canvas').height();

    var canvas = document.getElementById("canvas");//获取到canvas的对象，演员
    var context = canvas.getContext("2d");//获取到canvas画图的环境，演员表演的舞台
    canvas.width = canvas_width;
    canvas.height = canvas_height;

    var sCode = "A,B,C,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
    var aCode = sCode.split(",");
    var aLength = aCode.length;//获取到数组的长度

    for (var i = 0; i <= 3; i++) {
        var j = Math.floor(Math.random() * aLength);//获取到随机的索引值
        var deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
        var txt = aCode[j];//得到随机的一个内容
        show_num[i] = txt.toLowerCase();
        var x = 10 + i * 18;//文字在canvas上的x坐标
        var y = 20 + Math.random() * 8;//文字在canvas上的y坐标
        context.font = "bold 23px 微软雅黑";
        context.translate(x, y); //设置坐标
        context.rotate(deg);        //设置旋转角度
        context.fillStyle = randomColor(); //调用randomcolor 随机生成颜色
        context.fillText(txt, 0, 0);
        // context.fillText(text,x,y,maxWidth);
        // text	规定在画布上输出的文本。
        // x	开始绘制文本的 x 坐标位置（相对于画布）。
        // y	开始绘制文本的 y 坐标位置（相对于画布）。
        // maxWidth	可选。允许的最大文本宽度，以像素计。

        context.rotate(-deg);
        context.translate(-x, -y);
    }
    var yzm = show_num.toString();
    console.log(yzm);
    for (var i = 0; i <= 5; i++) { //验证码上显示线条
        context.strokeStyle = randomColor();
        context.beginPath();
        context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
        context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
        context.stroke();
    }
    for (var i = 0; i <= 30; i++) { //验证码上显示小点
        context.strokeStyle = randomColor();
        context.beginPath();
        var x = Math.random() * canvas_width;
        var y = Math.random() * canvas_height;
        context.moveTo(x, y);
        context.lineTo(x + 1, y + 1);
        context.stroke();
    }
}

function randomColor() {//得到随机的颜色值
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}




// 登录时验证用户名和密码的有效性  
//用户名:#userName    密码:#userPas   图形验证码:#imgInput 
// 错误信息弹出:.error

// 验证用户名的有效性
$(function () {
    var btn = $(".nextLogin");
    var errText = $('.err-text');
    var uname = $("#userName");
    var error = $('.error');
    var pwd = $('#userPas');
    uname.on("blur", function () {
        //用户名正则，4到16位（字母，数字，下划线，减号）
        var reg = /^[a-zA-Z0-9_-]{4,16}$/
        if (reg.test(uname.val())) {

        } else if (reg.test(uname.val() == "")) {
            errText.text("用户名不能为空！")
            $('.error').css('display', 'block')
            setTimeout(() => {
                error.css('display', 'none')
            }, 1000)
        } else{
            errText.text("用户名输入有误，请重新输入")
            $('.error').css('display', 'block')
            setTimeout(() => {
                error.css('display', 'none')
            }, 1000)
        }

    })
    // 验证密码的有效性
    pwd.on("blur", function () {
        //用户名正则，4到16位（字母，数字，下划线，减号）
        var reg = /^[a-zA-Z0-9_-]{4,16}$/
        if (reg.test(pwd.val())) {

        } else if (reg.test(uname.val() == "")) {
            errText.text("密码不能为空！")
            $('.error').css('display', 'block')
            setTimeout(() => {
                error.css('display', 'none')
            }, 1000)
        } else{
            errText.text("密码输入有误，请重新输入")
            $('.error').css('display', 'block')
            setTimeout(() => {
                error.css('display', 'none')
            }, 1000)
        }

    })
})


// 点击登陆，请求login.php,访问sql中的login数据库，进行登录
$(function () {
    $(".nextLogin").tap(function () {

        var uname = $("#userName").val()


        var pwd = $("#userPas").val();

        $.ajax({
            url: "php/login.php",
            data: "uname" + uname + "&pwd=" + pwd,
            success: function (data) {
                if (data == "验证通过") {
                    document.cookie = "uname=" + uname.value;
                    document.cookie = "pwd=" + pwd.value;
                    window.location.href = "index.html"
                } else {
                    // var error = $('.error');
                    // var errText = $('.err-text');
                    // errText.text("请稍后...")
                    // $('.error').css('display', 'block')
                    // setTimeout(() => {
                    //     error.css('display', 'none')
                    // }, 1000)
                    // alert("cuowu");  
                    return false;
                }
            }
        })
      
    })
})

