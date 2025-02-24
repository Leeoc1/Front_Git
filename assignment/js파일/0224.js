var arr = [30, "따르릉", true];

let content_1 = "<h3>배열값 가져오기 1</h3>";
content_1 += arr[0] + "<br>";
content_1 += arr[1] + "<br>";
content_1 += arr[2] + "<br>";
document.getElementById("c1").innerHTML += content_1;

let content_2 = "<h3>배열값 가져오기 2</h3>";
for (var i = 0; i < arr.length; i++) {
  content_2 += arr[i] + "<br>";
}
document.getElementById("c1").innerHTML += content_2;

let content_3 = "<h3>배열값 가져오기 3</h3>";
for (i in arr) {
  content_3 += arr[i] + "<br>";
}
document.getElementById("c1").innerHTML += content_3;

// -------------------------------------------------------

var arr_1 = ["사당", "교대", "방배", "강남"];
var arr_2 = ["신사", "압구정", "옥수"];

var result = arr_1.join("-");
document.getElementById("c2").innerHTML += result + "<br>";

result = arr_1.concat(arr_2);
document.getElementById("c2").innerHTML += result + "<br>";

result = arr_1.slice(1, 3);
document.getElementById("c2").innerHTML += result + "<br>";

arr_1.sort();
document.getElementById("c2").innerHTML += arr_1 + "<br>";

arr_2.reverse();
document.getElementById("c2").innerHTML += arr_2 + "<br>";

// ----------------------------------------------------------------------

var greenArr = ["교대", "방배", "강남"];
var yellowArr = ["미금", "정자", "수서"];

greenArr.splice(2, 1, "서초", "역삼");
document.getElementById("c3").innerHTML += greenArr + "<br>";

var data1 = yellowArr.pop();
var data2 = yellowArr.shift();

document.getElementById("c3").innerHTML += yellowArr + "<br>";

yellowArr.push(data2);
document.getElementById("c3").innerHTML += yellowArr + "<br>";

yellowArr.unshift(data1);
document.getElementById("c3").innerHTML += yellowArr + "<br>";

// -----------------------------------------------------------------

var t = "Hello Thank you good luck to you";
document.getElementById("c4").innerHTML += t.charAt(16) + "<br>";

document.getElementById("c4").innerHTML += t.indexOf("you") + "<br>";
document.getElementById("c4").innerHTML += t.indexOf("you", 16) + "<br>";

document.getElementById("c4").innerHTML += t.lastIndexOf("you") + "<br>";
document.getElementById("c4").innerHTML += t.lastIndexOf("you", 25) + "<br>";

document.getElementById("c4").innerHTML += t.match("luck") + "<br>";

document.getElementById("c4").innerHTML += t.search("you") + "<br>";

document.getElementById("c4").innerHTML += t.substr(21, 4) + "<br>";
document.getElementById("c4").innerHTML += t.substring(6, 12) + "<br>";

document.getElementById("c4").innerHTML += t.replace("you", "me") + "<br>";

document.getElementById("c4").innerHTML += t.toLowerCase() + "<br>";
document.getElementById("c4").innerHTML += t.toUpperCase() + "<br>";

document.getElementById("c4").innerHTML += t.length + "<br>";

var s = t.split(" ");

document.getElementById("c4").innerHTML += s + "<br>";

document.getElementById("c4").innerHTML += s[0] + "<br>";
document.getElementById("c4").innerHTML += s[4] + "<br>";

var str = "A";
var t = str.charCodeAt(0);

document.getElementById("c4").innerHTML += t + "<br>";
document.getElementById("c4").innerHTML += String.fromCharCode(65) + "<br>";

// --------------------------------------------------------------------------------------

function showUpName() {
  var userName = prompt("당신의 영문 이름은?", "harry potter");
  var upperName = userName.toUpperCase();
  document.getElementById("demo1").innerHTML = upperName + "<br>";
}

function showPHNum() {
  var userNum = prompt("당신의 핸드폰 번호는?", "01092577663");
  var resNum = userNum.substring(0, userNum.length - 4) + "****";
  document.getElementById("demo2").innerHTML = resNum + "<br>";
}
