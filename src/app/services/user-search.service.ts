import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../model/user';

@Injectable()
export class UserSearchService {

private apiUrl = 'http://localhost:3004';

  constructor (private http: Http) {}

  searchUser(term: string): Observable<User[]> {
    console.log(term);
    return this.http.get(`http://localhost:3004/users/?name=${term}`)
                .map(response => response.json() as User[]);
  }
}
