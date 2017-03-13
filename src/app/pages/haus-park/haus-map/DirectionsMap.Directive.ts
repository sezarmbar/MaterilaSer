import {GoogleMapsAPIWrapper} from 'angular2-google-maps/core/services/google-maps-api-wrapper';
import { Directive,  Input} from '@angular/core';
// http://stackoverflow.com/questions/16222330/geolocation-moving-only-google-maps-marker-without-reload-the-map

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
  map:any;
  constructor (private gmapsApi: GoogleMapsAPIWrapper) {
  }
  ngOnInit(){
    this.currentlocationFind();
    console.log('1 : '+this.currentPosition);
  }
  currentlocationFind(marker ?){
    if (!navigator.geolocation){
        console.log("<p>Geolocation is not supported by your browser</p>");
      }
     if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((location) => {
              this.currentPosition = new google.maps.LatLng(location.coords.latitude,location.coords.longitude);
              if(!(this.destination.lat == 0)){
                this.renderDirection();
              }
            });
        }
      this.gmapsApi.getNativeMap().then(map => {
      // ***************************************************************************************************
      this.map=map;
      this.setMaker();});
   }
  setMaker(){
    console.log(this.map );
    console.log('2 : '+this.currentPosition);
    
    var marker = new google.maps.Marker({
                  position: this.currentPosition,
                  title:"Hello World!",
                  icon: new google.maps.MarkerImage('assets/mobileimgs2.png',
                                                    new google.maps.Size(22,22),
                                                    new google.maps.Point(0,18),
                                                    new google.maps.Point(11,11)),
                  shadow: null,
                  zIndex: 999,
              });
              marker.setMap(this.map);
  }
  renderDirection(){
    this.gmapsApi.getNativeMap().then(map => {
      // ***************************************************************************************************
      this.map=map;
      this.setMaker();
      // ***************************************************************************************************

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
                      origin: this.currentPosition,
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