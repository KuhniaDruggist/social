import { Component, OnInit } from '@angular/core';
import { PostInfoModel } from '../../../../../common/models/post-info.model';
import { PostsService } from '../../../../../common/services/posts.service';
import { DataProviderService } from '../../../../../common/services/data-provider.service';
import { KeysForDataProvides } from '../../../../../common/constants/keys-for-data-provides';
import { CookieService } from '../../../../../common/services/cookie.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],

})
export class PostsComponent implements OnInit {

  public posts: Array<PostInfoModel> | undefined;

  constructor(
    private readonly postsService: PostsService,
    private readonly dataProviderService: DataProviderService,
    private readonly cookieService: CookieService,
  ) { }

  public ngOnInit(): void {
    this.initPosts();
  }

  private initPosts(): void {
    const userId = this.dataProviderService.getSavedData(KeysForDataProvides.SAVE_USER_ID)
      || this.cookieService.getCookie('IS_AUTH');
    this.posts = this.postsService.getPosts(userId);
  }

}
