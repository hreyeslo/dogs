import { createAction, props } from '@ngrx/store';
// Actions parts
import { EFinderActions } from './finder.state';
import { IFinderBreeds } from '../models/finder.model';

// Public
export const loadBreeds = createAction(EFinderActions.LOAD_BREEDS);

// Private
export const loadBreedsSuccess = createAction(EFinderActions.LOAD_BREEDS_SUCCESS, props<{payload: IFinderBreeds}>());
export const loadBreedsError = createAction(EFinderActions.LOAD_BREEDS_ERROR);
