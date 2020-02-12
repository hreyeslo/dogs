import { InjectionToken } from '@angular/core';
import { ConfigManager } from '@shared/config';

// Interface
export interface IAppConfig {
  host: string;
  randomImages: number;
}

export interface IAppEnv {
  production: boolean;
  configFile: string;
}

export interface IAppStore {
  [key: string]: any;
}

// Tokens
export const APP_CONFIG = new InjectionToken<ConfigManager>('APP_CONFIG');
export const APP_ENVIRONMENT = new InjectionToken<IAppEnv>('APP_ENVIRONMENT');
