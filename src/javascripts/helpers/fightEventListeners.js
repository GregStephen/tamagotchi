import util from './util';
import full from './eatEventListeners';
import fun from './funEventListeners';
import energy from './sleepEventListeners';

let strength = 100;

const increaseStrengthALittle = () => {
  strength += 1;
  if (strength > 100) {
    strength = 100;
  }
  util.printToDom('strengthScore', strength);
};

const increaseStrengthALot = () => {
  strength += 20;
  if (strength > 100) {
    strength = 100;
  }
  util.printToDom('strengthScore', strength);
};

const decreaseStrengthALittle = () => {
  strength -= 10;
  if (strength < 0) {
    strength = 0;
  }
  util.printToDom('strengthScore', strength);
};

const decreaseStrengthALot = () => {
  strength -= 20;
  if (strength < 0) {
    strength = 0;
  }
  util.printToDom('strengthScore', strength);
};

const runAwayFunction = () => {
  increaseStrengthALittle();
  full.decreaseFullALittle();
  fun.increaseFunALittle();
  energy.decreaseEnergyALittle();
};

const killThemFunction = () => {
  decreaseStrengthALittle();
  fun.decreaseFunALot();
  full.decreaseFullALittle();
  energy.decreaseEnergyALot();
};

const attachFightEvents = () => {
  const runAwayBtn = document.getElementById('runAway');
  const killThemBtn = document.getElementById('killThem');
  runAwayBtn.addEventListener('click', runAwayFunction);
  killThemBtn.addEventListener('click', killThemFunction);
};

export default {
  attachFightEvents,
  increaseStrengthALittle,
  decreaseStrengthALittle,
  increaseStrengthALot,
  decreaseStrengthALot,
};
