//fetch("https://foxsoundiapi.azurewebsites.net/v1/genres")

  export interface Icon {
    height?: number;
    url: string;
    width?: number;
  }

  export interface GenreRaw {
    href: string;
    icons: Icon[];
    id: string;
    name: string;
  }

  export interface GenresRaw {
    href: string;
    GenreRaws: GenreRaw[];
    limit: number;
    next: string;
    offset: number;
    previous?: any;
    total: number;
  }

  export interface GenresRawRoot {
    GenresRaw: GenresRaw;
  }

