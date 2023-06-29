import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IExchange} from '../interfaces';
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class ExchangeService{

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IExchange[]> {
    return  this.httpClient.get<IExchange[]>(urls.exchange)
  };

}
