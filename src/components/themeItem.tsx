"use client";
// https://stackoverflow.com/a/69264263

import {
  createTheme,
  responsiveFontSizes,
  // PaletteColorOptions,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material/styles";

// declare module "@mui/material/styles" {
//   interface Palette {
//     myAwesomeColor: PaletteColorOptions;
//   }
//   interface PaletteOptions {
//     myAwesomeColor: PaletteColorOptions;
//   }
// }

// declare module "@mui/material/Button" {
//   interface ButtonPropsColorOverrides {
//     myAwesomeColor: true;
//   }
// }

// const { palette } = createTheme();
const theme = responsiveFontSizes(
  createTheme({
    palette: {
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
        contrastText: "#000",
      },
    },
    // palette: {
    //   myAwesomeColor: palette.augmentColor({ color: purple }),
    //   // Use this code if you want to use an arbitrary color
    //   myAwesomeColor: palette.augmentColor({
    //     color: {
    //       main: "#00ff00"
    //     }
    //   })
    // },
  }),
  { disableAlign: true },
);

export default function ThemeItem({ children }: { children: React.ReactNode }) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
