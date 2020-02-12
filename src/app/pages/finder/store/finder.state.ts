import { IFinderBreeds } from '../models/finder.model';

export const featureStoreName = 'Finder';

export enum EFinderActions {
  LOAD_BREEDS = 'LOAD_BREEDS',
  LOAD_BREEDS_SUCCESS = 'LOAD_BREEDS_SUCCESS',
  LOAD_BREEDS_ERROR = 'LOAD_BREEDS_ERROR'
}

export interface IFinderStore {
  breeds: IFinderBreeds;
}
