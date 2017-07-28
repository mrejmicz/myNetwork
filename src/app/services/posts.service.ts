import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Post } from '../model/post';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class PostsService {

private apiUrl = 'http://localhost:3004';
private headers = new Headers({'ContentType': 'application/json'});

constructor (private http: Http) {}

  getPosts(): Promise<Post[]> {
    return this.http.get(this.apiUrl + '/posts')
                .toPromise()
                .then(response => response.json() as Post[])
                .catch(this.handleError);
  }

  getPost(id: Number): Promise<Post> {
    return this.http.get(this.apiUrl + '/posts/' + id)
                .toPromise()
                .then(response => response.json() as Post)
                .catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
