import util from '../helpers/util';
import './fight.scss';

const domStringBuilder = () => {
  let domString = '';
  domString += '<div>';
  domString += '<h1>FIGHT</h1>';
  domString += '<h3>STRENGTH:</h3>';
  domString += '<div id="strengthScore">100</div>';
  domString += '<button type="button" class="fightButtons" id="runAway">Run Away!</button>';
  domString += '<button type="button" class="fightButtons" id="killThem">KILL THE ENEMY</button>';
  domString += '</div>';
  util.printToDom('fight', domString);
};

let strength = 100;

const increaseStrengthALittle = () => {
  const increment = (util.getRandomNum(5) + 1);
  strength += increment;
  if (strength > 100) {
    strength = 100;
  }
  util.printToDom('strengthScore', strength);
};

const increaseStrengthALot = () => {
  const increment = (util.getRandomNum(25) + 1);
  strength += increment;
  if (strength > 100) {
    strength = 100;
  }
  util.printToDom('strengthScore', strength);
};

const decreaseStrengthALittle = () => {
  const decrement = (util.getRandomNum(5) + 1);
  strength -= decrement;
  if (strength < 0) {
    strength = 0;
  }
  util.printToDom('strengthScore', strength);
};

const decreaseStrengthALot = () => {
  const decrement = (util.getRandomNum(25) + 1);
  strength -= decrement;
  if (strength < 0) {
    strength = 0;
  }
  util.printToDom('strengthScore', strength);
};

export default {
  domStringBuilder,
  increaseStrengthALittle,
  increaseStrengthALot,
  decreaseStrengthALittle,
  decreaseStrengthALot,
};
