import {GoogleMapsAPIWrapper} from 'angular2-google-maps/core/services/google-maps-api-wrapper';
import { Directive,  Input, NgZone } from '@angular/core';
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
  public icons:any;
  public map:any;
  constructor (private gmapsApi: GoogleMapsAPIWrapper, private mapsAPILoader:MapsAPILoader) {
    this.mapsAPILoader.load().then(() => {
      this.icons = {
            start: new google.maps.MarkerImage(
            // URL
            'assets/start.png',
            // (width,height)
            // new google.maps.Size( 44, 44 ),
            // The origin point (x,y)
            // new google.maps.Point( 0, 0 ),
            // The anchor point (x,y)
            // new google.maps.Point( 0, 0 )
            ),
            end: new google.maps.MarkerImage(
            // URL
            'assets/end.png',
            // (width,height)
            // new google.maps.Size( 44, 44 ),
            // The origin point (x,y)
            // new google.maps.Point( 0, 0 ),
            // The anchor point (x,y)
            // new google.maps.Point( 0, 0 )
      )};
    });
  }
  ngOnInit() {
    this.currentlocationFind();
  }

  currentlocationFind(){
    if (!navigator.geolocation) {
        console.log('<p>Geolocation is not supported by your browser</p>');
      }
     if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              (location) => {
              this.currentPosition = {lat: location.coords.latitude,lng: location.coords.longitude};
              if(!(this.destination.lat === 0 || this.destination.lat === undefined)) {
                this.renderDirection();
              }
            });
        }
   }
    renderDirection(){
    this.gmapsApi.getNativeMap().then(map => {
              const me = this;
              me.map = map;
              const directionsService = new google.maps.DirectionsService;
              this.directionsDisplay.setMap(map);
              this.directionsDisplay.setOptions({
                polylineOptions: {
                            strokeWeight: 4,
                            strokeOpacity: 0.7,
                            strokeColor:  '#ff7400'
                        }
                });
             // remove default markers
              this.directionsDisplay.setOptions( { suppressMarkers: true } );
             //
              this.directionsDisplay.setDirections({routes: []});
              directionsService.route({
                      origin:  {lat: this.currentPosition.lat, lng: this.currentPosition.lng},
                      destination: {lat: this.destination.lat, lng: this.destination.lng},
                      waypoints: [],
                      optimizeWaypoints: true,
                      travelMode: google.maps.DirectionsTravelMode.DRIVING
                      // travelMode: 'DRIVING'
                    }, function(response, status) {
                                if (status === google.maps.DirectionsStatus.OK) {
                                   me.directionsDisplay.setDirections(response);
                                   var leg = response.routes[ 0 ].legs[ 0 ];
                                   me.makeMarker( leg.start_location, me.icons.start, "title" );
                                   me.makeMarker( leg.end_location, me.icons.end, 'title' );
                                } else {
                                  window.alert('Directions request failed due to ' + status);
                                }
              });
             this.directionsDisplay.setPanel(this.elPlanRout.nativeElement);
    });
  }
  makeMarker( position, icon, title ) {
    new google.maps.Marker({
      position: position,
      map: this.map,
      icon: icon,
      animation: google.maps.Animation.DROP,
      title: title
    });
  }
}