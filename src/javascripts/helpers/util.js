const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const getRandomNum = max => Math.floor(Math.random() * Math.floor(max));

export default { printToDom, getRandomNum };
