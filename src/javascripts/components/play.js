import util from '../helpers/util';
import buttons from '../helpers/funEventListeners';

const domStringBuilder = () => {
  let domString = '';
  domString += '<div>';
  domString += '<h1>PLAY</h1>';
  domString += '<h3>FUN:</h3>';
  domString += '<div id="funScore">50</div>';
  domString += '<button type="button" class="playButtons" id="superFun">Go To A Park</button>';
  domString += '<button type="button" class="playButtons" id="kindaFun">High Five</button>';
  domString += '</div>';
  util.printToDom('play', domString);
  buttons.attachFunEvents();
};

export default { domStringBuilder };
