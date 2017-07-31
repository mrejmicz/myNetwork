import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { User } from '../model/user';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsersService {

private apiUrl = 'http://localhost:3004';
private headers = new Headers({'ContentType': 'application/json'});

constructor (private http: Http) {}

  getUsers(): Promise<User[]> {
    return this.http.get(this.apiUrl + '/users')
                .toPromise()
                .then(response => response.json() as User[])
                .catch(this.handleError);
  }

  getUser(id: Number): Promise<User> {
    return this.http.get(this.apiUrl + '/users/' + id)
                .toPromise()
                .then(response => response.json() as User)
                .catch(this.handleError);
  }

  createUser(user: User): Promise<User> {
    return this.http.post(this.apiUrl + '/users', user, this.headers)
                .toPromise()
                .then(response => response.json() as User)
                .catch(this.handleError);
  }

  updateUser(user: User): Promise<User> {
    return this.http.put(this.apiUrl + '/users/' + user.id, user, this.headers)
                .toPromise()
                .then(response => response.json() as User)
                .catch(this.handleError);
  }

  deleteUser(id: Number): Promise<void> {
    return this.http.delete(this.apiUrl + '/users/' + id, {headers: this.headers})
                .toPromise()
                .then(() => null)
                .catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
