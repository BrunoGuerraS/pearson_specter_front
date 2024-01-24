import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#DCF2F1",
      main: "#365486",
      dark: "#0F1035",
      contrastText: "#7FC7D9",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
 
  components: {
    MuiAlert: {},
    MuiGrid: {
      styleOverrides: {
        root: {
          margin: 0,
          paddingTop: 0,
          paddingLeft: 0,
        },
        item: {
          margin: 0,
          paddingTop: 0,
          paddingLeft: 0,
        },
      },
    },
  },
});

export default theme;
