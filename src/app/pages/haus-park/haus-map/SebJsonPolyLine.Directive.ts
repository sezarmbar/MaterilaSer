import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core/services/google-maps-api-wrapper';
import { Directive, Input, NgZone } from '@angular/core';
import { MapsAPILoader } from 'angular2-google-maps/core';

@Directive({
  selector: 'sebm-google-map-json-polyline'
})
export class JsonPolyLineDirective {
  @Input() lines;
  @Input() strokeColor='#FF0000';
  @Input() strokeWeight;
  @Input() strokeOpacity;
  public map: any;
  public polyline = [];
  constructor(private gmapsApi: GoogleMapsAPIWrapper, private mapsAPILoader: MapsAPILoader) {
  }
  ngOnInit() {
    this.renderPolyline();
  }
  ngOnDestroy() { this.deleteLine() }
  renderPolyline() {
    const me = this;
    this.gmapsApi.getNativeMap().then(map => {
      me.map = map;
      for (let i = 0; i < this.lines.length; i++) {
        const line = new google.maps.Polyline({
          path: this.lines[i],
          map: map,
          geodesic: true,
          strokeColor: me.strokeColor,
          strokeOpacity: 0.7,
          strokeWeight: 10
        });
        me.polyline.push(line)
      }
    });
  }
  deleteLine() {
    for (let line of this.polyline) {
      line.setMap(null);
    }
  }
}