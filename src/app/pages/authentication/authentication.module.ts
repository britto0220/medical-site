import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from "../../shared/shared.module";

import { AuthenticationRoutingModule } from './authentication-routing.module';

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
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { CountToModule } from 'angular-count-to';
import { GalleryModule } from '@ks89/angular-modal-gallery';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';
import 'mousetrap';
import { ViewIndividualpatientComponent } from './view-individualpatient/view-individualpatient.component';
import { Select2Component } from 'src/app/components/forms/form-widgets/ngselect/select2.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthenticationRoutingModule,
    NgxDatatableModule,
    GalleryModule.forRoot(),
    CountToModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgxIntlTelInputModule,
    MatDialogModule
  ],
  declarations: [
    LoginSimpleComponent,
    LoginImageOneComponent,
    LoginImageTwoComponent,
    ValidationComponent,
    ToolTipComponent,
    SweetalertComponent,
    RegisterSimpleComponent,
    RegisterImageOneComponent,
    RegisterImageTwoComponent,
    UnlockUserComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    AddpatientComponent,
    AllpatientComponent,
    ViewpatientComponent,
    UpdateaddpatientComponent,
    ViewIndividualpatientComponent
  ]
})
export class AuthenticationModule { }
