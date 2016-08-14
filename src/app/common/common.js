import angular from 'angular'  

import { NavComponent } from './nav/nav.component'
import { FooterComponent } from './footer/footer.component'
const common = angular  
  .module('app.common', [])
  .component('navCo', NavComponent)
  .component('footerCo', FooterComponent)
  .name;

export default common;  