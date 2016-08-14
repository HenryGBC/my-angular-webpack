
import angular from 'angular'

import home from './home';
import about from './about';
import users from './users';

const components = angular
  .module('app.components', [home, about, users])
  .name;

export default components; 