import { Component, NgModule, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage {
  name: string = '';
  email: string = '';
  senha: string = '';

  constructor(public navCntrl: NavController, private auth: Auth, ) {}

  async login() {
    try {
      console.log(this.email, this.senha, this.auth);
      const user = await signInWithEmailAndPassword(
        this.auth,
        this.email,
        this.senha
      );
      console.log(user);

      // Redireciona para a página inicial após login bem-sucedido
      this.gotoHome(); // Renomeei a função para um nome mais descritivo
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      // Aqui você pode lidar com erros de login, como mostrar uma mensagem para o usuário.
    }
  }
  gotoHome() {
    this.navCntrl.navigateForward('/home');
  }
}
