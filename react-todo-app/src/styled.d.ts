import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    accentColor: string;
    cardBgColor: string;
    bgColor: string;
    textColor: string;
    cardBg: string;
    cardBorder: string;
    surface: string;
    primary: string;
    danger: string;
    success: string;
    warn: string;
    inputBg: string;
    shadow: string;
    radius: string;
    gap: string;
    blur: string;
  }
}