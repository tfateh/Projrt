import axios from "axios";
import {
  GET_USER_BY_ID,
  GET_USER_BY_ID_FAILED,
  GET_USER_BY_ID_SUCCESS,
} from "../actionstypes/usertypes";

export const getUserById = (id) => async (dispatch) => {
  dispatch({ type: GET_USER_BY_ID });

  try {
    const config = {
      headers: {
        authorization: localStorage.getItem("token"),
      },
    };

    const response = await axios.get(`/user/${id}`, config);

    dispatch({ type: GET_USER_BY_ID_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: GET_USER_BY_ID_FAILED, payload: error.response.data });
  }
};

/*****************delete User **************************/

export const deleteUser = (userId)=> async (dispatch) =>{

  
    try {
        dispatch({type:DELETE_USER})
        const config = {
            headers:{
                authorization:localStorage.getItem("token")
            }
        }
        const response = await axios.delete(`/user/deleteUser/${userId}`,config)

        dispatch({ type: DELETE_USER_SUCCESS, payload: response.data });
        dispatch(getUsers())
        
    } catch (error) {
        dispatch({ type: DELETE_USER_FAILED, payload: error.response.data });

    }
} 
