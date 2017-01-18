(function(){

    angular.module('ufo-sightings').controller("SightingFormController",SightingFormController);

    function SightingFormController(states){
        this.newUfoSighting = {};
        this.states = states;
        this.ufoShapes = UFO_SHAPES;
    }

    SightingFormController.$inject = ['states'];

    SightingFormController.prototype.reportUfoSighting = function(){


    }
    
var UFO_SHAPES=[
"Changing",
"Chevron",
"Cigar",
"Circle",
"Cylinder",
"Egg",
"Fireball",
"Flash",
"Formation",
"Light",
"Other",
"Oval",
"Sphere",
"Triangle",
"Unknown",
"Diamond",
"Disk",
"Rectangle",
"Teardrop"]
    
})();