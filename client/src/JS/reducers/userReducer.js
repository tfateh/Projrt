import {
    GET_USER_BY_ID,
    GET_USER_BY_ID_FAILED,
    GET_USER_BY_ID_SUCCESS,
     UPDATE_USER ,
     UPDATE_USER_SUCCESS ,
   UPDATE_USER_FAILED,
  DELETE_USER,
    DELETE_USER_SUCCESS, 
   DELETE_USER_FAILED,

  } from "../actionstypes/userstypes";
  
  const initialState = {
    user: {},
    products: [],
    loading: false,
    errors: [],
  };
  
  const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_USER_BY_ID:
          case UPDATE_USER:
          case DELETE_USER:
        return {
          ...state,
          loading: true,
        };
  
      case GET_USER_BY_ID_SUCCESS:
        return {
          ...state,
          loading: false,
          user: payload.user,
          products: payload.user.products,
        };
  
        case UPDATE_USER_SUCCESS:
          case DELETE_USER_SUCCESS:
   return {
          ...state,
          loading: false,
          msg: payload.msg,
        };
  
  
      case GET_USER_BY_ID_FAILED:
        case  UPDATE_USER_FAILED:
        case DELETE_USER_FAILED:
        return {
          ...state,
          loading: false,
          errors: payload.errors,
        };
  
      default:
        return state;
    }
  };
  
  export default userReducer;