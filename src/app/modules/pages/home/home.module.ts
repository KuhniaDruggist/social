import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from "./components/post/post.component";

@NgModule({
  declarations: [
    PostsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PostComponent,
  ]
})
export class HomeModule { }
