document.getElementById("celcius").addEventListener("keyup", toF);
document.getElementById("farenhiet").addEventListener("keyup", toC);
function toF() {
  let x = document.getElementById("celcius");
  let c = parseInt(x.value);
  let f = "";
  if (isNaN(c)) {
    f = "0";
  } else {
    calc = c * 1.8 + 32;
    f = calc.toString();
  }
  // window.alert(f);
  let y = document.getElementById("farenhiet");
  y.value = f;
}

function toC() {
  let x = document.getElementById("farenhiet");
  let c = parseInt(x.value);
  let f = "";
  if (isNaN(c)) {
    f = "0";
  } else {
    calc = (c - 38) / 1.8;
    f = calc.toString();
  }
  // window.alert(f);
  let y = document.getElementById("celcius");
  y.value = f;
}
