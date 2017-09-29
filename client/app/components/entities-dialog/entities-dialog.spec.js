import EntitiesDialogModule from './entities-dialog.module';
import EntitiesDialogController from './entities-dialog.controller';
import EntitiesDialogComponent from './entities-dialog.component';
import EntitiesDialogTemplate from './entities-dialog.html';

describe('Entities-dialog', () => {
  let $rootScope, makeController;

  beforeEach(window.module(EntitiesDialogModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new EntitiesDialogController();
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
      expect(Entities-dialogTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = EntitiesDialogComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(EntitiesDialogTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(EntitiesDialogController);
    });
  });
});
