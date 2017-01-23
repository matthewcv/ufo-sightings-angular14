describe("the report sighting controller", function(){
    var aSighting = {"id":126134,"description":"Flash of light across Sydney, Australia, sky.\n\nWhat i saw was a flash of light (looked to be triangular) move from East/South East to West/North West on a clear night no clouds at all. The object moved from as far as I could physically see in about 1 second, then lifted outwards into the atmosphere. \n\nThe light was very bright but at the same time hazy like what you would see with lightning flashes through storm clouds. The object was extremely large. If i had to put into perspective, if you look at the Southern Cross from earth.. we have the 2 pointers.. this object was as wide as the gap between the 2 pointers so it was HUGE. \n\nIt seemed to me that this was very high in the night sky so I can only imagine how big it was but as I mentioned this was on a clear night and I heard no sounds, although it looked to move faster than the speed of light.","occurred":"2016-03-01 23:30","reported":"2016-03-01 16:48","posted":"2016-03-04","shape":"Unknown","duration":"2 seconds","city":"Sydney (Australia)","state":null}


    beforeEach(module('ufo-sightings'));

    
    
    it("should save the sighting when the UfoSightingReported event is emitted", inject(function($controller,$rootScope,$q){
        //$controller is a service that we can inject that is used to instanciate controllers. 
        //It will inject the instance with whatever it wants but you can also override services to inject. 


        //we know that the ReportSightingController wants to use the sightings service but that's tested somewhere else
        //we'll create a mock of it here so that we can control what it does.    
        //a spy is a fake function. It's something that jasmine gives us so that we can watch what happens to a function.    
        var saveUfoSightingReportSpy = jasmine.createSpy("saveUfoSightingReport");
        //this is where we tell the spy function what to return when it is invoked by the controller. 
        //In this case, I'm telling it to return a promise that resolves to an instance of aSighting since that's what the actual function does.
        saveUfoSightingReportSpy.and.returnValue($q.when(aSighting));

        //this is the mock service that has the spy function. 
        var mockSightingService = {
            saveUfoSightingReport: saveUfoSightingReportSpy
        }

        //get the controller instance, overriding services that we want to have control over.
        var rsController = $controller("ReportSightingController", {$scope:$rootScope.$new(),ufoSightingsService: mockSightingService});

        //simulate the event being emitted
        $rootScope.$broadcast("UfoSightingReported", aSighting);

        //now verify that the spy function was actually invoked
        expect(saveUfoSightingReportSpy).toHaveBeenCalledWith(aSighting);
    }))

})