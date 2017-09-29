class EntitiesListController {
  'ngInject';

  constructor() {

  }

  $onInit() {
    this.entities = this.entities.map(entity => {
      entity.selected = this.chosenEntities.some(chosenEntity => chosenEntity.label === entity.label);
      return entity;
    });
  }

  choseEntity(entity) {
    entity.selected = !entity.selected;

    this.onChosen({entity: entity});
  }
}

export default EntitiesListController;
