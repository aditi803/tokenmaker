import React, { useState } from "react";
import FantomMain1 from "./FuseMain1.jsx";

const multiStepContext = React.createContext();

const StepContext = (props) => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState({
    tokenType: "",
    tokenName: "",
    tokenSymbol: "",
    decimals: "",
  });
  const [finalData, setFinalData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const submitData = () => {
    setSubmitted(true);
    setFinalData({ ...finalData, userData });
    setUserData("");
    setStep(1);
  };

  return (
    <div>
      <multiStepContext.Provider
        value={{
          currentStep,
          setStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
          submitData,
          submitted,
          setSubmitted,
        }}
      >
        <FantomMain1 setShow={props.setShow} />
      </multiStepContext.Provider>
    </div>
  );
};

export { multiStepContext, StepContext };
