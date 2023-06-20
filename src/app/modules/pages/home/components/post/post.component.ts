import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgForOf, NgIf, NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { PostInfoModel } from '../../../../../common/models/post-info.model';
import { UserLogoComponent} from '../../../../common/user-logo/user-logo.component';

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
    NgForOf,
    UserLogoComponent,
  ]
})
export class PostComponent {

  @Input()
  public postInfo: PostInfoModel | undefined;

}
