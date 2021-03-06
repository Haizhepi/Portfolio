import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Particles from "react-particles-js";
const useStyles = makeStyles((theme) => ({
  particlesCanvas: {
    opacity: "0.3",
    position: "fixed",
    top: "10%",
    zIndex: -1,
  },
}));
const ParticleBackground = () => {
  const classes = useStyles();

  return (
    <Particles
      canvasClassName={classes.particlesCanvas}
      params={{
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: true,
            opacity: 0.1,
          },
          move: {
            direction: "right",
            speed: 0.2,
          },
          size: {
            value: 5,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default ParticleBackground;
