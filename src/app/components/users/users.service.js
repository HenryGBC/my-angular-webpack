
class UsersService{
    constructor ($http){
        this.$http = $http;
    }
    getUsers(){
        return this.$http.get('https://jsonplaceholder.typicode.com/users').then(response => response.data);
    }
    getUser(id){
        return this.$http.get('https://jsonplaceholder.typicode.com/users/'+id).then(response => response.data);
    }
}

UsersService.$inject = ['$http'];

export default UsersService;