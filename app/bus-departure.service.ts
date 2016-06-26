import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { BusDeparture } from './bus-departure';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class BusDepartureService {
  private url: string = 'http://localhost/departures/';

  constructor(private http: Http) {
  }

  getDepartures(from: string, direction: string): Observable<BusDeparture[]> {
    var url = this.url + `${from}/${direction}`;

    return Observable
      .interval(5 * 1000)
      .startWith(0)
      .switchMap(() => this.http.get(url))
      .map((response: Response) => response.json());
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}