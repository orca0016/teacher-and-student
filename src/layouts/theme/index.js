import { createTheme } from "@mui/material/styles";


//NOTE Create Custom Theme
export const darkTheme = createTheme({
    direction: "rtl",
    palette: {
        mode: "light",
        primary: {
            main: "#8D14E5",
        },
        secondary: {
            main: "#5B168D",
        },
        info:{
            main:"#bd93f9"
        },
        success:{
            main:"#39fa8a"
        }
    },
    typography: {
        fontFamily: "vazir, roboto",
    },
});
export const lightTheme = createTheme({
    direction: "rtl",
    palette: {
        mode: "light",
        primary: {
            main: "#8be9fd",
        },
        secondary: {
            main: "#bd93f9",
        },
    },
    typography: {
        fontFamily: "vazir, roboto",
    },
});

