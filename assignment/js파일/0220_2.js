for (let x = 2; x < 10; x++) {
  for (let z = 1; z < 10; z++) {
    document.querySelector("#q1").innerHTML +=
      x + " x " + z + "= " + x * z + "<br>";
  }
  document.querySelector("#q1").innerHTML += "<br>";
}

for (let x = 2; x < 10; x++) {
  for (let z = 1; z < 10; z++) {
    if (x == 5 && z == 3) {
      continue;
    }
    document.querySelector("#q2").innerHTML +=
      x + " x " + z + "= " + x * z + "<br>";
    if (x == 4 && z == 3) {
      break;
    }
  }
  document.querySelector("#q2").innerHTML += "<br>";
}
