import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {IExchange} from '../../interfaces';
import {ExchangeService} from '../../services';

@Component({
  selector: 'app-convertor-in-uah',
  templateUrl: './convertor-in-uah.component.html',
  styleUrls: ['./convertor-in-uah.component.css']
})
export class ConvertorInUahComponent implements OnInit {
  exchangeRates: IExchange[];
  contactForm: FormGroup;
  quantity: number;
  coefficient: number;
  sum: number | string = "";

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
    } else
      this.coefficient = this.contactForm.value.convertor

  };

  change(event: any): void {

    this.quantity = event.target.value
  };

  submit(): void {
    this.sum = this.quantity * this.coefficient
  };

}
