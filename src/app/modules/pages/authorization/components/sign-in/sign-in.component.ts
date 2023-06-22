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
import { PreloaderFullPageService } from '../../../../../common/services/preloader-full-page.service';
import { AuthService } from '../../../../../common/services/auth.service';
import { finalize, Subscription } from 'rxjs';
import { AuthFormModel } from '../../../../../common/models/auth-form-model';
import { DataProviderService } from '../../../../../common/services/data-provider.service';
import { KeysForDataProvides } from '../../../../../common/constants/keys-for-data-provides';
import { PostsService } from '../../../../../common/services/posts.service';

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

  public routerSignUp = `../${RouterLinks.SIGN_UP}`;

  public errorMessage: string;

  private subscription = new Subscription();

  constructor(
    private readonly authService: AuthService,
    private readonly postsService: PostsService,
    private readonly dataProviderService: DataProviderService,
    private readonly preloaderFullPageService: PreloaderFullPageService,
  ) {
    this.form = null;
    this.errorMessage = '';
    this.isLoading = false;
  }

  public ngOnInit(): void {
    this.initialForm();
    this.subscribeOnFormValueChanges();
  }

  private initialForm(): void {
    this.form = new FormGroup({
      login: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    })
  }

  private subscribeOnFormValueChanges(): void {
    this.subscription.add(
      this.form?.valueChanges
        .subscribe({
          next: () => {
            if (this.errorMessage) {
              this.errorMessage = '';
            }
          }
        })
    )
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
      this.preloaderFullPageService.showSpinner();
      this.subscription.add(
        this.authService.login$(this.form?.value)
          .pipe(finalize(() => {
            this.preloaderFullPageService.hideSpinner();
            this.isLoading = false;
          }))
          .subscribe({
            next: async (userId: string) => {
              this.dataProviderService.setData(userId, KeysForDataProvides.SAVE_USER_ID);
              const posts = await this.postsService.getPostsFromServer$();
              if (posts) {
                this.postsService.setPostsForUser(userId, posts);
              }
              void this.authService.doAfterAuth();
            },
            error: (err: string) => { this.errorMessage = err },
          })
      )
    }
  }

  public isSubmittingAllowed(): boolean {
    const { login, password } = this.form?.value as AuthFormModel;
    return (this.form?.valid && !!login.trim() && !!password.trim() && !this.isLoading) as boolean;
  }

}
