import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Button, Drawer } from "@material-ui/core";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    drawer: {
      background: theme.palette.primary.main,
    },
  })
);

const offset = -70;
const duration = 700;

interface item {
  to: string;
  text: string;
}

const MenuItems: item[] = [
  {
    to: "aboutme",
    text: "01. About Me",
  },
  {
    to: "experience",
    text: "02. Experience",
  },
  {
    to: "certifications",
    text: "03. Certifications",
  },
  {
    to: "projects",
    text: "04. Projects",
  },
];

const Navbar: React.FunctionComponent<{ isMobile: boolean }> = ({
  isMobile,
}) => {
  const classes = useStyles();

  const getMenuItems = () => (
    <React.Fragment>
      {MenuItems.map((item) => (
        <Link
          to={item.to}
          spy={true}
          offset={offset}
          smooth={true}
          duration={duration}
        >
          <Button color="inherit" onClick={toggleDrawer(false)}>
            {item.text}
          </Button>
        </Link>
      ))}
    </React.Fragment>
  );

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setDrawerOpen(open);
    };

  return (
    <div className={classes.root}>
      <React.Fragment>
        <Drawer
          open={drawerOpen}
          anchor={"top"}
          onClose={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          classes={{ paper: classes.drawer }}
        >
          {getMenuItems()}
        </Drawer>
      </React.Fragment>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Yunzhe (Josh) Liu
          </Typography>
          {isMobile && getMenuItems()}
        </Toolbar>
      </AppBar>
      {/* </ElevationScroll> */}
    </div>
  );
};

export default Navbar;
