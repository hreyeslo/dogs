import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// Shared service
import { SharedBreedsService } from '@shared/services';
// Service parts
import { FinderServiceApiModule } from './finder-service-api.module';
import { IFinderBreeds } from '../models/finder.model';
import { FinderService } from './finder.service';

@Injectable({
  providedIn: FinderServiceApiModule,
  useClass: FinderService,
  deps: [SharedBreedsService]
})
export abstract class AbstractFinderService {
  abstract loadBreeds(): Observable<IFinderBreeds>;
}
