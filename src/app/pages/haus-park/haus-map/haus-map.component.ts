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
  @ViewChild('planRout') elPlanRout:ElementRef;
  showside :boolean =false;
  title: string = 'oldenburg';
  oldenburgLat: number = 53.1432439 ;
  oldenburgLng: number = 8.2214212 ;
  zoom: number = 14;
  destenyInput = '';
  parkhauseAddreses = ADDRESES;
  destination = { lat: 0.0, lng: 0.0 };
  autoPosition:any;
  btnSideNave: string='chevron_right';
  directionsDisplay:any;
  public opened:boolean = false;

  constructor(private addresService:addresShared,private mapsAPILoader:MapsAPILoader) {
    if(this.directionsDisplay === undefined){ this.mapsAPILoader.load().then(() => { 
      this.directionsDisplay = new google.maps.DirectionsRenderer; }); }
  }
   ngOnInit() {
     this.destenyInput = this.addresService.parkhausname;
     this.serchAddres();
   }

   carePositsion(){
    if (!navigator.geolocation){
        console.log("<p>Geolocation is not supported by your browser</p>");
      }
     if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((location) => {
              this.autoPosition = {lat:location.coords.latitude,lng:location.coords.longitude};
              this.addresService.setAutoPosition(this.autoPosition)
            });
        }
   }
   resetPos(){
     this.addresService.resetCarePositsion();
   }

   serchAddres(){
     for(let i =0;i<this.parkhauseAddreses.length;i++){
       let parkHaus = this.parkhauseAddreses[i];
       if(parkHaus.name===this.destenyInput){
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
    if(this.sidenav._opened==true){
      this.opened =  false;
      this.sidenav.close();
      this.btnSideNave = 'chevron_right';
   }
   if(this.sidenav._isClosed==true){
      this.opened =  true;
     this.sidenav.open();
     this.btnSideNave = 'chevron_left';
   }
  }

}