const element = document.getElementById("intro");
document.getElementById("demo").innerHTML =
  "The text from the intro paragraph is: " + element.innerHTML;

const d1 = document.getElementById("q2");
const element1 = d1.getElementsByTagName("p");
document.getElementById("demo1").innerHTML =
  "The text in first paragraph (index 0) is: " + element1[0].innerHTML;

const d2 = document.getElementById("q3");
const element2 = d2.getElementsByTagName("p");
document.getElementById("demo3").innerHTML =
  'The first paragraph (index 0) inside "main" is: ' + element2[0].innerHTML;

const d3 = document.getElementById("q4").getElementsByClassName("intro");
document.getElementById("demo4").innerHTML =
  'The first paragraph (index 0) with class="intro" is: ' + d3[0].innerHTML;

const d4 = document.getElementById("q5").querySelectorAll("p.intro");
document.getElementById("demo5").innerHTML =
  'The first paragraph (index 0) with class="intro" is: ' + d4[0].innerHTML;

const d5 = document.forms["frm1"];
let text = "";
for (let i = 0; i < d5.length; i++) {
  text += d5.elements[i].value + "<br>";
}
document.getElementById("demo6").innerHTML = text;

document.getElementById("p1").innerHTML = "New text!";

document.getElementById("id01").innerHTML = "New Heading";

document.getElementById("image").src =
  "https://www.w3schools.com/js/landscape.jpg";

document.getElementById("demo7").innerHTML = "Date: " + Date();
