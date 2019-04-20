import util from '../helpers/util';
import './sleep.scss';

const domStringBuilder = () => {
  let domString = '';
  domString += '<div>';
  domString += '<h1 class="headline">SLEEP</h1>';
  domString += '<div class="scoreDiv">';
  domString += '<h3 class="valueLabel">ENERGY:</h3>';
  domString += '<div class="score" id="energyScore">50</div>';
  domString += '</div>';
  domString += '<button type="button" class="sleepButtons" id="nap">Nap</button>';
  domString += '<button type="button" class="sleepButtons" id="deepSleep">Hibernate</button>';
  domString += '</div>';
  util.printToDom('sleep', domString);
};

let energy = 50;

const getEnergyValue = () => energy;

const energyValueCheck = () => {
  const sleepDiv = document.getElementById('sleep');
  if (energy === 0) {
    sleepDiv.classList.add('dead');
    sleepDiv.classList.remove('quad');
    sleepDiv.classList.remove('almostDead');
  } else if (energy < 25 && energy > 0) {
    sleepDiv.classList.add('almostDead');
    sleepDiv.classList.remove('quad');
    sleepDiv.classList.remove('dead');
  } else {
    sleepDiv.classList.remove('almostDead');
    sleepDiv.classList.remove('dead');
    sleepDiv.classList.add('quad');
  }
};

const increaseEnergyALittle = () => {
  const increment = (util.getRandomNum(10) + 1);
  energy += increment;
  if (energy > 100) {
    energy = 100;
  }
  energyValueCheck();
  util.printToDom('energyScore', energy);
};

const increaseEnergyALot = () => {
  const increment = (util.getRandomNum(60) + 1);
  energy += increment;
  if (energy > 100) {
    energy = 100;
  }
  energyValueCheck();
  util.printToDom('energyScore', energy);
};

const decreaseEnergyALittle = () => {
  const decrement = (util.getRandomNum(10) + 1);
  energy -= decrement;
  if (energy < 0) {
    energy = 0;
  }
  energyValueCheck();
  util.printToDom('energyScore', energy);
};

const decreaseEnergyALot = () => {
  const decrement = (util.getRandomNum(50) + 1);
  energy -= decrement;
  if (energy < 0) {
    energy = 0;
  }
  energyValueCheck();
  util.printToDom('energyScore', energy);
};

export default {
  domStringBuilder,
  increaseEnergyALittle,
  increaseEnergyALot,
  decreaseEnergyALittle,
  decreaseEnergyALot,
  getEnergyValue,
};
