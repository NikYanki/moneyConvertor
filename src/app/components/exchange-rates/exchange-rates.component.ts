import {Component, OnInit} from '@angular/core';
import {IExchange} from "../../interfaces";
import {ExchangeService} from "../../services";

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.css']
})
export class ExchangeRatesComponent implements OnInit {
  exchangeRates: IExchange[]

  constructor(private exchangeService: ExchangeService) {
  }

  ngOnInit() {
    this.exchangeService.getAll().then(value => this.exchangeRates =value)
  }
}
