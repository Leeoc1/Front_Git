var SiteSelect = document.querySelector(".site");
SiteSelect.addEventListener("change", function () {
  var site = SiteSelect.value;
  var url;

  switch (site) {
    case "구글":
      url = "www.google.com";
      break;
    case "네이버":
      url = "www.naver.com";
      break;
    case "다음":
      url = "www.daum.net";
      break;
    case "유튜브":
      url = "www.youtube.com";
      break;
  }
  if (url) {
    window.open("http://" + url, "_blank");
  }
});

var i = 1;
while (i <= 10) {
  document.querySelector(".s1").innerHTML += `안녕하세요${i}<br>`;
  i++;
}
document.querySelector(".s1").innerHTML += "==========end==========";

var i2 = 1;
while (i2 <= 30) {
  if (i2 % 2 == 0 && i2 % 6 == 0) {
    document.querySelector(".s2").innerHTML += i2 + "<br>";
  }
  i2++;
}

var i3 = 20;
while (i3 >= 10) {
  if (i3 % 2 == 0) {
    document.querySelector(".s4").innerHTML +=
      "<span class='blue'>" + i3 + "</span><br>";
  } else {
    document.querySelector(".s4").innerHTML +=
      "<span class='red'>" + i3 + "</span><br>";
  }
  i3--;
}

var i4 = 10;
do {
  document.querySelector(".s5").innerHTML += "hello";
} while (i4 < 3);

for (var i5 = 1; i5 <= 10; i5++) {
  document.querySelector("#s6").innerHTML += "반복" + i5 + "<br>";
}

for (var i6 = 1; i6 <= 100; i6++) {
  if (i6 % 5 == 0 && i6 % 7 != 0) {
    document.querySelector("#s7").innerHTML +=
      "<span class='red'>" + i6 + "</span><br>";
  } else if (i6 % 5 != 0 && i6 % 7 == 0) {
    document.querySelector("#s7").innerHTML +=
      "<span class='green'>" + i6 + "</span><br>";
  } else if (i6 % 5 == 0 && i6 % 7 == 0) {
    document.querySelector("#s7").innerHTML +=
      "<span class='aqua'>" + i6 + "</span><br>";
  }
}

for (var i7 = 1; i7 <= 10; i7++) {
  if (i7 == 6) break;
  document.querySelector("#s8").innerHTML += i7 + "<br>";
}
document.querySelector("#s8").innerHTML += "====end====" + "<br>";

for (let i8 = 1; i8 <= 10; i8++) {
  if (i8 % 2 == 0) continue;
  document.querySelector("#s9").innerHTML += i8 + "<br>";
}
document.querySelector("#s9").innerHTML += "====end====" + "<br>";

for (let q = 1; q <= 3; q++) {
  for (let w = 1; w <= 2; w++) {
    document.querySelector("#s10").innerHTML += q + "행" + w + "열" + "<br>";
  }
  document.querySelector("#s10").innerHTML += "<br>";
}

let x5 = 1;
while (x5 <= 9) {
  document.querySelector("#q1").innerHTML +=
    "5 x " + x5 + "= " + x5 * 5 + "<br>";
  x5++;
}

var num = 1;
var t = "<table border='1'>";
for (var z = 1; z <= 5; z++) {
  t += "<tr>";
  for (var k = 1; k <= 5; k++) {
    t += "<td>" + num + "</td>";
    num++;
  }
  t += "</tr>";
}
t += "</table>";

document.getElementById("q2").innerHTML = t;
