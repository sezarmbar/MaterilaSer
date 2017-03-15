import { Component, ViewChild, ViewContainerRef, ElementRef, OnInit} from '@angular/core';
import {MdSidenav, MdDialog, MdDialogConfig} from "@angular/material";
import {MapsAPILoader} from 'angular2-google-maps/core';
import { ParkingsService , addresShared , ADDRESES } from '../../../service';

import { DirectionsMapDirective } from './DirectionsMap.Directive';

declare var google:any;

@Component({
  selector: 'app-haus-map',
  templateUrl: './haus-map.component.html',
  styleUrls: ['./haus-map.component.scss']
})
export class HausMapComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MdSidenav;
  @ViewChild(DirectionsMapDirective) directionRender;
  @ViewChild('planRoutMap') elPlanRout:ElementRef;
  public showside: boolean = false;
  public title: string = 'oldenburg';
  public oldenburgLatLng = { lat: 53.1432439, lng: 8.2214212 };
  public zoom: number = 14;
  public destenyInput = '';
  private parkhauseAddreses = ADDRESES;
  public destination = { lat: 0.0, lng: 0.0 };
  public autoPosition:any;
  public btnSideNave: string='chevron_right';
  public directionsDisplay:any;
  public opened:boolean = false;
  public watchID:any;
  public markerIcon:any;
  public currentPosition: any;
  public markerPos = { lat: 0.0, lng: 0.0 };
  public wakeLock;
  public styleArray = [
    {
      featureType: 'all',
      stylers: [
        { saturation: -80 }
      ]
    }, {
      featureType: 'road.arterial',
      elementType: 'geometry',
      stylers: [
        { hue: '#00ffee' },
        { saturation: 50 }
      ]
    },{
      featureType: 'poi.business',
      elementType: 'labels',
      stylers: [
        { visibility: 'off' }
      ]
    }
  ];

  constructor(private addresService: addresShared, private mapsAPILoader:MapsAPILoader) {
    if (this.directionsDisplay === undefined) { this.mapsAPILoader.load().then(() => {
      this.directionsDisplay = new google.maps.DirectionsRenderer;
      this.markerIcon = new google.maps.MarkerImage('assets/mobileimgs2.png',
                                                    new google.maps.Size(22, 22),
                                                    new google.maps.Point(0, 18),
                                                    new google.maps.Point(11, 11));
    });
    }
  }
   ngOnInit() {
     this.destenyInput = this.addresService.parkhausname;
     this.serchAddres();
     this.setMaker();
   }

   carePositsion() {
        navigator.geolocation.clearWatch(this.watchID);
    if (!navigator.geolocation) {
        console.log('<p>Geolocation is not supported by your browser</p>');
      }
     if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((location) => {
              this.autoPosition = {lat: location.coords.latitude, lng: location.coords.longitude};
              console.log('hausMap' + this.autoPosition);
              this.addresService.setAutoPosition(this.autoPosition);
            });
        }
   }
   resetPos(){
     this.addresService.resetCarePositsion();
   }

   serchAddres() {
     for (let i = 0 ; i < this.parkhauseAddreses.length; i++) {
       let parkHaus = this.parkhauseAddreses[i];
       if (parkHaus.name === this.destenyInput) {
         this.destination.lat = Number(parkHaus.lat);
         this.destination.lng = Number(parkHaus.lng);
       }
     }
   }
   toAuto(){
      this.destination.lat = Number(this.addresService.autoPosition.autoPoLat);
      this.destination.lng = Number(this.addresService.autoPosition.autoPoLng);
      this.directionRender.renderDirection();
   }
  closeOpenSidenave(){
    if (this.sidenav._opened === true) {
      this.opened =  false;
      this.sidenav.close();
      this.btnSideNave = 'chevron_right';
   }
   if (this.sidenav._isClosed === true) {
      this.opened =  true;
     this.sidenav.open();
     this.btnSideNave = 'chevron_left';
   }
  }

   setMaker(){
    let me = this;
     if (navigator.geolocation){
               // timeout at 20000 milliseconds (20 seconds)
      const options = {timeout: 20000, enableHighAccuracy: false, maximumAge: 0};
      this.watchID = navigator.geolocation.watchPosition(position => {
                                                                        me.markerPos.lat = position.coords.latitude;
                                                                        me.markerPos.lng = position.coords.longitude;
                                                                    },
                                                            err => {  if (err.code === 1) {
                                                                        console.log('Error: Access is denied!');
                                                                       }else if ( err.code === 2) {
                                                                         console.log('Error: Position is unavailable!');
                                                                       }
                                                                    }
                                                        , options);
     }else{
              console.log('Sorry, browser does not support geolocation!');
          }
  }
  ngOnDestroy() {
   navigator.geolocation.clearWatch(this.watchID);
  }
}