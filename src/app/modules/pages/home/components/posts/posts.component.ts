import { Component } from '@angular/core';
import { PostInfoModel } from '../../../../../common/models/post-info.model';
import { posts } from '../../../../../common/posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],

})
export class PostsComponent {

  public posts: Array<PostInfoModel>;
  constructor() {
    this.posts = posts;
  }

}
