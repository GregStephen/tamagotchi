const eatButtons = document.getElementsByClassName('eatButtons');

const eatButtonFunction = (e) => {
  const eatButtonId = e.target.id;
  if (eatButtonId === 'healthyFoodButton') {
    console.error('healthy food!');
  } else {
    console.error('unhealthy food');
  }
};

const attachEvents = () => {
  for (let i = 0; i < eatButtons.length; i += 1) {
    eatButtons[i].addEventListener('click', eatButtonFunction);
  }
};

export default { attachEvents };
