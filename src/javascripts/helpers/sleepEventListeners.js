import util from './util';

const sleepButtons = document.getElementsByClassName('sleepButtons');
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

const decreaseEnergy = () => {
  energy -= 25;
  if (energy < 0) {
    energy = 0;
  }
  util.printToDom('energyScore', energy);
};

const sleepButtonFunction = (e) => {
  const sleepButtonId = e.target.id;
  if (sleepButtonId === 'nap') {
    increaseEnergyALittle();
  } else {
    increaseEnergyALot();
  }
};

const attachSleepEvents = () => {
  for (let i = 0; i < sleepButtons.length; i += 1) {
    sleepButtons[i].addEventListener('click', sleepButtonFunction);
  }
};

export default {
  attachSleepEvents, increaseEnergyALittle, increaseEnergyALot, decreaseEnergy,
};
