import React from "react";
import Typography from "@material-ui/core/Typography";

import nodeIcon from "../assets/icons/node.png";
import mongoIcon from "../assets/icons/mongo.png";
import reactIcon from "../assets/icons/react.png";
import swift from "../assets/icons/swift.png";

import angularIcon from "../assets/icons/angular.svg";
import bootstrapIcon from "../assets/icons/bootstrap.svg";

import expressIcon from "../assets/icons/expressjs-icon.svg";

import Box from "@material-ui/core/Box";
import yourmorals from "../assets/images/yourmorals.png";
import MyFilms from "../assets/images/MyFilms.png";
import MyMobileFilms from "../assets/images/MyMobileFilms.jpg";

import ProjectCard from "./ProjectCard";
import { Grid } from "@material-ui/core";

export interface Project {
  title: string;
  description: string;
  cover: string;
  url: string;
  github: string;
  stack: {
    name: string;
    icon: string;
  }[];
}

const Projects: React.FunctionComponent<{ isMobile: boolean }> = ({
  isMobile,
}) => {
  return (
    <Box mt={6}>
      <Typography variant="h4" align="center">
        Some Projects I worked on
      </Typography>
      <Grid container direction="column">
        <Grid item>
          <Box my={4}>
            <ProjectCard
              isMobile={isMobile}
              project={{
                title: "YourMorals",
                description:
                  "YourMorals is a survey website with psychology related surveys to show users about their morality, ethics and personality. Researchers can publish their surveys and collect data. I was in charged of re-build its UI and move the backend to cloud environment and refactor with MongoDB and Node.js. It has over 800k users and 200 daily active users.",
                cover: yourmorals,
                url: "https://yourmorals.org",
                github: "closed",
                stack: [
                  { name: "MongoDB", icon: mongoIcon },
                  { name: "Express.js", icon: expressIcon },
                  { name: "React.js", icon: reactIcon },
                  { name: "Node.js", icon: nodeIcon },
                ],
              }}
              orient="left"
            />
          </Box>
        </Grid>
        <Grid item>
          <Box my={4}>
            <ProjectCard
              isMobile={isMobile}
              project={{
                title: "My Films",
                description:
                  "My Films is a responsive website displays trending/top rated/popular movies and tv shows and search functionalities with films casts/reviews/recommendations, powered by TMDB",
                cover: MyFilms,
                url: "https://cs571-310200.uc.r.appspot.com/",
                github: "https://github.com/Haizhepi/MyFilms",
                stack: [
                  { name: "Angular JS", icon: angularIcon },
                  { name: "Express.js", icon: expressIcon },
                  { name: "Bootstrap", icon: bootstrapIcon },
                  { name: "Node.js", icon: nodeIcon },
                ],
              }}
              orient="right"
            />
          </Box>
        </Grid>
        <Grid item>
          <Box my={4}>
            <ProjectCard
              isMobile={isMobile}
              project={{
                title: "My Mobile Films",
                description:
                  "A IOS Application created by SwiftUI that displays the popular / top-rated Movie / TV Shows. User can search for and view detail cast, tralier, reviews of the movie and have a custom watch list for their favorite movie / TV shows. And share it via Twitter and Facebook",
                cover: MyMobileFilms,
                url: "no-live",
                github: "https://github.com/Haizhepi/Mobile-Films",
                stack: [
                  { name: "Swift UI", icon: swift },
                  { name: "Express.js", icon: expressIcon },
                  { name: "Node.js", icon: nodeIcon },
                ],
              }}
              orient="left"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
