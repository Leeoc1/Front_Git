document.getElementById("id02").innerHTML =
  document.getElementById("id01").innerHTML;

document.getElementById("id04").innerHTML =
  document.getElementById("id03").firstChild.nodeValue;

document.getElementById("id06").innerHTML =
  document.getElementById("id05").childNodes[0].nodeValue;

document.getElementById("demo").innerHTML =
  document.querySelector("#s4").innerHTML;

document.getElementById("id08").innerHTML =
  document.getElementById("id07").nodeName;

document.getElementById("id10").innerHTML =
  document.getElementById("id09").nodeType;

const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);
const element = document.getElementById("div1");
element.appendChild(para);

// ===================================

const para1 = document.createElement("p");
const node1 = document.createTextNode("This is new.");
para1.appendChild(node1);

const element1 = document.getElementById("div2");
const child1 = document.getElementById("p3");
element1.insertBefore(para1, child1);

function myFunction2() {
  document.getElementById("p5").remove();
}

const parent = document.getElementById("div3");
const child = document.getElementById("p7");
parent.removeChild(child);

const parent3 = document.getElementById("div4");
const child3 = document.getElementById("p9");
const para3 = document.createElement("p");
const node3 = document.createTextNode("This is new.");
para3.appendChild(node3);
parent3.replaceChild(para3, child3);

const myId = document.querySelector("#s12");
const myP = myId.getElementsByTagName("p");

document.getElementById("ca").innerHTML =
  "The innerHTML of the second paragraph is: " + myP[1].innerHTML;

const myId2 = document.querySelector("#s13");
const myP2 = myId2.getElementsByTagName("p");

document.getElementById("ca2").innerHTML =
  "This document contains " + myP2.length + " paragraphs.";

function myFunction() {
  const myId3 = document.querySelector("#s14");
  const myPColor = myId3.getElementsByTagName("p");
  for (let i = 0; i < myPColor.length; i++) {
    myPColor[i].style.color = "red";
  }
}

const myId4 = document.querySelector("#s15");
const myP4 = myId4.querySelectorAll("p");

document.getElementById("ca3").innerHTML =
  "The innerHTML of the second paragraph is: " + myP4[1].innerHTML;

const myId5 = document.querySelector("#s16");
const myP5 = myId5.querySelectorAll("p");

document.getElementById("ca4").innerHTML =
  "This document contains " + myP5.length + " paragraphs.";

function myFunction1() {
  const myId6 = document.querySelector("#s17");
  const myNodelist = myId6.querySelectorAll("p");
  for (let i = 0; i < myNodelist.length; i++) {
    myNodelist[i].style.color = "red";
  }
}
