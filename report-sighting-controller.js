(function() {


    angular.module('ufo-sightings')                     //get the module
        .controller('ReportSightingController', ReportSightingController);    //register the controller with the module.

    //define the controller. 
    function ReportSightingController(ufoSightingsService,userService,scope, timeout) {
        this.ufoSightingsService = ufoSightingsService;
        this.userService = userService;
        this.scope = scope;
        this.timeout = timeout;

        this.showThanks = false;

        var that=this;
        this.scope.$on("UfoSightingReported", function(evt, report){
            that.addUfoReport(report);
        });

    }
    
    ReportSightingController.$inject = ['ufoSightingsService','userService', '$scope','$timeout'];

    ReportSightingController.prototype.addUfoReport = function(sighting){
        var that = this;
        this.ufoSightingsService.saveUfoSightingReport(sighting).then(function(savedSighting){
            that.flashThanks();
        })
        
    }

    ReportSightingController.prototype.flashThanks = function(){
        this.showThanks = true;

        var that = this;
        this.timeout(function(){
            that.showThanks = false;    
        }, 3000)
    }

    
   
})();