import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { CityBikeStation } from './city-bike-station';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CityBikeService {
  private url: string = 'http://localhost/citybike/availability';

  constructor(private http: Http) {
  }

  getAvailability(): Observable<CityBikeStation[]> {
    return Observable
      .interval(5 * 1000)
      .startWith(0)
      .switchMap(() => this.http.get(this.url))
      .map((response: Response)=> response.json());
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}