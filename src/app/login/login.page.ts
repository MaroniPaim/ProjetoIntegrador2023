import { Component, NgModule, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage {
  name: string = '';
  email: string = '';
  senha: string = '';

  constructor(public navCntrl: NavController, private auth: Auth) {}

  async login() {
    console.log(this.email, this.senha, this.auth);
    const user = await signInWithEmailAndPassword(
      this.auth,
      this.email,
      this.senha
    );

    console.log(user);

    return user;
    this.gotoSignup();
  }

  gotoSignup() {
    this.navCntrl.navigateForward('/home');
  }

  ngOnInit() {}
}
