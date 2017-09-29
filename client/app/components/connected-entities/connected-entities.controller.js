import DialogController from '../entities-dialog/entities-dialog.controller';
import DialogTemplate from '../entities-dialog/entities-dialog.html';
const arrowIconStates = {
  opened: 'keyboard_arrow_up',
  closed: 'keyboard_arrow_down'
};
class ConnectedEntitiesController {
  'ngInject';

  entities = [];
  isEntitiesShowed = false;
  arrowIcon;

  constructor($mdDialog, EntityService) {
    'ngInject';

    this.$mdDialog = $mdDialog;
    this.entityService = EntityService;
  }

  $onInit() {
    this.updateConnectedEntities();
    this.setArrowIcon();
  }

  updateConnectedEntities() {
    this.entities = this.entityService.getChoosenEntities();
  }

  showEntities($event) {
    if (this.entities.length) {
      this.isEntitiesShowed = !this.isEntitiesShowed;
      this.setArrowIcon();
    } else {
      this.openDialog($event);
    }
  }

  addEntity($event) {
    $event.stopPropagation();
    this.openDialog($event);
  }

  setArrowIcon() {
    this.arrowIcon = this.isEntitiesShowed ? arrowIconStates.opened : arrowIconStates.closed;
  }

  openDialog($event) {
    this.$mdDialog.show({
      template: '<entities-dialog></entities-dialog>',
      parent: angular.element(document.body),
      targetEvent: $event,
      clickOutsideToClose: true,
      fullscreen: true
    })
      .then((answer) => {
        this.updateConnectedEntities();
      }, () => {

      });
  }
}

export default ConnectedEntitiesController;
