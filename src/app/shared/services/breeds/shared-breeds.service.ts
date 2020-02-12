import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
// Shared
import { ConfigManager, APP_CONFIG, IAppConfig } from '@core/config';
import { IBreedsList, IBreedsResponse } from '@shared/models';
// Service parts
import { AbstractSharedBreedsService } from './abstract-shared-breeds.service';

@Injectable()
export class SharedBreedsService implements AbstractSharedBreedsService {

  private readonly _httpClient: HttpClient;
  private readonly _apiHost: string;
  private readonly _randomImages: number;

  constructor(private _injector: Injector) {
    const appConfig: IAppConfig = _injector.get<ConfigManager>(APP_CONFIG).config;
    this._httpClient = _injector.get(HttpClient);
    this._apiHost = appConfig.host;
    this._randomImages = appConfig.randomImages;
  }

  getAllBreeds(): Observable<IBreedsList> {
    const url = `${this._apiHost}/breeds/list/all`;
    return this._httpClient.get<IBreedsResponse>(url)
      .pipe(switchMap(response => of(response.message)));
  }

  getBreedImage(path: string): Observable<any> {
    const url = `${this._apiHost}/breed/${path}/images/random/${this._randomImages}`;
    return this._httpClient.get<any>(url)
      .pipe(switchMap(response => of(response.message)));
  }

}
