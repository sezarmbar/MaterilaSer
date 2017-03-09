import { Component, OnInit , ViewChild, ElementRef } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {MdSidenav,MdTabGroup} from "@angular/material";
import { SliderComponent } from '../../../share/slider';
import { ParkingsService , addresShared } from '../../../service';
import { SideMapComponent } from '../side-map';

@Component({
  selector: 'app-haus-table',
  templateUrl: './haus-table.component.html',
  styleUrls: ['./haus-table.component.scss']
})
export class HausTableComponent implements OnInit {
   @ViewChild('tabsEnd') tabEnd:MdTabGroup;
   @ViewChild('sidenavEnd') sidenav: MdSidenav;
   @ViewChild('planRout') elPlanRout:ElementRef;
   @ViewChild(SideMapComponent) sideMap;
   @ViewChild(SliderComponent) sliderChild;
   private slideInit:boolean = false;
   private Parkhaus:any;
   private lastTime:any;
   private currentPark={};
   private subscription;
   constructor(private service:ParkingsService,private addresService:addresShared) {}

  ngOnInit() {
    this.callService() ;
    // this.sideMap.currentlocationFind();
    this.subscription = Observable.interval(2000 * 60).subscribe(x => {
      this.callService();
    });
  }

  callService() {
    this.service.getParks().subscribe(
      (parkings) => {
        this.Parkhaus = parkings.Daten.Parkhaus;
        this.lastTime = parkings.Daten.Zeitstempel;
      });
  }
  onCloseSidenavEnd(){
    this.tabEnd.selectedIndex = 0;
  }
  showPark(park) {
    this.currentPark=park; 
    this.addresService.setParkHausName(park.Name);
    this.sidenav.open();
  }
  onSelectChange = (event: any): void => {
    if(event.index === 1 ){
      this.slideInit = true;
    }else{
      this.slideInit = false;
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
