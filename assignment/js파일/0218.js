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
var outputDiv = document.querySelector(".wh");
while (i <= 10) {
  outputDiv.innerHTML += `안녕하세요${i}<br>`;
  i++;
}
outputDiv.innerHTML += "==========end==========";
