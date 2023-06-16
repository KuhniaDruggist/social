import { Component, Input, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  AbstractControl,
  FormControl,
  FormGroupDirective,
  NgForm,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { ErrorStateMatcher } from '@angular/material/core';
import { InputControlTypes } from '../../../common/constants/input-control-types';
import { FormInputErrorService } from '../../../common/services/form-input-error.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgIf],
})
export class FormInputComponent implements OnInit {

  @Input()
  public formControlName: string;

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

  constructor(
    private readonly formInputErrorService: FormInputErrorService,
  ) {
    this.defaultValue = '';
    this.formControlName = '';
    this.formControlLabel = '';
    this.formControlType = 'text';
    this.placeholder = '';
    this.prompt = '';
  }

  public ngOnInit(): void {
    this.setControlValidators(this.formControlType);
  }

  private setControlValidators(controlType: InputControlTypes): void {
    const validators: Array<ValidatorFn> = [];
    validators.push(Validators.required)
    if (controlType === 'email') {
      validators.push(Validators.email)
    }
    this.localControl.setValidators(validators)
  }

  public getErrorMessage(control: AbstractControl): string {
    return this.formInputErrorService.getErrorMessage(control, this.formControlName)
  }
}
