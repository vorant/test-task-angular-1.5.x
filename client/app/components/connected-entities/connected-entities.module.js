import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ConnectedEntitiesComponent from './connected-entities.component';

let ConnectedEntitiesModule = angular.module('connected-entities', [
  uiRouter
])

  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        component: 'connectedEntities'
      });
  })

  .component('connectedEntities', ConnectedEntitiesComponent)

  .name;

export default ConnectedEntitiesModule;

