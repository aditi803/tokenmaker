import React from "react";

export const ToastModal = (props) => {
  const {changeNetwork,selectedNetwork} = props
  
  return (
    <div >

      <p style={{ color: "black",fontWeight:"bold"}}>
        Your Wallet is Connected To The Wrong Network!!
      </p>
        {" "}
        <u style={{"color":"blue"}} onClick={()=>{
          changeNetwork(selectedNetwork)
        }}> Click Here To Switch Network</u>{" "}


    </div>
    
  );
};
