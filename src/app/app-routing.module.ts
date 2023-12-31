import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterLinks } from './common/constants/router-links';
import { AuthorizationRoutingModule } from './modules/pages/authorization/authorization-routing.module';

const routes: Routes = [
  {
    path: RouterLinks.AUTHORIZATION,
    loadChildren: () => import('./modules/pages/authorization/authorization.module')
      .then(module => module.AuthorizationModule),
    pathMatch: 'full',
  },
  {
    path: RouterLinks.HOME,
    loadChildren: () => import('./modules/pages/home/home.module')
      .then(module => module.HomeModule)
  },
  {
    path: '**',
    redirectTo: RouterLinks.AUTHORIZATION,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthorizationRoutingModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
