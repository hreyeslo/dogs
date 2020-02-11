import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SharedBreedsApiModule } from './shared-breeds-api.module';
import { SharedBreedsService } from './shared-breeds.service';

@Injectable({
  providedIn: SharedBreedsApiModule,
  useClass: SharedBreedsService,
  deps: [HttpClient]
})
export abstract class AbstractSharedBreedsService {

}
