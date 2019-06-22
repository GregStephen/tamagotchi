import util from '../helpers/util';
import petsData from '../data/petsData';
import './petPicker.scss';
import eat from './eat';
import play from './play';
import fight from './fight';
import sleep from './sleep';

const playPage = document.getElementById('play');
const eatPage = document.getElementById('eat');
const fightPage = document.getElementById('fight');
const sleepPage = document.getElementById('sleep');
const progressPage = document.getElementById('progress');

let pets = [];

const createPage = () => {
  eat.domStringBuilder();
  play.domStringBuilder();
  fight.domStringBuilder();
  sleep.domStringBuilder();
};

const letsGetStarted = (e) => {
  const petDiv = e.target.parentElement.previousElementSibling.children;
  progressPage.style.display = 'block';
  playPage.style.display = 'block';
  eatPage.style.display = 'block';
  fightPage.style.display = 'block';
  sleepPage.style.display = 'block';
  const yourPetBuilder = () => {
    let domString = '';
    domString += '<div id="selectedPetDiv">';
    domString += '<div id="happyPet">';
    domString += '<h4>Here is your happy pet!</h4>';
    domString += '</div>';
    domString += `<img src="${petDiv[0].src}" alt="${petDiv[0].alt}">`;
    domString += '</div>';
    util.printToDom('pet', domString);
  };
  yourPetBuilder();
};

const attachButtonEvents = () => {
  const petButtons = document.getElementsByClassName('petButton');
  for (let i = 0; i < petButtons.length; i += 1) {
    petButtons[i].addEventListener('click', letsGetStarted);
  }
};

const domStringBuilder = () => {
  let domString = '';
  domString += '<h1 id="welcomeHeader"> WELCOME TO ALMOST TAMAGOTCHI!</h1>';
  domString += '<h3>Please choose your pet!</h3>';
  domString += '<div id="petsDiv">';
  pets.forEach((pet) => {
    domString += '<div class="petCard">';
    domString += `<h1 class="petName">${pet.name}</h1>`;
    domString += '<div class="petImage">';
    domString += `<img src="${pet.imageUrl}" alt="${pet.altText}">`;
    domString += '</div>';
    domString += '<div class="buttonDiv">';
    domString += '<button class="petButton" type="button">Pick me!</button>';
    domString += '</div>';
    domString += '<div class="petDescription">';
    domString += `<p>${pet.description}</p>`;
    domString += '</div>';
    domString += '</div>';
  });
  domString += '</div>';
  util.printToDom('pet', domString);
  attachButtonEvents();
};

const initializePets = () => {
  petsData.getPetsData()
    .then((resp) => {
      const petResults = resp.data.pets;
      pets = petResults;
      domStringBuilder();
    }).catch(err => console.error(err));
  createPage();
  playPage.style.display = 'none';
  eatPage.style.display = 'none';
  fightPage.style.display = 'none';
  sleepPage.style.display = 'none';
  progressPage.style.display = 'none';
};


export default { initializePets };
