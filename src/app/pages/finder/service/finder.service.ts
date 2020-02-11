import { Injectable } from '@angular/core';
// // Shared service
import { SharedBreedsService } from '@shared/services';
// Service parts
import { AbstractFinderService } from './abstract-finder.service';

@Injectable()
export class FinderService implements AbstractFinderService {

  constructor(private breedsService: SharedBreedsService) { }
}
