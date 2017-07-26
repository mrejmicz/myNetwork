import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Currency } from '../../model/currency';

@Component({
  selector: 'my-currencies',
  templateUrl: './currencies.component.html'
})

export class CurrenciesComponent implements OnInit {

  currencies: Currency[];

  constructor (private dataService: DataService) {}


  ngOnInit(): void {
    this.dataService.getCurrencies().then(currencies => this.currencies = currencies);
  }
}
