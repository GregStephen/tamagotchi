import full from '../components/eat';
import fun from '../components/play';
import energy from '../components/sleep';
import strength from '../components/fight';
import util from './util';

const getProgressValue = () => {
  const totalFull = full.getFullValue();
  const totalFun = fun.getFunValue();
  const totalEnergy = energy.getEnergyValue();
  const totalStrength = strength.getStrengthValue();
  const totalProgress = totalFull + totalFun + totalEnergy + totalStrength;
  const domString = `<h3>${totalProgress}</h3>`;
  util.printToDom('progress', domString);
};

const healthyFoodFunction = () => {
  full.increaseFullALot();
  strength.increaseStrengthALittle();
  fun.decreaseFunALittle();
  energy.increaseEnergyALittle();
  getProgressValue();
};

const unhealthyFoodFunction = () => {
  full.decreaseFullALittle();
  strength.decreaseStrengthALot();
  fun.increaseFunALittle();
  energy.decreaseEnergyALittle();
  getProgressValue();
};

const superFunFunction = () => {
  fun.increaseFunALot();
  full.decreaseFullALot();
  energy.decreaseEnergyALot();
  strength.increaseStrengthALittle();
  getProgressValue();
};

const kindaFunFunction = () => {
  fun.increaseFunALittle();
  full.decreaseFullALittle();
  energy.decreaseEnergyALittle();
  strength.increaseStrengthALittle();
  getProgressValue();
};

const napFunction = () => {
  energy.increaseEnergyALittle();
  full.decreaseFullALittle();
  fun.increaseFunALittle();
  strength.decreaseStrengthALittle();
  getProgressValue();
};

const deepSleepFunction = () => {
  energy.increaseEnergyALot();
  full.decreaseFullALot();
  fun.increaseFunALittle();
  strength.decreaseStrengthALot();
  getProgressValue();
};

const runAwayFunction = () => {
  strength.increaseStrengthALittle();
  full.decreaseFullALittle();
  fun.increaseFunALittle();
  energy.decreaseEnergyALittle();
  getProgressValue();
};

const killThemFunction = () => {
  strength.decreaseStrengthALittle();
  fun.decreaseFunALot();
  full.decreaseFullALittle();
  energy.decreaseEnergyALot();
  getProgressValue();
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

export default { attachEvents, getProgressValue };
