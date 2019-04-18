import util from './util';

const playButtons = document.getElementsByClassName('playButtons');
let fun = 50;

const playButtonFunction = (e) => {
  const playButtonId = e.target.id;
  if (playButtonId === 'superFun') {
    fun += 50;
    if (fun > 100) {
      fun = 100;
    }
    util.printToDom('funScore', fun);
  } else {
    fun += 2;
    if (fun > 100) {
      fun = 100;
    }
    util.printToDom('funScore', fun);
  }
};

const attachFunEvents = () => {
  for (let i = 0; i < playButtons.length; i += 1) {
    playButtons[i].addEventListener('click', playButtonFunction);
  }
};

export default { attachFunEvents };
