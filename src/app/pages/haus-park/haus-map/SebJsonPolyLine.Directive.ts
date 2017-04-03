import { GoogleMapsAPIWrapper } from 'angular2-google-maps/core/services/google-maps-api-wrapper';
import { Directive, Input, NgZone } from '@angular/core';
import { MapsAPILoader } from 'angular2-google-maps/core';
import { ParkingsService } from '../../../service';

@Directive({
  selector: 'sebm-google-map-json-polyline'
})
export class JsonPolyLineDirective {
  @Input() lines;
  @Input() strokeColor = '#FF0000';
  @Input() strokeWeight;
  @Input() strokeOpacity;
  public map: any;
  public polyline = [];
  private prevInfoWindows: any;
  private InfofromService: any;

  constructor(private gmapsApi: GoogleMapsAPIWrapper, private mapsAPILoader: MapsAPILoader, private parkingsService: ParkingsService) {
  }
  ngOnInit() {
    this.renderPolyline();
  }
  ngOnDestroy() {
    this.deleteLine()

  }
  getLinInfo(id) {
     return this.parkingsService.getStrassenInfoMarker(id).subscribe(
      (info) => info);
  }
  renderPolyline() {
    const me = this;
    this.gmapsApi.getNativeMap().then(map => {
      me.map = map;
      for (let pline of this.lines) {
        console.log(this.InfofromService);
        const line = new google.maps.Polyline({
          path: pline[1],
          map: map,
          id:pline[0],
          geodesic: true,
          strokeColor: me.strokeColor,
          strokeOpacity: 0.7,
          strokeWeight: 10
        });
        this.polyline.push(line)
        // this.setInfoWindows(line);
      }
    });
  }
  setInfoWindows(line) {
    let me = this;
    var infoWindow;
    google.maps.event.addListener(line, 'click', event => {
      let infos; 
      this.parkingsService.getStrassenInfoMarker(line.id).subscribe(
      (info) => infos=info)
      this.getLinInfo(line.id);
      infoWindow = new google.maps.InfoWindow({
        content: '<div class="info_content">' + this.InfofromService + '</div>'
      });
      if (this.prevInfoWindows) {
        this.prevInfoWindows.close();
      }
      this.prevInfoWindows = infoWindow;
      infoWindow.setPosition(event.latLng);
      infoWindow.open(this.map, line);
    });
    google.maps.event.addListener(this.map, 'click', event => {
      infoWindow.close();
    });
  }
  deleteLine() {
    for (let line of this.polyline) {
      line.setMap(null);
    }
  }
}