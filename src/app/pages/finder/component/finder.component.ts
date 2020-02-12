import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// Component parts
import { loadBreeds } from '../store/finder.actions';
import { IFinderBreeds } from '../models/finder.model';
import { Observable } from 'rxjs';
import { selectBreeds } from '../store/finder.selectors';
import { skipWhile } from 'rxjs/operators';

@Component({
  selector: 'dogs-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss']
})
export class FinderComponent implements OnInit {

  breeds$: Observable<IFinderBreeds>;

  constructor(private _store: Store) { }

  ngOnInit(): void {
    this._store.dispatch(loadBreeds());
    this.breeds$ = this._store.select(selectBreeds).pipe(skipWhile(this._skipEmptyBreedsObject));

    this.breeds$.subscribe(t => console.log(t));
  }

  // Private
  _skipEmptyBreedsObject(breeds: IFinderBreeds): boolean {
    return Object.keys(breeds).length === 0;
  }
}
