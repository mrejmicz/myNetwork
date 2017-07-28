import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Currency } from '../model/currency';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class NbpService {

private nbpApiUrl = 'http://api.nbp.pl/api/exchangerates/';
private headers = new Headers({'ContentType': 'application/json'});

constructor (private http: Http) {}

  getCurrencies(): Promise<Currency[]> {
    return this.http.get(this.nbpApiUrl + '/tables/a?format=json')
                .toPromise()
                .then(response => response.json()[0].rates as Currency[])
                .catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
