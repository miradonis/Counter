let count = 0;

function plusOne() {
  count += 1;
  document.getElementById("display").innerHTML = count;
}

function minusOne() {
  count -= 1;
  document.getElementById("display").innerHTML = count;
}

function plusTen() {
  count += 10;
  document.getElementById("display").innerHTML = count;
}

function minusTen() {
  count -= 10;
  document.getElementById("display").innerHTML = count;
}

function plusHundred() {
  count += 100;
  document.getElementById("display").innerHTML = count;
}

function minusHundred() {
  count -= 100;
  document.getElementById("display").innerHTML = count;
}

function reset() {
  count = count * 0;
  document.getElementById("display").innerHTML = 0;
}

function multiply() {
  count *= 2;
  document.getElementById("display").innerHTML = count;
}
