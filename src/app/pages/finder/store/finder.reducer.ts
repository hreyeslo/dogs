import { createReducer, on, Action } from '@ngrx/store';
// Reducer parts
import { loadBreedsSuccess, loadBreedsError } from './finder.actions';
import { IFinderStore } from './finder.state';

export const initialState: IFinderStore = {
  breeds: {}
};

const _finderReducer = createReducer(initialState,
  on(loadBreedsSuccess, (state, {payload}) => ({...state, breeds: payload})),
  on(loadBreedsError, state => {
    console.error('Empty breeds');
    return state;
  })
);

export function finderReducer(state: IFinderStore | undefined, action: Action) {
  return _finderReducer(state, action as any);
}
