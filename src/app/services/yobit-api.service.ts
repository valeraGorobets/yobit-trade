import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

const backend = 'http://localhost:8000/backend';

@Injectable({
  providedIn: 'root'
})

export class YobitApiService {
  constructor(private http: Http) {
    console.log('YobitApiService is started');
  }

  public ticker(ticker: string ='ltc_btc'): Observable<any> {
    console.log('yobit-api.service.ts: ticker');
    return this.http.get(backend + '/ticker/' + ticker);
  }

  public getInfo(): Observable<any> {
    console.log('yobit-api.service.ts: getInfo');
    return this.http.get(backend + '/getInfo');
  }
}
