import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../../services/users.service';
import { User } from '../../model/user';

@Component({
  selector: 'my-users',
  templateUrl: './users.component.html'

})

export class UsersComponent implements OnInit {

users: User[];
userCreate: User;

constructor(
  private usersService: UsersService,
  private router: Router
) {}

  ngOnInit(): void {
    this.usersService.getUsers().then(users => this.users = users);
  }

  userDetail(id: number): void {
    this.router.navigate(['/users', this.users[id].id]);
  }

  createInit(): void {
    this.userCreate = new User();
  }

  createUser(): void {
    this.usersService.createUser(this.userCreate).then(() => this.usersService.getUsers().then(users => this.users = users));
  }

}
