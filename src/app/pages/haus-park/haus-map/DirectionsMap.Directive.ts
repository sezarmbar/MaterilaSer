import {GoogleMapsAPIWrapper} from 'angular2-google-maps/core/services/google-maps-api-wrapper';
import { Directive,  Input} from '@angular/core';
declare var google: any;

@Directive({
  selector: 'sebm-google-map-directions'
})
export class DirectionsMapDirective {
  @Input() origin;
  @Input() destination;
  @Input() directionsDisplay:any;
  @Input() elPlanRout:any;
  oriLat: number ;
  oriLng: number ;
  currentPosition: any;
  check:boolean = false;
  constructor (private gmapsApi: GoogleMapsAPIWrapper) {
  }
  ngOnInit(){
    console.log(this.destination);
    this.currentlocationFind();
  }
  currentlocationFind(){
    if (!navigator.geolocation){
        console.log("<p>Geolocation is not supported by your browser</p>");
      }
     if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((location) => {
              this.currentPosition = {lat:location.coords.latitude,lng:location.coords.longitude};
              
              if(!(this.destination.lat == 0.0)){
                this.renderDirection();
              }
            });
        }
   }
  renderDirection(){
    this.gmapsApi.getNativeMap().then(map => {
              let directionsService = new google.maps.DirectionsService;
              var me = this;
              //let directionsDisplay = new google.maps.DirectionsRenderer;
              this.directionsDisplay.setMap(map);
              this.directionsDisplay.setOptions({
                polylineOptions: {
                            strokeWeight: 4,
                            strokeOpacity: 0.7,
                            strokeColor:  '#00468c'
                        }
                });
              this.directionsDisplay.setDirections({routes: []});
              directionsService.route({
                      origin: {lat: this.currentPosition.lat, lng: this.currentPosition.lng},
                      destination: {lat: this.destination.lat, lng: this.destination.lng},
                      waypoints: [],
                      optimizeWaypoints: true,
                      travelMode: google.maps.DirectionsTravelMode.DRIVING
                      //travelMode: 'DRIVING'
                    }, function(response, status) {
                                if (status === 'OK') {
                                   me.directionsDisplay.setDirections(response);
                                } else {
                                  window.alert('Directions request failed due to ' + status);
                                }
              });
             this.directionsDisplay.setPanel(this.elPlanRout.nativeElement);
    });
  }
}