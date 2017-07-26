import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../../model/post';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'my-posts',
  templateUrl: './posts.component.html'
})

export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(
    private dataService: DataService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.dataService.getPosts().then(posts => this.posts = posts);
  }

  postDetail(id: number): void {
    this.router.navigate(['/posts', this.posts[id].id]);
  }

}
