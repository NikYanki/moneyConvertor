import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IExchange} from "../interfaces";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class ExchangeService{

  constructor() {
  }

  getAll(): Promise<IExchange[]> {
    return  fetch(urls.exchange).then(value => value.json())
  }

}
