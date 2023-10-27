export interface UserProfile {
    id: string;
    
  
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
    fotoURL:string;
  }
  