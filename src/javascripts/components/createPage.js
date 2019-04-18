import eat from './eat';
import play from './play';
import fight from './fight';
import sleep from './sleep';

const createPage = () => {
  eat.domStringBuilder();
  play.domStringBuilder();
  fight.domStringBuilder();
  sleep.domStringBuilder();
};

export default { createPage };
