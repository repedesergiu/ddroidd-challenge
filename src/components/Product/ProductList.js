import React from "react";
import { makeStyles } from "@mui/styles";
import Product from "./Product";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,0.25fr))",
    columnGap: theme.spacing(4),
    rowGap: theme.spacing(6),
  },
}));

export default function ProductList(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {props.productList.length > 0
        ? props.productList.map((product) => {
            return (
              <Product
                key={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                onClick={() => {
                  props.zoomProduct(product.id);
                }}
              />
            );
          })
        : null}
    </div>
  );
}
