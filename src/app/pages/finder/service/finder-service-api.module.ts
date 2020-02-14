import { NgModule } from '@angular/core';
// Shared module
import { SharedBreedsApiModule } from 'src/app/shared/services_api';

@NgModule({
  imports: [SharedBreedsApiModule]
})
export class FinderServiceApiModule {}
