import full from '../components/eat';
import fun from '../components/play';
import energy from '../components/sleep';
import strength from '../components/fight';


const healthyFoodFunction = () => {
  full.increaseFullALot();
  strength.increaseStrengthALittle();
  fun.decreaseFunALittle();
  energy.increaseEnergyALittle();
};

const unhealthyFoodFunction = () => {
  full.decreaseFullALittle();
  strength.decreaseStrengthALot();
  fun.increaseFunALittle();
  energy.decreaseEnergyALittle();
};

const superFunFunction = () => {
  fun.increaseFunALot();
  full.decreaseFullALot();
  energy.decreaseEnergyALot();
  strength.increaseStrengthALittle();
};

const kindaFunFunction = () => {
  fun.increaseFunALittle();
  full.decreaseFullALittle();
  energy.decreaseEnergyALittle();
  strength.increaseStrengthALittle();
};

const napFunction = () => {
  energy.increaseEnergyALittle();
  full.decreaseFullALittle();
  fun.increaseFunALittle();
  strength.decreaseStrengthALittle();
};

const deepSleepFunction = () => {
  energy.increaseEnergyALot();
  full.decreaseFullALot();
  fun.increaseFunALittle();
  strength.decreaseStrengthALot();
};

const runAwayFunction = () => {
  strength.increaseStrengthALittle();
  full.decreaseFullALittle();
  fun.increaseFunALittle();
  energy.decreaseEnergyALittle();
};

const killThemFunction = () => {
  strength.decreaseStrengthALittle();
  fun.decreaseFunALot();
  full.decreaseFullALittle();
  energy.decreaseEnergyALot();
};

const attachEvents = () => {
  const healthyBtn = document.getElementById('healthyFoodButton');
  const unhealthyBtn = document.getElementById('unhealthyFoodButton');
  healthyBtn.addEventListener('click', healthyFoodFunction);
  unhealthyBtn.addEventListener('click', unhealthyFoodFunction);
  const superFunBtn = document.getElementById('superFun');
  const kindaFunBtn = document.getElementById('kindaFun');
  superFunBtn.addEventListener('click', superFunFunction);
  kindaFunBtn.addEventListener('click', kindaFunFunction);
  const napBtn = document.getElementById('nap');
  const deepSleepBtn = document.getElementById('deepSleep');
  napBtn.addEventListener('click', napFunction);
  deepSleepBtn.addEventListener('click', deepSleepFunction);
  const runAwayBtn = document.getElementById('runAway');
  const killThemBtn = document.getElementById('killThem');
  runAwayBtn.addEventListener('click', runAwayFunction);
  killThemBtn.addEventListener('click', killThemFunction);
};

export default { attachEvents };
