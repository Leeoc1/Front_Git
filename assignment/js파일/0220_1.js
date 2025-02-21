// --------------------s1------------------------

const tv = new Object();
tv.color = "white";
tv.price = 300000;
tv.info = function () {
  return `tv 색상: ${this.color}<br>tv 가격: ${this.price}<br>`;
};
const car = {
  color: "black",
  price: 50000000,
  info() {
    return `car 색상: ${this.color}<br>car 가격: ${this.price}<br>`;
  },
};

const s1 = document.getElementById("s1");
s1.innerHTML += `<h1>tv 객체 메서드 호출</h1>${tv.info()}`;
s1.innerHTML += `<h1>car 객체 메서드 호출</h1>${car.info()}`;

// --------------------s2------------------------

const today = new Date();
const nowYear = today.getFullYear(),
  nowMonth = today.getMonth(),
  nowDate = today.getDate(),
  nowDayIndex = today.getDay(),
  changeKor = ["일", "월", "화", "수", "목", "금", "토"];
dayInKor = changeKor[nowDayIndex];

const s2 = document.getElementById("s2");
s2.innerHTML += `<h1>오늘 날짜 정보</h1>
 ${nowYear}년 ${nowMonth + 1}월 ${nowDate}일 ${dayInKor}요일`;

const worldcup = new Date(2002, 4, 31);
const cupYear = worldcup.getFullYear(),
  cupMonth = worldcup.getMonth(),
  cupDate = worldcup.getDate(),
  cupDay = worldcup.getDay(),
  cupDayInKor = changeKor[cupDay];

s2.innerHTML += `<h1>2002월드컵 날짜 정보</h1>
${cupYear}년 ${cupMonth}월 ${cupDate}일 ${cupDayInKor}요일`;

// --------------------s3------------------------

const lastDate = new Date(nowYear, 11, 31);
const diffDate = lastDate.getTime() - today.getTime();

const remaining_days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
document.getElementById(
  "s3"
).innerHTML += `<h1>연말까지 남은 일수</h1>연말까지 ${remaining_days}일 남았습니다.`;

// --------------------s4------------------------

const ex_num = 2.1234;
const max = Math.max(10, 5, 8, 30),
  min = Math.min(10, 5, 8, 30),
  round = Math.round(ex_num),
  floor = Math.floor(ex_num),
  ceil = Math.ceil(ex_num),
  rand = Math.random(),
  pi = Math.PI;

document.getElementById(
  "s4"
).innerHTML += `<h1>수학 객체</h1> max값 = ${max}<br>
min값 = ${min}<br>
round값 = ${round}<br>
floor값 = ${floor}<br>
ceil값 = ${ceil}<br>
random값 = ${rand}<br>
PI값 = ${pi}<br>`;

// --------------------s5------------------------

function playGame() {
  const game = document.getElementById("userChoice").value;
  let gameNum;

  // 사용자의 선택을 숫자로 변환
  switch (game) {
    case "가위":
      gameNum = 1;
      break;
    case "바위":
      gameNum = 2;
      break;
    case "보":
      gameNum = 3;
      break;
  }

  // 컴퓨터의 선택을 숫자로 설정
  const com = Math.ceil(Math.random() * 3);
  const resultDiv = document.getElementById("result");

  // 결과 초기화
  resultDiv.innerHTML = "";

  // 사용자와 컴퓨터의 선택을 이미지로 표시
  resultDiv.innerHTML += `<p>나:</p><img src="./images/math_img_${gameNum}.jpg" alt="사용자 선택">`;
  resultDiv.innerHTML += `<p>컴퓨터:</p><img src="./images/math_img_${com}.jpg" alt="컴퓨터 선택">`;

  // 결과 판단 및 메세지 출력
  if (gameNum == com) {
    resultDiv.innerHTML += "<p>무승부</p>";
  } else {
    let result;
    if (
      (gameNum === 1 && com === 3) ||
      (gameNum === 2 && com === 1) ||
      (gameNum === 3 && com === 2)
    ) {
      result = "승리!";
    } else {
      result = "패배...";
    }
    resultDiv.innerHTML += `<p>${result}</p>`;
  }
}
