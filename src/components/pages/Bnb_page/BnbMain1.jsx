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
  const steps = [" ", " ", " ", " "];

  const { currentStep, submitted } = useContext(multiStepContext);

  const showStep = (step) => {
    console.log(step);
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      case 4:
        return <FouthStep />;
    }
  };

  // end

  console.log(props, "PEOPS AT BNB");

  const [data, setData] = useState([]);
  const getNetworks = () => {
    axios
      .get(
        "https://tokenmaker-apis.block-brew.com/commission/commissiondetails"
      )
      .then((res) => {
        setData(res.data.msg.items);
        console.log(res.data.msg.items, "Aditii ddata jo ni aata ");
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
    network: "binanceSmartChain",
    agreement: false,
    commissionFee: "0.5",
  });

  // error dika
  //api hit to k

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
      if (network === "binanceSmartChainTestnet") {
        setEthFormData((prev) => ({
          ...prev,
          // commissionFee: null,
          // commissionFee: data.find((item) => item.value === ethFormData.network)?.networkCommissionFee,
        }));
      }
      if (network === "binanceSmartChain") {
        setEthFormData((prev) => ({
          ...prev,
          // commissionFee: 0.5,
          // commissionFee: data.find((item) => item.value === ethFormData.network)?.networkCommissionFee
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
        // commissionFee: 1,
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
          // commissionFee: 0.15,
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
      // owner && fixed
      if (burnable === true && pausable === true && recoverable === true) {
        setEthFormData((prev) => ({
          ...prev,
          // commissionFee: 2.3,
        }));
      }
      if (pausable === true && burnable === true && recoverable === false) {
        setEthFormData((prev) => ({
          ...prev,
          // commissionFee: 1.8,
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
    console.log(
      selectedCommissionFee,
      ">>>>>>>>>>>>>>>>>>>>>KKKKKKKKKKKKKKLLLLLLLLLLLLLLLLLLLLLLLLLLJJJJJJJJJJJJJJJJJJJJJJJJJJHHHHHHHHHHHHHHHHHHHH"
    );
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
    try {
      console.log(FormData.network, "fromdatanetwork");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log(provider, "provider");
      const { chainId } = await provider.getNetwork();
      console.log(chainId, "chainid");

      //check selected network and set chain id
      // eslint-disable-next-line no-unused-expressions
      blockchainNetworks[FormData.network]
        ? Object.assign(FormData, {
            network: blockchainNetworks[FormData.network],
          })
        : "";

      console.log(FormData.network, "formdata bnb main1 side");

      console.log(chainId, "chainId bnb main1 side ");

      if (FormData.network === chainId) {
        // navigate("/generator/final");
        if (connectedAccAddress.length === 0) {
          await SignInMetamask();
        }
        console.log(FormData.network, "currentNetworkID");

        let res = await sendCommision(commissionFee);
        console.log(res, "ress send commision matic main");

        if (res) {
          props.setShow(false);

          //hit contract compile api

          axios
            .post(
              "https://tokenmaker-apis.block-brew.com/contract/contract",
              // https://tokenmaker-apis.block-brew.com/token/tokendetails

              FormData
            )
            .then((res) => {
              console.log(res, "response");
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
                  console.log(
                    res,
                    "else side deploy then return deploy succes"
                  );
                }
              });
            })
            .catch((error) => {
              console.log("Api fail error", error);
              props.setShow(true);
              // navigate("/generator/ethereum");
              error.response?.data?.message
                ? toast.error(error.response?.data?.message)
                : toast.error("Data Fetch Failed Try Again");
            });
        }
      } else {
        changeNetwork(FormData.network);
      }
    } catch (error) {
      toast.error(error.message);
      console.log("compile contract side catch er", error);
    }
  };

  return (
    <>
      <div className="page-content">
        <main>
          <div className="hero-form mb-3">
            <div className="container">
              <h1>
                <span className="sub-highlight">
                  Create Your Binance Smart Chain Token
                </span>
              </h1>
              <p>
                Easily deploy your Smart Contract for a Standard, Capped,
                Mintable, Burnable BEP20 Token.
                <br />
                No login. No setup. No Coding required.
              </p>
            </div>
          </div>
          <section style={{ marginBottom: "340px" }}>
            {/* test */}
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
     
            {currentStep === 1 ? (
              <FirstStep />
            ) : currentStep === 2 ? (
              <SecondStep />
            ) : currentStep === 3 ? (
              <ThirdStep />
            ) : (
              <FouthStep />
            )}
          </section>
        </main>
      </div>
    </>
  );
};

export default BnbMain1;
