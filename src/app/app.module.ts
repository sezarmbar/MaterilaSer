import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';

import {KSSwiperModule} from 'angular2-swiper';

import { AppComponent, DialogContent } from './app.component';
import { SliderComponent } from './share/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogContent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    MaterialModule
  ],
  entryComponents: [DialogContent],
  providers: [KSSwiperModule],
  bootstrap: [AppComponent] 
})
export class AppModule { }
