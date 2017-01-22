(function() {


    angular.module('ufo-sightings')                     //get the module
        .controller('SightingDetailController', SightingDetailController);    //register the controller with the module.

    //define the controller. 
    function SightingDetailController(sighting) {

        this.sighting = sighting;
        
    }
    
    SightingDetailController.$inject = ['sighting'];

    
    
   
})();