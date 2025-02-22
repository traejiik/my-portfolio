import './styles.css';
import evListen from './modules/evListen';
import projectListeners from './modules/projects';
import renderProjs from './modules/projData';
import renderData from './modules/switcherData';

function init() {
  renderData();
  renderProjs();
  evListen();
  projectListeners();
}

init();
