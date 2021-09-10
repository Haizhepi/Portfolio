import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Typed from "react-typed";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../assets/images/avatar.jpg";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(30),
    height: theme.spacing(30),
    margin: theme.spacing(1),
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
  },
  title: {
    color: "#fff",
  },
  subtitle: {
    color: theme.palette.secondary.main,
    textTransform: "uppercase",
  },
  typedContainer: {
    top: "50%",
    left: "50%",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
  resumeButton: {
    background: `linear-gradient(to right, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 51%, ${theme.palette.primary.dark} 100%)`,
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    transition: "0.5s",
    padding: "10px 30px",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.typedContainer} mt={10}>
        <Grid container justifyContent="center">
          <Avatar className={classes.avatar} src={avatar} alt="Mahmudul Alam" />
        </Grid>
        <Typography className={classes.title} variant="h4">
          <Typed strings={["Yunzhe (Josh) Liu"]} typeSpeed={50} />
        </Typography>

        <Typography className={classes.subtitle} variant="h5">
          <Typed
            strings={[
              "Master Student at USC",
              "Seeking for Software Engineer Position",
              "Full Stack Developer",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </Typography>
        <Box mt={5}>
          <Button
            className={classes.resumeButton}
            href="./Yunzhe_Liu_resume.pdf"
            target="_blank"
          >
            Download My Resume
          </Button>
          ;
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Home;
