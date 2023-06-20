import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationModule } from './modules/pages/authorization/authorization.module';
import { HomeModule } from './modules/pages/home/home.module';
import { FormInputComponent } from './modules/common/form-input/form-input.component';
import { UserAvatarComponent } from './modules/common/user-avatar/user-avatar.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthorizationModule,
    HomeModule,
    FormInputComponent,
    UserAvatarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
