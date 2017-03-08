import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { ServiceAppRoutingModule } from './app-routing.module';

import { serivceModul } from './service/';

import { ParkTablePipe } from './pages/haus-park/pipe';

import { AppComponent } from './app.component';
import { SliderComponent } from './share/slider';
import { HomeComponent , DialogContent } from './pages/home';
import { HausParkComponent , HausMapComponent } from './pages/haus-park';

@NgModule({
  declarations: [
    AppComponent,
    DialogContent,
    SliderComponent,
    HomeComponent,
    HausParkComponent,
    HausMapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    MaterialModule,
    ServiceAppRoutingModule,
    ParkTablePipe,
    serivceModul
  ],
  entryComponents: [DialogContent],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
