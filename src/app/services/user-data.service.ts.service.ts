import { Injectable } from '@angular/core';

import 'firebase/database';
import { UserProfile } from '../services/user-profile.model.ts.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  

  saveUserData(user: UserProfile) {
    if (!user.id) {
      throw new Error("User ID is required.");
    }
   
  }

  // ... outros métodos conforme necessário
}