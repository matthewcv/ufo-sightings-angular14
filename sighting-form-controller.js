(function(){

    angular.module('ufo-sightings').controller("SightingFormController",SightingFormController);

    function SightingFormController(states,$scope,$window){
        this.newUfoSighting = {};
        this.states = states;
        this.ufoShapes = UFO_SHAPES;
        this.scope = $scope;

        this.scope.$on("$stateChangeStart", function(event, tostate, toparam, fromstate, fromparam){
            if($scope.form.$dirty && !$window.confirm('If you leave, your sighting will not be saved')){
                event.preventDefault();
            }
        })
    
    }

    SightingFormController.$inject = ['states','$scope','$window'];

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