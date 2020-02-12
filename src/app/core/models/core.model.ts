// Interface
import { InjectionToken } from '@angular/core';

import { ConfigManager } from '../config/config';

export interface IAppConfig {
  host: string;
  randomImages: number;
}

export interface IAppEnv {
  production: boolean;
  configFile: string;
}

// Tokens
export const APP_CONFIG = new InjectionToken<ConfigManager>('APP_CONFIG');
export const APP_ENVIRONMENT = new InjectionToken<IAppEnv>('APP_ENVIRONMENT');
