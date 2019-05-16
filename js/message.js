// 输入框点击时边框变色
!(function () {
    function focusInput(focusClass) {
        var elements = document.getElementsByTagName("input");
        var textarea = document.getElementsByTagName("textarea")[0];
        console.log(textarea)
        for (var i = 0; i < elements.length; i++) {
            if (elements[i].type != "button" && elements[i].type != "submit" && elements[i].type != "reset") {
                elements[i].onfocus = function () { this.className = focusClass; };
                elements[i].onblur = function () { this.className = ''; };
            }
        }
        textarea.onfocus = function () { this.className = focusClass; };
        textarea.onblur = function () { this.className = ''; };
    }
    // window.onload = function () {
    focusInput('focusInput');
    // }
})()
// 输入框验证
!(function () {
    var span = document.getElementsByClassName("hint");
    var input = document.getElementsByTagName("input");
    console.log(span)
    console.log(input)
    input[0].onblur = function () {
        var usermsgreg = /^\w{6,20}$/;
        if (usermsgreg.test(input[0].value)) {
            span[0].innerHTML = "√"

        } else {
            span[0].innerHTML = "×"
            input[0].value = ""
        }
        // submitcheck();

    }
    input[1].onblur = function () {
        var telmsgreg = /^1\d{10}$/;
        if (telmsgreg.test(input[1].value)) {
            span[1].innerHTML = "√"

        }
        else {
            span[1].innerHTML = "×"
            input[1].value = ""
        }
        // submitcheck();

    }

    input[2].onblur = function () {
        var emailmsgreg = /^\w{6,20}@\w{2,3}\.[A-z]{1,6}$/;
        // /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
        if (emailmsgreg.test(input[2].value)) {
            span[2].innerHTML = "√"

        }
        else {
            span[2].innerHTML = "×"
            input[2].value = ""
        }
        // submitcheck();

    }

    // 根据验证结果确认是否提交    
    function submitcheck() {
        var submit = document.getElementsByClassName("chat-view-button")[0];
        console.log(submit)
        submit.onclick = function () {
            console.log(input[0].value)
            if (input[0].value == "" && input[1].value == "" && input[2].value == "") {
                // alert("留言内容不能为空！")
                alert("留言内容不能为空！");

            } else if (span[0].innerHTML == "√" && span[1].innerHTML == "√" && span[2].innerHTML == "√") {
                window.location.href = "robot.html"
            }
        }


    }
    submitcheck();
})()
// 获取字符串长度
!(function () {
    
    var textarea = document.getElementsByTagName("textarea")[0];
    var textareaMsg = document.getElementsByClassName("textarea-msg")[0];
    console.log(textareaMsg)
    textarea.onchange= function () {
        var strlen = document.getElementsByTagName("textarea")[0].value.length;
        console.log(strlen)
        textareaMsg.innerHTML = strlen + "/400"
    }
})()