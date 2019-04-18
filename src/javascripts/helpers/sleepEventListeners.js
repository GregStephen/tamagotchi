import util from './util';
import full from './eatEventListeners';
import fun from './funEventListeners';
import strength from './fightEventListeners';

let energy = 50;

const increaseEnergyALittle = () => {
  energy += 50;
  if (energy > 100) {
    energy = 100;
  }
  util.printToDom('energyScore', energy);
};

const increaseEnergyALot = () => {
  energy += 60;
  if (energy > 100) {
    energy = 100;
  }
  util.printToDom('energyScore', energy);
};

const decreaseEnergyALittle = () => {
  energy -= 15;
  if (energy < 0) {
    energy = 0;
  }
  util.printToDom('energyScore', energy);
};

const decreaseEnergyALot = () => {
  energy -= 50;
  if (energy < 0) {
    energy = 0;
  }
  util.printToDom('energyScore', energy);
};

const napFunction = () => {
  increaseEnergyALittle();
  full.decreaseFullALittle();
  fun.increaseFunALittle();
  strength.decreaseStrengthALittle();
};

const deepSleepFunction = () => {
  increaseEnergyALot();
  full.decreaseFullALot();
  fun.increaseFunALittle();
  strength.decreaseStrengthALot();
};

const attachSleepEvents = () => {
  const napBtn = document.getElementById('nap');
  const deepSleepBtn = document.getElementById('deepSleep');
  napBtn.addEventListener('click', napFunction);
  deepSleepBtn.addEventListener('click', deepSleepFunction);
};

export default {
  attachSleepEvents,
  increaseEnergyALittle,
  increaseEnergyALot,
  decreaseEnergyALittle,
  decreaseEnergyALot,
};
