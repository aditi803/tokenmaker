import React, { useContext } from "react";
import "../Eth_page/eth_styles/header.css";

import { GlobalContext } from "../../../contexts/EthContext/EtherProvider";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { HEADER } from "../../../api/Api";
import axios from "axios";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
// import { PublicKey } from "@solana/web3.js";



export const SolanaHeader = (props) => {
  const walletBalnceAmount = props.walletBalance;
  const PublicKey = props.publicKey;
  // console.log(walletBalnceAmount, "Wallet Balance Amount")
  const finalAmount = walletBalnceAmount * 0.000000001;
  // console.log(finalAmount, "finalAmount")
  // console.log(PublicKey,"ooblic")

  const [header, setHeader] = useState([]);
  const [loader, setLoader] = useState(true);
  // lo
  useEffect(() => {
    // console.log(finalAmount,"Ada")
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
  

  const accAddress = hideAccAddress(connectedAccAddress);
  
  const imageBaseUrl = "https://tokenmaker-apis.block-brew.com/images/";



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
                      className="logoImage"
                      srcSet=""
                      alt="solana logo "
                    />
                  )}
                </Link>
                <div className="nav-btn-div">
                  <div className="blue-btn ml-auto d-flex align-items-center justify-content-center" style={{ height: "48px", lineHeight: "48px", }}>
                    <>
                      {PublicKey && (
                        <p
                          className="m-0"
                          style={{ fontSize: "17px", fontWeight: "600" }}
                        >
                          {finalAmount.toFixed(5)} SOL
                        </p>
                      )}
                    </>
                    <WalletMultiButton className="btn " style={{ height: "auto", lineHeight: "0", padding: "0 0 0 10px" }} />
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
