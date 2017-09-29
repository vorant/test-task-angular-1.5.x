import template from './entities-list.html';
import controller from './entities-list.controller';
import './entities-list.scss';

let EntitiesListComponent = {
  bindings: {
    entities: '<',
    chosenEntities: '<',
    onChosen: '&'
  },
  template,
  controller
};

export default EntitiesListComponent;
