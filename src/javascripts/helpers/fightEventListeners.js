import util from './util';

const fightButtons = document.getElementsByClassName('fightButtons');
let strength = 100;

const fightButtonFunction = (e) => {
  const fightButtonId = e.target.id;
  if (fightButtonId === 'runAway') {
    strength += 1;
    if (strength > 100) {
      strength = 100;
    }
    util.printToDom('strengthScore', strength);
  } else {
    strength -= 10;
    if (strength < 0) {
      strength = 0;
    }
    util.printToDom('strengthScore', strength);
  }
};

const attachFightEvents = () => {
  for (let i = 0; i < fightButtons.length; i += 1) {
    fightButtons[i].addEventListener('click', fightButtonFunction);
  }
};

export default { attachFightEvents };
