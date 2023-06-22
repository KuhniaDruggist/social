import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { PostInfoModel } from '../models/post-info.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private readonly http: HttpClient;

  private posts: { [key: string]: Array<PostInfoModel> };

  constructor(
    handler: HttpBackend,
  ) {
    this.posts = {};
    this.http = new HttpClient(handler);
  }

  /** Imitation BD. Function to link userId to posts */
  public setPostsForUser(userId: string, posts: Array<PostInfoModel>): void {
    if (userId) {
      this.posts = {
        [userId]: [...posts],
      }
      localStorage.setItem(userId, JSON.stringify(this.posts))
    }
  }

  public getPosts(userId: string): Array<PostInfoModel> {
    const posts = localStorage.getItem(userId);
    return posts && JSON.parse(posts)[userId];
  }

  /** Imitation a request for posts */
  public async getPostsFromServer$(): Promise<Array<PostInfoModel>> {
    const { posts } = await import('../../../db/posts');
    return posts;
  }

}
