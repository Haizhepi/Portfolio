import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

import CardContent from "@material-ui/core/CardContent";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Button, ButtonGroup } from "@material-ui/core";
import { Project } from "./Projects";
import { CheckBoxOutlineBlankTwoTone } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    maxWidth: 20,
    height: 20,
  },
  root: {
    height: "100%",
    backgroundColor: theme.palette.primary.main,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cert: {
    width: "170px",
  },
  linkCred: {
    color: "green",
  },
  card: {
    position: "relative",
    maxWidth: "1000px",
    minHeight: "300px",
  },
  descriptionNoShift: {
    // maxWidth: "500px",
    width: "80vw",

    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    borderBottomLeftRadius: "10px",
    borderBottomRightRadius: "10px",
  },
  descriptionLeft: {
    position: "absolute",
    maxWidth: "700px",
    left: "0",
    top: "40px",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
  },

  descriptionRight: {
    position: "absolute",
    maxWidth: "700px",
    right: "0",
    top: "0",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
  },
  picNoShift: {
    width: "80vw",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
  },
  picRight: {
    zIndex: -1,
    position: "absolute",
    right: "0",
    top: "0",
    maxWidth: "500px",
    maxHeight: "300px",
    borderRadius: "5px",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
  },
  picLeft: {
    zIndex: -1,
    position: "absolute",
    left: "0",
    top: "20px",
    maxWidth: "500px",
    maxHeight: "300px",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    borderRadius: "5px",
  },
}));

const Description: React.FunctionComponent<{
  project: Project;
  classes: any;
  orient: string;
  isMobile: boolean;
}> = ({ project, classes, orient, isMobile }) => (
  <Box
    mb={2}
    style={{ textAlign: "center" }}
    className={
      !isMobile
        ? classes.descriptionNoShift
        : orient === "left"
        ? classes.descriptionLeft
        : classes.descriptionRight
    }
  >
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6" component="p">
          {project.title}
        </Typography>
        <Typography variant="subtitle2" component="p">
          {project.description}
        </Typography>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Breadcrumbs aria-label="breadcrumb">
            {project.stack.map((tech, idx) => (
              <Typography
                key={idx}
                color="textPrimary"
                className={classes.link}
              >
                <img src={tech.icon} alt="icon" className={classes.icon} />
                {tech.name}
              </Typography>
            ))}
          </Breadcrumbs>
        </Box>
      </CardContent>
      <Box mb={2}>
        <ButtonGroup variant="text" aria-label="text primary button group">
          <Button>Show Details</Button>
          {project.url === "no-live" ? (
            <Button>Not Deployed</Button>
          ) : (
            <Button href={project.url} target="_blank">
              Open Link
            </Button>
          )}

          {project.github === "closed" ? (
            <Button>Not Open Sourced</Button>
          ) : (
            <Button href={project.github} target="_blank">
              Github
            </Button>
          )}
        </ButtonGroup>
      </Box>
    </Card>
  </Box>
);

const ProjectCard: React.FunctionComponent<{
  project: Project;
  orient: string;
  isMobile: boolean;
}> = ({ project, orient, isMobile }) => {
  const classes = useStyles();

  if (isMobile) {
    return (
      <Grid container justifyContent="center">
        <Grid item xs={10} className={classes.card}>
          <Description
            project={project}
            classes={classes}
            orient={orient}
            isMobile={isMobile}
          />

          <div
            style={{ textAlign: "center" }}
            className={orient === "left" ? classes.picRight : classes.picLeft}
          >
            <img
              src={project.cover}
              alt=""
              className={orient === "left" ? classes.picRight : classes.picLeft}
            />
          </div>
        </Grid>
      </Grid>
    );
  } else {
    return (
      <div>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img src={project.cover} alt="" className={classes.picNoShift} />
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Description
            project={project}
            classes={classes}
            orient={orient}
            isMobile={isMobile}
          />
        </Box>
      </div>
    );
  }
};

export default ProjectCard;
