function updateWindowSize() {
  document.getElementById("demo1").innerHTML =
    "Browser inner window width: " +
    window.innerWidth +
    "px<br>" +
    "Browser inner window height: " +
    window.innerHeight +
    "px";
}
updateWindowSize();
window.addEventListener("resize", updateWindowSize);

//----------------------------------------

document.getElementById("demo2").innerHTML =
  "Screen width is " +
  screen.width +
  "<br>" +
  "Screen height is " +
  screen.height +
  "<br>" +
  "<br>" +
  "Available screen width is " +
  screen.availWidth +
  "<br>" +
  "Available screen height is " +
  screen.availHeight +
  "<br>" +
  "<br>" +
  "Screen color depth is " +
  screen.colorDepth +
  "<br>" +
  "Screen pixel depth is " +
  screen.pixelDepth;
