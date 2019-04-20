import util from '../helpers/util';
import './eat.scss';

const domStringBuilder = () => {
  let domString = '';
  domString += '<div>';
  domString += '<h1 class="headline">EAT</h1>';
  domString += '<div class="scoreDiv">';
  domString += '<h3 class="valueLabel">FULLNESS:</h3>';
  domString += '<div class="score" id="fullScore">100</div>';
  domString += '</div>';
  domString += '<button type="button" class="eatButtons" id="healthyFoodButton">Healthy Food</button>';
  domString += '<button type="button" class="eatButtons" id="unhealthyFoodButton">Unhealthy Food</button>';
  domString += '</div>';
  util.printToDom('eat', domString);
};
let full = 100;

const getFullValue = () => full;

const increaseFullALittle = () => {
  const increment = (util.getRandomNum(10) + 1);
  full += increment;
  if (full > 100) {
    full = 100;
  }
  util.printToDom('fullScore', full);
};

const increaseFullALot = () => {
  const increment = (util.getRandomNum(25) + 1);
  full += increment;
  if (full > 100) {
    full = 100;
  }
  util.printToDom('fullScore', full);
};

const decreaseFullALittle = () => {
  const decrement = (util.getRandomNum(5) + 1);
  full -= decrement;
  if (full < 0) {
    full = 0;
  }
  util.printToDom('fullScore', full);
};

const decreaseFullALot = () => {
  const decrement = (util.getRandomNum(25) + 1);
  full -= decrement;
  if (full < 0) {
    full = 0;
  }
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
