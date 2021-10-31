import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Cart from "../components/Cart/Cart";
import ProductList from "../components/Product/ProductList";
import ZoomedProduct from "../components/Product/ZoomedProduct";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    padding: `100px ${theme.spacing(6)}`,
    minHeight: 600,
    background: theme.palette.primary.main,
  },
  content: {
    display: "grid",
    gridTemplateColumns: "0.2fr 1fr",
    gridGap: theme.spacing(4),
    width: "100%",
  },
}));

export default function Contact() {
  const classes = useStyles();
  const [productClicked, setProductClicked] = useState(false);
  const [zoomedProduct, setZoomedProduct] = useState();
  const [productList, setProductList] = useState([]);
  const [added, setAdded] = useState(false);
  const [cartItemsNumber, setCartItemsNumber] = useState();

  useEffect(() => {
    if (productList.length === 0) {
      axios
        .get(`https://fakestoreapi.com/products?limit=8`)
        .then((res) => {
          const products = res.data;
          setProductList(products);
        })
        .catch((e) => {
          console.log(e.message);
        });
    }
  }, [productList]);

  useEffect(() => {
    setProductClicked(false);
    let existingCartItems = [];
    existingCartItems = JSON.parse(window.sessionStorage.getItem("cartItems"));
    if (existingCartItems && existingCartItems.length > 0) {
      setCartItemsNumber(existingCartItems.length);
    }
  }, []);

  const zoomProduct = (id) => {
    setProductClicked(true);
    const newZoomedProduct = productList.find((product) => product.id === id);
    if (newZoomedProduct) {
      setZoomedProduct(newZoomedProduct);
      let existingCartItems = [];
      existingCartItems = JSON.parse(
        window.sessionStorage.getItem("cartItems")
      );
      if (existingCartItems && existingCartItems.length > 0) {
        if (
          existingCartItems.find(
            (product) => product === newZoomedProduct.title
          )
        ) {
          setAdded(true);
        } else {
          setAdded(false);
        }
      }
    }
  };

  const addToCart = () => {
    setAdded(true);
    let cartItems = [];
    let existingCartItems = [];
    existingCartItems = JSON.parse(window.sessionStorage.getItem("cartItems"));
    if (existingCartItems && existingCartItems.length > 0) {
      cartItems = [...existingCartItems];
    }
    cartItems.push(zoomedProduct.title);
    setCartItemsNumber(cartItems.length);

    window.sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <Cart itemsNumber={cartItemsNumber} />
        {!productClicked ? (
          <ProductList zoomProduct={zoomProduct} productList={productList} />
        ) : (
          <ZoomedProduct
            key={zoomedProduct.id}
            title={zoomedProduct.title}
            description={zoomedProduct.description}
            image={zoomedProduct.image}
            added={added}
            setAdded={addToCart}
            close={() => {
              setProductClicked(false);
            }}
          />
        )}
      </div>
    </div>
  );
}
