import util from '../helpers/util';
import buttons from '../helpers/eventListeners';

const domStringBuilder = () => {
  let domString = '';
  domString += '<div>';
  domString += '<h1>EAT</h1>';
  domString += '<h3>FULLNESS: 100</h3>';
  domString += '<h4>FEED:</h4>';
  domString += '<button type="button" class="eatButtons" id="healthyFoodButton">Healthy Food</button>';
  domString += '<button type="button" class="eatButtons" id="unhealthyFoodButton">Unhealthy Food</button>';
  domString += '</div>';
  util.printToDom('eat', domString);
  buttons.attachEvents();
};

export default { domStringBuilder };
