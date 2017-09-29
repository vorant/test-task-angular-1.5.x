import angular from 'angular';
import uiRouter from 'angular-ui-router';
import EntitiesDialogComponent from './entities-dialog.component';

let EntitiesDialogModule = angular.module('entities-dialog', [
  uiRouter
])

  .component('entitiesDialog', EntitiesDialogComponent)

  .name;

export default EntitiesDialogModule;
