(function() {


    angular.module('ufo-sightings')                     //get the module
        .controller('SightingsController', SightingsController);    //register the controller with the module.

    //define the controller. 
    function SightingsController(ufoSightingsService) {
        
        this.ufoSightingsService = ufoSightingsService;

        this.ufoReports = null;
        this.page = 0;
        this.getSightings();

    }

    SightingsController.prototype.getSightings = function(){
        var that = this;
        this.ufoSightingsService.getUfoSightings(this.page).then(function(data){
            that.ufoReports = data;
        });
    }

    SightingsController.prototype.older = function(){
        this.page++;
        this.getSightings();        
    }

    SightingsController.prototype.newer = function(){
        if(this.page > 0){
            this.page--;
        }
        
        this.getSightings();        
    }


    
    SightingsController.$inject = ['ufoSightingsService'];

    
    
   
})();