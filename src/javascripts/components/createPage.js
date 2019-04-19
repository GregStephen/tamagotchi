import eat from './eat';
import play from './play';
import fight from './fight';
import sleep from './sleep';
import buttons from '../helpers/eventListeners';

const createPage = () => {
  eat.domStringBuilder();
  play.domStringBuilder();
  fight.domStringBuilder();
  sleep.domStringBuilder();
  buttons.attachEvents();
};

export default { createPage };
