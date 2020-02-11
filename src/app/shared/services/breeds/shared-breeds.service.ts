import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SharedBreedsService {

  constructor(private http: HttpClient) {
    console.log('test');
  }
}
