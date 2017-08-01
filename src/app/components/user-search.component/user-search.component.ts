import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { UserSearchService } from '../../services/user-search.service';
import { User } from '../../model/user';

@Component({
  selector: 'user-search',
  templateUrl: './user-search.component.html',
  styleUrls: [ './user-search.component.css' ],
  providers: [ UserSearchService ]
})

export class UserSearchComponent implements OnInit {

  users: Observable<User[]>;
  private searchTerms = new Subject<string>();

  constructor (
    private userSearchService: UserSearchService,
    private router: Router) {}

    searchUser(term: string): void {
      this.searchTerms.next(term);
    }

  ngOnInit(): void {
    this.users = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.userSearchService.searchUser(term) : Observable.of<User[]>([]))
      .catch(error => {
        console.log(error);
        return  Observable.of<User[]>([]);
      });
    }

    gotoDetail(user: User): void {
      this.router.navigate(['/users', user.id]);
    }

}
