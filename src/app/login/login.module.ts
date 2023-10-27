import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';






@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    
   
  ],
  providers: [
    AuthenticationService
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
