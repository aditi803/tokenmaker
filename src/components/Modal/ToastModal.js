import React from "react";

export const ToastModal = (props) => {
  const {changeNetwork,selectedNetwork} = props
  const toastStyle = {
    backgroundColor: "",
  };
  return (
    <div style={toastStyle}>
      <p style={{ color: "red" }}>
        Your Wallet is Connected To The Wrong Network!!
      </p>
      {/* <br /> */}
      {/* <a href=""> */}
        {" "}
        <u onClick={()=>{
          changeNetwork(selectedNetwork)
        }}> Click Here To Switch Network</u>{" "}
      {/* </a> */}
    </div>
  );
};
