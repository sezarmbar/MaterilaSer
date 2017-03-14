import {GoogleMapsAPIWrapper} from 'angular2-google-maps/core/services/google-maps-api-wrapper';
import { Directive,  Input,NgZone } from '@angular/core';
// http://stackoverflow.com/questions/16222330/geolocation-moving-only-google-maps-marker-without-reload-the-map
// import { GMapsService } from '../../../service';
import { MapsAPILoader } from 'angular2-google-maps/core';

@Directive({
  selector: 'sebm-google-map-directions'
})
export class DirectionsMapDirective {
  @Input() origin;
  @Input() destination;
  @Input() directionsDisplay:any;
  @Input() elPlanRout:any;
  public oriLat: number ;
  public oriLng: number ;
  public currentPosition: any;
  public check:boolean = false;

  constructor (private gmapsApi: GoogleMapsAPIWrapper) {
   
  }
  ngOnInit(){

    this.currentlocationFind();
  }

  currentlocationFind(){
    if (!navigator.geolocation){
        console.log("<p>Geolocation is not supported by your browser</p>");
      }
     if(navigator.geolocation){       
            navigator.geolocation.getCurrentPosition(
              (location) => {
              this.currentPosition = {lat:location.coords.latitude,lng:location.coords.longitude};
              if(!(this.destination.lat == 0 || this.destination.lat == undefined)){
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
                      origin:  {lat: this.currentPosition.lat, lng: this.currentPosition.lng},
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