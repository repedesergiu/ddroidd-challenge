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
    background: theme.palette.primary.main,
  },
  icon: {
    border: `3px solid ${theme.palette.secondary.main}`,
    borderRadius: "50%",
    padding: theme.spacing(2),
  },
  contact: {
    color: theme.palette.text.main,
  },
  info: {
    display: "grid",
    alignSelf: "start",
    gridGap: theme.spacing(2),
  },
  text: {
    textAlign: "center",
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
        className={classes.contact}
      >
        Contact
      </Typography>
      <div className={classes.info}>
        <Typography variant="subtitle1" className={classes.text}>
          droid@droid.com
        </Typography>
        <div>
          <Typography variant="subtitle1" className={classes.text}>
            tel. 123 - 456 - 789
          </Typography>
          <Typography variant="subtitle1" className={classes.text}>
            tel. 887 - 236 - 324
          </Typography>
        </div>
        <Typography variant="subtitle1" className={classes.text}>
          Cluj, Cluj-Napoca
        </Typography>
        <Typography variant="subtitle1" className={classes.text}>
          Romania
        </Typography>
      </div>
    </div>
  );
}
