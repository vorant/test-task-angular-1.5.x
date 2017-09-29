import angular from 'angular';
import EntityModule from './entity/entity.module';

let commonModule = angular.module('app.common', [
  EntityModule
])

  .name;

export default commonModule;
