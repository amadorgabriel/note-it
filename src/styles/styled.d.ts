import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;

      background: {
        primary: string;
        secondary: string;
        tertiary: string;
      };

      tipografy: {
        title: {
          primary: string;
        };
        text: {
          primary: string;
          striked: string;
        };
      };

      transparent: string;
    };
  }
}
