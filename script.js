// Your Script here.
const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  encodedStr = encodedStr.toUpperCase();
  let output = "";
  for (let i = 0; i < encodedStr.length; i++) {
    if (lookup[encodedStr[i]]) {
      output += lookup[encodedStr[i]];
    } else {
      output += encodedStr[i];
    }
  }
  return output;
}

// You can test your code by running the above function and printing it to the console by pressing the run button. For example:
// console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;

