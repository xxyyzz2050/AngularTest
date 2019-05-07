import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { GetDataRoutingModule } from "./get-data-routing.module";
import { IndexComponent } from "./index/index.component";

@NgModule({
  declarations: [IndexComponent],
  imports: [CommonModule, GetDataRoutingModule, HttpClientModule]
})
export class GetDataModule {}
