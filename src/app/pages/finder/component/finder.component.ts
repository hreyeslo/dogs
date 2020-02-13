import { skipWhile, switchMap, tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { SelectItems } from '@ui/select';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
// Component parts
import { selectBreeds, selectBreedImages } from '../store/finder.selectors';
import { loadBreeds, loadBreedImages } from '../store/finder.actions';
import { IFinderBreeds } from '../models/finder.model';

@Component({
  selector: 'dogs-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss']
})
export class FinderComponent implements OnInit {

  breeds$: Observable<SelectItems>;
  breedImages$: Observable<string[]>;
  loading: boolean;

  constructor(private _store: Store) {}

  ngOnInit(): void {
    this._store.dispatch(loadBreeds());
    this.breeds$ = this._store.select(selectBreeds).pipe(
      skipWhile<IFinderBreeds>(this._skipEmpty),
      switchMap(this._mapSelectItems)
    );
    this.breedImages$ = this._store.select(selectBreedImages)
      .pipe(
        tap(() => this.loading = false),
        skipWhile<string[]>(this._skipEmpty)
      );
  }

  fetchImages(path: string): void {
    this.loading = true;
    this._store.dispatch(loadBreedImages(path));
  }

  // Private
  _skipEmpty(items: IFinderBreeds | string[]): boolean {
    return (Array.isArray(items) ? items : Object.keys(items)).length === 0;
  }

  _mapSelectItems(breeds: IFinderBreeds): Observable<SelectItems> {
    return of(Object.keys(breeds).map(breedKey => ({name: breedKey, value: breeds[breedKey]})));
  }
}
