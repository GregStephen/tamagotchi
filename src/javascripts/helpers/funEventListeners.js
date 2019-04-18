import util from './util';

const playButtons = document.getElementsByClassName('playButtons');
let fun = 50;

const increaseFunALittle = () => {
  fun += 2;
  if (fun > 100) {
    fun = 100;
  }
  util.printToDom('funScore', fun);
};

const increaseFunALot = () => {
  fun += 50;
  if (fun > 100) {
    fun = 100;
  }
  util.printToDom('funScore', fun);
};

const decreaseFun = () => {
  fun -= 25;
  if (fun < 0) {
    fun = 0;
  }
  util.printToDom('funScore', fun);
};

const playButtonFunction = (e) => {
  const playButtonId = e.target.id;
  if (playButtonId === 'superFun') {
    increaseFunALot();
  } else {
    increaseFunALittle();
  }
};

const attachFunEvents = () => {
  for (let i = 0; i < playButtons.length; i += 1) {
    playButtons[i].addEventListener('click', playButtonFunction);
  }
};

export default {
  attachFunEvents, increaseFunALittle, increaseFunALot, decreaseFun,
};
