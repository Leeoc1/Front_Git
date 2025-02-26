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

// ------------------------------------------------------------------

function mail_check() {
  var userEmail = prompt("당신의 이메일 주소는?", "lch5752@gmail.com");
  var arrUrl = [".co.kr", ".com", ".net", ".or.kr", ".go.kr"];

  var check1 = false;
  var check2 = false;

  if (userEmail.indexOf("@") > 0) {
    check1 = true;
  }

  for (var i = 0; i < arrUrl.length; i++) {
    if (userEmail.indexOf(arrUrl[i]) > 0) {
      check2 = true;
    }
  }

  if (check1 && check2) {
    document.getElementById("result_1").innerHTML = userEmail;
  } else {
    document.getElementById("result_1").innerHTML = "이메일 형식이 잘못됨";
  }
}

// ------------------------------------------------------------------

const contry = ["영어", "중국어"];
const subjects = ["쓰기", "말하기"];
const s_map = new Map();

function n_score() {
  for (let i = 0; i < contry.length; i++) {
    s_map.set(contry[i], []);
    for (let k = 0; k < subjects.length; k++) {
      s_map
        .get(contry[i])
        .push(prompt(`${contry[i]}의 ${subjects[k]} 점수는?`));
    }
  }
  document.getElementById("result_2").innerHTML = `
  영어: ${s_map.get("영어")}<br>
  중국어: ${s_map.get("중국어")}`;
}

// ------------------------------------------------------------------

const users = {
  userA: [50, 60, 100],
  userB: [80, 90, 70],
  userC: [75, 80, 90],
};
const { userA, userB } = users;
const arr_3 = [...userA, ...userB];
let sum = 0;
for (let u = 0; u < arr_3.length; u++) {
  sum += arr_3[u];
}
document.getElementById(
  "result_3"
).innerHTML = `userA와 userB의 점수 합계는 ${sum}점`;

// ------------------------------------------------------------------

const arr1 = [10, 20, 30];
const arr2 = arr1.map((item) => item / 10);

const arr3 = ["홍길동", "김갑중", "박상무"];
const arr4 = arr3.map((item, index) => {
  let obj = {};
  obj["no"] = index + 1; // idx 대신 index 사용
  obj["userName1"] = item;
  return obj;
});

// 배열을 보기 좋게 출력하기 위해 문자열로 변환
document.getElementById("result_4").innerHTML = `${arr2.join(", ")}<br>${arr4
  .map((obj) => `no: ${obj.no}, 이름: ${obj.userName1}`)
  .join("<br>")}`;

// ------------------------------------------------------------------

function checkScores() {
  const subjects = ["쓰기", "듣기", "말하기"];
  const arr1 = subjects.map((item) => {
    return prompt(`${item}의 점수는?`, "0");
  });

  let result = arr1.some((item) => item < 60);
  result = result ? "불합격" : "합격";

  document.getElementById("result_5").innerHTML = result;
}

// ------------------------------------------------------------------

function checkScores1() {
  const subjects = ["쓰기", "듣기", "말하기"];
  const arr1 = subjects.map((item) => {
    const score = prompt(`${item}의 점수는?`, "0");
    return score !== null ? Number(score) : 0; // 숫자 변환 및 취소 처리
  });

  let result = arr1.every((item) => item >= 60);
  result = result ? "합격" : "불합격";

  document.getElementById("result_6").innerHTML = result;
}

// ------------------------------------------------------------------

const fruit_1 = ["딸기", "바나나", "파인애플"];
const fruit_2 = ["바나나", "딸기", "오렌지", "키위"];
let fruit_3 = [];

fruit_3 = [...fruit_1];
fruit_2.map((item) => {
  if (!fruit_3.includes(item)) {
    fruit_3.push(item);
  }
});

document.getElementById("result_7").innerHTML = fruit_3.join(", ");

// ------------------------------------------------------------------

function checkScores2() {
  const subjects = ["쓰기", "듣기", "말하기"];
  const arr1 = [];
  for (let item of subjects) {
    const score = prompt(`${item}의 점수는?`, "0");
    arr1.push(score !== null ? Number(score) : 0); // 숫자 변환 및 취소 처리
  }

  let result = arr1.every((item) => item >= 60);
  result = result ? "합격" : "불합격";

  document.getElementById("result_8").innerHTML = result;
}
