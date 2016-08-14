// /app/app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/app.scss';
import angular from 'angular'  
import uiRouter from 'angular-ui-router'
import common from './common/common'
import { AppComponent } from './app.component'

const root = angular  
  .module('angularApp', [
    uiRouter, 
    common,
  ])
  .component('app', AppComponent)
  .name;

export default root;  