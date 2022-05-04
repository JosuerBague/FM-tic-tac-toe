import { GAME_STATE as GS } from "./gameState.mjs";
import { playerClick } from "./playerClick.mjs";
import { showOutline } from "./toggleOutline.mjs";

function reset() {
  // 1) Reset the token container:
  const tokenContainer = document.querySelector(".pt__choices");
  tokenContainer.classList = "pt__choices"

  // 2) Hide main game:
  const mainGame = document.querySelector(".main-game");
  mainGame.classList.remove("active")

  // 3) Show start-menu:
  const startMenu = document.querySelector(".start-menu");
  startMenu.classList.add("active");

  // 4) Reset turn-indicator:
  const turnIndicator = document.querySelector(".ti-svg");
  turnIndicator.setAttribute("href", "#ti--cross")

  // 5) Reset scoreboards
  const counters = document.querySelectorAll(".scoreboard__counter");
  counters.forEach(counter => counter.textContent = 0);

  GS.turn = "X"

  const audioRoll = document.querySelector('#audio-roll');
  audioRoll.pause();
  audioRoll.currentTime = 0;

  const audioBeep = document.querySelector("#audio-hover");
  audioBeep.currentTime = 0;
  audioBeep.play()
}

export {reset}