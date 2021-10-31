import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import clsx from "clsx";

const home = 0;
const about = 1;
const contact = 2;

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: theme.palette.background,
    borderBottom: `1px solid ${theme.palette.gray}`,
  },
  toolbar: {
    display: "grid",
    gridTemplateColumns: "1fr 0.2fr 150px",
    gridGap: theme.spacing(2),
    alignItems: "center",
    padding: `0px ${theme.spacing(6)}`,
  },
  link: {
    display: "grid",
    justifySelf: "end",
    textDecoration: "none",
    fontFamily: '"Lato", Open Sans',
    fontWeight: 700,
    color: theme.palette.black,
  },
  links: {
    display: "grid",
    gridTemplateColumns: "100px 100px 100px",
  },
  selected: {
    color: theme.palette.secondary.light,
  },
  searchContainer: {
    display: "grid",
    justifyContent: "center",
    justifySelf: "end",
    alignContent: "center",
    height: 64,
    width: 100,
    background: theme.palette.search,
  },
  logo: {
    display: "grid",
    justifySelf: "start",
    fontWeight: 400,
    color: theme.palette.text.main,
  },
}));

export default function AppBarComponent() {
  const classes = useStyles();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (window.location.pathname === "/" && selected !== home) {
      setSelected(0);
    } else if (window.location.pathname === "/about" && selected !== about) {
      setSelected(1);
    } else if (
      window.location.pathname === "/contact" &&
      selected !== contact
    ) {
      setSelected(2);
    }
  }, [selected]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="primary"
        elevation={0}
        className={classes.appbar}
      >
        <div className={classes.toolbar}>
          <Link
            color="secondary"
            to="/"
            className={clsx(classes.link, classes.logo)}
            onClick={() => {
              setSelected(0);
            }}
          >
            <Typography variant="h6">LOGO</Typography>
          </Link>

          <div className={classes.links}>
            <Link
              color="secondary"
              to="/"
              className={
                selected === home
                  ? clsx(classes.link, classes.selected)
                  : classes.link
              }
              onClick={() => {
                setSelected(0);
              }}
            >
              Home
            </Link>
            <Link
              color="secondary"
              to="/about"
              className={
                selected === about
                  ? clsx(classes.link, classes.selected)
                  : classes.link
              }
              onClick={() => {
                setSelected(1);
              }}
            >
              About
            </Link>
            <Link
              color="secondary"
              to="/contact"
              className={
                selected === contact
                  ? clsx(classes.link, classes.selected)
                  : classes.link
              }
              onClick={() => {
                setSelected(2);
              }}
            >
              Contact
            </Link>
          </div>
          <div className={classes.searchContainer}>
            <SearchIcon />
          </div>
        </div>
      </AppBar>
    </Box>
  );
}
