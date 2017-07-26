import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';
import { User } from '../../model/user';

@Component({
  selector: 'my-users',
  templateUrl: './users.component.html'

})

export class UsersComponent implements OnInit {

users: User[];

constructor(
  private dataService: DataService,
  private router: Router
) {}

  ngOnInit(): void {
    this.dataService.getUsers().then(users => this.users = users);
  }

  userDetail(id: number): void {
    this.router.navigate(['/users', this.users[id].id]);
  }

}
