import util from './util';
import strength from './fightEventListeners';
import fun from './funEventListeners';
import energy from './sleepEventListeners';

let full = 100;

const increaseFullALittle = () => {
  full += 10;
  if (full > 100) {
    full = 100;
  }
  util.printToDom('fullScore', full);
};

const increaseFullALot = () => {
  full += 25;
  if (full > 100) {
    full = 100;
  }
  util.printToDom('fullScore', full);
};

const decreaseFullALittle = () => {
  full -= 3;
  if (full < 0) {
    full = 0;
  }
  util.printToDom('fullScore', full);
};

const decreaseFullALot = () => {
  full -= 15;
  if (full < 0) {
    full = 0;
  }
  util.printToDom('fullScore', full);
};

const healthyFoodFunction = () => {
  increaseFullALot();
  strength.increaseStrengthALittle();
  fun.decreaseFunALittle();
  energy.increaseEnergyALittle();
};

const unhealthyFoodFunction = () => {
  decreaseFullALittle();
  strength.decreaseStrengthALot();
  fun.increaseFunALittle();
  energy.decreaseEnergyALittle();
};

const attachEatEvents = () => {
  const healthyBtn = document.getElementById('healthyFoodButton');
  const unhealthyBtn = document.getElementById('unhealthyFoodButton');
  healthyBtn.addEventListener('click', healthyFoodFunction);
  unhealthyBtn.addEventListener('click', unhealthyFoodFunction);
};

export default {
  attachEatEvents,
  increaseFullALittle,
  decreaseFullALittle,
  increaseFullALot,
  decreaseFullALot,
};
