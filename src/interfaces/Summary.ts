export interface Summary {
  id: string;
  name: string;
  inhoud: string;
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
