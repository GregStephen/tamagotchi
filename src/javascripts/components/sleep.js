import util from '../helpers/util';
import buttons from '../helpers/sleepEventListeners';

const domStringBuilder = () => {
  let domString = '';
  domString += '<div>';
  domString += '<h1>SLEEP</h1>';
  domString += '<h3>ENERGY:</h3>';
  domString += '<div id="energyScore">50</div>';
  domString += '<button type="button" class="sleepButtons" id="nap">Nap</button>';
  domString += '<button type="button" class="sleepButtons" id="deepSleep">Hibernate</button>';
  domString += '</div>';
  util.printToDom('sleep', domString);
  buttons.attachSleepEvents();
};

export default { domStringBuilder };
