import {Component, ViewChild, AfterViewInit} from '@angular/core';
// import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';
declare  var Swiper:any;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {

  ngAfterViewInit() {
      let swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        effect: 'coverflow',
        spaceBetween: 10,
    });
  }
  
}