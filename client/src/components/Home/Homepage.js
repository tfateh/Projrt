import React, { useEffect } from "react";
import Announcement from "../Compils/Annoncer/Announcement"
import Footer from "../Footer/Footer";

import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Carousels from "../Compils/Carrousel/Carousels";

const Homepage = () => {

  const navigate = useNavigate()
  const isAuth = useSelector(state=> state.authReducer.isAuth)


   useEffect(()=> {
     if(!localStorage.getItem("accessToken")) {
      navigate('/signin') 
     }
   },[isAuth])

  return (
    <div>
      <Announcement />
      <Carousels />
      <Footer />
    </div>
  );
};

export default Homepage;