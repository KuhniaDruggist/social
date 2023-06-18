import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FormControlCustom} from '../../../../../common/models/form-control-custom';
import {MatCardModule} from '@angular/material/card';
import {FormInputComponent} from '../../../../common/form-input/form-input.component';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {RouterLinks} from '../../../../../common/constants/router-links';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    FormInputComponent,
    NgIf,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    RouterLink
  ]
})
export class SignUpComponent implements OnInit {

  public form: FormGroup | null;

  public routerLink = `../${RouterLinks.SIGN_IN}`;

  constructor() {
    this.form = null;
  }

  public ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, Validators.required),
    })
  }

  public getEmailControl(): FormControlCustom {
    return this.form?.controls['email'] as FormControlCustom;
  }

  public onSubmit(): void {
    if (this.isSubmittingAllowed()) {
      alert('hello')
    }
  }

  public isSubmittingAllowed(): boolean {
    const { email } = this.form?.value as { email: string };
    return (this.form?.valid && !!email.trim()) as boolean;
  }

}
