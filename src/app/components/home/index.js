import angular from 'angular';

import {HomeComponent} from './home.component';


const home = angular
    .module('home', [])
    .component('home', HomeComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('home', {
            url: '/',
            component: 'home'
        });
        $urlRouterProvider.otherwise('/');
    })
    .name;
    
export default home;