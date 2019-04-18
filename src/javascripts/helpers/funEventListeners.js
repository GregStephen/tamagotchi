import util from './util';
import full from './eatEventListeners';
import strength from './fightEventListeners';
import energy from './sleepEventListeners';

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

const superFunFunction = () => {
  increaseFunALot();
  full.decreaseFullALot();
  energy.decreaseEnergyALot();
  strength.increaseStrengthALittle();
};

const kindaFunFunction = () => {
  increaseFunALittle();
  full.decreaseFullALittle();
  energy.decreaseEnergyALittle();
  strength.increaseStrengthALittle();
};

const attachFunEvents = () => {
  const superFunBtn = document.getElementById('superFun');
  const kindaFunBtn = document.getElementById('kindaFun');
  superFunBtn.addEventListener('click', superFunFunction);
  kindaFunBtn.addEventListener('click', kindaFunFunction);
};

export default {
  attachFunEvents, increaseFunALittle, increaseFunALot, decreaseFunALittle, decreaseFunALot,
};
