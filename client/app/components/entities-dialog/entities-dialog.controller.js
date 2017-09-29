class EntitiesDialogController {
  'ngInject';

  constructor($mdDialog, EntityService) {
    'ngInject';
    this.$mdDialog = $mdDialog;
    this.entityService = EntityService;
  }

  $onInit() {
    this.allEntities = this.entityService.getAllEntities();
    this.chosenEntities = this.entityService.getChoosenEntities();
  }

  chooseEntity(entity) {
    if (entity.selected) {
      this.chosenEntities.push(entity);
    } else {
      this.chosenEntities = this.chosenEntities.filter(chosenEntity => chosenEntity.label !== entity.label);
    }
  }

  cancel() {
    this.$mdDialog.cancel();
  };

  connect() {
    this.entityService.setChosenEntities(this.chosenEntities);
    this.$mdDialog.hide();
  };


}

export default EntitiesDialogController;
