import { InjectionToken } from '@angular/core';

// Tokens
export const API_CONFIG = new InjectionToken<string>('API_CONFIG');

// Interface
export interface IApiConfig {
  host: string;
}

export interface IAppStore {
  [key: string]: any;
}
