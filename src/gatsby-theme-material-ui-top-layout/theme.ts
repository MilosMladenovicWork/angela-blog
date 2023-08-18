import { createTheme } from "@mui/material"

export const appearAnimationVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75 } },
}

const theme = createTheme({
  typography: {
    fontFamily: "Abhaya Libre",
  },
  palette: {
    primary: { main: "#999999" },
    secondary: { main: "#111111" },
    background: { default: "#282828", paper: "#282828E6" },
    text: { primary: "#F5E9E9" },
  },
})

theme.typography.h1 = {
  fontWeight: "800",
  fontSize: "2.7rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.9rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3.4rem",
  },
}

theme.typography.h2 = {
  fontWeight: "800",
  fontSize: "2.5rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.7rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3.2rem",
  },
}

theme.typography.h3 = {
  fontWeight: "800",
  fontSize: "1.6rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.8rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
}

theme.typography.h4 = {
  fontWeight: "800",
  fontSize: "1.5rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.7rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.2rem",
  },
}

theme.typography.h5 = {
  fontWeight: "800",
  fontSize: "1.4rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.6rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.1rem",
  },
}

theme.typography.h6 = {
  fontWeight: "800",
  fontSize: "1.3rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
}

export default theme
