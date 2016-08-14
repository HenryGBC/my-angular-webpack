import controller from './users-list.controller.js';
import template from './users-list.html';

export const UsersListComponent = {
    bindings: {
        usersList:'<'
    },
    controller,
    template: template
}

