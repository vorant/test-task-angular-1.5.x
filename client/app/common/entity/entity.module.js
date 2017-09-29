import angular from 'angular';
import uiRouter from 'angular-ui-router';
import EntityService from './entity.service';

let EntityModule = angular.module('entity', [
  uiRouter
])

  .service('EntityService', EntityService)


  .name;

export default EntityModule;
