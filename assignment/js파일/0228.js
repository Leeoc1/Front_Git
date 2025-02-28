// c1
var count = 0;

myFnc_1();

function myFnc_1() {
  count++;
  document.getElementById("result_1").innerHTML += "hello" + count + "<br>";
}

myFnc_1();

var theFnc_1 = function () {
  count++;
  document.getElementById("result_1").innerHTML += "bye" + count + "<br>";
};

theFnc_1();

// c2
var color = ["white", "yellow", "aqua", "purple"];
var i = 0;

function change_Back_Color() {
  i++;
  if (i >= color.length) {
    i = 0;
  }
  document.getElementById("c2").style.backgroundColor = color[i];
}

// c3
function introduce(name, area) {
  document.getElementById("result_2").innerHTML +=
    "제 이름은" +
    name +
    "입니다." +
    "<br> 사는곳은 " +
    area +
    "입니다. <br><br>";
}
introduce("홍당무", "서울");
introduce("깍두기", "부산");

// c4
var user_id = "korea";
var user_pw = "1234";
function login(id, pw) {
  if (id == user_id) {
    if (pw == user_pw) {
      alert("hi " + id);
    } else {
      alert("비밀번호 틀림");
    }
  } else {
    alert("아이디 틀림");
  }
}

function p_login() {
  var input_id = prompt("아이디를 입력하세요", "korea");
  var input_pw = prompt("비밀번호를 입력하세요", "1234");
  login(input_id, input_pw);
}

// c5
function testAvg(arrData) {
  var sum = 0;
  for (var i = 0; i < arrData.length; i++) {
    sum += Number(prompt(arrData[i] + " 점수는?", "0"));
  }
  var avg = sum / arrData.length;
  return avg;
}

function p_Avg() {
  var arrSubj = ["국어", "수학"];
  var result1 = testAvg(arrSubj);

  document.getElementById("result_3").innerHTML =
    "평균점수는 " + result1 + "점<br>";
}

// c6
var num = 1;
function gallery(direct) {
  if (direct) {
    if (num == 8) return;
    num++;
  } else {
    if (num == 1) return;
    num--;
  }
  var imgTag = document
    .getElementById("photo")
    .setAttribute("src", "images/pic_" + num + ".jpg");
}

// c7
var num_1 = 0;
function testFnc() {
  num_1++;
  document.getElementById("result_4").innerHTML += num_1 + "<br>";
  if (num_1 == 10) return;
  testFnc();
}
testFnc();

// c8
(function () {
  var num_2 = 100;
  function menu() {
    num_2 += 100;
    document.getElementById("result_5").innerHTML = num_2;
  }
  menu();
})();

(function () {
  var num_2 = 100;
  function menu() {
    document.getElementById("result_5").innerHTML = num_2;
  }
})();

// c9
function CheckWeight(name1, height1, weight1) {
  this.userName = name1;
  this.userHeight = height1;
  this.userWeight = weight1;
  this.minWeight;
  this.maxWeight;

  this.getInfo = function () {
    var str = "";
    str += "이름: " + this.userName + ", ";
    str += "키: " + this.userHeight + ", ";
    str += "몸무게: " + this.userWeight + "<br>";
    return str;
  };
  this.getResult = function () {
    this.minWeight = (this.userHeight - 100) * 0.9 - 5;
    this.maxWeight = (this.userHeight - 100) * 0.9 + 5;

    if (
      this.userWeight >= this.minWeight &&
      this.userWeight <= this.maxWeight
    ) {
      return "정상 몸무게입니다.";
    } else if (this.userWeight < this.minWeight) {
      return "정상 몸무게보다 미달입니다.";
    } else {
      return "정상 몸무게보다 초과입니다.";
    }
  };
}

var jang = new CheckWeight("장보리", 173, 70);
var park = new CheckWeight("박달재", 180, 88);
console.log(jang);
console.log(park);

document.getElementById("result_6").innerHTML += jang.getInfo();
document.getElementById("result_6").innerHTML += jang.getResult();

// c10
function CheckWeight_1(name, height, weight) {
  this.userName = name;
  this.userHeight = height;
  this.userWeight = weight;
  this.minWeight;
  this.maxWeight;
}
CheckWeight_1.prototype.getInfo = function () {
  var str = "";
  str += "이름: " + this.userName + ", ";
  str += "키: " + this.userHeight + ", ";
  str += "몸무게: " + this.userWeight + "<br>";
  return str;
};
CheckWeight_1.prototype.getResult = function () {
  this.minWeight = (this.userHeight - 100) * 0.9 - 5;
  this.maxWeight = (this.userHeight - 100) * 0.9 + 5;

  if (this.userWeight >= this.minWeight && this.userWeight <= this.maxWeight) {
    return "정상 몸무게입니다";
  } else if (this.userWeight < this.minWeight) {
    return "정상 몸무게보다 미달입니다";
  } else {
    return "정상 몸무게보다 초과입니다";
  }
};
var jang1 = new CheckWeight_1("장보리", 168, 62);
var park1 = new CheckWeight_1("박달재", 180, 88);
console.log(jang1);
console.log(park1);

document.getElementById("result_7").innerHTML += jang1.getInfo();
document.getElementById("result_7").innerHTML += jang1.getResult() + "<br>";

document.getElementById("result_7").innerHTML +=
  jang1.getResult === park1.getResult;
