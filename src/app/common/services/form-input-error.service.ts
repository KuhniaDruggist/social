import { AbstractControl } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormInputErrorService {

  public getErrorMessage(control: AbstractControl, controlName: string): string {
    if (control.hasError('required')) {
      return `${controlName} is required`;
    }
    if (control.hasError('email')) {
      return 'Please enter a valid email address';
    }
    return '';
  }

}
