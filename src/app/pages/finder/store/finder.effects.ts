import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
// Effects parts
import { AbstractFinderService } from '../service/abstract-finder.service';
import { EFinderActions } from './finder.state';

@Injectable()
export class FinderEffects {

  loadBreeds$ = createEffect(() =>
    this._actions$.pipe(
      ofType(EFinderActions.LOAD_BREEDS),
      switchMap(() => this._finderService.loadBreeds()
        .pipe(
          map(breeds => ({type: EFinderActions.LOAD_BREEDS_SUCCESS, payload: breeds})),
          catchError(() => of({type: EFinderActions.LOAD_BREEDS_ERROR}))
        )
      )
    )
  );

  constructor(
    private _actions$: Actions,
    private _finderService: AbstractFinderService
  ) {}
}
