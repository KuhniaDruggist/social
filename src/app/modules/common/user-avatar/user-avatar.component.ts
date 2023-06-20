import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss'],
  standalone: true,
  imports: [
    NgOptimizedImage,
  ]
})
export class UserAvatarComponent {

  @Input()
  public width: number;

  @Input()
  public height: number;

  @Input()
  public alt: string;

  @Input()
  public src: string;

  constructor() {
    this.width = 38;
    this.height = 38;
    this.alt ='avatar user by default'
    this.src = '/assets/img/default-user-avatar.jpg';
  }

}
