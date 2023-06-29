import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';

import {IExchange} from '../../interfaces';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {
  @Input()
  exchangeRate: IExchange;

  constructor() {
  };

  ngOnInit() {
  };
}
