import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { DataService } from '../../services/data.service';
import { Post } from '../../model/post';
import { User } from '../../model/user';

@Component ({
  selector: 'post-detail',
  templateUrl: './post-detail.component.html'
})


export class PostDetailComponent implements OnInit {
post: Post;
user: User;

constructor (
  private dataService: DataService,
  private route: ActivatedRoute,
  private location: Location,
  private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.dataService.getPost(+params.get('id')))
      .subscribe(post => {
        this.post = post
        this.dataService.getUser(this.post.userId).then(user => this.user = user);
      });

  }

  userDetail(): void {
    this.router.navigate(['/users', this.user.id]);
  }

  goBack(): void {
    this.location.back();
  }

}
