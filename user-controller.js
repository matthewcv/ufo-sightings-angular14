(function(){

    angular.module('ufo-sightings').controller("UserController",UserController);

    function UserController(userService){
        this.userService = userService;
    }

    UserController.$inject = ['userService'];

    UserController.prototype.logIn = function(userName){
        if(userName){
            this.userService.logIn(userName);
        }
    }
    

})();