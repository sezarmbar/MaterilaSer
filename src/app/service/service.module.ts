import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import { ParkingsService } from './parking.service';
import { addresShared } from './addresShared.service';

@NgModule({
  declarations:[],
  imports:[CommonModule],
  exports:[],
  providers:[ParkingsService, addresShared]
})

export class serivceModul{}