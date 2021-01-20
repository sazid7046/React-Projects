import { createMuiTheme } from "@material-ui/core/styles";

const arcWhite =  "#F0EDEB";
const arcOrange = "#EA5E00";
const arcGrey = "#868686";

export default createMuiTheme({
  palette: {
    common: {
      blue: arcWhite,
      orange: arcOrange
    },
    primary: {
      main: arcWhite
    },
    secondary: {
      main: arcOrange
    }
  },
  typography: {
    tab: {
      fontFamily: " 'Poppins', sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      color: "#242323",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white"
    },
    // h2: {
    //   fontFamily: "Raleway",
    //   fontWeight: 700,
    //   fontSize: "2.5rem",
    //   color: arcWhite,
    //   lineHeight: 1.5
    // },
    // h3: {
    //   fontFamily: "Pacifico",
    //   fontSize: "2.5rem",
    //   color: arc
    // },
    // h4: {
    //   fontFamily: "Raleway",
    //   fontSize: "1.75rem",
    //   color: arcBlue,
    //   fontWeight: 700
    // },
    h6: {
      color: "#242323",
      textTransform: "none"
    },
    // subtitle1: {
    //   fontSize: "1.25rem",
    //   fontWeight: 300,
    //   color: arcGrey
    // },
    // subtitle2: {
    //   color: "white",
    //   fontWeight: 300,
    //   fontSize: "1.25rem"
    // },
  
  }
});
