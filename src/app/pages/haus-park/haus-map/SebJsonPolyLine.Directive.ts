import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core/services/google-maps-api-wrapper';
import { Directive, Input, NgZone } from '@angular/core';
import { MapsAPILoader } from 'angular2-google-maps/core';

@Directive({
  selector: 'sebm-google-map-json-polyline'
})
export class JsonPolyLineDirective {
  @Input() lines;
  @Input() strokeColor;
  @Input() strokeWeight;
  @Input() strokeOpacity;
  public map: any;
  constructor(private gmapsApi: GoogleMapsAPIWrapper, private mapsAPILoader: MapsAPILoader) {
  }
  ngOnInit() {
    this.renderPolyline();
  }
  renderPolyline() {
    this.gmapsApi.getNativeMap().then(map => {
      const me = this;
      me.map = map;

      for (var i = 0; i < this.lines.length; i++) {
        var poly = new google.maps.Polyline({
          path: this.lines[i],
          map: map,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 0.7,
          strokeWeight: 10
        });
      }
    });
  }
}