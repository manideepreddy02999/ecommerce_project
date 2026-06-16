import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Women from "./pages/Women";
import Mens from "./pages/Mens";
import Beauty from "./pages/Beauty";
import Genz from "./pages/Genz";
import Kids from "./pages/Kids";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import Profile from "./pages/Profile";
import ProductCreate from "./pages/admin/ProductCreate";
import MensProducts from "./pages/products/MensProducts";
import { AuthContextProvider } from "./authContext/Auth";
import {Provider} from "react-redux";
import store from "./redux/Store";
import Logout from "./pages/Logout";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        
        <Route path="/" element={<AuthContextProvider><Home /> </AuthContextProvider>    } />
        <Route path="/login" element={<AuthContextProvider><Login /></AuthContextProvider>} />
        <Route path="/logout" element={<AuthContextProvider><Logout /></AuthContextProvider>} />
        <Route path="/register" element={<Register />} />
        <Route path="/womens" element={<Women />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/genz" element={<Genz />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Provider store={store}><Cart /></Provider>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin/product-create" element={ <ProductCreate />} />
        <Route path="/mensproducts" element={<MensProducts />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
