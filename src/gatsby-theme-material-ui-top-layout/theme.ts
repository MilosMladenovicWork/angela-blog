import { createTheme } from "@mui/material"

export const appearAnimationVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75 } },
}

const theme = createTheme({
  typography: {
    fontFamily: "Lancelot",
  },
  palette: {
    primary: { main: "#1C135D" },
    secondary: { main: "#1C135D" },
    background: { default: "#FAFDFF", paper: "#FAFDFFE6" },
    text: { primary: "#1C135D" },
  },
})

theme.typography.h1 = {
  fontFamily: "Pinyon Script",
  fontWeight: 400,
  fontSize: "2.7rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.9rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3.4rem",
  },
}

theme.typography.h2 = {
  fontFamily: "Pinyon Script",
  fontWeight: 400,
  fontSize: "2.5rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "2.7rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "3.2rem",
  },
}

theme.typography.h3 = {
  fontFamily: "Pinyon Script",
  fontWeight: 400,
  fontSize: "1.6rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.8rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.4rem",
  },
}

theme.typography.h4 = {
  fontFamily: "Pinyon Script",
  fontWeight: 400,
  fontSize: "1.5rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.7rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.2rem",
  },
}

theme.typography.h5 = {
  fontFamily: "Pinyon Script",
  fontWeight: 400,
  fontSize: "1.4rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.6rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2.1rem",
  },
}

theme.typography.h6 = {
  fontFamily: "Pinyon Script",
  fontWeight: 400,
  fontSize: "1.3rem",
  [theme.breakpoints.up("sm")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
}

theme.typography.body1 = {
  minHeight: "1rem",
}

export default theme
