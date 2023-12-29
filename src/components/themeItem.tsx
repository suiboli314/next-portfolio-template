"use client";

import { createTheme, responsiveFontSizes, StyledEngineProvider, ThemeProvider } from "@mui/material/styles";

// const { palette } = createTheme();
const theme = responsiveFontSizes(
  createTheme({
    palette: {
      // TODO: https://stackoverflow.com/a/69264263
      primary: {
        light: "#77d3ce",
        main: "#55c9c2",
        dark: "#3b8c87",
        contrastText: "#000",
      },
      secondary: {
        light: "#ca9eff",
        main: "#bd86ff",
        dark: "#845db2",
        contrastText: "#fff",
      },
      // TODO: add light and dark mode?
    },
  }),
  { disableAlign: true },
);

export default function ThemeItem({ children }: { children: React.ReactNode }) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </StyledEngineProvider>
  );
}
