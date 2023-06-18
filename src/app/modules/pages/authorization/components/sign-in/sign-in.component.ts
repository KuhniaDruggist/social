import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormInputComponent } from '../../../../common/form-input/form-input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf} from '@angular/common';
import { FormControlCustom } from '../../../../../common/models/form-control-custom';
import { RouterLinks } from '../../../../../common/constants/router-links';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormInputComponent,
    ReactiveFormsModule,
    NgIf,
    RouterLinkWithHref,
  ],
})
export class SignInComponent implements OnInit {

  public form: FormGroup | null;

  public isLoading: boolean;

  public routerSignUp = RouterLinks.SIGN_UP;

  constructor() {
    this.form = null;
    this.isLoading = false;
  }

  public ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    })
  }

  public getLoginControl(): FormControlCustom {
    return this.form?.controls['login'] as FormControlCustom;
  }

  public getPasswordControl(): FormControlCustom {
    return this.form?.controls['password'] as FormControlCustom;
  }

  public onSubmit(): void {
    if (this.isSubmittingAllowed()) {
      this.isLoading = true;
    }
  }

  public isSubmittingAllowed(): boolean {
    const { login, password } = this.form?.value as { login: string, password: string };
    return (this.form?.valid && !!login.trim() && !!password.trim() && !this.isLoading) as boolean;
  }

}
