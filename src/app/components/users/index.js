import angular from 'angular';

import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import UsersService from './users.service';

const users = angular
    .module('users', [])
    .component('usersList', UsersListComponent)
    .component('userDetail', UserDetailComponent)
    .service('UsersService', UsersService)
    .config(($stateProvider, $urlRouterProvider) => {
        $stateProvider
            .state('users', {
                url: '/users',
                component: 'usersList',
                resolve: {
                    usersList: (UsersService) => UsersService.getUsers()
                }
             
             })
             .state('user-detail', {
                url: '/users/:id',
                component: 'userDetail',
                resolve: {
                    user: (UsersService, $stateParams) => UsersService.getUser($stateParams.id)
                }
             
             })
        $urlRouterProvider.otherwise('/');
    })
    .name;
    
export default users;