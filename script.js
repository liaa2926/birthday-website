/* =========================
   PIN
========================= */

const correctPin = "280809";

let pin = "";

function addNumber(number) {
  if (pin.length >= 6) {
    return;
  }

  pin += number;

  document.getElementById("pinDisplay").value = "*".repeat(pin.length);
}

function clearPin() {
  pin = "";

  document.getElementById("pinDisplay").value = "";

  document.getElementById("pinMessage").textContent = "";
}

function checkPin() {
  const message = document.getElementById("pinMessage");

  if (pin === correctPin) {
    message.textContent = "Correct! 💜";

    setTimeout(() => {
      document.getElementById("pinPage").classList.remove("active");

      document.getElementById("cakePage").classList.add("active");
    }, 700);
  } else {
    message.textContent = "Oops! Wrong code 😭";

    pin = "";

    document.getElementById("pinDisplay").value = "";
  }
}

/* =========================
   CAKE / CANDLE
========================= */

let candleClicks = 0;

function blowCandle() {
  candleClicks++;

  document.getElementById("tapCounter").textContent = candleClicks + " / 3";

  if (candleClicks === 1) {
    document.getElementById("candleText").textContent = "Keep going... ✨";
  }

  if (candleClicks === 2) {
    document.getElementById("candleText").textContent = "One more time! 💨";
  }

  if (candleClicks === 3) {
    /* API MATI */

    document.getElementById("flame").classList.add("off");

    /* TEKS */

    document.getElementById("candleText").textContent =
      "You blew out the candle! 💜";

    /* KUE HILANG */

    setTimeout(() => {
      const cake = document.querySelector(".cake-container");

      cake.classList.add("disappear");
    }, 800);

    /* PINDAH KE SURAT */

    setTimeout(() => {
      document.getElementById("cakePage").classList.remove("active");

      document.getElementById("letterPage").classList.add("active");
    }, 1800);
  }
}

/* =========================
   OPEN LETTER
========================= */

function openLetter() {
  const letter = document.getElementById("envelope");

  const letterContent = document.getElementById("letterContent");

  letter.classList.add("open");

  setTimeout(() => {
    letterContent.classList.add("show");
  }, 600);
}

/* =========================
   CLOSE LETTER
========================= */

function closeLetter() {
  document.getElementById("letterContent").classList.remove("show");

  document.getElementById("envelope").classList.remove("open");
}
