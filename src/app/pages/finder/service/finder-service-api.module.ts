import { NgModule } from '@angular/core';
// Shared module
import { SharedBreedsApiModule } from '@shared/services';

@NgModule({
  imports: [SharedBreedsApiModule]
})
export class FinderServiceApiModule {}
