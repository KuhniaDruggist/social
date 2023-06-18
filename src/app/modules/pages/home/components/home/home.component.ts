import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgIf, NgOptimizedImage } from '@angular/common';

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
  ],
})
export class HomeComponent implements OnInit {

  public userSrc: string | undefined;

  constructor() {
    this.userSrc = 'https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg';
  }

  ngOnInit(): void {
  }

}
