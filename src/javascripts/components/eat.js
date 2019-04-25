import util from '../helpers/util';
import './eat.scss';

const domStringBuilder = () => {
  let domString = '';
  domString += '<div>';
  domString += '<h1 class="headline">EAT</h1>';
  domString += '<div class="scoreDiv">';
  domString += '<p class="valueLabel">FULLNESS:</p>';
  domString += '<p class="score" id="fullScore">100</p>';
  domString += '</div>';
  domString += '<div class="buttonHolder">';
  domString += '<button type="button" class="eatButtons" id="healthyFoodButton">Healthy Food</button>';
  domString += '<button type="button" class="eatButtons" id="unhealthyFoodButton">Unhealthy Food</button>';
  domString += '</div>';
  domString += '</div>';
  util.printToDom('eat', domString);
};

let full = 100;

const getFullValue = () => full;

const fullValueCheck = () => {
  const fullDiv = document.getElementById('eat');
  if (full === 0) {
    fullDiv.classList.add('dead');
    fullDiv.classList.remove('quad');
    fullDiv.classList.remove('almostDead');
  } else if (full < 25 && full > 0) {
    fullDiv.classList.add('almostDead');
    fullDiv.classList.remove('quad');
    fullDiv.classList.remove('dead');
  } else {
    fullDiv.classList.remove('almostDead');
    fullDiv.classList.remove('dead');
    fullDiv.classList.add('quad');
  }
};

const increaseFullALittle = () => {
  const increment = (util.getRandomNum(10) + 1);
  full += increment;
  if (full > 100) {
    full = 100;
  }
  fullValueCheck();
  util.printToDom('fullScore', full);
};

const increaseFullALot = () => {
  const increment = (util.getRandomNum(25) + 1);
  full += increment;
  if (full > 100) {
    full = 100;
  }
  fullValueCheck();
  util.printToDom('fullScore', full);
};

const decreaseFullALittle = () => {
  const decrement = (util.getRandomNum(5) + 1);
  full -= decrement;
  if (full < 0) {
    full = 0;
  }
  fullValueCheck();
  util.printToDom('fullScore', full);
};

const decreaseFullALot = () => {
  const decrement = (util.getRandomNum(25) + 1);
  full -= decrement;
  if (full < 0) {
    full = 0;
  }
  fullValueCheck();
  util.printToDom('fullScore', full);
};

export default {
  domStringBuilder,
  increaseFullALittle,
  increaseFullALot,
  decreaseFullALittle,
  decreaseFullALot,
  getFullValue,
};
