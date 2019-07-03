
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
    items: GenreRaw[];
    limit: number;
    next: string;
    offset: number;
    previous?: any;
    total: number;
  }

  export interface GenresRawRoot {
    categories: GenresRaw;
  }

