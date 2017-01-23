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
        ).state(
            "sightings",
            {
                url:"/sightings",
                template:"<ui-view></ui-view>",
                controller:["$state","$scope",function(state, scope){
                    scope.$on("$stateChangeSuccess",function(event, tostate, toparam, fromstate, fromparam){
                        if(tostate.name == "sightings")
                        {
                            state.go(".list")
                        }
                    })
                }]
            }
        )
        .state(
            "sightings.list",
            {
                url:"",
                templateUrl:"sightings-view.html",
                controller:"SightingsController as ctrl"
            }
        )
        .state(
            "sightings.detail",
            {
                url:"/{id}",
                templateUrl:"sighting-detail-view.html",
                controller:"SightingDetailController as ctrl"
            }
        );

    }

    ConfigureApp.$inject = ["$locationProvider", "$stateProvider"]
})();