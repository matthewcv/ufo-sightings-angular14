(function(){

    angular.module('ufo-sightings').controller("SightingFormController",SightingFormController);

    function SightingFormController(states,$scope){
        this.newUfoSighting = {};
        this.states = states;
        this.ufoShapes = UFO_SHAPES;
        this.scope = $scope;
    }

    SightingFormController.$inject = ['states','$scope'];

    SightingFormController.prototype.reportUfoSighting = function(form){
        if(form.$valid){
            this.scope.$emit('UfoSightingReported',this.newUfoSighting);
            this.newUfoSighting = {};
            form.$setPristine();
            form.$setUntouched();
        }
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