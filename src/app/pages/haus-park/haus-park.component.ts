import { Component, OnInit , ViewChild } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {MdSidenav,MdTabGroup} from "@angular/material";
import { SliderComponent } from '../../share/slider';
import { ParkingsService , addresShared } from '../../service';

@Component({
  selector: 'app-haus-park',
  templateUrl: './haus-park.component.html',
  styleUrls: ['./haus-park.component.scss']
})
export class HausParkComponent implements OnInit {
   @ViewChild('tabsEnd') tabEnd:MdTabGroup;
   @ViewChild('sidenavEnd') sidenav: MdSidenav;
   @ViewChild(SliderComponent) sliderChild;
   private slideInit:boolean = false;
   private Parkhaus:any;
   private lastTime:any;
   private currentPark={};
   
   constructor(private service:ParkingsService,private addresService:addresShared) {}

  ngOnInit() {
    this.callService() ;
  }

  callService() {
    this.service.getParks().subscribe(
      (parkings) => {
        this.Parkhaus = parkings.Daten.Parkhaus;
        this.lastTime = parkings.Daten.Zeitstempel;
      });
  }
  showPark(park) {
    this.currentPark=park; 
    this.addresService.setParkHausName(park.Name);
    this.tabEnd.selectedIndex = 0;
    this.sidenav.open();
  }
  onSelectChange = (event: any): void => {
    if(event.index === 1 ){
      this.slideInit = true;
    }else{
      this.slideInit = false;
    }
  }

}
