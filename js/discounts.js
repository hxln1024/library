
function run() {
    var proggress = document.getElementsByClassName("proggress")[0];
    var percentCount = document.getElementsByClassName("percentCount")[0];
   
    proggress.style.width =parseInt(proggress.style.width) + 1 + "%";

    if (proggress.style.width == percentCount.innerHTML) {
        window.clearTimeout(timeout);
        return;
    }
    var timeout = window.setTimeout("run()", 16.67);
}
window.onload = function () {
    run();
}
