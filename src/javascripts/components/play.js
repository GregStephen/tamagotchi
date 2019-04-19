import util from '../helpers/util';
import './play.scss';

const domStringBuilder = () => {
  let domString = '';
  domString += '<div>';
  domString += '<h1>PLAY</h1>';
  domString += '<h3>FUN:</h3>';
  domString += '<div id="funScore">50</div>';
  domString += '<button type="button" class="playButtons" id="superFun">Go To A Park</button>';
  domString += '<button type="button" class="playButtons" id="kindaFun">High Five</button>';
  domString += '</div>';
  util.printToDom('play', domString);
};


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

const decreaseFunALittle = () => {
  fun -= 5;
  if (fun < 0) {
    fun = 0;
  }
  util.printToDom('funScore', fun);
};

const decreaseFunALot = () => {
  fun -= 25;
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
