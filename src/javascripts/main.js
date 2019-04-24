import '../styles/main.scss';
import pets from './components/petPicker';
import buttons from './helpers/eventListeners';

const init = () => {
  pets.initializePets();
  buttons.attachEvents();
  buttons.getProgressValue();
};

init();
