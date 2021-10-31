import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateRows: "200px 0.1fr 0.1fr",
    alignItems: "center",
    justifyItems: "center",
    cursor: "pointer",
    background: theme.palette.white,
    boxShadow: "1px -1px 21px -6px rgba(0,0,0,0.14)",
  },
  title: {
    color: theme.palette.text.main,
    padding: theme.spacing(2),
    width: 230,
    justifyContent: "center",
  },
  description: {
    color: theme.palette.text.light,
    padding: theme.spacing(2),
    width: 200,
    justifyContent: "center",
    textAlign: "justify",
  },
  image: {
    maxHeight: 150,
    maxWidth: 150,
  },
}));

export default function Product(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} onClick={props.onClick}>
      <img src={props.image} alt="product" className={classes.image} />
      <Typography
        variant="h6"
        fontWeight="fontWeightBold"
        className={classes.title}
        noWrap={true}
      >
        &nbsp;&nbsp;{props.title}
      </Typography>
      <Typography variant="body2" className={classes.description}>
        &nbsp;&nbsp;&nbsp;{props.description}
      </Typography>
    </div>
  );
}
