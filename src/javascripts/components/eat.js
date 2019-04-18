import util from '../helpers/util';
import './eat.scss';

const domStringBuilder = () => {
  let domString = '';
  domString += '<div>';
  domString += '<h1>EAT</h1>';
  domString += '<h3>FULLNESS:</h3>';
  domString += '<div id="fullScore">100</div>';
  domString += '<button type="button" class="eatButtons" id="healthyFoodButton">Healthy Food</button>';
  domString += '<button type="button" class="eatButtons" id="unhealthyFoodButton">Unhealthy Food</button>';
  domString += '</div>';
  util.printToDom('eat', domString);
};
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

export default {
  domStringBuilder,
  increaseFullALittle,
  increaseFullALot,
  decreaseFullALittle,
  decreaseFullALot,
};
