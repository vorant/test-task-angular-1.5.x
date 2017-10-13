const entities = [
  {
    label: 'Arrivals',
    sublabel: 'BPM',
  },
  {
    label: 'Car Wash',
    sublabel: 'BPM'
  },
  {
    label: 'Maintenance',
    sublabel: 'Project'
  },
  {
    label: 'Customer payment',
    sublabel: 'BPM'
  },
  {
    label: 'Technical issues',
    sublabel: 'Project'
  },
  {
    label: 'Arrivals 2',
    sublabel: 'BPM',
  },
  {
    label: 'Car Wash 2',
    sublabel: 'BPM'
  },
  {
    label: 'Maintenance 2',
    sublabel: 'Project'
  },
  {
    label: 'Customer payment 2',
    sublabel: 'BPM'
  },
  {
    label: 'Technical issues 2',
    sublabel: 'Project'
  }
];

export default class EntityService {
  /*@ngInject*/

  connectedEntities = [];

  constructor() {

  }

  getAllEntities() {
    return this.deepCopy(entities);
  }

  getChoosenEntities() {
    return this.deepCopy(this.connectedEntities);
  }

  setChosenEntities(entities) {
    this.connectedEntities = entities;
  }

  deepCopy(arr) {
    return JSON.parse(JSON.stringify(arr))
  }
}
