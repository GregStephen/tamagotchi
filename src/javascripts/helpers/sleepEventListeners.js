import util from './util';

const sleepButtons = document.getElementsByClassName('sleepButtons');
let energy = 50;

const sleepButtonFunction = (e) => {
  const sleepButtonId = e.target.id;
  if (sleepButtonId === 'nap') {
    energy += 50;
    if (energy > 100) {
      energy = 100;
    }
    util.printToDom('energyScore', energy);
  } else {
    energy += 60;
    if (energy > 100) {
      energy = 100;
    }
    util.printToDom('energyScore', energy);
  }
};

const attachSleepEvents = () => {
  for (let i = 0; i < sleepButtons.length; i += 1) {
    sleepButtons[i].addEventListener('click', sleepButtonFunction);
  }
};

export default { attachSleepEvents };
