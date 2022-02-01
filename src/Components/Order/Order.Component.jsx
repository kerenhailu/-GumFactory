import React, { useContext, useEffect } from "react";
import { ContextCreate } from "../Context/ContextComp.Component";
const Order = () => {
  const AgentContext = useContext(ContextCreate);
  useEffect(() => {
    alert(`welcome ${AgentContext.agent.nameAgent}`);
  },[]);
  return (
    <div className="main">
      <h1>Order</h1>
    </div>
  );
};
export default Order;
