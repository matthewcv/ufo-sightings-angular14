(function(){
    angular.module("ufo-sightings", ["ui.router"])  //tells angular that we are creating a module named 'ufo-sightings' with no dependencies.
                .config(ConfigureApp)



    function ConfigureApp(locationProvider,stateProvider){
        locationProvider.html5Mode(true);
        stateProvider.state(
            "home", 
            {
                url:"/",
                templateUrl:"home-view.html",
                controller:"HomeController as ctrl",
            }
        )
        .state(
            "report-sighting",
            {
                url:"/report-sighting",
                templateUrl:"report-sighting-view.html",
                controller:"ReportSightingController as ctrl",
            }
        );

    }

    ConfigureApp.$inject = ["$locationProvider", "$stateProvider"]
})();