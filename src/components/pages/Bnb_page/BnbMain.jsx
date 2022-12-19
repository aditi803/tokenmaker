import { useState } from "react";
import BnbMain1 from "./BnbMain1";
import { FinalMain } from "../Main_page/FinalMain";
import { StepContext } from "./StepContext";
export const BnbMain = () => {
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
