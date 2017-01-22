(function(){
    angular.module("ufo-sightings", [])  //tells angular that we are creating a module named 'ufo-sightings' with no dependencies.
                .config(ConfigureApp)



    function ConfigureApp(locationProvider){
        locationProvider.html5Mode(true);

    }

    ConfigureApp.$inject = ["$locationProvider"]
})();