import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginSimpleComponent } from './login/simple/simple.component';
import { LoginImageOneComponent } from './login/image-one/image-one.component';
import { LoginImageTwoComponent } from './login/image-two/image-two.component';
import { ValidationComponent } from './login/validation/validation.component';
import { ToolTipComponent } from './login/tool-tip/tool-tip.component';
import { SweetalertComponent } from './login/sweetalert/sweetalert.component';
import { RegisterSimpleComponent } from './register/simple/simple.component';
import { RegisterImageOneComponent } from './register/image-one/image-one.component';
import { RegisterImageTwoComponent } from './register/image-two/image-two.component';
import { UnlockUserComponent } from './unlock-user/unlock-user.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { AllpatientComponent } from './allpatient/allpatient.component';
import { ViewpatientComponent } from './viewpatient/viewpatient.component';
import { UpdateaddpatientComponent } from './updateaddpatient/updateaddpatient.component';
import { ViewIndividualpatientComponent } from './view-individualpatient/view-individualpatient.component';

const routes: Routes = [
  {
    path: '',
    children: [
      // {
      //   path: 'simple',
      //   component: LoginSimpleComponent
      // },
      // {
      //   path: 'image-one',
      //   component: LoginImageOneComponent
      // },
      // {
      //   path: 'image-two',
      //   component: LoginImageTwoComponent
      // },
      // {
      //   path: 'validation',
      //   component: ValidationComponent
      // },
      // {
      //   path: 'tooltip',
      //   component: ToolTipComponent
      // },
      // {
      //   path: 'sweetalert',
      //   component: SweetalertComponent
      // }
      {
          path: 'addpatient',
          component: AddpatientComponent
        },
        {
        path: 'allpatient',
        component: AllpatientComponent
      },
      {
      path: 'viewpatient',
      component: ViewpatientComponent
    },
    {
    path: 'updatepatient',
    component: UpdateaddpatientComponent
  },
  {
    path: 'viewindivpatient',
    component: ViewIndividualpatientComponent
  }
    ]
  },
  {
    path: 'register',
    children: [
      {
        path: 'simple',
        component: RegisterSimpleComponent
      },
      {
        path: 'image-one',
        component: RegisterImageOneComponent
      },
      {
        path: 'image-two',
        component: RegisterImageTwoComponent
      }
    ]
  },
  {
    path: 'unlock-user',
    component: UnlockUserComponent,
  },
  {
    path: 'forgot-password',
    component: ForgetPasswordComponent,
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
