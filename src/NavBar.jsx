import * as React from "react";
import { useState } from "react";
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
import { ContactUs } from "./Contact";
import { Project } from "./Project";
import { About } from "./About";

export const NavBar = () => {
  const [show, setShow] = useState(false);
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
            offset={-100}
            spy={true}
            smooth={true}
            duration={1000}
          >
            <h3 className="nav-items">Home</h3>
          </Link>
          <Link
            className="test6"
            to="about"
            offset={-100}
            spy={true}
            smooth={true}
            duration={1000}
          >
            <h3 className="nav-items">About</h3>
          </Link>
          <Link
            className="test6"
            to="skills"
            offset={-100}
            spy={true}
            smooth={true}
            duration={1000}
          >
            <h3 className="nav-items">Skills</h3>
          </Link>
          <Link
            className="test6"
            to="project"
            offset={-100}
            spy={true}
            smooth={true}
            duration={1000}
          >
            <h3 className="nav-items">Project</h3>
          </Link>
          <Link
            className="test6"
            to="contact"
            offset={-100}
            spy={true}
            smooth={true}
            duration={1000}
          >
            <h3 className="nav-items">Contact</h3>
          </Link>

          <IconButton
            onClick={() => setShow(!show)}
            id="menu-icon"
            color="inherit"
            aria-label="open drawer"
            edge="end"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        {show ? (
          <div className="toggle-nav-bar">
            <Link
              onClick={() => setShow(!show)}
              to="anchor"
              offset={-50}
              spy={true}
              smooth={true}
              duration={1000}
            >
              <h3>Home</h3>
            </Link>
            <Link
              onClick={() => setShow(!show)}
              to="about"
              offset={-100}
              spy={true}
              smooth={true}
              duration={1000}
            >
              <h3 className="">About</h3>
            </Link>
            <Link
              onClick={() => setShow(!show)}
              to="skills"
              offset={-100}
              spy={true}
              smooth={true}
              duration={1000}
            >
              <h3 className="">Skills</h3>
            </Link>
            <Link
              onClick={() => setShow(!show)}
              to="project"
              offset={-100}
              spy={true}
              smooth={true}
              duration={1000}
            >
              <h3 className="">Project</h3>
            </Link>
            <Link
              onClick={() => setShow(!show)}
              to="contact"
              offset={0}
              spy={true}
              smooth={true}
              duration={1000}
            >
              <h3 className="">Contact</h3>
            </Link>
          </div>
        ) : null}
      </AppBar>

      <div id="anchor">
        <Home name="anchor" />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="project">
        <Project />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
    </div>
  );
};
