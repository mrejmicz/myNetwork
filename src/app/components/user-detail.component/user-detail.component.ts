import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { User } from '../../model/user';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html'
})

export class UserDetailComponent implements OnInit {
user: User;

constructor (
  private dataService: DataService,
  private route: ActivatedRoute,
  private location: Location
) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.dataService.getUser(+params.get('id')))
      .subscribe(user => this.user = new User(user));
      
  }

  goBack(): void {
    this.location.back();
  }

}
