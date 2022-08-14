import { ActionTypes } from "../constants/action-types";
import fakestoreapi from "../../apis/fakestoreapi";

export const fetchProducts = () => async  (dispatch)=> {
    const response = await fakestoreapi.get('/products')
    dispatch({type: ActionTypes.FETCH_PRODUCTS,payload: response.data})
  };

  export const fetchProduct = (id) => async  (dispatch)=> {
    const response = await fakestoreapi.get(`/products/${id}`)
    dispatch({type: ActionTypes.SELECTED_PRODUCTS,payload: response.data})
  };



export const setProduct = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};
export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
  };
};
export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
  };
};
