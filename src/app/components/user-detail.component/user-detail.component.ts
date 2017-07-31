import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { User } from '../../model/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html'
})

export class UserDetailComponent implements OnInit {
user: User;
userEdit: User;

constructor (
  private usersService: UsersService,
  private route: ActivatedRoute,
  private location: Location,
  private router: Router
) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.usersService.getUser(+params.get('id')))
      .subscribe(user => this.user = user);
  }
  updateUser(): void {
    this.usersService.updateUser(this.userEdit).then(user => this.user = user);
  }
  deleteUser(): void {
    this.usersService.deleteUser(this.user.id).then(() => this.router.navigate(['/users']));
  }
  goBack(): void {
    this.location.back();
  }

  editInit(): void {
    this.userEdit  = this.user;
  }

}
