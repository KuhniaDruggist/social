import { ChangeDetectionStrategy, ChangeDetectorRef, Component, forwardRef, Input, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroupDirective,
  NG_VALUE_ACCESSOR,
  NgForm,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { ErrorStateMatcher } from '@angular/material/core';
import { InputControlTypes } from '../../../common/constants/input-control-types';
import { FormInputErrorService } from '../../../common/services/form-input-error.service';
import { BaseFormFieldDirective } from '../../../common/models/base-form-field';
import { filter } from 'rxjs';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

const INPUT_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FormInputComponent),
  multi: true,
};

type InputValueType = string | number | null;

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [INPUT_CONTROL_ACCESSOR],
})

export class FormInputComponent extends BaseFormFieldDirective implements OnInit, ControlValueAccessor {

  @Input()
  public formControlLabel: string;

  @Input()
  public formControlType: InputControlTypes;

  @Input()
  public defaultValue: string;

  @Input()
  public placeholder: string;

  @Input()
  public prompt: string;

  public readonly localControl = new FormControl();

  public matcher = new MyErrorStateMatcher();

  public onChange: <T>(value: T) => void = () => { };

  public onTouched: () => void = () => { };

  constructor(
    cdr: ChangeDetectorRef,
    private readonly formInputErrorService: FormInputErrorService,
  ) {
    super(cdr)
    this.defaultValue = '';
    this.formControlLabel = '';
    this.formControlType = 'text';
    this.placeholder = '';
    this.prompt = '';
  }

  public ngOnInit(): void {
    this.subscribeValueChanges();
    this.setControlValidators(this.formControlType);
  }

  protected subscribeValueChanges(): void {
    this.subscription.add(
      this.localControl.valueChanges
        .pipe(filter(value => this.getFormControl().value !== value))
        .subscribe(this.changeValue),
    );
  }

  protected changeValue = (value: InputValueType): void => {
    this.onChange(value);
    this.onTouched();
  };

  private setControlValidators(controlType: InputControlTypes): void {
    const validators: Array<ValidatorFn> = [];
    validators.push(Validators.required)
    if (controlType === 'email') {
      validators.push(Validators.email)
    }
    this.localControl.setValidators(validators)
  }

  public writeValue(value: InputValueType): void {
    this.localControl.setValue(value);
    this.cdr.detectChanges();
  }

  public getErrorMessage(control: AbstractControl): string {
    return this.formInputErrorService.getErrorMessage(control)
  }

  public registerOnChange(onChange: <T>(value: T) => void): void {
    this.onChange = onChange;
  }

  public registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }
}
