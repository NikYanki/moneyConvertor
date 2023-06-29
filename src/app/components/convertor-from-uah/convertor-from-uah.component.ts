import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {ExchangeService} from '../../services';
import {IExchange} from '../../interfaces';

@Component({
  selector: 'app-convertor-from-uah',
  templateUrl: './convertor-from-uah.component.html',
  styleUrls: ['./convertor-from-uah.component.css']
})
export class ConvertorFromUAHComponent implements OnInit {
  exchangeRates: IExchange[];
  contactForm: FormGroup;
  quantity: number;
  coefficient: number;
  sum: number | string;
  cc: string = "UAH";

  constructor(private exchangeService: ExchangeService, private formBuilder: FormBuilder) {
  };


  ngOnInit() {
    this.exchangeService.getAll().subscribe(value => this.exchangeRates = value)
    this.contactForm = this.formBuilder.group({
      convertor: [null]
    });
  };

  order() {
    if (this.contactForm.value.convertor === null) {
      this.coefficient = 1
    } else{
      this.coefficient = this.contactForm.value.convertor.rate
      this.cc = this.contactForm.value.convertor.cc
    }
  };

  change(event: any): void {

    this.quantity = event.target.value
  };

  submit(): void {
    this.sum = this.quantity / this.coefficient
  };

}
