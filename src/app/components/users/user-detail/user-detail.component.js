import controller from './user-detail.controller.js';
import template from './user-detail.html';

export const UserDetailComponent = {
    bindings: {
        user:'<'
    },
    controller,
    template: template
}
