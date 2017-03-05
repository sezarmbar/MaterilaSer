import {Component, ViewChild, AfterViewInit} from '@angular/core';
import {KSSwiperContainer, KSSwiperSlide} from 'angular2-swiper';
declare  var Swiper:any;
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements AfterViewInit {

   // this is how you get access to the child component
  @ViewChild(KSSwiperContainer) swiperContainer: KSSwiperContainer;

  slides: Array<any>;
  example2SwipeOptions: any;

  constructor() {
    this.example2SwipeOptions = {
      slidesPerView: 4,
      loop: false,
      spaceBetween: 5
    };

    this.slides = [
      { number: 10 },
      { number: 11 }
    ];

    
  }

  moveNext() {
    this.swiperContainer.swiper.slideNext();
  }

  movePrev() {
    this.swiperContainer.swiper.slidePrev();
  }

  getRandom(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  addSlide() {
    this.slides.push({
      number: this.getRandom(12, 30)
    });
  }

  ngAfterViewInit() {
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        effect: 'coverflow',
        spaceBetween: 10,
    });
    
    console.log(this.swiperContainer);
  }

}