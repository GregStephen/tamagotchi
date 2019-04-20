import util from '../helpers/util';
import './play.scss';

const domStringBuilder = () => {
  let domString = '';
  domString += '<div>';
  domString += '<h1 class="headline">PLAY</h1>';
  domString += '<div class="scoreDiv">';
  domString += '<h3 class="valueLabel">FUN:</h3>';
  domString += '<div class="score" id="funScore">50</div>';
  domString += '</div>';
  domString += '<button type="button" class="playButtons" id="superFun">Go To A Park</button>';
  domString += '<button type="button" class="playButtons" id="kindaFun">High Five</button>';
  domString += '</div>';
  util.printToDom('play', domString);
};


let fun = 50;

const increaseFunALittle = () => {
  const increment = (util.getRandomNum(10) + 1);
  fun += increment;
  if (fun > 100) {
    fun = 100;
  }
  util.printToDom('funScore', fun);
};

const increaseFunALot = () => {
  const increment = (util.getRandomNum(50) + 1);
  fun += increment;
  if (fun > 100) {
    fun = 100;
  }
  util.printToDom('funScore', fun);
};

const decreaseFunALittle = () => {
  const decrement = (util.getRandomNum(10) + 1);
  fun -= decrement;
  if (fun < 0) {
    fun = 0;
  }
  util.printToDom('funScore', fun);
};

const decreaseFunALot = () => {
  const decrement = (util.getRandomNum(25) + 1);
  fun -= decrement;
  if (fun < 0) {
    fun = 0;
  }
  util.printToDom('funScore', fun);
};


export default {
  domStringBuilder,
  increaseFunALittle,
  increaseFunALot,
  decreaseFunALittle,
  decreaseFunALot,
};
