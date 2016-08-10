export default function routing ($urlRouterProvider, $locationProvider) {
  // a little magic configured at build for production
  // this allows for any dependencies to be injected
  // propery for minification
  'ngInject';
  // set html5 mode to false meaning for routing we will need /#/
  
  console.log('hola');
  $locationProvider.html5Mode(false);
  // if route is not found default to /
  $urlRouterProvider.otherwise('/');
};