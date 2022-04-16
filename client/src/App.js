import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/Home/Homepage";
import ProductList from "./components/Prod/ProductList";

import {Routes ,Route} from 'react-router-dom'
import NavbarUser from "./components/NavBar/NavbarUser";
import Profile from "./components/Profil/Profil";
import { useEffect } from "react";
import SignUp from "./components/Register/SignUp";
import SignIn from "./components/SignIn/SignIn";
import Navbare from "./components/NavBar/Navbar";
function App() {
  
  return (
    <div>
      {localStorage.getItem('accessToken') ? <NavbarUser/> : <Navbare/>}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/ProductList" element={<ProductList />} />
        {/* <Route path="/product/:id" element={<Produit />} /> */}
        <Route path="/profile" element={<Profile />}/>


      </Routes>
    </div>
  );
}

export default App;