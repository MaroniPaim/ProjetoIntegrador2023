import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserProfileModelTsService {

  constructor() { }
}

export interface UserProfile {
  id: string;
  foto:string;

  email: string;
  senha: string;
  nome: string;
  telefone: string;
  sexo: string;
  CRP: string;
  valorConsulta: number;
  idiomas:string[];
  abordagem: string;
  bio: string;
  tags: string[]; // Lista de tags
}
