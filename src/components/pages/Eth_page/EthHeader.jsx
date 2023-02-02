import React, { useContext } from "react";
import "../Eth_page/eth_styles/header.css";

import { GlobalContext } from "../../../contexts/EthContext/EtherProvider";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { HEADER } from "../../../api/Api";
import axios from "axios";

export const EthHeader = () => {
  const [header, setHeader] = useState([]);
  const [loader, setLoader] = useState(true);
  // lo
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const respHeader = await axios.get(HEADER);
    setHeader(respHeader.data.msg);
    setLoader(false);
    // console.log(respHeader.data.msg, "Header resp")
    const favicon = document.getElementById("favicon");
    document.title = respHeader?.data?.msg?.investorDocumentTitle;
    // console.log(respHeader?.data?.msg?.investorDocumentTitle, "ttile")
    favicon.href = `${imageBaseUrl}${respHeader.data.msg.investorFavicon}`;
  };
  // const {chainName} = props
  let chainName;
  const {
    connectedAccAddress,
    SignInMetamask,
    setAccAddress,
    hideAccAddress,
    accBalance,
    chainId,
  } = useContext(GlobalContext);
  // if()
  if (chainId === 1 || chainId === 4 || chainId === 5) {
    chainName = "  ETH  ";
  } else if (chainId === 56 || chainId === 97) {
    chainName = "  BNB  ";
  } else if (chainId === 137 || chainId === 80001) {
    chainName = "  MATIC  ";
  }
  // console.log(chainName, "chainName header side");
  // console.log(chainId, "chainId header side");

  // console.log(connectedAccAddress, "connected addres header side");
  const accAddress = hideAccAddress(connectedAccAddress);
  // function myName(){
  //   if(connectedAccAddress.length !== 0){
  //     return accAddress
  //   }else return "Connect your Wallet"
  // }
  const imageBaseUrl = "https://tokenmaker-apis.block-brew.com/images/";

  const navigate = useNavigate();
  return (
    <div className="page-header">
      <header className="header navbar-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <nav className="navbar navbar-expand-lg">
                <Link to="/" className="navbar-brand">
                  {!loader && (
                    <img
                      src={imageBaseUrl + header.investorLogoImage}
                      // src="https://cdn-hnjof.nitrocdn.com/rbqEPUqwZnAoyiJEQENsAgBiOCFoQUNg/assets/images/optimized/rev-d67d202/wp-content/themes/blockbrew-child/media/2023/01/08a0cce1b743fca7c160d7a65ac76e99.final_Logo.svg"
                      alt="Logo"
                      className="logoImage"
                      srcSet=""
                    />
                  )}

                  {/* <span className="span-1">
                      <span className="span-2">
                        <img alt aria-hidden="true" className='img-1'
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27257%27%20height=%2725%27/%3e"
                          />
                      </span>
                      <img src="https://tokenmaker.eattheblocks.com/_next/image?url=%2Fimages%2Flogo-token-maker.png&w=384&q=75"
                      decoding='async' data-nimg='intrinsic'className='img-2' srcSet='https://tokenmaker.eattheblocks.com/_next/image?url=%2Fimages%2Flogo-token-maker.png&w=384&q=75 1x, /_next/image?url=%2Fimages%2Flogo-token-maker.png&w=640&q=75 2x'
                       alt="Logo" />
                       <noscript> `
                       <img alt="Logo" srcSet="/_next/image?url=%2Fimages%2Flogo-token-maker.png&amp;w=384&amp;q=75 1x, /_next/image?url=%2Fimages%2Flogo-token-maker.png&amp;w=640&amp;q=75 2x"
                        src="/_next/image?url=%2Fimages%2Flogo-token-maker.png&amp;w=640&amp;q=75"
                         decoding="async" data-nimg="intrinsic"
                          style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%" 
                          loading="lazy"/>
                       </noscript>
                    </span> */}
                </Link>
                <div className="ms-md-auto mt-2 mt-md-0 ">
                  {connectedAccAddress.length !== 0 ? (
                    <button
                      type="button"
                      onClick={() => {
                        setAccAddress([]);
                      }}
                      className="btn blue-btn"
                      // className="btn uppercase btn btn-action btn-rounded btn-pad"
                    >
                      {/* {show current acc address } */}

                      <span className="inline-block">
                        <span
                          style={{ fontWeight: "bold", paddingRight: "10px" }}
                        >
                          {" "}
                          {accBalance} {chainName}{" "}
                        </span>{" "}
                        <span>{accAddress}</span>
                      </span>
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={SignInMetamask}
                      className="btn blue-btn"
                    >
                      <span className="inline-block">Connect your Wallet</span>
                    </button>
                  )}
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
