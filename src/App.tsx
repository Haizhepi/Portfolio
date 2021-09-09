import React, { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 800 ? setIsMobile(false) : setIsMobile(true);
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar isMobile={isMobile} />

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
          <Projects isMobile={isMobile} />
        </Element>
        <ContactFab />
        <Footer />
        <ParticleBackground />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
