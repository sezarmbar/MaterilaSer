import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {statusFilter, OpenCloseFilter, FreiPlatzeFilter,parkHausName} from "./table.pipe";

@NgModule({
  declarations:[statusFilter,OpenCloseFilter,FreiPlatzeFilter,parkHausName],
  imports:[CommonModule],
  exports:[statusFilter,OpenCloseFilter,FreiPlatzeFilter,parkHausName]
})

export class ParkTablePipe{}