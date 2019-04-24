const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const getRandomNum = max => Math.floor(Math.random() * Math.floor(max));

const addQuadClass = (element) => {
  if (element.contains('allDead')) {
    element.removeClass('allDead');
    element.addClass('quad');
  } else if (element.contains('almostDead')) {
    element.removeClass('almostDead');
    element.addClass('quad');
  }
};

export default { printToDom, getRandomNum, addQuadClass };
