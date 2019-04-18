import util from './util';

const eatButtons = document.getElementsByClassName('eatButtons');
let score = 75;

const eatButtonFunction = (e) => {
  const eatButtonId = e.target.id;
  if (eatButtonId === 'healthyFoodButton') {
    score += 10;
    if (score > 100) {
      score = 100;
    }
    util.printToDom('fullScore', score);
  } else {
    score -= 3;
    if (score < 0) {
      score = 0;
    }
    util.printToDom('fullScore', score);
  }
};

const attachEatEvents = () => {
  for (let i = 0; i < eatButtons.length; i += 1) {
    eatButtons[i].addEventListener('click', eatButtonFunction);
  }
};

export default { attachEatEvents };
