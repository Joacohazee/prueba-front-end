import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#141414'
    },
    secondary: {
      main: '#c0c0c0'
    }
  },
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#ffffff'
    },
    secondary: {
      main: '#302c2c'
    },
    tertiary: {
      main: '#141414'
    }
  },
})