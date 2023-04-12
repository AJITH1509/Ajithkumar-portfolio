import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./NavBar.css";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { Home } from "./Home";
import { Skills } from "./Skills";

export const NavBar = () => {
  return (
    <div id="main-container-navbar">
      <AppBar id="app-bar" position="fixed">
        <Toolbar>
          <Typography
            id="app-bar-name"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Ajith <span>Kumar</span> M
          </Typography>
          <Link
            className="test6"
            to="anchor"
            offset={100}
            spy={true}
            smooth={true}
            duration={1000}
          >
            <h3 className="nav-items">Home</h3>
          </Link>

          <h3 className="nav-items">About</h3>
          <h3 className="nav-items">Skills</h3>
          <h3 className="nav-items">Project</h3>
          <h3 className="nav-items">Contact</h3>
          <IconButton
            id="menu-icon"
            color="inherit"
            aria-label="open drawer"
            edge="end"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Home />
      <Skills />
    </div>
  );
};
