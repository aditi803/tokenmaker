import React, { useContext } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import "./form.css";
import { multiStepContext } from "./StepContext";
const FirstStep = () => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="firstForm">
                <h2 className="heading">Informations</h2>
                <form>
                  <div className="form-group">
                    <label className="form-label">
                      Token type
                      <span className="val-required">*</span>
                    </label>
                    <select
                      className="form-select"
                      name="tokenType"
                      // onChange={ethMainFormHandler}
                      // value={tokenType}
                    >
                      <option value="free">Free</option>
                      <option value="basic">Basic</option>
                      <option value="custom">Custom</option>
                    </select>
                    <span className="form-text text-muted">
                      Select the base configuration of your token (Free and
                      Basic have limited configurations)
                    </span>
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Token Name
                      <span className="val-required">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="My new token"
                      name="tokenName"
                      // value={tokenName}
                      // onChange={ethMainFormHandler}
                    />
                    <span className="form-text text-muted">
                      The name of your token
                    </span>
                    <br />
                    {/* <span className="text-danger">
                                {err.tokenNameErr}
                              </span> */}
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Token Symbol
                      <span className="val-required">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="TKN"
                      maxLength="8"
                      name="tokenSymbol"
                      // value={tokenSymbol}
                      // onChange={ethMainFormHandler}
                    />
                    <span className="form-text text-muted">
                      You token's symbol (ie BNB)
                    </span>
                    <br />
                    {/* <span className="text-danger">
                                {err.tokenSymbolErr}
                              </span> */}
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Decimals<span className="val-required">*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="18"
                      maxLength="2"
                      // disabled={f_decimals}
                      // value={decimals}
                      name="decimals"
                      // onChange={ethMainFormHandler}
                    />
                    <span className="form-text text-muted">
                      The number of decimal of your token (default 18)
                    </span>
                    <br />
                    {/* <span className="text-danger">
                                {err.decimalsErr}
                              </span> */}
                  </div>
                  <button
                    type="button"
                    className="btn form-btn"
                    onClick={() => setStep(2)}
                  >
                    Next
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstStep;
