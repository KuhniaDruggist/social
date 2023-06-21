import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PreloaderFullPageService {

  private spinnerState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  public showSpinner(): void {
    this.spinnerState.next(true);
  }

  public hideSpinner(): void {
    this.spinnerState.next(false);
  }

  public isSpinnerShowed(): boolean {
    return this.spinnerState.getValue();
  }

  public getStateSpinner$(): Observable<boolean> {
    return this.spinnerState as Observable<boolean>;
  }

}
