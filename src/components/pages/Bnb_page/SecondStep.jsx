import React, { useContext } from 'react'
import { multiStepContext } from './StepContext'
const SecondStep = () => {
    const { setStep, userData, setUserData } = useContext(multiStepContext)
  return (
    <section>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
            <div className="firstForm">
                <h2 className="heading">Options</h2>
                <form>
                <div className="form-group">
                              <label className="form-check form-switch">
                                <input
                                  name="conforms"
                                  className="form-check-input"
                                  type="checkbox"
                                //   disabled={f_conforms}
                                //   onChange={ethMainFormHandler}
                                //   defaultChecked={conforms}
                                />
                                <span className="form-check-label">
                                  Conforms to BEP20 protocol
                                </span>
                              </label>
                              <span className="form-text text-muted">
                                Your token will const all the functionalities,
                                and conforms to BEP20 protocol
                              </span>
                            </div>
                            <div className="form-group">
                              <label className="form-check form-switch">
                                <input
                                  name="verified"
                                  className="form-check-input"
                                  type="checkbox"
                                //   onChange={ethMainFormHandler}
                                //   disabled={f_verified}
                                //   defaultChecked={verified}
                                />
                                <span className="form-check-label">
                                  Verified on Bscscan
                                </span>
                              </label>
                              <span className="form-text text-muted">
                                The source code of your contract is
                                automatically published and verified
                              </span>
                            </div>
                            <div className="form-group">
                              <label className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="noCopyrightLink"
                                //   onChange={ethMainFormHandler}
                                //   checked={noCopyrightLink}
                                //   disabled={f_noCopyrightLink}
                                />
                                <span className="form-check-label">
                                  No copyright link
                                </span>
                              </label>
                              <span className="form-text text-muted">
                                A link pointing to this page will be added in
                                the description of your contract (Free and Basic
                                contracts only)
                              </span>
                            </div>
                            <div className="form-group">
                              <label className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                //   checked={mintable}
                                //   disabled={f_mintable}
                                  name="mintable"
                                //   onChange={ethMainFormHandler}
                                />
                                <span className="form-check-label">
                                  {" "}
                                  Mintable{" "}
                                </span>
                              </label>
                              <span className="form-text text-muted">
                                Allow the creation of new tokens in the future
                              </span>
                            </div>
                            <div className="form-group">
                              <label className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="burnable"
                                //   checked={burnable}
                                //   disabled={f_burnable}
                                //   onChange={ethMainFormHandler}
                                />
                                <span className="form-check-label ">
                                  Burnable
                                </span>
                              </label>
                              <span className="form-text text-muted">
                                Allow your tokens to be burned
                              </span>
                            </div>
                            <div className="form-group">
                              <label className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="pausable"
                                //   checked={pausable}
                                //   disabled={f_pausable}
                                //   onChange={ethMainFormHandler}
                                />
                                <span className="form-check-label">
                                  Pausable
                                </span>
                              </label>
                              <span className="form-text text-muted">
                                Allow your tokens to be paused
                              </span>
                            </div>
                            <div className='d-flex'>
                            <button type="button" className="btn form-btn" onClick={()=>setStep(1)}>
                            Back
                        </button>
                            <button type="button" className="btn form-btn" onClick={()=>setStep(3)}>
                            Next
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

export default SecondStep