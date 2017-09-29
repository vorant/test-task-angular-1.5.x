import ConnectedEntitiesModule from './connected-entities.module';
import ConnectedEntitiesController from './connected-entities.controller';
import ConnectedEntitiesComponent from './connected-entities.component';
import ConnectedEntitiesTemplate from './connected-entities.html';

describe('Connected-entities', () => {
  let $rootScope, makeController;

  beforeEach(window.module(ConnectedEntitiesModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new ConnectedEntitiesController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(ConnectedEntitiesTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = ConnectedEntitiesComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(ConnectedEntitiesTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(ConnectedEntitiesController);
    });
  });
});
