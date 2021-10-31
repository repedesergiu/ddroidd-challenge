import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import PermContactCalendarOutlinedIcon from "@mui/icons-material/PermContactCalendarOutlined";
import ShoppingCartIconOutlined from "@mui/icons-material/ShoppingCartOutlined";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.secondary.main,
    padding: theme.spacing(2),
    width: 200,
    height: "min-content",
  },
  iconAndTitle: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "0.2fr 0.8fr",
    gridGap: theme.spacing(1),
    padding: `${theme.spacing(2)} 0px`,
  },
  white: {
    color: theme.palette.white,
  },
  cartContainer: {
    display: "grid",
    border: `2px dashed ${theme.palette.white}`,
    minHeight: 100,
    rowGap: theme.spacing(0.5),
    padding: theme.spacing(0.5),
  },
  cartEmpty: {
    justifySelf: "center",
    alignSelf: "center",
  },
  title: {
    color: theme.palette.white,
    background: theme.palette.secondary.light,
    padding: theme.spacing(1),
    width: 170,
    justifyContent: "center",
  },
}));

export default function Cart(props) {
  const classes = useStyles();
  const [cartItems, setCartItems] = useState();

  useEffect(() => {
    let existingCartItems = [];
    existingCartItems = JSON.parse(window.sessionStorage.getItem("cartItems"));
    if (existingCartItems && existingCartItems.length > 0) {
      setCartItems(existingCartItems);
    }
  }, [props.itemsNumber]);

  return (
    <div className={classes.root}>
      <div className={classes.iconAndTitle} style={{ paddingTop: 0 }}>
        <PermContactCalendarOutlinedIcon
          className={classes.white}
          fontSize="medium"
        />
        <Typography
          variant="subtitle1"
          className={classes.white}
          fontWeight="600"
        >
          Contact
        </Typography>
      </div>
      <Typography variant="caption" className={classes.white} fontWeight="300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        dignissim laoreet porta.
      </Typography>
      <div className={classes.iconAndTitle}>
        <ShoppingCartIconOutlined className={classes.white} fontSize="medium" />
        <Typography
          variant="subtitle1"
          className={classes.white}
          fontWeight="600"
        >
          Cart {""}
          {props.itemsNumber}
        </Typography>
      </div>
      <div className={classes.cartContainer}>
        {cartItems
          ? cartItems.map((item) => {
              return (
                <Typography
                  variant="caption"
                  fontWeight="fontWeightBold"
                  className={classes.title}
                  noWrap={true}
                >
                  {item}
                </Typography>
              );
            })
          : null}
        {!cartItems && (
          <Typography
            variant="caption"
            className={clsx(classes.white, classes.cartEmpty)}
            fontWeight="300"
          >
            Cart is empty
          </Typography>
        )}
      </div>
    </div>
  );
}
