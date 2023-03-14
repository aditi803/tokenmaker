import React, { useEffect, useContext, useState } from "react";
// import "./Success.css"
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../contexts/EthContext/EtherProvider";
import { cilCopy } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
// import { toast } from "react-toastify"
import { Tooltip } from "react-bootstrap"

export const copyTextToClipboard = (element) => {
  /* Select the text field /
  element.select();
  element.setSelectionRange(0, 99999); / For mobile devices /

  / Copy the text inside the text field */
  navigator.clipboard.writeText(element.value);
};

export const SuccessDeploy = (props) => {
  const navigate = useNavigate()
  const { addToken, deployData } = props
  // const [tooltip, setTooltip] = useState(false)
  const { urlLinks, setSolDeploy, Deploy, solDeploy } = useContext(GlobalContext);
  const [test, setTest] = useState(false)
  const createNewToken = () => {
    setSolDeploy(false)
    navigate("/generator")
  }
  // useEffect(()=>{
  //   if(window.history.back()){
  //     console.log("aagyaback");
  //   }
  // })

  window.addEventListener('hashchange', () => {
    // console.log("sanam");
  })

  useEffect(() => {
    if (!test) {
      setTest(true)
      return;
    }

    return () => {
      // console.log(test, 'vicky')
      // setTest(true)
      if (test) {
        // console.log('vicky test')
      }

      // setSolDeploy(false)
    }
//
  }, [])
  let explorer
  // eslint-disable-next-line no-unused-expressions
  urlLinks[deployData.chainID] ? explorer = urlLinks[deployData.chainID] : ""

  const [tooltip, setTooltip] = useState(false)
  return (
    <div>
      <div className="card w-100 border-0">
        <div className="card-header d-flex align-items-center">
          <div className="mr-3" style={{ "zoom": "1.5" }}>
          </div>
          <h4 className="m-0">Your token has been successfuly deployed!</h4>
        </div>
        <div className="card-body">
          <div>
            <div>
              Your token address is:{" "}
              <div className="token-addr d-inline-block ms-2">
                {
                  solDeploy ?
                    <a
                      href={`https://solscan.io/tx/${deployData.tokenAddress}?cluster=devnet`}
                      className="ms-2"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "blue" }}
                    >
                      {
                        deployData.tokenAddress.length > 15 ? deployData.tokenAddress.slice(0, 4) + "....." + deployData.tokenAddress.slice(deployData.tokenAddress.length - 4,) : deployData.tokenAddress}
                    </a> :
                    <a
                      href={`${explorer.link}/tx/${deployData.txHash}`}
                      className="ms-2"
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "blue" }}
                    >
                      {
                        deployData.tokenAddress.length > 15 ? deployData.tokenAddress.slice(0, 4) + "....." + deployData.tokenAddress.slice(deployData.tokenAddress.length - 4,) : deployData.tokenAddress}
                    </a>
                }
                <CIcon
                  icon={cilCopy}
                  style={{
                    height: "24px",
                    cursor: "pointer"
                  }}
                  onClick={() => {
                    navigator.clipboard.writeText(deployData.tokenAddress)
                    setTooltip(true)

                    setTimeout(() => {
                      setTooltip(false)
                    }, 1200)
                  }}
                />
                {tooltip ? (
                  <Tooltip placement="right" className="in" id="tooltip-right">
                    Copied to Clipboard.
                  </Tooltip>
                ) : " "}
                <div
                  className="text-light-gray ms-2 pointer d-inline-block"
                  title="copy address"
                >
                </div>
              </div>
            </div>
            <div className="mb-3 d-flex align-items-center text-success">
              Source code validated!
            </div>
            <div className="mt-3">
              {
                solDeploy ? <>
                  <a
                    href={`https://solscan.io/tx/${deployData.tokenAddress}?cluster=devnet`}
                    className="btn btn-secondary ms-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {`View the transaction on Devnet`}
                  </a></> :
                  <>
                    <div>
                      <button type="button" onClick={addToken} className="btn btn-success">
                        Add your token to your wallet
                      </button>
                    </div>
                    <div>
                      <a
                        href={`${explorer.link}/tx/${deployData.txHash}`}
                        className="btn btn-secondary mt-3"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {`View the transaction on ${explorer.name}`}
                      </a>
                    </div>
                  </>}
            </div>
          </div>
          <button type="button" onClick={createNewToken} className="btn btn-link btn-sm p-0 mt-4 text-body">
            Create a new token
          </button>
        </div>
      </div>
    </div>
  );
};
