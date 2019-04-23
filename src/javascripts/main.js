import '../styles/main.scss';
// import createPage from './components/createPage';
import pets from './components/petPicker';

const init = () => {
  // createPage.createPage();
  pets.initializePets();
};

init();
