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

const lastDate = new Date(nowYear, 12, 31);
