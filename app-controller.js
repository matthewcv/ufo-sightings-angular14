(function() {


    angular.module('ufo-sightings')                     //get the module
        .controller('AppController', AppController);    //register the controller with the module.

    //define the controller. 
    function AppController(windowService, userService, $scope, ufoSightingsService) {
        
        this.userService = userService;
        this.ufoSightingsService = ufoSightingsService;
        this.windowService = windowService;

        this.scope = $scope;
        var that = this;
        this.scope.$on("UfoSightingReported", function(evt, report){
            that.addUfoReport(report);
        });

        this.ufoSightingsService.getUfoSightings().then(function(data){
            that.ufoReports = data;
        });
    }
    
    AppController.$inject = ['$window','userService','$scope','ufoSightingsService'];

    
    AppController.prototype.addUfoReport = function(sighting){
        var that = this;
        this.ufoSightingsService.saveUfoSightingReport(sighting).then(function(savedSighting){
            that.ufoReports.splice(0,0,savedSighting);
            that.windowService.alert('Thankyou, ' + that.userService.userName + '.\nYour sighting has been reported.');
        })
        
    }
    
   
   /**
    * this is what a ufo report object looks like 
 {
    "id": number;
    "description": string;
    "occurred": string;
    "reported": string;
    "posted": string;
    "shape": string;
    "duration": string;
    "city": string;
    "state": string;
} */ 
   
})();