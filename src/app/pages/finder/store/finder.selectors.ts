import { createSelector } from '@ngrx/store';
import { IAppStore } from '@shared/models';
// Selector parts
import { IFinderStore, featureStoreName } from './finder.state';

export interface IFeatureAppStore extends IAppStore {
  [featureStoreName]: IFinderStore;
}

export const selectBerds = (state: IFeatureAppStore) => state[featureStoreName];

export const selectBreeds = createSelector(selectBerds, (state: IFinderStore) => state.breeds);
