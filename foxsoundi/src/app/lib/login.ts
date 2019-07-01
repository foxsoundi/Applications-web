  export interface Profil {
    sessionId: string;
    email: string;
    lastName: string;
    firstName: string;
  }

  export interface LoginRoot {
    isLoggedIn: number;
    profil: Profil;
  }


  export interface ConnectInfo {
    email: string;
    password: string;
  }
