import React, { useState, useEffect, useContext } from "react";
// import "../Eth_page/eth_styles/main.css";
import "../Eth_page/eth_styles/main.css"
import "react-toastify/dist/ReactToastify.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
// import { TermsModal } from "../../Layots/TermsModal";
import { TermsModal } from "../../Layots/TermsModal";
import { GlobalContext } from "../../../contexts/EthContext/EtherProvider";
import { toast } from "react-toastify";
import { HiInformationCircle } from "react-icons/hi";
// import Tooltip from "../../Layots/ToolTip";
import Tooltip from "../../Layots/ToolTip";
//
// import Link from "react-router-dom";
// import wallet_model from "../../Modal/Multi-WalletModal";
// 

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import "../Eth_page/eth_styles/main.css";
import {
  freeDisabled,
  basicDisabled,
  customDisabled,
} from "../../../disabledUtils";
import axios from "axios";
import { ethers } from "ethers";
import Loader from "../../../loader";
import { multiStepContext } from "./StepContext";
import CommonBanner from "./CommonBanner";
import CommonBannerSkeleton from "../../../skeleton/CommonBannerSkeleton";
// import { symbol } from "prop-types";

const Commonmain1 = (props) => {
  const steps = [" ", " ", " "];

  const { currentStep, submitted } = useContext(multiStepContext);
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  const [buttonClick, setButtonClick] = useState(false)

  const [loader, setLoader] = useState(true)


  const navigate = useNavigate();

  let location = useLocation()
  // console.log(location, "PAth is  ")

  const { deployContract, changeNetwork, addNewNetwork, connectedAccAddress, SignInMetamask, blockchainNetworks, sendCommision } =
    useContext(GlobalContext);

  const networkFee = []

  const [data, setData] = useState([])
  const getNetworks = () => {
    axios.get("https://tokenmaker-apis.block-brew.com/commission/commissiondetails")
      .then((res) => {
        setData(res.data.msg)
        // console.log(res.data.msg.items, "Aditii ddata jo ni aata ");
        setLoader(false)
      })
      .catch((err) => {
        console.log(err, "Error")
      })
  }

  // console.log(data, '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')



  useEffect(() => {
    getNetworks()
  }, [setData])

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
    commissionFee: 150,
    symbol: "",
    dynamicNetworkName: "",
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
    initialSupplyErr: ""
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

  const pathValue = location.pathname.replace('/generator/', "").charAt(0).toUpperCase() + location.pathname.replace('/generator/', "").slice(1)

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
    if (supplyType === "fixed" || supplyType === "capped") {
      setEthFormData((prev) => ({
        ...prev,
        maximumSupply: initialSupply,
      }));
    }
  }, [supplyType, initialSupply, maximumSupply]);
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
        // commissionFee: null,
        accessType: "owner",
        supplyType: "fixed",
        mintable: false,
        burnable: false,
        pausable: false,
        recoverable: false,
      }));
      if (network === "optimismTestnet") {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: data?.find((item) => item.value === ethFormData.network)?.networkCommissionFee,

          // commissionFee: null,
        }));
      }
      if (network === "optimismMainnet") {
        setEthFormData((prev) => ({
          ...prev,
          // commissionFee: data.networkCommissionFee,
          // commissionFee: 150,
          commissionFee: data?.find((item) => item.value === ethFormData.network)?.networkCommissionFee,
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
        // commissionFee: 0.15,
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
          // commissionFee: 0.225,
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
        setEthFormData((prev) => ({
          ...prev,
          mintable: false,
        }));
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

      if (network === "optimismTestnet") {
        setEthFormData((prev) => ({
          ...prev,
          // commissionFee: data.commissionFee
          commissionFee: data?.find((item) => item.value === ethFormData.network)?.networkCommissionFee,
          // commissionFee: null,
        }));
      }
      if (network === "optimismMainnet") {
        setEthFormData((prev) => ({
          ...prev,
          commissionFee: data?.find((item) => item.value === ethFormData.network)?.networkCommissionFee,
          // commissionFee: 0.15,
        }));
      }
    }
  }, [tokenType, supplyType, network, data]);

  useEffect(() => {
    if (tokenType === "custom") {
      // owner && fixed
      if (burnable === true && pausable === true && recoverable === true) {
        setEthFormData((prev) => ({
          ...prev,
          // commissionFee: 700,
        }));
      }
      if (pausable === true && burnable === true && recoverable === false) {
        setEthFormData((prev) => ({
          ...prev,
          // commissionFee: 550,
        }));
      }
      if (pausable === true && burnable === false && recoverable === true) {
        setEthFormData((prev) => ({
          ...prev,
          // commissionFee: 550,
        }));
      }
      if (
        (burnable === true && pausable === false && recoverable === false) ||
        (burnable === false && pausable === false && recoverable === true)
      ) {
        setEthFormData((prev) => ({
          ...prev,
          // commissionFee: 450,
        }));
      }
      if (burnable === false && pausable === true && recoverable === false) {
        setEthFormData((prev) => ({
          ...prev,
          // commissionFee: 400,
        }));
      }
      if (pausable === false && burnable === true && recoverable === true) {
        setEthFormData((prev) => ({
          ...prev,
          // commissionFee: 600,
        }));
      }
      if (pausable === false && recoverable === false && burnable === false) {
        setEthFormData((prev) => ({
          ...prev,
          // commissionFee: 300,
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
          // commissionFee: 800,
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
          // commissionFee: 650,
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
          // commissionFee: 650,
        }));
      }
      if (
        accessType === "roles" &&
        ((burnable === true && pausable === false && recoverable === false) ||
          (burnable === false && pausable === false && recoverable === true))
      ) {
        setEthFormData((prev) => ({
          ...prev,
          // commissionFee: 550,
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
          // commissionFee: 500,
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
          // commissionFee: 700,
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
          // commissionFee: 400,
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
          // commissionFee: 450,
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
          // commissionFee: 550,
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
          // commissionFee: 600,
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
          // commissionFee: 700,
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
          // commissionFee: 550,
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
          // commissionFee: 650,
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
          // commissionFee: 700,
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
          // commissionFee: 800,
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
      if (e.target.value === '') {
        setEthFormData((prev) => ({
          ...prev,
          [e.target.name]: boolean ?? '',
        }));
      } else {

        setEthFormData((prev) => ({
          ...prev,
          [e.target.name]: (e.target.value).charAt(0) !== '0' ? e.target.value : (e.target.value).substring(1),
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


  const customVampire = (network) => {
    const blockArray = Object.entries(blockchainNetworks);
    const selctedItem = blockArray.find((item) => item[1] === network)
    return selctedItem?.[0]
  }

  useEffect(() => {
    //eslint-disable-next-line
    const selectedCommissionFee = data?.find(({ value, parentNetworkName, subNetworkName, tokenType }) => {
      if (parentNetworkName.split(" ").join("").toLowerCase().charAt(0).toUpperCase() + parentNetworkName.split(" ").join("").toLowerCase().slice(1) === (location.pathname.replace('/generator/', "").charAt(0).toUpperCase() + location.pathname.replace('/generator/', "").slice(1)) && (value === ethFormData.network || value === customVampire(ethFormData.network)) && tokenType === ethFormData.tokenType) {
        return true;
      }
    })
    // setGasFee(selectedCommissionFee)
    setEthFormData(prev => ({
      ...prev,
      commissionFee: selectedCommissionFee?.networkCommissionFee,
      symbol: selectedCommissionFee?.symbol,
      dynamicNetworkName: selectedCommissionFee?.parentNetworkName
    }))

    //eslint-disable-next-line
  }, [ethFormData.tokenType, ethFormData.network, data])

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
    // else if (ethFormData.tokenName !==  "/^[A-Za-z]+$/") {
    //   setErr((prev) => ({
    //     ...prev,
    //     tokenNameErr: "Numerical values are not allowed",
    //   }));
    // }

    if (ethFormData.tokenSymbol === ""  ) {
      setErr((prev) => ({
        ...prev,
        tokenSymbolErr: "Please fill your token symbol",
      }));
    }
    // else if ((ethFormData.tokenSymbol !==  "/^[A-Za-z]+$/" )) {
    //   setErr((prev) => ({
    //     ...prev,
    //     tokenSymbolErr: "Numerical values are not allowed",
    //   }));
    //   return true;
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
        initialSupplyErr: "Please choose how many tokens you want to deploy",
      }));
    }


    if (!err.tokenNameErr && !err.tokenSymbolErr && !err.agreementErr) {
    
    }
    if (
     ( ethFormData.tokenName !== "")  &&
      (ethFormData.tokenSymbol !== "" ) &&
      (ethFormData.decimals <= 21 && ethFormData.decimals >= 6) &&
      ethFormData.initialSupply !== ''
    ) {
      // navigate("/generator/final");
      e.preventDefault()
      setStep(2)
    }
  };
  useEffect(() => {
    if (tokenType === "free") {
      setEthFormData((prev) => ({
        ...prev,
        initialSupply: 10000
      }));
    }
  }, [tokenType, initialSupply, maximumSupply])
  //compile contract and generate bytecode and abi
  const compileContract = async (FormData) => {
    // setButtonClick(true)

    try {
      // console.log(FormData.network, "fromdatanetwork");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // console.log(provider, "provider");
      const { chainId } = await provider.getNetwork();
      console.log(chainId, "chainid");

      console.log(FormData.network,"networkForm");

      //check selected network and set chain id
      // eslint-disable-next-line no-unused-expressions
      blockchainNetworks[FormData.network]
        ? Object.assign(FormData, {
          network: blockchainNetworks[FormData.network],
        })
        : "";

      if (connectedAccAddress.length === 0) {
        await SignInMetamask()
      }
      let networkFunc
      if (FormData.network !== chainId) {
        await addNewNetwork(FormData.network)
        console.log(FormData.network, "Form data network")
        networkFunc = await changeNetwork(FormData.network);
        console.log(networkFunc, "network");
        if (!networkFunc) {
          throw "vikcy"
        }
      }


      props.setShow(false);
      let res = await sendCommision(commissionFee)
      // let res = 0.12

      // console.log(res, "ress send commision matic main")
      if (!res) {
        props.setShow(true)
        navigate("/generator");
      }

      if (res) {
        //hit contract compile api
        // props.setShow(false);

        axios
          .post(
            "https://tokenmaker-apis.block-brew.com/contract/contract",
            FormData
          )
          .then((res) => {
            //calling deploy function
            deployContract(res.data.result, FormData).then((res) => {

              if (res.error) {
                navigate("/generator");
                props.setShow(true);
                res.error.code === "ACTION_REJECTED"
                  ? toast.error(
                    "User Rejected The Request"
                  )
                  : toast.error(res.error.message);
              } else {
                toast.success("Token deploy successfully!");
                // navigate("/generator/final");
                props.setShow(false);
                // console.log(res, "else side deploy then return deploy succes");
              }
            });
          })
          .catch((error) => {
            // console.log("Api fail error", error);
            props.setShow(true);
            // navigate("/generator/ethereum");
            error.response.data.message
              ? toast.error(error.response.data.message)
              : toast.error("Data Fetch Failed Try Again");
          });
      }

      // } 

      // else {
      //   changeNetwork(FormData.network);
      // }
      // }
    } catch (error) {
      toast.error(error.message);
      // console.log("compile contract side catch er", error);
    }
  };

  const [bannerValue, setBannerValue] = useState("")
  const [formSymbol, setFormSymbol] = useState("")

  const networkData = async () => {
    // console.log("123")
    // console.log(data, "Netwrok data")
    // console.log(location.pathname, "Network")
    await data.map((value) => {
      // console.log(value, "Banner Data above");

      if ((value.parentNetworkName.split(" ").join("").toLowerCase()) === location.pathname.replace("/generator/", "")) {
        // console.log(value, "Banner Data under");
        return (
          setBannerValue(value.parentNetworkName),
          setFormSymbol(value.symbol)
        )
      }
    })
  }

  useEffect(() => {
    networkData()
  })

  // console.log(data, "Network data1")

  // console.log(bannerValue, "Banner Value")



  const formatPath = (path) => {

    return `/generator/${path.toLowerCase(path)}`

  }




  return (
    <>
      <div className="page-content">
        <main>
          <div className="hero mb-5">
            {
              loader ? <CommonBannerSkeleton /> :
                <div className="container">
                  <h1>
                    <span className="sub-highlight">Create Your {bannerValue} Token</span>
                  </h1>
                  <p>
                    Easily deploy your Smart Contract for a Standard, Capped,
                    Mintable, Burnable {bannerValue} Token.
                    <br />
                    No login. No setup. No Coding required.
                  </p>
                </div>
            }
          </div>
          <section className="mb-5">
            {/* test */}
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="steper-div">
                    <Box sx={{ width: "100%" }}>
                      <Stepper
                        activeStep={currentStep - 1}
                        alternativeLabel
                        orientation="horizontal"
                      >
                        {steps.map((label, index) => (
                          <Step key={index}>
                            <StepLabel>{label}</StepLabel>
                          </Step>
                        ))}
                      </Stepper>
                    </Box>
                  </div>
                </div>
              </div>
            </div>
            
            {currentStep === 1 ? (
              // <FirstStep />

              <section>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="firstForm p-lg-5 p-4 mt-0 mb-5">
                        <h4 className="heading mb-4">Informations</h4>
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
                              onChange={(e) => {
                                if(!e.target.value.match(/^[A-Za-z]+$/)){
                                  return ;
                                }
                                
                                ethMainFormHandler(e)
                              }}
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
                              onChange={(e) => {
                                if(!e.target.value.match(/^[A-Za-z]+$/)){
                                  return ;
                                }
                                ethMainFormHandler(e)
                              }}
                            />
                            <span className="form-text text-muted">
                              Your token's symbol (i.e. {formSymbol})
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
                              The number of decimal of your token must be between 6 & 21 (default 18)
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
                        <h4 className="heading mb-4">Options</h4>
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
                                Confirms to ERC-20 protocol
                              </span>
                            </label>
                            <span className="form-text text-muted">
                              Your token will const all the functionalities,
                              and confirms to ERC-20 protocol
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
                                Verified on Optimisticscan
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
                          <div className='d-flex justify-content-between'>
                            <button type="button" className="btn form-btn" onClick={(e) => {
                              e.preventDefault()
                              setStep(1)
                            }}
                            >
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
                              <option value='none' selected hidden>Select your network</option>
                              {
                                data.map((item, i) => {
                                  if (formatPath(item.parentNetworkName.split(" ").join("")) === location.pathname && item.tokenType === 'free') {
                                    return (
                                      <option value={item.value} key={i}>{item.subNetworkName}</option>
                                    )
                                  }
                                  else if (formatPath(item.parentNetworkName.split(" ").join("")) === location.pathname && item.tokenType === 'basic') {
                                    <option value={item.value} key={i}>{item.subNetworkName}</option>
                                  }
                                  else if (formatPath(item.parentNetworkName.split(" ").join("")) === location.pathname && item.tokenType === 'custom') {
                                    <option value={item.value} key={i}>{item.subNetworkName}</option>
                                  }
                                })}
                            </select>
                            <span className="form-text text-muted">
                              Select the network on which you want to deploy your
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
                                className="Tbtn my-sm-0 my-3"
                                style={{ width: "120px" }}
                              >
                                <span className="badge bg-success d-block p-2 ">
                                  {commissionFee
                                    ? commissionFee === "Free"
                                      ? "Free"
                                      : (commissionFee + " " + ethFormData?.symbol)
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
                                className="Tbtn my-sm-0 my-3"
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
                                    to="/terms"
                                  // data-bs-toggle="modal"
                                  // data-bs-target="#exampleModal"
                                  >
                                    <u> Terms of Use. </u>
                                  </Link>
                                  <TermsModal />
                                  {/* modal */}
                                  {/* </span> */}
                                </span>
                                <div className="text-danger f-12">
                                  {err.agreementErr}
                                </div>
                              </label>
                            </div>
                          </div>
                          <div className="d-flex justify-content-between">
                            <button
                              type="button"
                              className="btn form-btn"
                              onClick={() => setStep(2)}
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

export default Commonmain1;