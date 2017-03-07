import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {statusFilter, OpenCloseFilter, FreiPlatzeFilter} from "./table.pipe";

@NgModule({
  declarations:[statusFilter,OpenCloseFilter,FreiPlatzeFilter],
  imports:[CommonModule],
  exports:[statusFilter,OpenCloseFilter,FreiPlatzeFilter]
})

export class ParkTablePipe{}