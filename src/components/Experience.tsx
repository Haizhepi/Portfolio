import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    // background: "#233",
    zIndex: 1,
    width: "100vw",
    textAlign: "center",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: `2px solid ${theme.palette.primary.main}`,
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 2px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: `${theme.palette.primary.main} ${theme.palette.primary.main} transparent transparent`,
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: `${theme.palette.primary.main}`,
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: `transparent transparent ${theme.palette.primary.main} ${theme.palette.primary.main}`,
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: theme.palette.primary.main,
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",

    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "textPrimary",
    padding: "1rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "capitalize",
  },

  link: {
    color: "purple",
    textDecoration: "None",
  },
  body1: {
    color: "#29b6f6",
  },
  smallsubtitle: {
    color: "#eeeeee",
  },
  subtitle1: {
    color: "#e8f5e9",
  },
}));

const Experience = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box component="header" className={classes.mainContainer}>
        <Typography variant="h4" align="center" className={classes.heading}>
          Education & Working Experience
        </Typography>
        <Grid container justifyContent="center">
          <Grid item>
            <Box
              component="div"
              className={classes.timeLine}
              style={{ maxWidth: "1000px" }}
            >
              <Typography
                variant="h2"
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}
              >
                2021
              </Typography>
              <Box component="div" className={classes.timeLineItem}>
                <Typography variant="h5" align="center">
                  University of Southern California
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.smallsubtitle}
                >
                  Los Angeles, CA
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.body1}
                >
                  Master of Science in Computer Science
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.subtitle1}
                >
                  GPA: 3.77 &nbsp; Graduating on May 2022
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.smallsubtitle}
                >
                  Completed Courses:
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.smallsubtitle}
                >
                  CSCI 570 Algorithm Analysis
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.smallsubtitle}
                >
                  CSCI 585 Database
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.smallsubtitle}
                >
                  CSCI 571 Web Technologies
                </Typography>
              </Box>

              <Box component="div" className={classes.timeLineItem}>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.subHeading}
                >
                  USC Computational Social Science Lab
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.smallsubtitle}
                >
                  Los Angeles, CA
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.body1}
                >
                  Student Worker{" "}
                  <a
                    className={classes.link}
                    href="https://dornsife.usc.edu/labs/cssl/people/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Link
                  </a>
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.subtitle1}
                >
                  Developed and Maintaining{" "}
                  <a
                    href="yourmorals.org"
                    target="_blank"
                    className={classes.link}
                  >
                    Yourmorals.org
                  </a>
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.subtitle1}
                >
                  Migrate the old Yourmorals (PHP & MySQL) website with MERN
                  stack to AWS.
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.subtitle1}
                >
                  Designed System to work with 800k users and 200 daily active
                  users
                </Typography>
              </Box>
              <Typography
                variant="h2"
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}
              >
                2020
              </Typography>
              <Box component="div" className={classes.timeLineItem}>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.subHeading}
                >
                  VIP Shop
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.smallsubtitle}
                >
                  Guangzhou, CHN
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.body1}
                >
                  Software Engineer Internship
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.subtitle1}
                >
                  Optimized the Warning expression evaluation algorithm of cloud
                  server with Java by 50%
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.subtitle1}
                >
                  Developed a Monitor Program in Python to monitor the logging
                  system
                </Typography>
              </Box>
              <Typography
                variant="h2"
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}
              >
                2018
              </Typography>
              <Box component="div" className={classes.timeLineItem}>
                <Typography
                  variant="h5"
                  align="center"
                  className={classes.subHeading}
                >
                  Baylor University
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.smallsubtitle}
                >
                  Waco, TX
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  className={classes.body1}
                >
                  Bachlor of Science in Computer Science
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.subtitle1}
                >
                  Major GPA: 3.8 &nbsp; 2016 - 2020
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.subtitle1}
                >
                  Major Computer Science Courses Completed:
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  className={classes.subtitle1}
                >
                  Data Structure and Algorithms&nbsp; Operating Systems&nbsp;
                  Database Design&nbsp; Computer Networking&nbsp; Data Mining
                  &nbsp;Software Engineering
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Experience;
