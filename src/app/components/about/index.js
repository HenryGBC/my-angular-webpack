import angular from 'angular';
import {AboutComponent} from './about.component';


const about = angular
    .module('about', [])
    .component('about', AboutComponent)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('about', {
            url: '/about',
            component: 'about'
        });
        $urlRouterProvider.otherwise('/');
    })
    .name;
    
export default about;