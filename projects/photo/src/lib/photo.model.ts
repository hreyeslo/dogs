import { InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IPhotoLiterals {
  title: string;
}

export type PhotoLiterals = BehaviorSubject<IPhotoLiterals>;

export const PHOTO_LITERALS = new InjectionToken<PhotoLiterals>('PHOTO_LITERALS');
