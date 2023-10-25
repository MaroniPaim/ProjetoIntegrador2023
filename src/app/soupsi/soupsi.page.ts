import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';

@Component({
  selector: 'app-soupsi',
  templateUrl: './soupsi.page.html',
  styleUrls: ['./soupsi.page.scss'],
})
export class SoupsiPage implements OnInit {
  email: string = '';
  name: string = '';
  password: string = '';
  check: string = '';

  constructor(public navCntrl: NavController, private auth: Auth) {}

  async signup() {
    
    if (this.password == this.check) {
      try {
          const user = await createUserWithEmailAndPassword(
            this.auth,
            this.email,
            this.password
          );
          console.log(user);
          
          // Redireciona para a página inicial após cadastro bem-sucedido
          this.gotoHome(); 
          
      } catch (error) {
          console.error("Erro ao criar usuário:", error);
          // Aqui você pode lidar com erros de cadastro, como mostrar uma mensagem para o usuário.
      }
    } 
    
    else {
      return alert('As senhas diferem!');
    }
}

  ngOnInit() {}
  gotoHome() {
    this.navCntrl.navigateForward('/home');
  }
  
}
