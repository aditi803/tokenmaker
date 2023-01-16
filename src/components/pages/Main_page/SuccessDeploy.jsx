import React, { useEffect, useContext, useState } from "react";
// import "./Success.css"
import { Link, useNavigate, useHistory } from "react-router-dom";
import { GlobalContext } from "../../../contexts/EthContext/EtherProvider";
import { cilPencil, cilTrash, cilCopy } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { toast } from "react-toastify"
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

  // 
  // const history = useHistory()
  // useEffect(() => {

  //   return () => {
  //       if (history.action === "POP") {
  //         console.log("back aagya");
  //           // Code here will run when back button fires. Note that it's after the `return` for useEffect's callback; code before the return will fire after the page mounts, code after when it is about to unmount.
  //           }
  //      }
  // })
  // 
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
            {/* <svg
              className="icon-arrow"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
              xmlns={"http://www.w3.org/2000/svg"}
              xlink:href="http://www.w3.org/1999/xlink"
            >
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <polygon points="0 0 24 0 24 24 0 24" opacity="0"></polygon>
                <rect
                  opacity="0.3"
                  transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000) "
                  x="7.5"
                  y="7.5"
                  width="2"
                  height="9"
                  rx="1"
                  fill="#383838"
                ></rect>
                <path
                  d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                  fill="#383838"
                  fill-rule="nonzero"
                  transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997) "
                ></path>
              </g>
            </svg> */}
          </div>
          <h4 className="m-0">Your token has been successfuly deployed!</h4>
        </div>
        <div className="card-body">
          <div>
            <div>
              Your token address is:{" "}
              <div className="token-addr d-inline-block ms-2">

                {/* <Link
                  href={`${explorer.link}/token/${deployData.tokenAddress}`}
                  target="_blank"
                  rel="noreferrer"
                  title={`View your token on ${explorer.name}`}
                > */}
                {/* {console.log(deployData.tokenAddress, "tokkkkk")} */}
                {/* {deployData.tokenAddress} */}
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
                {/* <a
                  href={`https://solscan.io/tx/${deployData.tokenAddress}?cluster=devnet`}
                  className="ms-2"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "blue" }}
                >
                  {
                    deployData.tokenAddress.length > 15 ? deployData.tokenAddress.slice(0, 4) + "....." + deployData.tokenAddress.slice(deployData.tokenAddress.length - 4,) : deployData.tokenAddress}
                </a> */}
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
                  {/* <svg
                    className="icon-arrow"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xlink:href="http://www.w3.org/1999/xlink"
                  >
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <polygon
                        points="0 0 24 0 24 24 0 24"
                        opacity="0"
                      ></polygon>
                      <rect
                        opacity="0.3"
                        transform="translate(8.500000, 12.000000) rotate(-90.000000) translate(-8.500000, -12.000000) "
                        x="7.5"
                        y="7.5"
                        width="2"
                        height="9"
                        rx="1"
                        fill="#383838"
                      ></rect>
                      <path
                        d="M9.70710318,15.7071045 C9.31657888,16.0976288 8.68341391,16.0976288 8.29288961,15.7071045 C7.90236532,15.3165802 7.90236532,14.6834152 8.29288961,14.2928909 L14.2928896,8.29289093 C14.6714686,7.914312 15.281055,7.90106637 15.675721,8.26284357 L21.675721,13.7628436 C22.08284,14.136036 22.1103429,14.7686034 21.7371505,15.1757223 C21.3639581,15.5828413 20.7313908,15.6103443 20.3242718,15.2371519 L15.0300721,10.3841355 L9.70710318,15.7071045 Z"
                        fill="#383838"
                        fill-rule="nonzero"
                        transform="translate(14.999999, 11.999997) scale(1, -1) rotate(90.000000) translate(-14.999999, -11.999997) "
                      ></path>
                    </g>
                  </svg> */}
                </div>
              </div>
            </div>
            <div className="mb-3 d-flex align-items-center text-success">
              {/* <svg
                role="img"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="info-circle"
                className="info-icon me-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style={{"height": "16px"}}
              >
                <path
                  fill="currentColor"
                  d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                ></path>
              </svg>{" "} */}
              Source code validated!
            </div>
            <div className="mt-3">
              {
                solDeploy ? <>
                  {/* <button type="button" onClick = {addToken} className="btn btn-success">
                Add your token to your wallet
              </button> */}

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
                    <a
                      href={`${explorer.link}/tx/${deployData.txHash}`}
                      className="btn btn-secondary mt-3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {`View the transaction on ${explorer.name}`}
                    </a>
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
