import util from '../helpers/util';
import buttons from '../helpers/fightEventListeners';

const domStringBuilder = () => {
  let domString = '';
  domString += '<div>';
  domString += '<h1>FIGHT</h1>';
  domString += '<h3>STRENGTH:</h3>';
  domString += '<div id="strengthScore">100</div>';
  domString += '<button type="button" class="fightButtons" id="runAway">Run Away!</button>';
  domString += '<button type="button" class="fightButtons" id="killThem">KILL THE ENEMY</button>';
  domString += '</div>';
  util.printToDom('fight', domString);
  buttons.attachFightEvents();
};

export default { domStringBuilder };
