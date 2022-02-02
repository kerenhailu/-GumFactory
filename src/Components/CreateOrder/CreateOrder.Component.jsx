import React, { useContext } from "react";
import { ContextCreate } from "../Context/ContextComp.Component";
const CreateOrder = () => {
  const contextObj = useContext(ContextCreate);
  
  function UpDateAgent() {
    contextObj.setAgent({...contextObj.agent});
    alert(`the Order number ${contextObj.agent.NumOrder} seccess`);
  }
//   פונקציה גנריצ
const ChangeAgentInput=(event)=>{
    contextObj.agent[event.target.name]=event.target.value;
}
  return (
    <div>
      <h1>CreateOrder</h1>
      <label>name :</label>
      <br />
      <input name="nameAgent" onChange={ChangeAgentInput} type="text" />
      <br />
      <label>number order :</label>
      <br />
      <input name="NumOrder" onChange={ChangeAgentInput} type="number" />
      <br />
      <label>email :</label>
      <br />
      <input name="email" onChange={ChangeAgentInput} type="text" />
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
