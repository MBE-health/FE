import { createTheme } from "@mui/material/styles";
import { tokens as colors } from "./colors";

export const theme = createTheme({
  palette: {
    // palette values for light mode
    primary: {
      main: colors.primary[900],
      dark: colors.primary[600],
    },
    secondary: {
      main: colors.greenAccent[200],
      light: colors.greenAccent[100],
      dark: colors.blueAccent[700],
    },
    background: {
      default: "#fcfcfc",
    },
  },
  typography: {
    fontFamily: ["Pretendard Variable", "Pretendard"].join(","),
    fontSize: 20,
    h1: {
      fontFamily: ["Pretendard Variable", "Pretendard"].join(","),
      fontSize: 40,
      fontWeight: 700, // extra bold
    },
    h2: {
      fontFamily: ["Pretendard Variable", "Pretendard"].join(","),
      fontSize: 32,
      fontWeight: 500, //semi - bold
    },
    h3: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 24,
      fontWeight: 500, //medium
    },
    h4: {
      fontFamily: ["Pretendard Variable", "Pretendard"].join(","),
      fontSize: 20,
      fontWeight: 500,
      padding: 0,
      margin: 0,
    },
    h5: {
      fontFamily: ["Pretendard Variable", "Pretendard"].join(","),
      fontSize: 16,
      fontWeight: 400, //regular
    },
    h6: {
      fontFamily: ["Pretendard Variable", "Pretendard"].join(","),
      fontSize: 14,
      fontWeight: 300, //light
    },
  },
});
