import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterLinks } from '../../../../../common/constants/router-links';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgOptimizedImage, NgIf, RouterLink],
})
export class WelcomeComponent implements OnInit {

  public logoSettings: { src: string; width: number; height: number; } | undefined;

  public routerLink = RouterLinks.SIGN_IN;

  ngOnInit() {
    this.logoSettings = {
      src: 'https://www.fortvision.com/wp-content/uploads/2022/07/logo-removebg-preview-2.png',
      width: 197,
      height: 46,
    }
  }

}
