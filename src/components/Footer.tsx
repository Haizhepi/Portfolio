import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  divider: {
    width: "80vw",
    border: `1px solid ${theme.palette.primary.main}`,
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Box my={10}>
      <Box mb={5}>
        <Grid container justifyContent="center">
          <Divider className={classes.divider} />
        </Grid>
      </Box>
      <Typography variant="body1" align="center">
        yunzheliu1998@gmail.com
      </Typography>
      <Box my={4}></Box>
    </Box>
  );
};

export default Footer;
