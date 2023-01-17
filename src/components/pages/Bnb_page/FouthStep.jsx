import React, { useContext } from 'react'
import { Tooltip } from 'react-bootstrap'
import { HiInformationCircle } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import { TermsModal } from '../../Layots/TermsModal'
import { multiStepContext } from './StepContext'
const FouthStep = () => {
    const { setStep, userData, setUserData } = useContext(multiStepContext)
  return (
    <section>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
            <div className="firstForm p-lg-5 p-4 mt-0 mb-5">
                <h2 className="heading">Network</h2>
                <form>
                <div className="form-group">
                              <select
                                className="form-select"
                                name="network"
                                // value={network}
                                // onChange={ethMainFormHandler}
                              >
                                {/* {data.map((item) => {
                                  if (
                                    item.parentNetworkName ===
                                      "Binance Smart Chain" &&
                                    item.tokenType === "free"
                                  ) {
                                    return (
                                      <option value={item.value}>
                                        {item.subNetworkName}
                                      </option>
                                    );
                                  } else if (
                                    item.parentNetworkName ===
                                      "Binance Smart Chain" &&
                                    item.tokenType === "basic"
                                  ) {
                                    <option value={item.value}>
                                      {item.subNetworkName}
                                    </option>;
                                  } else if (
                                    item.parentNetworkName ===
                                      "Binance Smart Chain" &&
                                    item.tokenType === "custom"
                                  ) {
                                    <option value={item.value}>
                                      {item.subNetworkName}
                                    </option>;
                                  }
                                })} */}
                              </select>
                              <span className="form-text text-muted">
                                Select the network on which you want to deploy
                                your token
                              </span>
                            </div>
                            <h2 className="heading">Transaction</h2>
                            <div className="card-body">
                            <div className="transactionWrap">
                              <div className="Ttext">
                                <p>
                                  Commission fee:{" "}
                                  <i
                                    className="fa-solid fa-circle-info tip"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    // data-bs-custom-class="custom-tooltip"
                                    title="The commison fee will be
                                  transferred automatically to us during the contract creation.In case of error,this amount will not be deducted
                                  from your wallet.Only the gas fees will be deducted "
                                  ></i>
                                  <Tooltip
                                    content={
                                      <>
                                        The commison fee will be
                                        <br />
                                        transferred automatically to us
                                        <br /> during the contract creation.
                                        <br />
                                        In case of error,this
                                        <br /> amount will not be
                                        <br /> deducted from your <br />
                                        wallet.Only the gas
                                        <br /> fees will be deducted
                                      </>
                                    }
                                    direction="top"
                                  >
                                    <HiInformationCircle size={22} />
                                  </Tooltip>
                                </p>
                              </div>
                              <div className="Tbtn mt-auto mb-auto" style={{ width: "120px" }}>
                                <span className="badge bg-success d-block p-2 ">
                                  {/* {commissionFee
                                    ? commissionFee === "Free"
                                      ? "Free"
                                      : `${commissionFee} BNB`
                                    : "Free"} */}
                                </span>
                              </div>
                            </div>
                            <div className="transactionWrap">
                              <div className="Ttext ">
                                <p>
                                  Gas fee:{" "}
                                  <i
                                    className="fa-solid fa-circle-info tip"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="The gas fee depend on gas limit and gas price.
                                  Metamask will automatically display the best fee to use "
                                  ></i>
                                  <Tooltip
                                    content={
                                      <>
                                        The gas fee depend <br />
                                        on gas limit and
                                        <br /> gas price. Metamask will
                                        <br /> automatically display
                                        <br /> the best fee to use
                                      </>
                                    }
                                    direction="top"
                                  >
                                    <HiInformationCircle size={22} />
                                  </Tooltip>
                                </p>
                              </div>
                              <div className="Tbtn mt-auto mb-auto" style={{ width: "120px" }}>
                                <span className="badge bg-secondary d-block p-2">
                                  Variable
                                </span>
                              </div>
                            </div>
                          </div>
                          <h2 className="heading">Agreement</h2>
                          <div className="card-body">
                            <div className="form-group">
                              <label className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="agreement"
                                //   value={agreement}
                                //   onChange={ethMainFormHandler}
                                />

                                <span className="form-check-label">
                                  I have read, understood and agreed to the{" "}
                                  {/* <span className="text-underline"> */}
                                  {/*  modal*/}
                                  <Link
                                    to="/"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                  >
                                    <u> Terms of Use. </u>
                                  </Link>
                                  <TermsModal />
                                  {/* modal */}
                                  {/* </span> */}
                                </span>
                                <br />
                                <span className="text-danger">
                                  {/* {err.agreementErr} */}
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className='d-flex'>

                        <button type="button" className="btn form-btn" onClick={()=>setStep(1)}>
                            Back
                        </button>
                        <button type="button" className="btn form-btn" >
                            Submit
                        </button>
                        </div>

                </form>

            </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default FouthStep