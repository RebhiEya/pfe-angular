

export interface User {
    idUser:number;
      firstName: string;
      lastName: string;
      matricule: string;
      password: string;
      email: string;
      roles:  string[]; // Array of RoleName enum values

  
    }