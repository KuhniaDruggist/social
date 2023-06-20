import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { CommentsComponent } from './components/comments/comments.component';

@NgModule({
  declarations: [
    PostsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PostComponent,
    CommentsComponent,
  ]
})
export class HomeModule { }
