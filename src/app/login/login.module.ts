import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent }  from './login.component';

const routes: Routes = [
  {
  path:'login',
  component: LoginComponent,
  pathMatch: 'full',
  data: {
    title: 'THE Login Page'
  }
}
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LoginModule {}