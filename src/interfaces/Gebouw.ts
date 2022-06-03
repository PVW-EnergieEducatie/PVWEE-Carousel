export interface Gebouw {
  id: string;
  naam: string;
  influx_naam: string;
  categorie: string;
  profielfoto: [
    {
      url: string;
      filename: string;
      height: number;
      id: string;
      size: number;
      thumbnails: {
        small: {
          url: string;
        };
        large: {
          url: string;
        };
        full: {
          url: string;
        };
      };
      type: string;
      width: number;
    },
  ];
  info: string;
  volgorde: number;
  quiz: string[];
  weetjes: string[];
  hashtags: string[];
}
