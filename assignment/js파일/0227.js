window.open(
  "0227.html",
  "pop1",
  "width = 400, height = 500, left = 300, top = 50"
);

// -------------------------------------------------------

var addNum = 0;
var subNum = 1000;

var auto_1 = setInterval(function () {
  addNum++;
  document.getElementById("result_1").innerHTML = addNum + addNum;
}, 3000);

var auto_2 = setInterval(function () {
  subNum--;
  document.getElementById("result_2").innerHTML = subNum + subNum;
}, 3000);

// -------------------------------------------------------

var addNum_1 = 0;
var auto = setTimeout(function () {
  addNum_1++;
  document.getElementById("result_3").innerHTML = addNum_1;
}, 3000);

// -------------------------------------------------------

var info = navigator.userAgent.toLowerCase();
var osImg = null;

if (info.indexOf("windows") >= 0) {
  osImg = "windows.png";
} else if (info.indexOf("macintosh") >= 0) {
  osImg = "macintosh.png";
} else if (info.indexOf("iphone") >= 0) {
  osImg = "iphone.png";
} else if (info.indexOf("android") >= 0) {
  osImg = "android.png";
}

document.getElementById("result_4").innerHTML =
  '<img src = "images/' + osImg + '">' + "<br>";

var scr = screen;
var sc_w = scr.width;
var sc_h = scr.height;

document.getElementById("result_4").innerHTML +=
  "모니터 해상도 너비: " + sc_w + "px" + "<br>";
document.getElementById("result_4").innerHTML +=
  "모니터 해상도 높이: " + sc_h + "px" + "<br>";

// -------------------------------------------------------

var phoneNum = "010-9257-7663";
var result1 = phoneNum.substring(phoneNum.length - 4, 0);
document.getElementById("result_5").innerHTML += result1 + "**** <br>";

var imgSrc = "images/bnt_out.jpg";
var result_2 = imgSrc.replace("out.jpg", "over.jpg");
(document.getElementById("result_6").innerHTML += result_2) + "<br>";

// -------------------------------------------------------

var menu = ["짜장면", "돈가스", "된장국", "김치찌개", "회덮밥"];
var menuNum = Math.floor(Math.random() * menu.length);
var m_result = menu[menuNum];
document.getElementById("result_7").innerHTML = m_result + "<br>";
