import React, { useContext } from 'react'
import { multiStepContext } from './StepContext'
const ThirdStep = () => {
    const { setStep, userData, setUserData } = useContext(multiStepContext)
  return (
    <section>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
            <div className="firstForm p-lg-5 p-4 mt-0 mb-5">
                <h2 className="heading">Supply</h2>
                <form>
                <div className="form-group">
                                <label className="form-label">
                                  Supply type
                                  <span className="val-required">*</span>
                                </label>
                                <select
                                  className="form-select"
                                  name="supplyType"
                                //   disabled={f_supplyType}
                                //   onChange={ethMainFormHandler}
                                //   value={supplyType}
                                >
                                  <option value="fixed">Fixed</option>
                                  <option value="capped">Capped</option>
                                  <option value="unlimited">Unlimited</option>
                                </select>
                                <span className="form-text text-muted">
                                  Fixed / Capped / Unlimited
                                </span>
                              </div>
                              <div className="form-group">
                                <label className="form-label">
                                  Initial supply
                                  <span className="val-required">*</span>
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="1000000"
                                  name="initialSupply"
                                //   disabled={f_initialSupply}
                                //   value={initialSupply}
                                //   onChange={ethMainFormHandler}
                                />
                                <span className="form-text text-muted">
                                  The number of coins minted during the creation
                                  of the contract
                                </span>
                              </div><br/><br/><br/>
                              <div className='d-flex'>
                              <button type="button" className="btn form-btn" onClick={()=>setStep(2)}>
                            Back
                        </button>
                              <button type="button" className="btn form-btn" onClick={()=>setStep(4)}>
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

export default ThirdStep