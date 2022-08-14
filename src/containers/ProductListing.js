import React, { useEffect } from "react";
import axios from "axios";
import { setProduct } from "../redux/actions/productActions";
import { useSelector,useDispatch } from "react-redux";
import ProductComponents from "./ProductComponents";

function ProductListing() {
  const product = useSelector((state) => state);
 const dispatch=useDispatch()
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("err", err);
      });
  dispatch(setProduct(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  console.log("Product:",product);
  return (
    <div className="ui grid container">
      <ProductComponents />
    </div>
  );
}

export default ProductListing;
