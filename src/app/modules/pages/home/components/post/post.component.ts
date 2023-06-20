import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PostInfoModel } from '../../../../../common/models/post-info.model';
import { UserAvatarComponent} from '../../../../common/user-avatar/user-avatar.component';
import { MatInputModule } from '@angular/material/input';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    NgIf,
    NgOptimizedImage,
    MatIconModule,
    UserAvatarComponent,
    MatInputModule,
    CommentsComponent,
  ]
})
export class PostComponent {

  @Input()
  public postInfo: PostInfoModel | undefined;

}
