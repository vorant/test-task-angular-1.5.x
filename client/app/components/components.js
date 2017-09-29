import angular from 'angular';
import ConnectedEntitiesModule from './connected-entities/connected-entities.module';
import EntitiesDialogModule from './entities-dialog/entities-dialog.module';
import EntitiesListModule from './entities-list/entities-list.module';

let componentModule = angular.module('app.components', [
  ConnectedEntitiesModule,
  EntitiesDialogModule,
  EntitiesListModule
])

  .name;

export default componentModule;
