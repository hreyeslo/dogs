import { Injectable } from '@angular/core';
// Shared service
import { SharedBreedsService } from '@shared/services';
// Service parts
import { FinderService } from './finder.service';
import { FinderServiceApiModule } from './finder-service-api.module';

@Injectable({
  providedIn: FinderServiceApiModule,
  useClass: FinderService,
  deps: [SharedBreedsService]
})
export abstract class AbstractFinderService {

}
