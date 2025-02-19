// 예제 1
function validateForm() {
  let x1 = document.forms["myForm"]["fname"].value;
  if (x1 == "") {
    alert("이름을 입력해주세요");
    return false;
  }
}
// 예제2
function myFunction() {
  let x2 = document.getElementById("numb").value;
  let text;
  if (isNaN(x2) || x2 < 1 || x2 > 10) {
    text = "유효하지 않은 입력입니다.";
  } else {
    text = "통과";
  }
  document.getElementById("demo1").innerHTML = text;
}
// 예제5
function changeText(id) {
  id.innerHTML = "지리노!";
}
// 예제 6
function displayDate() {
  document.getElementById("demo2").innerHTML = Date();
}
// 예제 7
document.getElementById("myBtn").onclick = displayDate2;

function displayDate2() {
  document.getElementById("demo3").innerHTML = Date();
}
// 예제 8
function checkCookies() {
  let text2 = "";
  if (navigator.cookieEnabled == true) {
    text2 = "Cookies are enabled.";
  } else {
    text2 = "Cookies are not enabled.";
  }

  document.getElementById("demo4").innerHTML = text2;
}
// 예제 9
function upperCase() {
  const x3 = document.getElementById("fname1");
  x3.value = x3.value.toUpperCase();
}
// 예제 10
function upperCase2() {
  const x3 = document.getElementById("fname2");
  x3.value = x3.value.toUpperCase();
}
// 예제 11
function mOver(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "?";
}

function mOut(obj) {
  obj.style.backgroundColor = "#D94A38";
  obj.innerHTML = "ㅎㅇ";
}
// 예제 12
function mDown(obj) {
  obj.style.backgroundColor = "#1ec5e5";
  obj.innerHTML = "?";
}

function mUp(obj) {
  obj.style.backgroundColor = "#D94A38";
  obj.innerHTML = "ㅎㅇ";
}
