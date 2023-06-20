import { Component, Input } from '@angular/core';
import { CommentModel } from '../../../../../common/models/comment.model';
import { CommentComponent } from '../comment/comment.component';
import { UserAvatarComponent } from '../../../../common/user-avatar/user-avatar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  standalone: true,
  imports: [
    CommentComponent,
    UserAvatarComponent,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    NgForOf,
    NgIf,
  ]
})
export class CommentsComponent {

  @Input()
  public comments: Array<CommentModel> | undefined;
  constructor() {
    this.comments = [];
  }

}
