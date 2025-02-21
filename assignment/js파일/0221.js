//-------------------c1--------------------

function updateWindowSize() {
  document.getElementById("demo1").innerHTML =
    "Browser inner window width: " +
    window.innerWidth +
    "px<br>" +
    "Browser inner window height: " +
    window.innerHeight +
    "px";
}
updateWindowSize();
window.addEventListener("resize", updateWindowSize);

//-------------------c2--------------------

document.getElementById("demo2").innerHTML =
  "Screen width is " +
  screen.width +
  "<br>" +
  "Screen height is " +
  screen.height +
  "<br>" +
  "<br>" +
  "Available screen width is " +
  screen.availWidth +
  "<br>" +
  "Available screen height is " +
  screen.availHeight +
  "<br>" +
  "<br>" +
  "Screen color depth is " +
  screen.colorDepth +
  "<br>" +
  "Screen pixel depth is " +
  screen.pixelDepth;

//-------------------c3--------------------

document.getElementById("demo3").innerHTML =
  "The full URL of this page is:<br>" + window.location.href;

//-------------------c4--------------------

document.getElementById("demo4").innerHTML =
  "Page hostname is: " + window.location.hostname;

//-------------------c5--------------------

document.getElementById("demo5").innerHTML =
  "Page path is: " + window.location.pathname;

//-------------------c6--------------------

document.getElementById("demo6").innerHTML =
  "The page protocol is: " + window.location.protocol;

//-------------------c7--------------------

document.getElementById("demo7").innerHTML =
  "The URL port number of the current page is: " + window.location.port;

//-------------------c8--------------------

function newDoc() {
  location.assign("https://www.w3schools.com");
}

//-------------------c9--------------------

function goBack() {
  window.history.back();
}

//-------------------c10--------------------

function goForward() {
  window.history.forward();
}
//-------------------c11--------------------

document.getElementById("demo8").innerHTML =
  "navigator.cookieEnabled is " + navigator.cookieEnabled;

//-------------------c12--------------------

document.getElementById("demo9").innerHTML =
  "navigator.appName is " + navigator.appName;

//-------------------c12--------------------

document.getElementById("demo10").innerHTML =
  "navigator.appCodeName is " + navigator.appCodeName;

//-------------------c13--------------------

document.getElementById("demo11").innerHTML =
  "navigator.product is " + navigator.product;

//-------------------c14--------------------

document.getElementById("demo12").innerHTML = navigator.appVersion;

//-------------------c14--------------------

document.getElementById("demo13").innerHTML = navigator.userAgent;

//-------------------c15--------------------

document.getElementById("demo14").innerHTML =
  "navigator.platform is " + navigator.platform;

//-------------------c16--------------------

document.getElementById("demo15").innerHTML =
  "navigator.language is " + navigator.language;

//-------------------c17--------------------

document.getElementById("demo16").innerHTML =
  "navigator.onLine is " + navigator.onLine;

//-------------------c18--------------------

document.getElementById("demo17").innerHTML =
  "javaEnabled is " + navigator.javaEnabled();

//-------------------c19--------------------

function prompt_1() {
  let input_N = prompt("이름입력", "해리포터");
  if (input_N == null || input_N == "") {
    alert("유저캔슬");
  } else {
    alert("Hello " + input_N + "님");
  }
}

//-------------------c23--------------------

function timeout() {
  alert("꽝");
}

//-------------------c24--------------------

let set_T = null;
let isRunning = false;

function timer() {
  const my_date = new Date();

  document.getElementById("demo18").innerHTML = my_date.toLocaleTimeString();
}

set_T = setInterval(timer, 1000);
isRunning = true;

function toggle_T() {
  if (isRunning) {
    clearInterval(set_T);
    isRunning = false;
  } else {
    set_T = setInterval(timer, 1000);
    isRunning = true;
  }
}

const d = document;
const c25 = document.querySelector("#c25 .result");
// 쿠키생성 확인
d.cookie = "이름 = 채혁";
d.cookie = "수업 = 자바 풀스택";
d.cookie = "cookieName = cookieValue";
c25.innerHTML = `${d.cookie} <hr>`;

// 쿠키들을 가져와서 출력
var str = d.cookie.split(";");
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
  c25.innerHTML += `${str[i]} <br>`;
}
