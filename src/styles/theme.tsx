import { createTheme } from "@mui/material/styles";
import { tokens as colors } from "./colors";

export const theme = createTheme({
  palette: {
    // palette values for light mode
    primary: {
      main: colors.primary[900],
    },
    secondary: {
      main: colors.greenAccent[500],
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
    },
    h2: {
      fontFamily: ["Pretendard Variable", "Pretendard"].join(","),
      fontSize: 37,
      fontWeight: 700, //bold
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
    },
    h5: {
      fontFamily: ["Pretendard Variable", "Pretendard"].join(","),
      fontSize: 16,
    },
    h6: {
      fontFamily: ["Pretendard Variable", "Pretendard"].join(","),
      fontSize: 14,
      fontWeight: 300, //light
    },
  },
});
