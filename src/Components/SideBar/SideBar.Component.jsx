import React from "react";
import { Link } from 'react-router-dom';

const SideBar=()=>{
    return(<div className="sideBar">
        <h1>SideBar</h1>
            <Link to="/Home">Home</Link>
            <Link to="/Order">Order</Link>
            <Link to="/Product">Product</Link>
            <Link to="/CreateOrder">CreateOrder</Link>
            <Link to="/Contact">Contact</Link>
    </div>)
}
export default SideBar;