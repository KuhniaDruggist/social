import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { RouterLinks } from '../../../common/constants/router-links';
import { SignInGuard } from '../../../common/guards/sign-in.guard';
import { AuthorizationGuard } from '../../../common/guards/authorization.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthorizationComponent,
    canActivate: [AuthorizationGuard],
  },
  {
    path: RouterLinks.SIGN_IN,
    canActivate: [SignInGuard],
    component: SignInComponent,
  },
  {
    path: RouterLinks.SIGN_UP,
    component: SignUpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule { }
