import {Component, ViewChild, AfterViewInit} from '@angular/core';
import { ParkingsService , addresShared , ADDRESES } from '../../service';
import {Observable} from 'rxjs/Rx';

// import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';
declare  var Swiper:any;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {

  public parkhausePicNum = ADDRESES;
  public picNum:number;
  private picNumObj:any;
  public picFileName;

  constructor(private service:ParkingsService,private addresService:addresShared) {}

  ngOnInit(){
    this.picFileName = localStorage.getItem('parkhausname');
    this.serchPicNum();
    this.picNumObj =Array.from(Array(this.picNum),(x,i)=>i);
  }
  ngAfterViewInit() {
      
      let swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        effect: 'coverflow',
        spaceBetween: 10,
    });
  }
  serchPicNum(){
     for(let i =0;i<this.parkhausePicNum.length;i++){
       let parkHaus = this.parkhausePicNum[i];
       if(parkHaus.name===this.picFileName){
         this.picFileName= this.picFileName.replace(/\s/g, '')
         this.picNum = Number(parkHaus.picNum);
       }
     }
   }
}