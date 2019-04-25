import util from '../helpers/util';
import './play.scss';

const domStringBuilder = () => {
  let domString = '';
  domString += '<div>';
  domString += '<h1 class="headline">PLAY</h1>';
  domString += '<div class="scoreDiv">';
  domString += '<p class="valueLabel">FUN:</p>';
  domString += '<p class="score" id="funScore">50</p>';
  domString += '</div>';
  domString += '<div class="buttonHolder">';
  domString += '<button type="button" class="playButtons" id="superFun">Go To A Park</button>';
  domString += '<button type="button" class="playButtons" id="kindaFun">High Five</button>';
  domString += '</div>';
  domString += '</div>';
  util.printToDom('play', domString);
};


let fun = 50;

const getFunValue = () => fun;

const funValueCheck = () => {
  const funDiv = document.getElementById('play');
  if (fun === 0) {
    funDiv.classList.add('dead');
    funDiv.classList.remove('quad');
    funDiv.classList.remove('almostDead');
  } else if (fun < 25 && fun > 0) {
    funDiv.classList.add('almostDead');
    funDiv.classList.remove('quad');
    funDiv.classList.remove('dead');
  } else {
    funDiv.classList.remove('almostDead');
    funDiv.classList.remove('dead');
    funDiv.classList.add('quad');
  }
};

const increaseFunALittle = () => {
  const increment = (util.getRandomNum(10) + 1);
  fun += increment;
  if (fun > 100) {
    fun = 100;
  }
  funValueCheck();
  util.printToDom('funScore', fun);
};

const increaseFunALot = () => {
  const increment = (util.getRandomNum(50) + 1);
  fun += increment;
  if (fun > 100) {
    fun = 100;
  }
  funValueCheck();
  util.printToDom('funScore', fun);
};

const decreaseFunALittle = () => {
  const decrement = (util.getRandomNum(10) + 1);
  fun -= decrement;
  if (fun < 0) {
    fun = 0;
  }
  funValueCheck();
  util.printToDom('funScore', fun);
};

const decreaseFunALot = () => {
  const decrement = (util.getRandomNum(25) + 1);
  fun -= decrement;
  if (fun < 0) {
    fun = 0;
  }
  funValueCheck();
  util.printToDom('funScore', fun);
};


export default {
  domStringBuilder,
  increaseFunALittle,
  increaseFunALot,
  decreaseFunALittle,
  decreaseFunALot,
  getFunValue,
};
