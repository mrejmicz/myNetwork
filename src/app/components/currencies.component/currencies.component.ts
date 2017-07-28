import { Component, OnInit } from '@angular/core';

import { NbpService } from '../../services/nbp.service';
import { Currency } from '../../model/currency';

@Component({
  selector: 'my-currencies',
  templateUrl: './currencies.component.html'
})

export class CurrenciesComponent implements OnInit {

  currencies: Currency[];

  constructor (private nbpService: NbpService) {}


  ngOnInit(): void {
    this.nbpService.getCurrencies().then(currencies => this.currencies = currencies);
  }
}
