import React, { useContext } from "react";
import { ContextCreate } from "../Context/ContextComp.Component";

const Header=()=>{
    const contextHeader=useContext(ContextCreate);
    return(<div className="header">
        <h3>Header- nameAgent : {contextHeader.agent.nameAgent}</h3>
        
    </div>)
}
export default Header;