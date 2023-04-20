import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      white: string;
      green: string;
    };
    radiusses: {
      sm: string;
      md: string;
      lg: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
    };
    spacing: {
      sm: string;
      md: string;
      lg: string;
      xlg: string;
      xxlg: string;
    };
  }
}
