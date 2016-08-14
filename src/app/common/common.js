import angular from 'angular'  

import { NavComponent } from './nav/nav.component'
const common = angular  
  .module('app.common', [])
  .component('navCo', NavComponent)
  .name;

export default common;  