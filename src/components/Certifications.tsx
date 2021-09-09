import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import CDA from "../assets/images/CDA.png";

const useStyles = makeStyles((theme) => ({
  cert: {
    width: "170px",
  },
  link: {
    color: "green",
  },
}));

const Certifications = () => {
  const classes = useStyles();
  return (
    <Box mt={6}>
      <Typography variant="h4" align="center">
        My Certifications
      </Typography>
      <Box my={4}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item style={{ textAlign: "center" }}>
            <img src={CDA} alt="CDA" className={classes.cert} />
            <Typography>AWS Certified Developer Associate</Typography>
            <Typography>
              Obtained on Sep. 2021{" "}
              <a
                className={classes.link}
                href="https://www.credly.com/badges/93ef6562-c88b-43f3-b9a1-7fd9802e7fe2"
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Certifications;
