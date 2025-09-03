// let name1 = /\/[^/]+\.[^/.]+($|#)/.exec(location.href);
// if (name1 == null) {
//     name1 = ["/index."]
// }
// document.write(`<script src="${name1[0].slice(1, name1[0].indexOf("."))}.js"></sc` + "ript>");

//设置自定义过期时间cookie
// function setCookie1(name, value, time) {
//     var msec = getMsec(time); //获取毫秒
//     var exp = new Date();
//     exp.setTime(exp.getTime() + msec * 1);
//     document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
// }

//将字符串时间转换为毫秒,1秒=1000毫秒
// function getMsec(str) {
//     var timeNum = str.toString().substring(0, str.length - 1) * 1; //时间数量
//     var timeStr = str.toString().substring(str.length - 1, str.length); //时间单位后缀，如h表示小时
//     if (timeStr == "s") { //20s表示20秒
//         return timeNum * 1000;
//     } else if (timeStr == "h") { //12h表示12小时
//         return timeNum * 60 * 60 * 1000;
//     } else if (timeStr == "d") {
//         return timeNum * 24 * 60 * 60 * 1000;
//     } //30d表示30天
// }

//读取cookies
// function getCookie(name) {
//     var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)"); //正则匹配
//     if (arr = document.cookie.match(reg)) {
//         console.info(unescape(arr[2]))
//         return true;
//     } else {
//         return false;
//     }
// }