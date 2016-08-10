// /app/app.js
import angular from 'angular'  
import uiRouter from 'angular-ui-router'
import { AppComponent } from './app.component'

const root = angular  
  .module('angularApp', [
    uiRouter
  ])
  .component('app', AppComponent);

export default root  