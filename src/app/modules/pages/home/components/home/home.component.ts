import { Component, OnInit } from '@angular/core';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UserAvatarComponent } from "../../../../common/user-avatar/user-avatar.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NgOptimizedImage,
    NgIf,
    RouterOutlet,
    UserAvatarComponent,
  ],
})
export class HomeComponent implements OnInit {

  public userSrc: string | undefined;

  constructor() {
    this.userSrc = '';
  }

  ngOnInit(): void {
  }

}
