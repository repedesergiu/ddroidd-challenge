import React from "react";
import { makeStyles } from "@mui/styles";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateRows: "20vh 0.2fr 0.2fr 0.6fr",
    justifyContent: "center",
    alignItems: "center",
    justifyItems: "center",
    padding: `0px ${theme.spacing(6)}`,
    minHeight: 600,
  },
  icon: {
    border: `3px solid ${theme.palette.secondary.main}`,
    borderRadius: "50%",
    padding: theme.spacing(2),
  },
  about: {
    color: theme.palette.text.main,
  },
  text: {
    width: "400px",
    textAlign: "justify",
    alignSelf: "start",
    color: theme.palette.text.light,
    fontFamily: '"Lato", Open Sans',
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div />
      <PermContactCalendarOutlinedIcon
        color="secondary"
        className={classes.icon}
        style={{ fontSize: 50 }}
      />
      <Typography
        variant="h5"
        fontWeight="fontWeightBold"
        className={classes.about}
      >
        ABOUT
      </Typography>
      <Typography variant="subtitle1" className={classes.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        dignissim laoreet porta. Nam in mi mi. Vivamus nec viverra purus, sed
        tempor orci. Fusce volutpat magna ante, eget ultricies est tempus id.
        Aenean eget congue nunc. Vestibulum consectetur interdum pretium.
      </Typography>
    </div>
  );
}
