  export interface Profil {
    sessionId: string;
    email: string;
  }

  export interface LoginRoot {
    isLoggedIn: number;
    profil: Profil;
  }


  export interface ConnectInfo {
    email: string;
    password: string;
  }
