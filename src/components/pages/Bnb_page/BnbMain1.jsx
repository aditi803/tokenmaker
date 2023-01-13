import React, { useState, useEffect, useContext } from "react";
import "../Eth_page/eth_styles/main.css";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { TermsModal } from "../../Layots/TermsModal";
import { GlobalContext } from "../../../contexts/EthContext/EtherProvider";
import axios from "axios";
import { ContractFactory, ethers } from "ethers";
import { toast } from "react-toastify";
import { HiInformationCircle } from "react-icons/hi";
import Tooltip from "../../Layots/ToolTip";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
//
// import Link from "react-router-dom";
// import wallet_model from "../../Modal/Multi-WalletModal";
// //

import {
  freeDisabled,
  basicDisabled,
  customDisabled,
} from "../../../disabledUtils";

import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FouthStep from "./FouthStep";
import { multiStepContext, StepContext } from "./StepContext";

const BnbMain1 = (props) => {
  // test
  const steps = [" ", " ", " "];

  const { currentStep, submitted } = useContext(multiStepContext);
  const { setStep, userData, setUserData } = useContext(multiStepContext);

  // end

  // console.log(props, "PEOPS AT BNB");

  const [buttonClick, setButtonClick] = useState(false)
  const [data, setData] = useState([]);
  const getNetworks = () => {
    axios
      .get(
        "https://tokenmaker-apis.block-brew.com/commission/commissiondetails"
      )
      .then((res) => {
        setData(res.data.msg.items);
        // console.log(res.data.msg.items, "Aditii ddata jo ni aata ");
      })
      .catch((err) => {
        console.log(err, "Error");
      });
  };

  useEffect(() => {
    getNetworks();
  }, [setData]);

  const navigate = useNavigate();
  // const {compileContract,navigateTo}  = useContext(GlobalContext)
  const {
    deployContract,
    changeNetwork,
    SignInMetamask,
    connectedAccAddress,
    blockchainNetworks,
    sendCommision,
  } = useContext(GlobalContext);

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
    network: "",
    agreement: false,
    commissionFee: "0.5",
  });

  const [show, setShow] = useState(false);

  const [err, setErr] = useState({
    tokenNameErr: "",
    tokenSymbolErr: "",
    agreementErr: "",
    decimalsErr: "",
    initialSupplyErr:""
  });

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
        accessType: "owner",
        supplyType: "fixed",
        mintable: false,
        burnable: false,
        pausable: false,
        recoverable: false,
      }));
      if (network === "binanceSmartChainTestnet") {
        setEthFormData((prev) => ({
          ...prev,
        }));
      }
      if (network === "binanceSmartChain") {
        setEthFormData((prev) => ({
          ...prev,
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
      }));
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
          }));
        }
      } else if (supplyType === "fixed") {
        setEthFormData((prev) => ({
          ...prev,
          mintable: false,
        }));
      }

      if (network === "binanceSmartChainTestnet") {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: data.find((item) => item.value === ethFormData.network)
            ?.networkCommissionFee,
        }));
      }
      if (network === "binanceSmartChain") {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: data.find((item) => item.value === ethFormData.network)
            ?.networkCommissionFee,
        }));
      }
      if (supplyType === "fixed" || supplyType === "capped") {
        setEthFormData((prev) => ({
          ...prev,
          maximumSupply: initialSupply,
        }));
      }
    }
  }, [tokenType, supplyType, network, data]);

  console.log(network, "choosen network")

  useEffect(() => {
    if (supplyType === "fixed" || supplyType === "capped") {
      setEthFormData((prev) => ({
        ...prev,
        maximumSupply: initialSupply,
      }));
    }
  }, [supplyType, initialSupply, maximumSupply]);

  useEffect(() => {
    if (tokenType === "custom") {
      if (burnable === true && pausable === true && recoverable === true) {
        setEthFormData((prev) => ({
          ...prev,
        }));
      }
      if (pausable === true && burnable === true && recoverable === false) {
        setEthFormData((prev) => ({
          ...prev,
        }));
      }
      if (pausable === true && burnable === false && recoverable === true) {
        setEthFormData((prev) => ({
          ...prev,
          // commissionFee: 1.8,
        }));
      }
      if (
        (burnable === true && pausable === false && recoverable === false) ||
        (burnable === false && pausable === false && recoverable === true)
      ) {
        setEthFormData((prev) => ({
          ...prev,
          // commissionFee: 1.5,
        }));
      }
      if (burnable === false && pausable === true && recoverable === false) {
        setEthFormData((prev) => ({
          ...prev,
          // commissionFee: 1.3,
        }));
      }
      if (pausable === false && burnable === true && recoverable === true) {
        setEthFormData((prev) => ({
          ...prev,
          // commissionFee: 2,
        }));
      }
      if (pausable === false && recoverable === false && burnable === false) {
        setEthFormData((prev) => ({
          ...prev,
          // commissionFee: 1,
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
          // commissionFee: 2.6,
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
          // commissionFee: 2.1,
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
          // commissionFee: 2.1,
        }));
      }
      if (
        accessType === "roles" &&
        ((burnable === true && pausable === false && recoverable === false) ||
          (burnable === false && pausable === false && recoverable === true))
      ) {
        setEthFormData((prev) => ({
          ...prev,
          // commissionFee: 1.8,
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
          // commissionFee: 1.6,
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
          // commissionFee: 2.3,
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
          // commissionFee: 1.3,
          commissionFee: data.find((item) => item.value === ethFormData.network)
            ?.networkCommissionFee,
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
          // commissionFee: 1.5,
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
          // commissionFee: 1.8,
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
          // commissionFee: 2,
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
          // commissionFee: 2.3,
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
          // commissionFee: 1.8,
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
          // commissionFee: 2.1,
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
          // commissionFee: 2.3,
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
          // commissionFee: 2.6,
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
          [e.target.name]: boolean ?? '',
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
    if (initialSupply !== null) {
      setErr((prev) => ({
        ...prev,
        initialSupplyErr: "",
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

    // if (ethFormData.agreement === false) {
    //   setErr((prev) => ({
    //     ...prev,
    //     agreementErr:
    //       "Please confirm that you have read and understood our terms of use",
    //   }));
    // }
    if (ethFormData.decimals > 21 || ethFormData.decimals < 6) {
      setErr((prev) => ({
        ...prev,
        decimalsErr: "The number of decimals must be between 6 and 21",
      }));
    }
    if (!ethFormData.initialSupply) {
      setErr((prev) => ({
        ...prev,
        initialSupplyErr: "Please choose how many token you want to deploy?",
      }));
    }

    if (!err.tokenNameErr && !err.tokenSymbolErr && !err.agreementErr) {
      // do what u want to do with data
      // console.log("data");
      // console.log(err, "da");

      // < Navigate to= "/generator/final" />
      // console.log(ethFormData, ">>>>>>>>>>>>>>>>");
      // navigate("/generator/final")
    }
    if (ethFormData.tokenName !== "" && ethFormData.tokenSymbol !== ""
      && (ethFormData.decimals <=21 &&  ethFormData.decimals >= 6) &&
      ethFormData.initialSupply !== '') {
      // navigate("/generator/final");
      setStep(2);
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

  const customVampire = (network) => {
    const blockArray = Object.entries(blockchainNetworks);
    const selctedItem = blockArray.find((item) => item[1] === network);
    return selctedItem?.[0];
  };

  useEffect(() => {
    const selectedCommissionFee = data?.find(
      ({ value, parentNetworkName, subNetworkName, tokenType }) => {
        if (
          parentNetworkName === "Binance Smart Chain" &&
          (value === ethFormData.network ||
            value === customVampire(ethFormData.network)) &&
          tokenType === ethFormData.tokenType
        ) {
          return true;
        }
      }
    );
    // setGasFee(selectedCommissionFee)
    setEthFormData((prev) => ({
      ...prev,
      commissionFee: selectedCommissionFee?.networkCommissionFee,
    }));
    // console.log(
    //   selectedCommissionFee,
    //   ">>>>>>>>>>>>>>>>>>>>>KKKKKKKKKKKKKKLLLLLLLLLLLLLLLLLLLLLLLLLLJJJJJJJJJJJJJJJJJJJJJJJJJJHHHHHHHHHHHHHHHHHHHH"
    // );
  }, [ethFormData.tokenType, ethFormData.network, data]);

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
  //compile contract and generate bytecode and abi
  const compileContract = async (FormData) => {
    // setButtonClick(true)
    try {
      
      // console.log(FormData.network, "fromdatanetwork");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log(provider, "provider");
      const { chainId } = await provider.getNetwork();
      

      //check selected network and set chain id
      // eslint-disable-next-line no-unused-expressions
      blockchainNetworks[FormData.network]
        ? Object.assign(FormData, {
          network: blockchainNetworks[FormData.network],
        })
        : "";

        console.log(chainId, "chainid in bnb main");
        console.log(FormData.network, "network id in bnb main");

        if (connectedAccAddress.length === 0) {
          await SignInMetamask();
        }
        let networkFunc
          if (FormData.network !== chainId) {
            networkFunc = await changeNetwork(FormData.network);
            console.log(networkFunc,"network");
            if(!networkFunc){
              throw new Error("error network")
            }
          }
          // if(networkFunc){

      // console.log(FormData.network, "formdata bnb main1 side");

      // console.log(chainId, "chainId bnb main1 side ");

      // if (FormData.network === chainId) {
        // navigate("/generator/final");
        // console.log(FormData.network, "currentNetworkID");

        // let res = await sendCommision(commissionFee);
         // console.log(res, "ress send commision matic main");
        props.setShow(false);
      let res = await sendCommision(commissionFee)
      // console.log(res, "ress send commision matic main")
      if(!res){
        props.setShow(true)
        navigate("/generator/binancesmartchain");
      }

        if (res) {
          // props.setShow(false);

          //hit contract compile api

          axios
            .post(
              "https://tokenmaker-apis.block-brew.com/contract/contract",
              // https://tokenmaker-apis.block-brew.com/token/tokendetails

              FormData
            )
            .then((res) => {
              // console.log(res, "response");
              // console.log(contractSource, "contract Source api side ");
              //calling deploy function
              deployContract(res.data.result, FormData).then((res) => {
                if (res.error) {
                  navigate("/generator/binancesmartchain");
                  props.setShow(true);
                  res.error.code === "ACTION_REJECTED"
                    ? toast.error("User Rejected The Request")
                    : toast.error(res.error.message);
                } else {
                  toast.success("Token Deploy Successfully");
                  // navigate("/generator/final");
                  props.setShow(false);
                  // console.log(
                  //   res,
                  //   "else side deploy then return deploy succes"
                  // );
                }
              });
            })
            .catch((error) => {
              // console.log("Api fail error", error);
              props.setShow(true);
              // navigate("/generator/ethereum");
              error.response?.data?.message
                ? toast.error(error.response?.data?.message)
                : toast.error("Data Fetch Failed Try Again");
            });
        }
      // } else {
      //   changeNetwork(FormData.network);
      // }
          // }
    } catch (error) {
      console.log("eroor")
      toast.error(error.message);
      // console.log("compile contract side catch er", error);
    }
  };

  return (
    <>
      <div className="page-content">
        <main>
          <div className="hero-form mb-3">
            <div className="container">
              <h1>
                <span className="sub-highlight ">
                  Create Your Binance Smart Chain Token
                </span>
              </h1>
              <p style={{ color: 'black' }}>
                Easily deploy your Smart Contract for a Standard, Capped,
                Mintable, Burnable BEP20 Token.
                <br />
                No login. No setup. No Coding required.
              </p>
            </div>
          </div>
          <section style={{ marginBottom: "40px" }}>
            {/* test */}
            <div className="container mt-5">
              <div className="row">
                <div className="col-lg-12">
                  <div className="steper-div">
                    <Box sx={{ width: "100%" }}>
                      <Stepper
                        activeStep={currentStep - 1}
                        alternativeLabel
                        orientation="horizontal"
                      >
                        {steps.map((label) => (
                          <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                          </Step>
                        ))}
                      </Stepper>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
            {/* {currentStep === 1 ? (
              <FirstStep />
            ) : currentStep === 2 ? (
              <SecondStep />
            ) : currentStep === 3 ? (
              <ThirdStep />
            ) : (
              <FouthStep />
            )} */}
            {currentStep === 1 ? (
              // <FirstStep />

              <section>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="firstForm p-lg-5 p-4 mt-0 mb-5">
                        <h3 className="heading mb-4">Informations</h3>
                        <form className="row">
                          <div className="form-group col-lg-6">
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
                              Select the base configuration of your token (Free
                              and Basic have limited configurations)
                            </span>
                          </div>
                          <div className="form-group col-lg-6">
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
                          <div className="form-group col-lg-6">
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
                            <div className="text-danger f-12">
                              {err.tokenNameErr}
                            </div>
                          </div>
                          <div className="form-group col-lg-6">
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
                              You token's symbol (ie BNB)
                            </span>
                            <div className="text-danger f-12">
                              {err.tokenSymbolErr}
                            </div>
                          </div>
                          <div className="form-group col-lg-6">
                            <label className="form-label">
                              Decimals<span className="val-required">*</span>
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              placeholder="18"
                              maxLength="2"
                              //   disabled={f_decimals}
                              value={decimals}
                              name="decimals"
                              onChange={ethMainFormHandler}
                            />
                            <span className="form-text text-muted">
                              The number of decimal of your token (default 18)
                            </span>
                            <div className="text-danger f-12">
                              {err.decimalsErr}
                            </div>
                          </div>
                          <div className="form-group col-lg-6">
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
                              value={initialSupply}
                              onChange={ethMainFormHandler}
                            />
                            <span className="form-text text-muted">
                              The number of coins minted during the creation of
                              the contract
                            </span>
                            <div className="text-danger f-12">
                              {err.initialSupplyErr}
                            </div>
                          </div>
                          <div className="col-12">
                            <button
                              type="submit"
                              className="btn form-btn ms-auto"
                              onClick={handleSubmit}
                            >
                              Next
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ) : currentStep === 2 ? (
              <section>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="firstForm p-lg-5 p-4 mt-0 mb-5">
                        <h3 className="heading mb-4">Options</h3>
                        <form>
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
                                Confirms to BEP20 protocol
                              </span>
                            </label>
                            <span className="form-text text-muted">
                              Your token will const all the functionalities,
                              and confirms to BEP20 protocol
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
                          <div className='d-flex align-items-center justify-content-between'>
                            <button type="button" className="btn form-btn" onClick={() => setStep(1)}>
                              Back
                            </button>
                            <button type="button" className="btn form-btn" onClick={() => setStep(3)}>
                              Next
                            </button>
                          </div>

                        </form>

                      </div>
                    </div>
                  </div>
                </div>
              </section>


            ) : (
              <section>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="firstForm p-lg-5 p-4 mt-0 mb-5">
                        <h5 className="heading mb-3">Network</h5>
                        <form>
                          <div className="form-group">
                            <select
                              className="form-select"
                              name="network"
                              value={network}
                              onChange={ethMainFormHandler}
                            >
                              <option>Select your network</option>
                              {data.map((item,i) => {
                                if (
                                  item.parentNetworkName ===
                                  "Binance Smart Chain" &&
                                  item.tokenType === "free"
                                ) {
                                  return (
                                    <option value={item.value} key={i}>
                                      {item.subNetworkName}
                                    </option>
                                  );
                                } else if (
                                  item.parentNetworkName ===
                                  "Binance Smart Chain" &&
                                  item.tokenType === "basic"
                                ) {
                                  <option value={item.value} key={i}>
                                    {item.subNetworkName}
                                  </option>;
                                } else if (
                                  item.parentNetworkName ===
                                  "Binance Smart Chain" &&
                                  item.tokenType === "custom"
                                ) {
                                  <option value={item.value} key={i}>
                                    {item.subNetworkName}
                                  </option>;
                                }
                              })}
                            </select>
                            <span className="form-text f-12 heading">
                              Select the network on wich you want to deploy your
                              token
                            </span>
                          </div>

                          <h5 className="heading mb-0">Transaction</h5>
                          <div className="card-body px-0">
                            <div className="transactionWrap d-sm-flex align-items-center justify-content-between mb-3">
                              <div className="Ttext">
                                Commission fee:{" "}
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
                              </div>
                              <div
                                class="Tbtn my-sm-0 my-3"
                                style={{ width: "120px" }}
                              >
                                <span className="badge bg-success d-block p-2 ">
                                  {commissionFee
                                    ? commissionFee === "Free"
                                      ? "Free"
                                      : `${commissionFee} BNB`
                                    : "Free"}
                                </span>
                              </div>
                            </div>
                            <div className="transactionWrap d-sm-flex align-items-center justify-content-between">
                              <div className="Ttext ">
                                Gas fee:{" "}
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
                              </div>
                              <div
                                class="Tbtn my-sm-0 my-3"
                                style={{ width: "120px" }}
                              >
                                <span className="badge bg-secondary d-block p-2">
                                  Variable
                                </span>
                              </div>
                            </div>
                          </div>
                          <h5 className="heading mb-0">Agreement</h5>
                          <div className="card-body px-0">
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
                                
                                <div className="text-danger f-12 mt-1">
                                  {err.agreementErr}
                                </div>
                              </label>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <button
                              type="button"
                              className="btn form-btn"
                              onClick={() => { 
                                setStep(2) }}
                            >
                              Back
                            </button>
                            <button
                              type="button"
                              className="btn form-btn"
                              // disabled={buttonClick}
                              onClick={async () => {
                                if (ethFormData.agreement === false) {
                                  setErr((prev) => ({
                                    ...prev,
                                    agreementErr:
                                      "Please confirm that you have read and understood our terms of use",
                                  }))

                                }
                                else (
                                  compileContract(ethFormData)
                                )
                              }}
                            >
                              Deploy
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </section>
        </main>
      </div>
    </>
  );
};

export default BnbMain1;
