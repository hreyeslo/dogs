import { InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ISelectItem {
  name: string;
  value: string;
}

export type SelectItems = ISelectItem[];

export interface ISelectLiterals {
  placeholder: string;
}

export type SelectLiterals = BehaviorSubject<ISelectLiterals>;

export const SELECT_LITERALS = new InjectionToken<SelectLiterals>('SELECT_LITERALS');
