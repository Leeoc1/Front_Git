function nowDate_1() {
  document.getElementById("result_2").innerHTML = Date();
}

document.getElementById("myDate").addEventListener("click", nowDate_2);

function nowDate_2() {
  document.getElementById("result_3").innerHTML = Date();
}

document.getElementById("result_4").addEventListener("click", function () {
  alert("Hello World");
});

document.getElementById("result_5").addEventListener("click", hello);

function hello() {
  alert("Hello World");
}

const x = document.getElementById("result_6");

x.addEventListener("click", alr_1);
x.addEventListener("click", alr_2);

function alr_1() {
  alert("하이1");
}
function alr_2() {
  alert("하이2");
}

const x1 = document.getElementById("mouse");
const x2 = document.getElementById("result_7");

x1.addEventListener("mouseover", m_over);
x1.addEventListener("mouseout", m_out);
x1.addEventListener("click", m_click);

function m_over() {
  x2.innerHTML = "마우스 올림";
}
function m_out() {
  x2.innerHTML = "마우스 나감";
}
function m_click() {
  x2.innerHTML = "마우스 클릭함";
}

window.addEventListener("resize", function () {
  document.getElementById("result_8").innerHTML =
    "가로: " + window.innerWidth + "px " + "세로: " + window.innerHeight + "px";
});

const c1 = 5;
const c2 = 7;

document.getElementById("multip").addEventListener("click", function () {
  myCal(c1, c2);
});

function myCal(a, b) {
  document.getElementById("result_9").innerHTML = a * b;
}

document.getElementById("myDiv1").addEventListener("click", function () {
  alert("오렌지");
});
document.getElementById("myP1").addEventListener("click", function () {
  alert("화이트");
});

document.getElementById("myDiv2").addEventListener(
  "click",
  function () {
    alert("오렌지");
  },
  true
);
document.getElementById("myP2").addEventListener(
  "click",
  function () {
    alert("화이트");
  },
  true
);

document.getElementById("myDIV").addEventListener("mousemove", rand);

function rand() {
  document.getElementById("result_10").innerHTML = Math.random();
}

function removeHandler() {
  document.getElementById("myDIV").removeEventListener("mousemove", rand);
}
