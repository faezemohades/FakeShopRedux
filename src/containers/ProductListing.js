import React, { useEffect } from "react";
import { fetchProducts} from "../redux/actions/productActions";
import { useSelector,useDispatch } from "react-redux";
import ProductComponents from "./ProductComponents";

function ProductListing() {
  const product = useSelector((state) => state);
 const dispatch=useDispatch()

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log("Product:",product);
  return (
    <div className="ui grid container">
      <ProductComponents />
    </div>
  );
}

export default ProductListing;
