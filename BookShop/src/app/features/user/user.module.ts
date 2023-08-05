import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { FirebaseUsersService } from './services/firebase-users.service';
import { AuthService } from './services/auth.service';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent
  ],
  imports: [
    UserRoutingModule,
    SharedModule
  ],
  providers: [
    FirebaseUsersService,
    AuthService
  ]
})
export class UserModule { }
