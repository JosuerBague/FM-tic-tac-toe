import { Game } from "./Game.mjs";
import { playerClick } from "./playerClick.mjs";
import { Sound } from "./Sound.mjs";

const Cells = {
  allCells: document.querySelectorAll('.cell'),

  showOutline: function showOutline(e) {
    let svg = e.target.querySelector('.cell__svg-link');
    if (Game.turn === 'X') {
      svg.setAttribute('href', '#cross--outline');
    };

    if (Game.turn === "O") {
      svg.setAttribute('href', '#circle--outline');
    };
  },

  hideOutline : function hideOutline(e) {
    let target = e.target.querySelector('.cell__svg-link');
    target.setAttribute('href', null)
  },

  hover : function hover() {
    Sound.play('#audio-hover');
  },
  
  attachAll : function attach() {
    for (let cell of this.allCells) {
      cell.addEventListener('click', playerClick);
      cell.addEventListener('mouseenter', Cells.hover);
      cell.addEventListener('mouseenter', Cells.showOutline);
      cell.addEventListener('mouseleave', Cells.hideOutline);
      cell.style.pointerEvents = 'auto';
      cell.style.cursor = 'pointer';
    }
  },

  detachAll : function detachAll() {
    for (let cell of this.allCells) {
      cell.removeEventListener('click', playerClick);
      cell.removeEventListener('mouseenter', Cells.hover);
      cell.removeEventListener('mouseenter', Cells.showOutline);
      cell.removeEventListener('mouseleave', Cells.hideOutline);
      cell.style.pointerEvents = 'none';
      cell.style.cursor = 'auto';

    }
  },

  detach : function detach(cell) {
    cell.removeEventListener('click', playerClick);
    cell.removeEventListener('mouseenter', Cells.hover);
    cell.removeEventListener('mouseenter', Cells.showOutline);
    cell.removeEventListener('mouseleave', Cells.hideOutline);
    cell.style.pointerEvents = 'none';
    cell.style.cursor = 'none';
  },

  disableEmpty : function disable() {
    let emptyCells = this.emptyCells();
        
        for (let index of emptyCells) {   
          let cell = document.querySelector(`#cell-${index}`);
              cell.style.pointerEvents = 'none';
              cell.style.cursor = 'auto';
        }
  },

  emptyCells: function emptyCells(board = Game.origBoard) {
    return board.filter(cell => typeof cell === 'number')
  },

  enableEmpty : function enable() {
    let emptyCells = this.emptyCells();

        for (let index  of emptyCells) {
          let cell = document.querySelector(`#cell-${index}`);
              cell.style.pointerEvents = 'auto';
              cell.style.cursor = 'pointer';
        }
  },

  mark : function mark(cell, token) {
    if (token === "X") {
      cell.setAttribute('href', '#cross');
    }

    if (token === "O") {
      cell.setAttribute('href', '#circle')
    }
  },

  reset : function reset() {
    Cells.detachAll();
    Cells.attachAll();

    for (let cell of Cells.allCells) {
      cell.querySelector('.cell__svg-link').setAttribute('href', null);
      cell.style.backgroundColor = "#1F3641";
    }
  },
}

export {Cells}