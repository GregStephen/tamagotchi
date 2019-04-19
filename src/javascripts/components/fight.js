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

export default {
  domStringBuilder,
  increaseStrengthALittle,
  increaseStrengthALot,
  decreaseStrengthALittle,
  decreaseStrengthALot,
};
