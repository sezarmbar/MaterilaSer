import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {statusFilter, OpenCloseFilter, FreiPlatzeFilter,parkHausName,FreiPlatz,statusNameFilter} from "./table.pipe";

@NgModule({
  declarations:[statusFilter,OpenCloseFilter,FreiPlatzeFilter,parkHausName,FreiPlatz,statusNameFilter],
  imports:[CommonModule],
  exports:[statusFilter,FreiPlatz,OpenCloseFilter,FreiPlatzeFilter,parkHausName,statusNameFilter]
})

export class ParkTablePipe{}