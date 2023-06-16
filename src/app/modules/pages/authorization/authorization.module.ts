import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { WelcomeComponent } from './components/welcome/welcome.component';


@NgModule({
  declarations: [
    AuthorizationComponent,
  ],
  imports: [
    CommonModule,
    AuthorizationRoutingModule,
    WelcomeComponent,
  ]
})
export class AuthorizationModule { }
