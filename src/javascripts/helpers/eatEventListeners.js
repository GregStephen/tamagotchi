import util from './util';

const eatButtons = document.getElementsByClassName('eatButtons');
let full = 100;

const eatButtonFunction = (e) => {
  const eatButtonId = e.target.id;
  if (eatButtonId === 'healthyFoodButton') {
    full += 10;
    if (full > 100) {
      full = 100;
    }
    util.printToDom('fullScore', full);
  } else {
    full -= 3;
    if (full < 0) {
      full = 0;
    }
    util.printToDom('fullScore', full);
  }
};

const attachEatEvents = () => {
  for (let i = 0; i < eatButtons.length; i += 1) {
    eatButtons[i].addEventListener('click', eatButtonFunction);
  }
};

export default { attachEatEvents };
