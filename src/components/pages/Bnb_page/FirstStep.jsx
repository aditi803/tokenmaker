import React, { useContext, useEffect, useState } from "react";
import { Formik, Field, useFormik } from "formik";
import * as Yup from "yup";
import "./form.css";
import { multiStepContext } from "./StepContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ethers } from "ethers";
import { GlobalContext } from "../../../contexts/EthContext/EtherProvider";
const FirstStep = (props) => {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  
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
  const [show, setShow] = useState(false);

const [ethFormData, setEthFormData] = useState({
    tokenType: "basic",
    tokenName: "",
    tokenSymbol: "",
    decimals: 18,
        initialSupply: 10000,
    // other page
    network: "binanceSmartChain",
    agreement: false,
    commissionFee: "0.5",
  });

  const [err, setErr] = useState({
    tokenNameErr: "",
    tokenSymbolErr: "",
    initialSupplyErr:"",
    agreementErr: "",
    decimalsErr: "",
    
  });

  const {
    tokenType,
    tokenName,
    tokenSymbol,
    decimals,
    initialSupply,
//  other page
    network,
    agreement,
    commissionFee,
  } = ethFormData;
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
    setEthFormData((prev) => ({
        ...prev,
        commissionFee: selectedCommissionFee?.networkCommissionFee,
      }));
      // console.log(
      //   selectedCommissionFee,
      //   ">>>>>>>>>>>>>>>>>>>>>KKKKKKKKKKKKKKLLLLLLLLLLLLLLLLLLLLLLLLLLJJJJJJJJJJJJJJJJJJJJJJJJJJHHHHHHHHHHHHHHHHHHHH"
      // );
  },[ethFormData.tokenType, ethFormData.network, data])

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
    // if (agreement !== false) {
    //   setErr((prev) => ({
    //     ...prev,
    //     agreementErr: "",
    //   }));
    // }

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

  const compileContract = async (FormData) => {
    try {
      // console.log(FormData.network, "fromdatanetwork");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // console.log(provider, "provider");
      const { chainId } = await provider.getNetwork();
      // console.log(chainId, "chainid");

      //check selected network and set chain id
      // eslint-disable-next-line no-unused-expressions
      blockchainNetworks[FormData.network]
        ? Object.assign(FormData, {
            network: blockchainNetworks[FormData.network],
          })
        : "";

      // console.log(FormData.network, "formdata bnb main1 side");

      // console.log(chainId, "chainId bnb main1 side ");

      if (FormData.network === chainId) {
        // navigate("/generator/final");
        if (connectedAccAddress.length === 0) {
          await SignInMetamask();
        }
        // console.log(FormData.network, "currentNetworkID");

        let res = await sendCommision(commissionFee);
        // console.log(res, "ress send commision matic main");

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
      } else {
        changeNetwork(FormData.network);
      }
    } catch (error) {
      toast.error(error.message);
      // console.log("compile contract side catch er", error);
    }
  };

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
        // console.log("gdvfjsh");
      setErr((prev) => ({
        ...prev,
        decimalsErr: "The number of decimals must be between 6 and 21",
      }));
    }
    if (ethFormData.initialSupply === 0 || ethFormData.initialSupply < 0 )  {
        setErr((prev) => ({
          ...prev,
          initialSupplyErr: "Initial Supply should be more than 0",
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
    if (
      ethFormData.tokenName !== "" &&
      ethFormData.tokenSymbol !== "" 
    ) {
      // navigate("/generator/final");
      setStep(2);

    }
  };

  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="firstForm p-lg-5 p-4 mt-0 mb-5">
                <h2 className="heading">Informations</h2>
                <form >
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
                      Select the base configuration of your token (Free and
                      Basic have limited configurations)
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
                      You token's symbol (ie BNB)
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
                    //   disabled={f_decimals}
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
                  {/* <div className="form-group">
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
                              </div> */}
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
                                  value={initialSupply}
                                  onChange={ethMainFormHandler}
                                />
                                <span className="form-text text-muted">
                                  The number of coins minted during the creation
                                  of the contract
                                </span>
                                <br />
                                <span className="text-danger">
                                {err.initialSupplyErr}
                              </span>
                              </div>
                  <button
                    type="submit"
                    className="btn form-btn"
                    // onClick={() => setStep(2)}
                    onClick={handleSubmit}
                    
                    // onClick={async (e) => {
                    //     e.preventDefault();
                    //     if (
                    //       ethFormData.tokenName &&
                    //       ethFormData.tokenSymbol 
                    //     ) {
                    //       // let res = await sendCommision(commissionFee)
                    //       // if(res===true){
                    //         setStep(2);

                    //       // }
                    //       // compileContract(ethFormData)
                    //     }
                    //   }}
                  >
                    Next
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstStep;
