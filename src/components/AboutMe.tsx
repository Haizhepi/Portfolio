import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Box from "@material-ui/core/Box";

const AboutMe = () => {
  return (
    <Box mt={6}>
      <Typography variant="h4" align="center">
        About Me
      </Typography>
      <Box
        mx={10}
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography style={{ maxWidth: "1000px" }}>
          Hello! My name is Josh Liu. I am a student at University of Southern
          California studying toward a Master's degree of Computer Science. I
          enjoy coding and learning new technologies. I am actively looking for
          a full time software engineer job opportunity. I have some experience
          in both frontend and backend development, here are a few technologies
          I've been working recently:
        </Typography>
      </Box>
      <Box mx={10}>
        <Grid container spacing={2} justify="center">
          <Grid item md={3} alignItems="center">
            <Typography align="center">• Node.js</Typography>
            <Typography align="center">• React.js</Typography>{" "}
            <Typography align="center">• Flask</Typography>
          </Grid>
          <Grid item md={3} alignItems="center">
            <Typography align="center">• AWS</Typography>
            <Typography align="center">• MongoDB</Typography>{" "}
            <Typography align="center">• IOS (Swift UI)</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutMe;
