(function() {


    angular.module('ufo-sightings')                     //get the module
        .controller('HomeController', HomeController);    //register the controller with the module.

    //define the controller. 
    function HomeController(ufoSightingsService) {
        this.ufoSightingsService = ufoSightingsService;

        var that=this;

        this.ufoSightingsService.getUfoSightings().then(function(data){
            that.ufoReports = data;
        });
    }
    
    HomeController.$inject = ['ufoSightingsService'];

    
    
   
})();