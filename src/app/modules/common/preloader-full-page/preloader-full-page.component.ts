import { Component, ChangeDetectorRef } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-preloader-full-page',
  templateUrl: './preloader-full-page.component.html',
  styleUrls: ['./preloader-full-page.component.scss'],
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
  ],
})
export class PreloaderFullPageComponent {

  constructor(private cdr: ChangeDetectorRef) {
    this.cdr.detach();
  }

}
