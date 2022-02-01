import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from "./Contact/Contact.Component";
import CreateOrder from "./CreateOrder/CreateOrder.Component";
import Footer from "./Footer/Footer.Component";
import Header from "./Header/Header.Component";
import Home from "./Home/Home.Component";
import NavBar from "./NavBar/NavBar.Component";
import Order from "./Order/Order.Component";
import Product from "./Product/Product.Component";
import SideBar from "./SideBar/SideBar.Component";
const RouterComponent=()=>{
    return <BrowserRouter>
    <NavBar/>
    <Header/>
    <SideBar/>
<Routes>
 <Route exact path="/" element={<Home/>}/>
 <Route exact path="/Order" element={<Order/>}/>
 <Route exact path="/Product" element={<Product/>}/>
 <Route exact path="/CreateOrder" element={<CreateOrder/>}/>
 <Route exact path="/Contact" element={<Contact/>}/>
</Routes>
<Footer/>
</BrowserRouter>
}
export default RouterComponent;

