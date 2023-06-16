import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgOptimizedImage, NgIf],
})
export class WelcomeComponent implements OnInit {

  public logoSettings: { src: string; width: number; height: number; } | undefined;

  ngOnInit() {
    this.logoSettings = {
      src: 'https://www.fortvision.com/wp-content/uploads/2022/07/logo-removebg-preview-2.png',
      width: 197,
      height: 46,
    }
  }

}
