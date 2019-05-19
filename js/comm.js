/*封装的公用函数—开始*/
function $(id) {
    return document.getElementById(id);
}
function getTagByClassName(sClassName) {
    if (document.getElementsByClassName) {
        return document.getElementsByClassName(sClassName);
    }
    else
    {
        var allTags=document.getElementsByTagName("*");
        var tag=[];
        for (var i = 0; i < allTag.length; i++) {
            if (allTags[i].className==sClassName) {
                tag.push(allTags[i]);
            }
        }
        return tag;
    }
}
/*封装的公用函数—完毕*/

//增加或修改cookie
function setCookie(name,value,days,path){
    days=days||0;
    path=path||'/';
    var oDate=new Date();
    oDate.setDate(oDate.getDate()+days);
    document.cookie = name + '=' + encodeURIComponent(value) + ';expires=' + oDate +';path=' + path;
}
// 获取cookie
function getCookie(name) {
    var aCookie = document.cookie.split('; ');
    for(var i = 0; i < aCookie.length; i++) {
        var temp = aCookie[i].split('=');

        if(temp[0] === name) {
            return decodeURIComponent(temp[1]);
        }
    }
}

