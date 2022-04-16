import {
    LOG_OUT,
    SIGN_IN,
    SIGN_IN_FAILED,
    SIGN_IN_SUCCESS,
    SIGN_UP,
    SIGN_UP_FAILED,
    SIGN_UP_SUCCESS,
  } from "../actionstypes/authTypes";
  
  const initialState = {
    loading: false,
    msg: "",
    errors: [],
    products: [],
    user: {},
    isAuth: false,
  };
  
  const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case SIGN_UP:
      case SIGN_IN:
        return {
          ...state,
          loading: true,
        };
  
      case SIGN_IN_SUCCESS:
        return {
          ...state,
          loading: false,
          msg: payload,
          isAuth: true,
        };
  
      case SIGN_UP_SUCCESS:
        return {
          ...state,
          loading: false,
          msg: payload,
          isAuth: true,
        };
  
  
      case SIGN_UP_FAILED:
      case SIGN_IN_FAILED:
   
        return {
          ...state,
          loading: false,
          errors: payload,
          isAuth: false,
        };
      case LOG_OUT:
        return {
          ...state,
          loading: false,
          isAuth: false,
          msg: "",
          errors: [],
        };
      default:
        return state;
    }
  };
  
  export default authReducer;