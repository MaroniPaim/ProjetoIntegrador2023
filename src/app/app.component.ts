import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { AuthenticationService } from './services/authentication.service';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private AuthenticationService: AuthenticationService, private navCtrl: NavController) {}
    
    logout() {
      this.AuthenticationService.logout().subscribe(() => {
        this.navCtrl.navigateForward('/home');
      });


    }}
