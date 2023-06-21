import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloaderFullPageDirective } from './directives/preloader-full-page.directive';
import { PreloaderFullPageComponent } from './preloader-full-page.component';

@NgModule({
  declarations: [
    PreloaderFullPageDirective,
  ],
  imports: [
    CommonModule,
    PreloaderFullPageComponent,
  ],
  exports: [
    PreloaderFullPageDirective,
    PreloaderFullPageComponent,
  ],
})
export class PreloaderFullPageModule { }
