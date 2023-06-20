import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { CommentModel } from '../../../../../common/models/comment.model';
import { MatIconModule } from '@angular/material/icon';
import { UserAvatarComponent } from '../../../../common/user-avatar/user-avatar.component';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    NgIf,
    NgOptimizedImage,
    MatIconModule,
    UserAvatarComponent,
  ]
})
export class CommentComponent {

  @Input()
  comment: CommentModel | undefined;

}
