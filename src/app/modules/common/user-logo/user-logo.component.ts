import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-user-logo',
  templateUrl: './user-logo.component.html',
  styleUrls: ['./user-logo.component.scss'],
  standalone: true,
  imports: [
    NgOptimizedImage,
  ]
})
export class UserLogoComponent {

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
    this.src = '/assets/img/user-logo.jpg';
  }

}
