/**
 * 使用mui样式，实现移动端常用的弹出层
 * 依赖项：jquery 
 */


var m = {}

m.template={
    "alert":'<div mui-id="@id@" class="mui-popup mui-popup-in" style="display: block;"><div class="mui-popup-inner"><div class="mui-popup-title">@title@</div><div class="mui-popup-text">@msg@</div></div><div class="mui-popup-buttons"><span class="mui-popup-button mui-popup-button-bold">@btn@</span></div></div><div  mui-id="@id@" class="mui-popup-backdrop mui-active" style="display: block;"></div>',
    "confirm":'<div mui-id="@id@" class="mui-popup mui-popup-in" style="display: block;"><div class="mui-popup-inner"><div class="mui-popup-title">@title@</div><div class="mui-popup-text">@msg@</div></div><div class="mui-popup-buttons"><span class="mui-popup-button">@btn0@</span><span class="mui-popup-button mui-popup-button-bold">@btn1@</span></div></div><div mui-id="@id@"  class="mui-popup-backdrop mui-active" style="display: block;"></div>',
    "prompt":'<div mui-id="@id@" class="mui-popup mui-popup-in" style="display: block;"><div class="mui-popup-inner"><div class="mui-popup-title">@title@</div><div class="mui-popup-text">@msg@</div><div class="mui-popup-input"><input type="text" autofocus="" placeholder=""></div></div><div class="mui-popup-buttons"><span class="mui-popup-button">@btn0@</span><span class="mui-popup-button mui-popup-button-bold">@btn1@</span></div></div><div mui-id="@id@" class="mui-popup-backdrop mui-active" style="display: block;"></div>',
    "toast":'<div mui-id="@id@"  class="mui-toast-container mui-active"><div class="mui-toast-message">@msg@</div></div>',
}
m.btn={
    btn:"确定",
    btn0:"取消",
    btn1:"确定"
}
m.title="提示";
m.time=2000;

/**
 * 产生随机唯一编号
 * @param {number？} len 默认为36位 返回长度
 * @param {number？} binary 默认为16进制 表示产生的进制包含字符
 * @return 默认返回36位随机字符
 */
m.UUID=function (len,binary ){
    len=!len?36:len;
    binary=!binary?16:binary;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * binary | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(binary);
    }).substring(0,len)
}

/**
 * @description 确定信息 ，只用一个确定按钮
 * @method alert
 * @for m
 * @param {string} msg 要显示的信息
 * @param {number?} icon 显示的类型 0-6   0:感叹号   1：对号 2：×号 3：问号 4：锁子 5：生气  6：笑脸
 */
m.alert = function (msg,title, okFn) {
    if(!title){
        title=m.title;
    }
    var id=m.UUID();
    $("body").append(m.template.alert.replace(/@title@|@msg@|@btn@|@id@/g,function(e){
        return e=="@title@"?title:e=="@msg@"?msg:e=="@id@"?id:m.btn.btn;
    })).addClass("mui-ios").addClass("mui-ios-11").addClass("mui-ios-11-0");
    $("body").find(".mui-popup-button").on("click",function(){
          $('[mui-id="'+id+'"]').remove();
    });
}


/**
 * @description 提示信息
 * @method msg
 * @for m
 * @param {string} msg 要显示的信息
 * @param {number?} time 显示时间 毫秒    支持 整数值  默认 2000
 */
m.msg = function (msg, time) {
    var id=m.UUID();
    if(!time){
        time=m.time;
    }
    $("body").append(m.template.toast.replace(/@msg@|@id@/g,function(e){
        return e=="@msg@"?msg:e=="@id@"?id:msg;
    })).addClass("mui-ios").addClass("mui-ios-11").addClass("mui-ios-11-0");
    var index=setTimeout(function(){
        clearInterval(index);
        $('[mui-id="'+id+'"]').fadeOut(700);
        var index2=setTimeout(function(){
            clearInterval(index2);
            $('[mui-id="'+id+'"]').remove();
        },750);
    },parseInt(time))
}

/**
 * @description 询问框
 * @method confirm
 * @for m
 * @param {string} msg :要询问的信息
 * @param {function} okFn :当用户选择确定时的回调方法；当回调函数返回值为 false 时阻止关闭 (默认关闭)
 * @param {function?} cancelFn :当用户选择取消时的回调方法；当回调函数返回值为 false 时阻止关闭 (默认关闭)
 */
m.confirm = function (msg, okFn, cancelFn) {
    var id=m.UUID();
    $("body").append(m.template.confirm.replace(/@title@|@msg@|@btn0@|@btn1@|@id@/g,function(e){
        return e=="@title@"?m.title:e=="@msg@"?msg:e=="@btn0@"?m.btn.btn0:e=="@btn1@"?m.btn.btn1:e=="@id@"?id:m.btn.btn;
    })).addClass("mui-ios").addClass("mui-ios-11").addClass("mui-ios-11-0");
    $("body").find(".mui-popup-button.mui-popup-button-bold").on("click",function(){

        $('[mui-id="'+id+'"]').remove();
        if(typeof okFn=="function"){
            okFn();
        }
    });
    $("body").find(".mui-popup-button:not('.mui-popup-button-bold')").on("click",function(){

        $('[mui-id="'+id+'"]').remove();
        if(typeof cancelFn=="function"){
            cancelFn();
        }
    });
}


/**
 * @description 输入对话框
 * @method open
 * @for lay
 * @param {string} msg :要弹出的url地址 如：http://www.baidu.com
 * @param {string[] ?} size [width,height]:弹出层的大小；不传参数时，默认为[可见区域-200,可见区域-100]
 * @param {string ?} title :弹出窗体的标题
 * @param {function} okFn :当用户选择确定时的回调方法；当回调函数返回值为 false 时阻止关闭 (默认关闭)
 * @param {function?} cancelFn :当用户选择取消时的回调方法；当回调函数返回值为 false 时阻止关闭 (默认关闭)
 */
m.prompt = function (msg,title, okFn, cancelFn) {
    if(typeof title=="function"){
        cancelFn=okFn;
        okFn=title;
        title=m.title;
    }

    var id=m.UUID();
    $("body").append(m.template.prompt.replace(/@title@|@msg@|@btn0@|@btn1@|@id@/g,function(e){
        return e=="@title@"?title:e=="@msg@"?msg:e=="@btn0@"?m.btn.btn0:e=="@btn1@"?m.btn.btn1:e=="@id@"?id:m.btn.btn;
    })).addClass("mui-ios").addClass("mui-ios-11").addClass("mui-ios-11-0");
    $("body").find(".mui-popup-button.mui-popup-button-bold").on("click",function(){
        if(typeof okFn=="function"){
            okFn($('[mui-id="'+id+'"]').find("input[type='text']").val());
        }
        $('[mui-id="'+id+'"]').remove();

    });
    $("body").find(".mui-popup-button:not('.mui-popup-button-bold')").on("click",function(){

        $('[mui-id="'+id+'"]').remove();
        if(typeof cancelFn=="function"){
            cancelFn();
        }
    });
}

//覆盖浏览器默认弹出层方法
window.alert =alert  =   m.alert;
window.confirm =confirm  =  m.confirm;
window.prompt =prompt = m.prompt;

window.msg =msg= m.msg;
window.tips =tips  = m.msg;
window.toast =toast =m.msg;
