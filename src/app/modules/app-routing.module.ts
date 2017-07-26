import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostsComponent } from '../components/posts.component/posts.component';
import { UsersComponent } from '../components/users.component/users.component';
import { UserDetailComponent } from '../components/user-detail.component/user-detail.component';
import { PostDetailComponent } from '../components/post-detail.component/post-detail.component';
import { CurrenciesComponent } from '../components/currencies.component/currencies.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/:id',
    component: UserDetailComponent
  },
  {
    path: 'posts/:id',
    component: PostDetailComponent
  },
  {
    path: 'currencies',
    component: CurrenciesComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}
