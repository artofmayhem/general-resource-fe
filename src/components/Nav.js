import { AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import React, { useState, useEffect, useRef } from "react";
import { TimelineLite } from "gsap";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  list: {
    width: 500,
  },
  fullList: {
    width: "auto",
  },
});

export default function Nav() {
  const classes = useStyles();
  const [state, setState] = useState({ left: false });
  let nav = useRef(null);
  const timeline = new TimelineLite();

  useEffect(() => {
    timeline
      .from(nav, 1.75, {
        opacity: 0,
        // backgroundColor: "transparent",
      })
      .to(nav, 1.75, {
        opacity: 1,
        // backgroundColor: "white",
      });
  }, []); // eslint-disable-line

  const handleDrawerOpen = () => {
    setState({ left: true });
  };
  const handleDrawerClose = () => {
    setState({ left: false });
  };


  return (
    <>
      <AppBar
        position="absolute"
        style={{
          height: "auto",
          backgroundColor: "white",
          width: "100vw",
        }}
        ref={(el) => (nav = el)}
      >
        <div className={"flex flex-row flex-wrap justify-between align-center"}>
          <div className={"flex flex-row my-6 ml-6 py-6 text-black text-5xl w-auto"}>
            <Button onClick={handleDrawerOpen}>
              <MenuIcon className={"text-black mx-6"} />
            </Button>
            <Link to="/">
              <h1 className={"ml-0 text-yellow-500"}>General Resource</h1>
            </Link>
          </div>
          <div className={"my-6 -mr-24 text-white text-4xl w-96"}>
            <Button>
              <Link
                className={"text-white"}
                style={{ fontSize: "10px" }}
                to={"login"}
              >
                <AccountCircleIcon className={"mr-2"} />
                Login
              </Link>
            </Button>
          </div>
        </div>
      </AppBar>
      <Drawer
        color="transparent"
        open={state.left}
        onClose={handleDrawerClose}
        classes={{
          paper: classes.fullList,
        }}
      >
        <List className={classes.list}>
        <ListItem button>
            <ListItemIcon>
              <EmojiPeopleIcon />
            </ListItemIcon>
            <Link to={"home"} onClick={handleDrawerClose}>
              <ListItemText primary="Home" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <EmojiPeopleIcon />
            </ListItemIcon>
            <Link to={"about"} onClick={handleDrawerClose}>
              <ListItemText primary="About Us" />
            </Link>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <EmojiPeopleIcon />
            </ListItemIcon>
            <Link to={"technology"} onClick={handleDrawerClose}>
              <ListItemText primary="Our Technology" />
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
