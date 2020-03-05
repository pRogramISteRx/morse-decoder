const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};

function decode(expr) {
  let array = [];
  for (let i = 1; i <= expr.length / 10; i++) {
    array.push(expr.substr((i - 1) * 10, 10));
  }

  let output = [];
  let letter = "";

  for (let i = 0; i < array.length; i++) {
    letter = array[i].split("");
    for (let j = 0; j < letter.length; j++) {
      if (letter[j] == "1" && letter[j + 1] == "0") {
        output.push(".");
        j++;
      }
      if (letter[j] == "1" && letter[j + 1] == "1") {
        output.push("-");
        j++;
      }
      if (letter[j] == "*") {
        output.push(" ");
        j += 9;
      }
    }
    output.push(",");
  }

  let arrResult = output.join("").split(",", array.length + 1);
  let message = "";

  for (let i = 0; i < arrResult.length; i++) {
    if (MORSE_TABLE[arrResult[i]]) {
      message += MORSE_TABLE[arrResult[i]];
    }
    if (arrResult[i] == " ") {
      message += " ";
    }
  }
  return message;
}

module.exports = {
  decode
};
