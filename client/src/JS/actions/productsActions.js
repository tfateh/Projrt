import axios from "axios";
import {
  ADD_PRODUCT,
  ADD_PRODUCT_FAILED,
  ADD_PRODUCT_SUCCESS,
  DELETE_PRODUCT,
  DELETE_PRODUCT_FAILED,
  DELETE_PRODUCT_SUCCESS,
  GET_PRODUCTS,
  GET_PRODUCTS_FAILED,
  GET_PRODUCTS_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_FAILED,
  UPDATE_PRODUCT_SUCCESS,
} from "../actionstypes/productstypes";

export const getAllProducts = () => async (dispatch) => {
  dispatch({ type: GET_PRODUCTS });

  try {
    const config = {
      headers: {
        token: localStorage.getItem("accessToken"),
      },
    };

    const response = await axios.get("/product/products", config);

    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAILED, payload: error.response.data });
  }
};

export const updateProduct =
  (idProduct, updatedProduct, idUser) => async (dispatch) => {
    dispatch({ type: UPDATE_PRODUCT });

    try {
      const config = {
        headers: {
          token: localStorage.getItem("accessToken"),
        },
      };

      const response = await axios.put(
        `/product/updateProduct/${idProduct}/${idUser}`,
        updatedProduct,
        config
      );

      dispatch({ type: UPDATE_PRODUCT_SUCCESS, payload: response.data });
      dispatch(getAllProducts());
    } catch (error) {
      dispatch({ type: UPDATE_PRODUCT_FAILED, payload: error.response.data });
    }
  };

export const addProduct = (newProduct, idUser) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT });

  try {
    const config = {
      headers: {
        token: localStorage.getItem("accessToken"),
      },
    };

    const response = await axios.post(
      `/product/addProduct/${idUser}`,
      newProduct,
      config
    );
    dispatch({ type: ADD_PRODUCT_SUCCESS, payload: response.data });
    dispatch(getAllProducts());
  } catch (error) {
    dispatch({ type: ADD_PRODUCT_FAILED, payload: error.response.data });
  }
};

export const deleteProduct = (idProduct, idUser) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT });

  try {
    const config = {
      headers: {
        token: localStorage.getItem("accessToken"),
      },
    };

    const response = await axios.delete(
      `/product/deleteProduct/${idProduct}/${idUser}`,
      config
    );

    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: response.data });

    dispatch(getAllProducts());
  } catch (error) {
    console.log(error);
    dispatch({ type: DELETE_PRODUCT_FAILED, payload: error.response.data });
  }
};