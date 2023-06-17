import { ChangeDetectorRef, Directive, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormControlCustom } from './form-control-custom';

@Directive()
export abstract class BaseFormFieldDirective implements OnDestroy {

  @Input()
  public formControl: FormControlCustom | undefined;

  protected subscription = new Subscription();

  protected constructor(
    protected readonly cdr: ChangeDetectorRef,
  ) { }

  public getFormControl(): FormControlCustom {
    return this.formControl as FormControlCustom;
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
