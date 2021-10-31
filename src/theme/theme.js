import { createTheme } from "@mui/material/styles";

const white = "#ffffff";
const gray = "#D6D6D6";
const black = "#000000";

const lightText = "#858585";
const darkText = "#424242";

const lightBlue = "#155BCC";
const darkBlue = "#164FAC";

const accent = "#2FDA7F";
const background = "#FAFAFA";
const search = "#F5F5F5";

const theme = createTheme({
  palette: {
    primary: {
      main: `${background}`,
    },
    secondary: {
      main: `${darkBlue}`,
      light: `${lightBlue}`,
    },
    accent: `${accent}`,
    search: `${search}`,
    white: `${white}`,
    gray: `${gray}`,
    black: `${black}`,
    text: {
      main: `${darkText}`,
      light: `${lightText}`,
    },
  },
});

export default theme;
