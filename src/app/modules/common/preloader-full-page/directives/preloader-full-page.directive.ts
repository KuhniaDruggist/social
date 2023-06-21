import { Directive, ViewContainerRef, TemplateRef, OnInit, EmbeddedViewRef } from '@angular/core';
import { PreloaderFullPageComponent } from '../preloader-full-page.component';
import { PreloaderFullPageService } from '../../../../common/services/preloader-full-page.service';

@Directive({
  selector: '[appPreloaderFullPage]',
})
export class PreloaderFullPageDirective implements OnInit {

  private spinnerViewRef: EmbeddedViewRef<PreloaderFullPageComponent> | undefined;

  constructor(
    private view: ViewContainerRef,
    private template: TemplateRef<PreloaderFullPageComponent>,
    private preloaderFullPageService: PreloaderFullPageService
  ) { }

  public ngOnInit(): void {
    this.preloaderFullPageService
      .getStateSpinner$()
      .subscribe((state: boolean) =>
        state
          ? this.showSpinner()
          : this.hideSpinner());
  }

  private showSpinner(): void {
    if (!this.spinnerViewRef) {
      this.spinnerViewRef = this.view.createEmbeddedView(this.template);
    } else {
      this.view.insert(this.spinnerViewRef);
    }
  }

  private hideSpinner(): void {
    this.view.detach();
  }

}
