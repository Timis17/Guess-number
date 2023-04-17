let randomNumber = Math.floor(Math.random() * 20) + 1;
let attempts = 5;
let score = 0;

function guessNumber() {
  let guess = parseInt(document.getElementById("guessInput").value);

  if (guess === randomNumber) {
    
    score = attempts === 5 ? 100 : 20;
    document.getElementById("result").innerHTML =
      "Svaka cast pogodili ste broj iz " +
      (5 - attempts + 1) +
      " pokusaja. vasi poeni su " +
      score +
      ".";

    attempts = 5;
    score = 0;
    randomNumber = Math.floor(Math.random() * 20) + 1;
  } else {

    attempts--;


    if (attempts === 0) {
      document.getElementById("result").innerHTML =
        "Izivinite ostali ste bez pokusaja broj je bio " +
        randomNumber +
        " pokusajte ponovo";


      attempts = 5;
      score = 0;
      randomNumber = Math.floor(Math.random() * 20) + 1;
    } else {

      let hint = guess > randomNumber ? "manji" : "veci";
      document.getElementById("result").innerHTML =
        "Izvinite to je pogresan broj, broj je " +
        hint +
        " sledeci put imate " +
        attempts +
        " pokusaja.";
    }
  }

  document.getElementById("guessInput").value = "";
}
