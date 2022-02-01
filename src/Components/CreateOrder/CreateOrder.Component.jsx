import React, { useContext } from "react";
import { ContextCreate } from "../Context/ContextComp.Component";
const CreateOrder = () => {
  const contextObj = useContext(ContextCreate);
  function InputName(event) {
    contextObj.nameAgent = { nameAgent: event.target.value };
  }
  function InputNumOrder(event) {
    contextObj.NumOrder = { NumOrder: event.target.value };
  }
  function InputEmail(event) {
    contextObj.email = { email: event.target.value };
  }
  function UpDateAgent() {
    contextObj.setAgent(contextObj.nameAgent,contextObj.NumOrder,contextObj.email);
    alert(`the Order number ${contextObj.agent.NumOrder} seccess`);
  }
  return (
    <div>
      <h1>CreateOrder</h1>
      <label>name :</label>
      <br />
      <input onChange={InputName} type="text" />
      <br />
      <label>number order :</label>
      <br />
      <input onChange={InputNumOrder} type="text" />
      <br />
      <label>email :</label>
      <br />
      <input onChange={InputEmail} type="text" />
      <br />
      <button onClick={UpDateAgent}>Send</button>

      <p>
        name : {contextObj.agent.nameAgent} . 
        order :{contextObj.agent.NumOrder} . 
        email : {contextObj.agent.email} .
      </p>
    </div>
  );
};
export default CreateOrder;
