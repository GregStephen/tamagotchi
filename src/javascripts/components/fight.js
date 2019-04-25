import util from '../helpers/util';
import './fight.scss';

const domStringBuilder = () => {
  let domString = '';
  domString += '<div>';
  domString += '<h1 class="headline">FIGHT</h1>';
  domString += '<div class="scoreDiv">';
  domString += '<p class="valueLabel">STRENGTH:</p>';
  domString += '<p class="score" id="strengthScore">100</p>';
  domString += '</div>';
  domString += '<div class="buttonHolder">';
  domString += '<button type="button" class="fightButtons" id="runAway">Run Away!</button>';
  domString += '<button type="button" class="fightButtons" id="killThem">KILL THE ENEMY</button>';
  domString += '</div>';
  domString += '</div>';
  util.printToDom('fight', domString);
};

let strength = 100;

const getStrengthValue = () => strength;

const strengthValueCheck = () => {
  const strengthDiv = document.getElementById('fight');
  if (strength === 0) {
    strengthDiv.classList.add('dead');
    strengthDiv.classList.remove('quad');
    strengthDiv.classList.remove('almostDead');
  } else if (strength < 25 && strength > 0) {
    strengthDiv.classList.add('almostDead');
    strengthDiv.classList.remove('quad');
    strengthDiv.classList.remove('dead');
  } else {
    strengthDiv.classList.remove('almostDead');
    strengthDiv.classList.remove('dead');
    strengthDiv.classList.add('quad');
  }
};

const increaseStrengthALittle = () => {
  const increment = (util.getRandomNum(5) + 1);
  strength += increment;
  if (strength > 100) {
    strength = 100;
  }
  strengthValueCheck();
  util.printToDom('strengthScore', strength);
};

const increaseStrengthALot = () => {
  const increment = (util.getRandomNum(25) + 1);
  strength += increment;
  if (strength > 100) {
    strength = 100;
  }
  strengthValueCheck();
  util.printToDom('strengthScore', strength);
};

const decreaseStrengthALittle = () => {
  const decrement = (util.getRandomNum(5) + 1);
  strength -= decrement;
  if (strength < 0) {
    strength = 0;
  }
  strengthValueCheck();
  util.printToDom('strengthScore', strength);
};

const decreaseStrengthALot = () => {
  const decrement = (util.getRandomNum(25) + 1);
  strength -= decrement;
  if (strength < 0) {
    strength = 0;
  }
  strengthValueCheck();
  util.printToDom('strengthScore', strength);
};

export default {
  domStringBuilder,
  increaseStrengthALittle,
  increaseStrengthALot,
  decreaseStrengthALittle,
  decreaseStrengthALot,
  getStrengthValue,
};
