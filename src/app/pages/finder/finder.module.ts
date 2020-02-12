import { NbLayoutModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
// UI module
import { SelectModule } from '@ui/select';
import { PhotoModule } from '@ui/photo';
// Module parts
import { FinderServiceApiModule } from './service/finder-service-api.module';
import { FinderComponent } from './component/finder.component';
import { FinderRoutingModule } from './finder-routing.module';
import { featureStoreName } from './store/finder.state';
import { FinderEffects } from './store/finder.effects';
import { finderReducer } from './store/finder.reducer';

@NgModule({
  declarations: [
    FinderComponent
  ],
  imports: [
    CommonModule,
    FinderRoutingModule,
    EffectsModule.forFeature([FinderEffects]),
    StoreModule.forFeature(featureStoreName, finderReducer),
    FinderServiceApiModule,
    NbLayoutModule,
    SelectModule,
    PhotoModule
  ]
})
export class FinderModule {}
