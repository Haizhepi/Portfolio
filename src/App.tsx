import React from "react";
import "./App.css";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import ParticleBackground from "./components/ParticleBackground";
import AboutMe from "./components/AboutMe";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import ContactFab from "./components/ContactFab";
import Footer from "./components/Footer";
import { Element } from "react-scroll";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Raleway",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
  palette: {
    primary: { main: "#030327" },
    secondary: { main: "#fae17d" },
    text: {
      primary: "#fff",
    },
  },
});
function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Element name="aboutme">
          <Home />
          <AboutMe />
        </Element>

        <Element name="experience">
          <Experience />
        </Element>

        <Element name="certifications">
          <Certifications />
        </Element>

        <Element name="projects">
          <Projects />
        </Element>
        <ContactFab />
        <Footer />
        <ParticleBackground />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
