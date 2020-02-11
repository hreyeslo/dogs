import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// UI module
import { SelectModule } from '@ui/select';
// Module parts
import { FinderRoutingModule } from './finder-routing.module';
import { FinderComponent } from './component/finder.component';
import { FinderServiceApiModule } from './service/finder-service-api.module';

@NgModule({
  declarations: [
    FinderComponent
  ],
  imports: [
    CommonModule,
    FinderRoutingModule,
    FinderServiceApiModule,
    SelectModule
  ]
})
export class FinderModule {}
