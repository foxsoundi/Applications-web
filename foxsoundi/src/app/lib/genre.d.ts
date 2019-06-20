export interface Img {
  height?: number;
  url: string;
  width?: number;
}

export interface Genre {
  href: string;
  icons: Img[];
  id: string;
  name: string;
}
