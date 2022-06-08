export interface Summary {
  id: string;
  naam: string;
  inhoud: string;
  video: [
    {
      filename: string;
      id: string;
      size: number;
      type: string;
      url: string;
    },
  ];
  foto: [
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
}
