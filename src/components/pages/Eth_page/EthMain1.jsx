import React, { useState, useEffect, useContext } from "react";
import "./eth_styles/main.css";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { TermsModal } from "../../Layots/TermsModal";
import { GlobalContext } from "../../../contexts/EthContext/EtherProvider";
import axios from "axios";
import { ContractFactory, ethers } from "ethers";
import { toast } from "react-toastify";
import { EthMain } from "./EthMain";
import { HiInformationCircle } from "react-icons/hi";
// import Link from "react-router-dom";
import Tooltip from "../../Layots/ToolTip";
// import wallet_model from "../../Modal/Multi-WalletModal";
// //

import {
  freeDisabled,
  basicDisabled,
  customDisabled,
} from "../../../disabledUtils";

export const EthMain1 = (props) => {
  // const {compileContract}  = useContext(GlobalContext)
  const navigate = useNavigate();

  const { deployContract, changeNetwork, connectedAccAddress,SignInMetamask, blockchainNetworks } =
    useContext(GlobalContext);

  const [ethFormData, setEthFormData] = useState({
    tokenType: "basic",
    tokenName: "",
    tokenSymbol: "",
    decimals: 18,
    supplyType: "fixed",
    initialSupply: 10000,
    maximumSupply: 10000,
    conforms: true,
    verified: true,
    noCopyrightLink: false,
    mintable: false,
    burnable: false,
    pausable: false,
    recoverable: false,
    accessType: "owner",
    network: "mainnet",
    agreement: false,
    commissionFee: 0.075,
  });

  //
  const [show, setShow] = useState(false);
  //
  // const navigate = useNavigate();
  const [err, setErr] = useState({
    tokenNameErr: "",
    tokenSymbolErr: "",
    agreementErr: "",
    decimalsErr: "",
    // tokenNameErr: 'Please fill your token name',
    // tokenSymbolErr: 'Please fill your token symbol',
    // agreementErr: 'Please confirm that you have read and understood our terms of use'
  });

  // By default token type is basic selected
  const [fieldsDisabled, setFieldsDisabled] = useState({
    f_decimals: true,
    f_supplyType: true,
    f_initialSupply: false,
    f_maximumSupply: true,
    d_displayMaximum: "block",
    f_conforms: true,
    f_verified: true,
    f_noCopyrightLink: true,
    f_mintable: true,
    f_burnable: true,
    f_pausable: true,
    f_recoverable: true,
    f_accessType: true,
  });

  const {
    tokenType,
    tokenName,
    tokenSymbol,
    decimals,
    supplyType,
    initialSupply,
    maximumSupply,
    conforms,
    verified,
    noCopyrightLink,
    mintable,
    burnable,
    pausable,
    recoverable,
    accessType,
    network,
    agreement,
    commissionFee,
  } = ethFormData;

  const {
    f_decimals,
    f_supplyType,
    f_initialSupply,
    f_maximumSupply,
    f_conforms,
    f_verified,
    f_noCopyrightLink,
    f_mintable,
    f_burnable,
    f_pausable,
    f_recoverable,
    f_accessType,
  } = fieldsDisabled;

  useEffect(() => {
    //
    // if (recoverable === true) {
    //   console.log(commissionFee, "gg");
    //   setEthFormData((prev) => ({
    //     ...prev,
    //     mintable: false,
    //     commissionFee: Number().toFixed(3),
    //   }));
    // }
    // else{
    //    setEthFormData((prev) => ({
    //     ...prev,
    //     mintable: false,
    //     commissionFee: Number(commissionFee +0.075).toFixed(3),
    //   }));
    // }
    if (pausable === true) {
      setEthFormData((prev) => ({
        ...prev,
        mintable: false,
        commissionFee: Number(commissionFee + 0.05).toFixed(1),
      }));
    }
    if (burnable === true) {
      setEthFormData((prev) => ({
        ...prev,
        mintable: false,
        commissionFee: Number(commissionFee + 0.075).toFixed(1),
      }));
    }

    //

    if (tokenType === "basic") {
      setFieldsDisabled(basicDisabled);

      setEthFormData((prev) => ({
        ...prev,

        noCopyrightLink: false,
        // commissionFee: null,
        accessType: "owner",
        supplyType: "fixed",
        mintable: false,
        burnable: false,
        pausable: false,
        recoverable: false,
      }));
      if (network === "rinkeby") {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: null,
        }));
      }
      if (network === "mainnet") {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: 0.075,
        }));
      }
      if (network === "gorli") {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: null,
        }));
      }
    } else if (tokenType === "free") {
      setFieldsDisabled(freeDisabled);
      setEthFormData((prev) => ({
        ...prev,
        noCopyrightLink: false,
        commissionFee: null,
        accessType: "owner",
        supplyType: "fixed",
        mintable: false,
        burnable: false,
        pausable: false,
        recoverable: false,
      }));
    } else if (tokenType === "custom") {
      setFieldsDisabled(customDisabled);
      setEthFormData((prev) => ({
        ...prev,
        noCopyrightLink: true,
        commissionFee: 0.15,
      }));
      // added
      if (supplyType === "unlimited") {
        setShow(true);
      }
      if (supplyType === "fixed" || supplyType === "capped") {
        setShow(false);
      }

      if (supplyType === "capped" || supplyType === "unlimited") {
        setEthFormData((prev) => ({
          ...prev,
          noCopyrightLink: true,
          commissionFee: 0.225,
          mintable: true,
        }));
        setFieldsDisabled({
          ...customDisabled,
          f_mintable: true,
          f_burnable: false,
          f_pausable: false,
          f_recoverable: false,
        });

        if (mintable === false || burnable === false) {
          setEthFormData((prev) => ({
            ...prev,
            // commissionFee : Number(commissionFee +0.075).toFixed(3)
          }));
        }
      } else if (supplyType === "fixed") {
        // if(recoverable===true){
        //   setEthFormData((prev) => ({
        //     ...prev,
        //     mintable: false,
        //     commissionFee: Number(commissionFee +0.075).toFixed(3),
        //   }));
        // }else{
        //   setEthFormData((prev) => ({
        //     ...prev,
        //     mintable: false,
        //     commissionFee: 0.15,
        //   }));
        // }
      }

      if (network === "rinkeby") {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: null,
        }));
      }
      if (network === "mainnet") {
        setEthFormData((prev) => ({
          ...prev,
          // commissionFee: 0.15,
        }));
      }

      if (network === "gorli") {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: null,
        }));
      }
    }
  }, [tokenType, supplyType, network]);
  useEffect(() => {
    // if(initialSupply.length===0){
    //   setEthFormData((prev) => ({
    //     ...prev,
    //     initialSupply: 0,
    //   }));
    // }

    // if(initialSupply.length!==0){
    //   setEthFormData((prev) => ({
    //     ...prev,
    //     initialSupply: initialSupply,
    //   }));
    // }

    if (supplyType === "fixed" || supplyType === "capped") {
      setEthFormData((prev) => ({
        ...prev,
        maximumSupply: initialSupply,
      }));
    }
  }, [supplyType, initialSupply, maximumSupply]);

  useEffect(() => {
    if (tokenType === "custom") {
      // owner && fixed
      if (burnable === true && pausable === true && recoverable === true) {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: 0.35,
        }));
      }
      if (pausable === true && burnable === true && recoverable === false) {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: 0.275,
        }));
      }
      if (pausable === true && burnable === false && recoverable === true) {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: 0.275,
        }));
      }
      if (
        (burnable === true && pausable === false && recoverable === false) ||
        (burnable === false && pausable === false && recoverable === true)
      ) {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: 0.225,
        }));
      }
      if (burnable === false && pausable === true && recoverable === false) {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: 0.2,
        }));
      }
      if (pausable === false && burnable === true && recoverable === true) {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: 0.3,
        }));
      }
      if (pausable === false && recoverable === false && burnable === false) {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: 0.15,
        }));
      }
      // Roles and fixed
      if (
        accessType === "roles" &&
        burnable === true &&
        pausable === true &&
        recoverable === true
      ) {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: 0.4,
        }));
      }
      if (
        accessType === "roles" &&
        pausable === true &&
        burnable === true &&
        recoverable === false
      ) {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: 0.325,
        }));
      }
      if (
        accessType === "roles" &&
        pausable === true &&
        burnable === false &&
        recoverable === true
      ) {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: 0.325,
        }));
      }
      if (
        accessType === "roles" &&
        ((burnable === true && pausable === false && recoverable === false) ||
          (burnable === false && pausable === false && recoverable === true))
      ) {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: 0.275,
        }));
      }
      if (
        accessType === "roles" &&
        burnable === false &&
        pausable === true &&
        recoverable === false
      ) {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: 0.25,
        }));
      }
      if (
        accessType === "roles" &&
        pausable === false &&
        burnable === true &&
        recoverable === true
      ) {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: 0.35,
        }));
      }
      if (
        accessType === "roles" &&
        pausable === false &&
        recoverable === false &&
        burnable === false
      ) {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: 0.2,
        }));
      }

      // owner && (unlimited || capped)
      if (
        accessType === "owner" &&
        (supplyType === "capped" || supplyType === "unlimited") &&
        pausable === false &&
        recoverable === false
      ) {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: 0.225,
        }));
      }

      if (
        accessType === "owner" &&
        (supplyType === "capped" || supplyType === "unlimited") &&
        pausable === true &&
        recoverable === false
      ) {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: 0.275,
        }));
      }
      if (
        accessType === "owner" &&
        (supplyType === "capped" || supplyType === "unlimited") &&
        pausable === false &&
        recoverable === true
      ) {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: 0.3,
        }));
      }
      // double

      if (
        accessType === "owner" &&
        (supplyType === "capped" || supplyType === "unlimited") &&
        pausable === true &&
        recoverable === true
      ) {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: 0.35,
        }));
      }

      // roles && (unlimited || capped)
      if (
        accessType === "roles" &&
        (supplyType === "capped" || supplyType === "unlimited") &&
        pausable === false &&
        recoverable === false
      ) {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: 0.275,
        }));
      }
      if (
        accessType === "roles" &&
        (supplyType === "capped" || supplyType === "unlimited") &&
        pausable === true &&
        recoverable === false
      ) {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: 0.325,
        }));
      }
      if (
        accessType === "roles" &&
        (supplyType === "capped" || supplyType === "unlimited") &&
        pausable === false &&
        recoverable === true
      ) {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: 0.35,
        }));
      }
      // double

      if (
        accessType === "roles" &&
        (supplyType === "capped" || supplyType === "unlimited") &&
        pausable === true &&
        recoverable === true
      ) {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: 0.4,
        }));
      }
    }
  }, [pausable, recoverable, burnable, tokenType, accessType]);

  const ethMainFormHandler = (e) => {
    let boolean = null;
    if (e.target.type === "checkbox") {
      boolean = e.target?.checked;
    }
    if (e.target.name === "initialSupply") {
      if (e.target.value === "") {
        setEthFormData((prev) => ({
          ...prev,
          [e.target.name]: boolean ?? 0,
        }));
      } else {
        setEthFormData((prev) => ({
          ...prev,
          [e.target.name]:
            e.target.value.charAt(0) !== "0"
              ? e.target.value
              : e.target.value.substring(1),
        }));
      }

      return;
    }

    if (e.target.name === "tokenSymbol") {
      return setEthFormData((prev) => ({
        ...prev,
        [e.target.name]: boolean ?? e.target.value.toUpperCase(),
      }));
    }
    setEthFormData((prev) => ({
      ...prev,
      [e.target.name]: boolean ?? e.target.value,
    }));
  };

  useEffect(() => {
    if (agreement !== false) {
      setErr((prev) => ({
        ...prev,
        agreementErr: "",
      }));
    }

    if (tokenName !== "") {
      setErr((prev) => ({
        ...prev,
        tokenNameErr: "",
      }));
    }

    if (tokenSymbol !== "") {
      setErr((prev) => ({
        ...prev,
        tokenSymbolErr: "",
      }));
    }
    if (decimals !== null) {
      setErr((prev) => ({
        ...prev,
        decimalsErr: "",
      }));
    }
  }, [agreement, tokenName, tokenSymbol, decimals]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ethFormData.tokenName === "") {
      setErr((prev) => ({
        ...prev,
        tokenNameErr: "Please fill your token name",
      }));
    }

    if (ethFormData.tokenSymbol === "") {
      setErr((prev) => ({
        ...prev,
        tokenSymbolErr: "Please fill your token symbol",
      }));
    }

    if (ethFormData.agreement === false) {
      setErr((prev) => ({
        ...prev,
        agreementErr:
          "Please confirm that you have read and understood our terms of use",
      }));
    }
    if (ethFormData.decimals > 21 || ethFormData.decimals < 6) {
      setErr((prev) => ({
        ...prev,
        decimalsErr: "The number of decimals must be between 6 and 21",
      }));
    }

    if (!err.tokenNameErr && !err.tokenSymbolErr && !err.agreementErr) {
      // do what u want to do with data
      // console.log("data");
      console.log(err, "da");

      // < Navigate to= "/generator/final" />
      console.log(ethFormData, ">>>>>>>>>>>>>>>>");
      // navigate("/generator/final")
    }
    if (
      ethFormData.tokenName !== "" &&
      ethFormData.tokenSymbol !== "" &&
      ethFormData.agreement !== false
    ) {
      // navigate("/generator/final");
    }
  };

  useEffect(() => {
    if (tokenType === "free") {
      setEthFormData((prev) => ({
        ...prev,
        initialSupply: 10000,
      }));
    }
  }, [tokenType, initialSupply, maximumSupply]);
  //compile contract and generate bytecode and abi
  const compileContract = async (FormData) => {
    try {
      console.log(FormData.network, "fromdatanetwork");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log(provider,"provider");
      const { chainId } = await provider.getNetwork();
      console.log(chainId, "chainid");

      //check selected network and set chain id
      // eslint-disable-next-line no-unused-expressions
      blockchainNetworks[FormData.network]
        ? Object.assign(FormData, {
            network: blockchainNetworks[FormData.network],
          })
        : "";

      console.log(FormData, "formdata eth side");
      if (FormData.network === chainId ) {
        // navigate("/generator/final");
        if(connectedAccAddress.length ===0){
          await SignInMetamask()
        }
        props.setShow(false);
        console.log(FormData.network, "currentNetworkID");
        //hit contract compile api
        axios
          .post(
            "https://tokenmaker-block-tech.herokuapp.com/api/v1/compile/contract",
            FormData
          )
          .then((res) => {
            console.log(res, "response");
            // console.log(contractSource, "contract Source api side ");
            //calling deploy function
            deployContract(res.data.result, FormData).then((res) => {
              
              if (res.error) {
                navigate("/generator/ethereum");
                props.setShow(true);
                res.error.code === "ACTION_REJECTED"
                  ? toast.error(
                      "User Rejected The Request"
                    )
                  : toast.error(res.error.message);
              } else {
                toast.success("Token Deploy Successfully");
                // navigate("/generator/final");
                props.setShow(false);
                console.log(res, "else side deploy then return deploy succes");
              }
            });
          })
          .catch((error) => {
            console.log("Api fail error", error);
            props.setShow(true);
            // navigate("/generator/ethereum");
            error.response.data.message
              ? toast.error(error.response.data.message)
              : toast.error("Data Fetch Failed Try Again");
          });
      }  else {
        changeNetwork(FormData.network);
      }
    } catch (error) {
      toast.error(error.message);
      console.log("compile contract side catch er", error);
    }
  };

  // {web3Loading ? (
  //   <button className=" btn-inner - text " disabled>
  //     {" "}
  //     Loading ...{" "}
  //   </button>
  // ) : (
  //   <button className=" btn-inner - text " onClick={connectWallet}>
  //     get accounts
  //   </button>
  // )}

  return (
    <>
      <div className="page-content">
        <main>
          <div className="hero mb-3 ">
            <div className="container">
              <h1>
                <span className="sub-highlight">
                  Create Your Ethereum Token
                </span>
              </h1>
              <p>
                Easily deploy your Smart Contract for a Standard, Capped,
                Mintable, Burnable ERC20 Token.
                <br />
                No login.No setup.No Coding required.
              </p>
            </div>
          </div>
          <section>
            <div className="container">
              <div className="configurator-container">
                <div className="configurator">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col mt-3 mt-lg-0">
                        <div className="card">
                          <div className="card-header d-flex align-items-center">
                            <div className="mr-3" style={{ zoom: 1.5 }}></div>
                            <h4 className="m-0">
                              <i className="fa-solid fa-arrow-right me-3"></i>
                              Informations
                            </h4>
                          </div>
                          <div className="card-body">
                            <div className="form-group">
                              <label className="form-label">
                                Token type
                                <span className="val-required">*</span>
                              </label>
                              <select
                                className="form-select"
                                name="tokenType"
                                onChange={ethMainFormHandler}
                                value={tokenType}
                              >
                                <option value="free">Free</option>
                                <option value="basic">Basic</option>
                                <option value="custom">Custom</option>
                              </select>
                              <span className="form-text text-muted">
                                Select the base configuration of your token
                                (Free and Basic have limited configurations)
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
                                value={tokenName}
                                onChange={ethMainFormHandler}
                              />
                              <span className="form-text text-muted">
                                The name of your token
                              </span>
                              <br />
                              <span className="text-danger">
                                {err.tokenNameErr}
                              </span>
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
                                value={tokenSymbol}
                                onChange={ethMainFormHandler}
                              />
                              <span className="form-text text-muted">
                                You token's symbol (ie ETH)
                              </span>
                              <br />
                              <span className="text-danger">
                                {err.tokenSymbolErr}
                              </span>
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
                                disabled={f_decimals}
                                value={decimals}
                                name="decimals"
                                onChange={ethMainFormHandler}
                              />
                              <span className="form-text text-muted">
                                The number of decimal of your token (default 18)
                              </span>
                              <br />
                              <span className="text-danger">
                                {err.decimalsErr}
                              </span>
                            </div>
                          </div>
                          <div className="card mt-3">
                            <div className="card-header d-flex align-items-center">
                              <div className="mr-3" style={{ zoom: 1.5 }}></div>
                              <h4 className="m-0">
                                <i className="fa-solid fa-arrow-right me-3"></i>
                                Supply
                              </h4>
                            </div>
                            <div className="card-body">
                              <div className="form-group">
                                <label className="form-label">
                                  Supply type
                                  <span className="val-required">*</span>
                                </label>
                                <select
                                  className="form-select"
                                  name="supplyType"
                                  disabled={f_supplyType}
                                  onChange={ethMainFormHandler}
                                  value={supplyType}
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
                                  placeholder=""
                                  name="initialSupply"
                                  disabled={f_initialSupply}
                                  value={initialSupply}
                                  onChange={ethMainFormHandler}
                                />
                                <span className="form-text text-muted">
                                  The number of coins minted during the creation
                                  of the contract
                                </span>
                              </div>
                              {/* <div
                                className="form-group "
                                style={{ display: !show ? "block" : "none" }}
                                // style={{display: {d_displayMaximum}}}
                              >
                                <label className="form-label">
                                  Maximum supply
                                  <span className="val-required">*</span>
                                </label>
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder=""
                                  value={maximumSupply}
                                  name="maximumSupply"
                                  disabled={f_maximumSupply}
                                  onChange={ethMainFormHandler}
                                />
                                <span className="form-text text-muted">
                                  The maximum number of coins ever minted
                                </span>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col mt-3 mt-lg-0">
                        <div className="card">
                          <div className="card-header d-flex align-items-center">
                            <div className="mr-3" style={{ zoom: 1.5 }}></div>
                            <h4 className="m-0">
                              <i className="fa-solid fa-arrow-right me-3"></i>
                              Options
                            </h4>
                          </div>
                          <div className="card-body">
                            <div className="form-group">
                              <label className="form-check form-switch">
                                <input
                                  name="conforms"
                                  className="form-check-input"
                                  type="checkbox"
                                  disabled={f_conforms}
                                  onChange={ethMainFormHandler}
                                  defaultChecked={conforms}
                                />
                                <span className="form-check-label">
                                  Conforms to ERC20 protocol
                                </span>
                              </label>
                              <span className="form-text text-muted">
                                Your token will const all the functionalities,
                                and conforms to ERC20 protocol
                              </span>
                            </div>
                            <div className="form-group">
                              <label className="form-check form-switch">
                                <input
                                  name="verified"
                                  className="form-check-input"
                                  type="checkbox"
                                  onChange={ethMainFormHandler}
                                  disabled={f_verified}
                                  defaultChecked={verified}
                                />
                                <span className="form-check-label">
                                  Verified on Etherscan
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
                                  onChange={ethMainFormHandler}
                                  checked={noCopyrightLink}
                                  disabled={f_noCopyrightLink}
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
                                  checked={mintable}
                                  disabled={f_mintable}
                                  name="mintable"
                                  onChange={ethMainFormHandler}
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
                                  checked={burnable}
                                  disabled={f_burnable}
                                  onChange={ethMainFormHandler}
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
                                  checked={pausable}
                                  disabled={f_pausable}
                                  onChange={ethMainFormHandler}
                                />
                                <span className="form-check-label">
                                  Pausable
                                </span>
                              </label>
                              <span className="form-text text-muted">
                                Allow your tokens to be paused
                              </span>
                            </div>
                            {/* <div className="form-group">
                              <label className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="recoverable"
                                  checked={recoverable}
                                  disabled={f_recoverable}
                                  onChange={ethMainFormHandler}
                                />
                                <span className="form-check-label">
                                  Recoverable
                                </span>
                              </label>
                              <span className="form-text text-muted">
                                Allow to recover any ERC20 tokens sent to your
                                contract
                              </span>
                            </div> */}
                            <div className="form-group">
                              <label className="form-label">
                                Access type
                                <span className="val-required">*</span>
                              </label>
                              <select
                                className="form-select"
                                name="accessType"
                                disabled={f_accessType}
                                value={accessType}
                                onChange={ethMainFormHandler}
                              >
                                <option value="owner">Owner</option>
                                <option value="roles">Roles</option>
                              </select>
                              <span className="form-text text-muted">
                                Who can administer your contract
                              </span>
                              <div className="form-info">
                                <div className="form-text text-muted">
                                  <p>
                                    <span className="strong">Owner:</span> Your
                                    wallet address will be set as the owner of
                                    your token to perform administratives tasks
                                    (ie, mint new tokens).
                                  </p>
                                  <p>
                                    <span className="strong">Roles:</span> All
                                    admin tasks (mint, burn, etc...) will be
                                    available to different users, based on their
                                    roles. By default, your wallet's address
                                    will be given all the roles.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col mt-3 mt-xl-0">
                        <div className="card">
                          <div className="card-header d-flex align-items-center">
                            <div className="mr-3" style={{ zoom: 1.5 }}></div>
                            <h4 className="m-0">
                              <i className="fa-solid fa-arrow-right me-3"></i>
                              Network
                            </h4>
                          </div>
                          <div className="card-body">
                            <div className="form-group">
                              <select
                                className="form-select"
                                name="network"
                                value={network}
                                onChange={ethMainFormHandler}
                              >
                                <option value="mainnet">Mainnet</option>
                                <option value="gorli">Görli</option>
                                <option value="rinkeby">Rinkeby</option>
                              </select>
                              <span className="form-text text-muted">
                                Select the network on wich you want to deploy
                                your token
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="card mt-3">
                          <div className="card-header d-flex align-items-center">
                            <div className="mr-3" style={{ zoom: 1.5 }}></div>
                            <h4 className="m-0">
                              <i className="fa-solid fa-arrow-right me-3"></i>
                              Agreement
                            </h4>
                          </div>
                          <div className="card-body">
                            <div className="form-group">
                              <label className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="agreement"
                                  value={agreement}
                                  onChange={ethMainFormHandler}
                                />

                                <span className="form-check-label">
                                  I have read, understood and agreed to the{" "}
                                  {/* <span className="text-underline"> */}
                                  {/*  modal*/}
                                  <a
                                    href="/"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                  >
                                    <u> term of use </u>
                                  </a>
                                  <TermsModal />
                                  {/* modal */}
                                  {/* </span> */}
                                </span>
                                <br />
                                <span className="text-danger">
                                  {err.agreementErr}
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="card mt-3">
                          <div className="card-header d-flex align-items-center">
                            <div className="mr-3" style={{ zoom: 1.5 }}></div>
                            <h4 className="m-0">
                              <i className="fa-solid fa-arrow-right me-3"></i>
                              Transaction
                            </h4>
                          </div>
                          <div className="card-body">
                            <div className="transactionWrap">
                              <div className="Ttext">
                                <p>
                                  Commission fee:{" "}
                                  {/* <i
                                    className="fa-solid fa-circle-info tip"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    // data-bs-custom-class="custom-tooltip"
                                    title="The commison fee will be
                                  transferred automatically to us during the contract creation.In case of error,this amount will not be deducted
                                  from your wallet.Only the gas fees will be deducted "
                                  ></i> */}
                                  {/* <a  href="#" data-bs-toggle="tooltip" data-bs-title="Default tooltip"> */}
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
                                  {/* </a> */}
                                </p>
                              </div>

                              <div className="Tbtn">
                                <span className="badge bg-success d-block p-2">
                                  {commissionFee
                                    ? `${commissionFee} ETH`
                                    : "FREE"}
                                </span>
                              </div>
                            </div>
                            <div className="transactionWrap">
                              <div className="Ttext ">
                                <p>
                                  Gas fee:{" "}
                                  {/* <i
                                    className="fa-solid fa-circle-info tip"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="The gas fee depend on gas limit and gas price.
                                  Metamask will automatically display the best fee to use "
                                  ></i> */}
                                   <Tooltip
                                    content={
                                      <>
                                        The gas fee depend <br/>on gas limit and<br/> gas price.
                                  Metamask will<br/> automatically display<br/> the best fee to use
                                      
                                      </>
                                    }
                                    direction="top"
                                  >
                                    <HiInformationCircle size={22} />
                                  </Tooltip>
                                </p>
                              </div>
                              <div className="Tbtn">
                                <span className="badge bg-secondary d-block p-2">
                                  Variable
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3">
                          <button
                            type="submit"
                            className="btn-lg btn-success1 w-100 botn-clr"
                            onClick={() => {
                              if (
                                ethFormData.tokenName &&
                                ethFormData.tokenSymbol &&
                                ethFormData.decimals &&
                                ethFormData.agreement === true
                              ) {
                                compileContract(ethFormData);
                              }
                            }}
                          >
                            Confirm
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
