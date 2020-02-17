import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
// Shared models
import { IBreedsList } from '@shared/models';
// Service parts
import { SharedBreedsApiModule } from './shared-breeds-api.module';
import { SharedBreedsService } from './shared-breeds.service';

@Injectable({
  providedIn: SharedBreedsApiModule,
  useClass: SharedBreedsService,
  deps: [Injector]
})
export abstract class AbstractSharedBreedsService {
  abstract getAllBreeds(): Observable<IBreedsList>;

  abstract getBreedImage(path: string): Observable<string[]>;
}
