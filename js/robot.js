function ajax(option) {
    var xhr = new XMLHttpRequest();
    if (option.type == "GET") {
        xhr.open("GET", option.url + "?" + option.param);
        xhr.send();
    } else {
        xhr.open("POST", option.url);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(option.param);
    }

    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            var data = xhr.responseText;
            option.success(data);
        }
    }

}
var words = document.getElementById("words");
var talkwords = document.getElementById("talkwords");
var send = document.getElementById("send");
send.onclick = function () {
    if (talkwords.value == "") {
        // 消息为空时弹窗
        alert("消息不能为空");
        return;
    }
    var str = '<div class="aspeak"><img src="../images/common/robot1.png"><span>' + talkwords.value + '</span></div>'
    words.innerHTML += str;
    ajax({
        type: "GET",
        url: "   http://route.showapi.com/60-27",
        param: "showapi_appid=87849&showapi_sign=ccaa08ffb66f4384ae4e98bc22728e82&info=" + talkwords.value,
        success: function (data) {
            // console.log(data)
            var jsonData = JSON.parse(data);
            var robotJson = jsonData.showapi_res_body.text;
            var str = '<div class="bspeak"><img src="../images/common/robot.jpg"><span>' + robotJson + '</span></div>'
            words.innerHTML += str;
        }
    })
    talkwords.value = "";
}
