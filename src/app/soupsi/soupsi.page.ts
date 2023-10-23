import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
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

  constructor(public navCntrl: NavController, private auth: Auth){}
  
  async signup() {
    if(this.password==this.check){
    const user = await createUserWithEmailAndPassword(
      this.auth,
      this.email,
      this.password,
      
      );
      console.log(this.check)
      console.log(this.password)
    return user;}else{
      return alert("As senhas diferem!");
      
    }
 }


  ngOnInit() {}
}
