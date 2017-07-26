import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Post } from '../model/post';
import { User } from '../model/user';
import { Currency } from '../model/currency';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {

//private apiUrl = 'https://jsonplaceholder.typicode.com';
private apiUrl = 'http://localhost:3004';
private nbpApiUrl = 'http://api.nbp.pl/api/exchangerates/';

constructor (private http: Http) {}

  getPosts(): Promise<Post[]> {
    return this.http.get(this.apiUrl + '/posts')
                .toPromise()
                .then(response => response.json() as Post[])
                .catch(this.handleError);
  }

  getUsers(): Promise<User[]> {
    return this.http.get(this.apiUrl + '/users')
                .toPromise()
                .then(response => response.json() as User[])
                .catch(this.handleError);
  }

  getUser(id: Number): Promise<User> {
    return this.getUsers().then(users => users.find(user => user.id === id));
  }

  getPost(id: Number): Promise<Post> {
    return this.getPosts().then(posts => posts.find(post => post.id === id));
  }

  getCurrencies(): Promise<Currency[]> {
    return this.http.get(this.nbpApiUrl + '/tables/a?format=json')
                .toPromise()
                .then(response => response.json()[0].rates as Currency[])
                .catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
