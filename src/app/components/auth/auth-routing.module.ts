import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'forgot',
        component: ForgotComponent
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent
      },
      {
        path: 'terms-conditions',
        component: TermsConditionsComponent
      },
      {
        path: 'edit-profile',
        component: EditProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
