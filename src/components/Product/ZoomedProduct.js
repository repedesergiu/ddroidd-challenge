import React from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateRows: "10px 200px 1fr",
    alignItems: "center",
    justifyItems: "center",
  },
  title: {
    color: theme.palette.white,
    padding: theme.spacing(2),
    justifyContent: "center",
  },
  description: {
    color: theme.palette.white,
    paddingLeft: theme.spacing(2),
    justifyContent: "center",
  },
  image: {
    maxHeight: 300,
    maxWidth: 300,
  },
  button: {
    height: 50,
    width: 200,
    justifySelf: "center",
  },
  textAndButton: {
    display: "grid",
    gridTemplateColumns: "0.6fr 0.4fr",
    columnGap: theme.spacing(2),
    alignItems: "center",
    background: theme.palette.secondary.main,
    padding: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  closeIcon: {
    display: "grid !important",
    cursor: "pointer",
    justifySelf: "end",
  },
}));

export default function ZoomedProduct(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CloseIcon className={classes.closeIcon} onClick={props.close} />
      <img src={props.image} alt="product" className={classes.image} />
      <div className={classes.textAndButton}>
        <div>
          <Typography
            variant="h6"
            fontWeight="fontWeightBold"
            className={classes.title}
          >
            {props.title}
          </Typography>
          <Typography variant="body2" className={classes.description}>
            {props.description}
          </Typography>
        </div>
        <Button
          className={classes.button}
          variant="contained"
          style={
            props.added
              ? {
                  backgroundColor: "#43C6DB",
                }
              : {
                  backgroundColor: "#2FDA7F",
                }
          }
          color="primary"
          disabled={props.added}
          onClick={props.setAdded}
        >
          {props.added ? "Added" : "Add to cart"}
        </Button>
      </div>
    </div>
  );
}
