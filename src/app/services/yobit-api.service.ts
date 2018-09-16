import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

const yobitURL = 'https://yobit.net/api/3/';
@Injectable({
  providedIn: 'root'
})

export class YobitApiService {
  constructor(private http: Http) {
    console.log('YobitApiService is started');
  }

  public ticker(ticker: string ='ltc_btc-nmc_btc'): Observable<any> {
    return this.http.get(yobitURL + ticker);
  }
}
