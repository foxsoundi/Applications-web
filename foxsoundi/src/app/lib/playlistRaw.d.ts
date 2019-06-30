// https://foxsoundi2.azurewebsites.net/v1/music/genre/rock/playlists

  export interface ExternalUrls {
    spotify: string;
  }

  export interface Image {
    height?: any;
    url: string;
    width?: any;
  }

  export interface ExternalUrls2 {
    spotify: string;
  }

  export interface Owner {
    display_name: string;
    external_urls: ExternalUrls2;
    href: string;
    id: string;
    type: string;
    uri: string;
  }

  export interface Tracks {
    href: string;
    total: number;
  }

  export interface Item {
    collaborative: boolean;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    name: string;
    owner: Owner;
    primary_color?: any;
    public?: any;
    snapshot_id: string;
    tracks: Tracks;
    type: string;
    uri: string;
  }

  export interface PlaylistsRaw {
    href: string;
    items: Item[];
    limit: number;
    next?: any;
    offset: number;
    previous?: any;
    total: number;
  }

  export interface PlaylistsRawRoot {
    playlists: PlaylistsRaw;
  }
