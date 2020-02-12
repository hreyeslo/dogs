import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
// Shared models
import { API_CONFIG, IBreedsList, IBreedsResponse, IApiConfig } from '@shared/models';

@Injectable()
export class SharedBreedsService {

  private readonly _httpClient: HttpClient;
  private readonly _apiHost: string;

  constructor(private _injector: Injector) {
    this._httpClient = _injector.get(HttpClient);
    this._apiHost = _injector.get<IApiConfig>(API_CONFIG).host;
  }

  getAllBreeds(): Observable<IBreedsList> {
    const url = this._apiHost + '/breeds/list/all';
    return this._httpClient.get<IBreedsResponse>(url)
      .pipe(switchMap(response => of(response.message)));
  }

}
