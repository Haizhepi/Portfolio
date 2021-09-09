import Fab from "@material-ui/core/Fab";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cert: {
    width: "170px",
  },
  fab: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
  },
}));

const ContactFab = () => {
  const classes = useStyles();
  return (
    <Box className={classes.fab}>
      <Grid container direction="column">
        <Grid item>
          <Box my={1}>
            <Fab
              color="secondary"
              aria-label="add"
              href="https://github.com/Haizhepi"
              target="_blank"
            >
              <GitHubIcon />
            </Fab>
          </Box>
        </Grid>
        <Grid item>
          <Box my={1}>
            <Fab
              color="secondary"
              aria-label="add"
              href="https://www.linkedin.com/in/yunzheliu/"
              target="_blank"
            >
              <LinkedInIcon />
            </Fab>
          </Box>
        </Grid>
        <Grid item>
          <Box my={1}>
            <Fab
              color="secondary"
              aria-label="add"
              href="mailto: yunzheliu1998@gmail.com"
              target="_blank"
            >
              <MailOutlineIcon />
            </Fab>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactFab;
