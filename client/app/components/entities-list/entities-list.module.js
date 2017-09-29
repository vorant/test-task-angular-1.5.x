import angular from 'angular';
import uiRouter from 'angular-ui-router';
import EntitiesListComponent from './entities-list.component';

let EntitiesListModule = angular.module('entities-list', [
  uiRouter
])

  .component('entitiesList', EntitiesListComponent)

  .name;

export default EntitiesListModule;
