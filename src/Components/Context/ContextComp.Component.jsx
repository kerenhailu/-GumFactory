import React, { useState } from "react";
export const ContextCreate=React.createContext();
const ContextComp=({children})=>{
    const[agent,setAgent]=useState({nameAgent:"ron",NumOrder:2,email:"ron@com"});
    return(<ContextCreate.Provider value={{agent,setAgent}}>
        {children}
        </ContextCreate.Provider>
    )
}
export default ContextComp;