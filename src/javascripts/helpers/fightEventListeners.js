import util from './util';
import full from './eatEventListeners';

const fightButtons = document.getElementsByClassName('fightButtons');
let strength = 100;

const increaseStrength = () => {
  strength += 1;
  if (strength > 100) {
    strength = 100;
  }
  util.printToDom('strengthScore', strength);
};

const decreaseStrength = () => {
  strength -= 10;
  if (strength < 0) {
    strength = 0;
  }
  util.printToDom('strengthScore', strength);
};

const fightButtonFunction = (e) => {
  const fightButtonId = e.target.id;
  if (fightButtonId === 'runAway') {
    increaseStrength();
  } else {
    decreaseStrength();
  }
};

const attachFightEvents = () => {
  for (let i = 0; i < fightButtons.length; i += 1) {
    fightButtons[i].addEventListener('click', fightButtonFunction);
  }
};

export default { attachFightEvents, increaseStrength, decreaseStrength };
