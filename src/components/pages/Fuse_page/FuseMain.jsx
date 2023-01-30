import { useState } from "react";
import { FinalMain } from "../Main_page/FinalMain";
import { StepContext } from "./StepContext";
export const FuseMain = () => {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <>
      {showComponent ? (
        <StepContext setShow={setShowComponent}></StepContext>
      ) : (
        <FinalMain />
      )}
    </>
  );
};
