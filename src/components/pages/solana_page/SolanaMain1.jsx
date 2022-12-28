import React, { useState, useEffect, useCallback, useContext } from "react";
import "./eth_styles/main.css";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { TermsModal } from "../../Layots/TermsModal";
import { GlobalContext } from "../../../contexts/EthContext/EtherProvider";
import axios from "axios";
import { ContractFactory, ethers } from "ethers";
import { toast } from "react-toastify";
import { SolanaMain } from "./SolanaMain";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

import { HiInformationCircle } from "react-icons/hi";
// import Link from "react-router-dom";
import Tooltip from "../../Layots/ToolTip";
// import wallet_model from "../../Modal/Multi-WalletModal";
//
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, SystemProgram, Transaction } from "@solana/web3.js";
import {
  MINT_SIZE,
  TOKEN_PROGRAM_ID,
  createInitializeMintInstruction,
  getMinimumBalanceForRentExemptMint,
  getAssociatedTokenAddress,
  createAssociatedTokenAccountInstruction,
  createMintToInstruction,
} from "@solana/spl-token";
import {
  DataV2,
  createCreateMetadataAccountV2Instruction,
} from "@metaplex-foundation/mpl-token-metadata";
import { findMetadataPda } from "@metaplex-foundation/js";
//

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";


import { multiStepContext } from "./StepContext";
import { SolanaHeader } from "./SolanaHeader";

const SolanaMain1 = (props) => {
  const steps = [" ", " "];

  const { currentStep, submitted } = useContext(multiStepContext);
  const { setStep, userData, setUserData } = useContext(multiStepContext);

  //
  const { connection } = useConnection();
  // console.log(connection,"connection");
  const { publicKey, sendTransaction, signMessage, connected } = useWallet();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [signature, setSignature] = useState("");
  const [signedMessage, setSignedMessage] = useState("");
  const [verified, setVerified] = useState();
  useEffect(() => {
    if (!connected) {
      setError("");
      setMessage("");
      setSignature("");
      setSignedMessage("");
      setVerified();
    }
  }, [connected]);
  // 
  console.log(publicKey, "public kaye");
  const [tokenName, setTokenName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [uri, setUri] = useState("safhfsa");
  const [amount, setAmount] = useState("");
  const [decimals, setDecimals] = useState(1);
  console.log(tokenName, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Tpokebn Name here >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

  const [agreement, setAgreement] = useState(false)
  const [err, setErr] = useState({
    tokenNameErr: "",
    tokenSymbolErr: "",
    agreementErr: "",
    decimalsErr: "",
    amountErr: ""
  });

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

    if (symbol !== "") {
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
    if (amount !== null) {
      setErr((prev) => ({
        ...prev,
        amountErr: "",
      }));
    }
  }, [agreement, tokenName, symbol, decimals]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (tokenName === "") {
      setErr((prev) => ({
        ...prev,
        tokenNameErr: "Please fill your token name",
      }));
    }

    if (symbol === "") {
      setErr((prev) => ({
        ...prev,
        tokenSymbolErr: "Please fill your token symbol",
      }));
    }

    if (agreement === false) {
      setErr((prev) => ({
        ...prev,
        agreementErr:
          "Please confirm that you have read and understood our terms of use",
      }));
    }
    if (decimals > 21 || decimals < 6) {
      setErr((prev) => ({
        ...prev,
        decimalsErr: "The number of decimals must be between 6 and 21",
      }));
    }
    if (amount === "") {
      setErr((prev) => ({
        ...prev,
        amountErr: "Please Enter how many token you want to deploy "
      }))
    }

    if (!err.tokenNameErr && !err.tokenSymbolErr && !err.agreementErr) {
      // do what u want to do with data
      // console.log("data");
      console.log(err, "da");

      // < Navigate to= "/generator/final" />
      // navigate("/generator/final")
    }
    if (tokenName !== "" && symbol !== "" && amount !== "" && decimals !== null) {
      // navigate("/generator/final");
      setStep(2);
    }
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setStep(2)

  // };


  const onClick = useCallback(
    async (form) => {
      // console.log(tokenName,"tokennane");
      // console.log("aagya");
      // e.preventDefault();
      if(!publicKey){
        console.log("public key nhi h");
        toast.error("Please Connect Your wallet ")
      }
      console.log(connection, "connection");
      const lamports = await getMinimumBalanceForRentExemptMint(connection);
      console.log(lamports, "lamports");
      const mintKeypair = Keypair.generate();
      console.log(mintKeypair, "mintKeypair");
      const metadataPDA = await findMetadataPda(mintKeypair.publicKey);
      console.log(metadataPDA, "metadataPDA");
      const tokenATA = await getAssociatedTokenAddress(
        mintKeypair.publicKey,
        publicKey
      );
      console.log(tokenATA, "tokenATA");
      const tokenMetadata = {
        name: form.tokenName,
        symbol: form.symbol,
        uri: form.uri,
        sellerFeeBasisPoints: 0,
        creators: null,
        collection: null,
        uses: null,
      };
      console.log(tokenMetadata, "token meta datat");
      console.log(form.decimals, "decimL");
      console.log(form.amount, "amount");
      const createNewTokenTransaction = new Transaction().add(
        SystemProgram.createAccount({
          fromPubkey: publicKey,
          newAccountPubkey: mintKeypair.publicKey,
          space: MINT_SIZE,
          lamports: lamports,
          programId: TOKEN_PROGRAM_ID,
        }),
        createInitializeMintInstruction(
          mintKeypair.publicKey,
          form.decimals,
          publicKey,
          publicKey,
          TOKEN_PROGRAM_ID
        ),
        createAssociatedTokenAccountInstruction(
          publicKey,
          tokenATA,
          publicKey,
          mintKeypair.publicKey
        ),

        createMintToInstruction(
          mintKeypair.publicKey,
          tokenATA,
          publicKey,
          // form.amount
          // (form.amount* 1000000000000000000)
          form.amount * Math.pow(10, form.decimals)
          // form.amount
        ),
        createCreateMetadataAccountV2Instruction(
          {
            metadata: metadataPDA,
            mint: mintKeypair.publicKey,
            mintAuthority: publicKey,
            payer: publicKey,
            updateAuthority: publicKey,
          },
          {
            createMetadataAccountArgsV2: {
              data: tokenMetadata,
              isMutable: true,
            },
          }
        )
      );
      await sendTransaction(createNewTokenTransaction, connection, {
        signers: [mintKeypair],
      });
      console.log(form.amount * Math.pow(100, form.decimals), "Aditi data jo nhi atat")

    },
    [publicKey, connection, sendTransaction]
  );


  console.log(
    ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,Solana ,,,,,,,,,,,,,,,,,,,,,,"
  );

  return (
    <>
        
          {/* <WalletMultiButton className="btn btn-ghost mr-4" 
          style={{
            backgroundColor:"#f50058",
            borderColor:"#f50058",
            color:"#fff", 
            borderRadius:"40px", 
            justifyContent:"center", 
            padding:"30px 60px"}}/> */}
            {/* <SolanaHeader /> */}
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
                No login. No setup. No Coding required.
              </p>
            </div>
          </div>
          <section style={{ marginBottom: "40px" }}>
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
                      <div className="firstForm">
                        <h2 className="heading">Informations</h2>
                        <form>
                          <div className="form-group">
                            <label className="form-label">
                              Token type
                              <span className="val-required">*</span>
                            </label>
                            <select
                              className="form-select"
                              name="tokenType"
                            // onChange={ethMainFormHandler}
                            // value={tokenType}
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
                          <div className="form-group">
                            <label className="form-label">
                              Supply type
                              <span className="val-required">*</span>
                            </label>
                            <select
                              className="form-select"
                              name="supplyType"
                            // disabled={f_supplyType}
                            // onChange={ethMainFormHandler}
                            // value={supplyType}
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
                              Token Name
                              <span className="val-required">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="My new token"
                              name="tokenName"
                              value={tokenName}
                              onChange={(e) => setTokenName(e.target.value)}
                            // onChange={ethMainFormHandler}
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
                              name="symbol"
                              value={symbol.toUpperCase()}
                              onChange={(e) => setSymbol(e.target.value)}
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
                              //   disabled={f_decimals}
                              // value={}
                              name="decimals"
                            // onChange={(e) => setDecimals(e.target.value)}
                            />
                            <span className="form-text text-muted">
                              The number of decimal of your token (default 18)
                            </span>
                            <br />
                            <span className="text-danger">
                              {err.decimalsErr}
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
                              name="amount"
                              onChange={(e) => setAmount(e.target.value)}
                              value={amount}
                            //   disabled={f_initialSupply}
                            // value={initialSupply}
                            // onChange={ethMainFormHandler}
                            />
                            <span className="form-text text-muted">
                              The number of coins minted during the creation of
                              the contract
                            </span>
                            <br />
                            <span className="text-danger">
                              {err.amountErr}
                            </span>
                          </div>
                          <button
                            // type="submit"
                            className="btn form-btn"
                            onClick={handleSubmit}
                          >
                            Next
                          </button>
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
                      <div className="firstForm">
                        <h2 className="heading">Network</h2>
                        <form>
                          <div className="form-group">
                            <select
                              className="form-select"
                              name="network"
                            // value={network}
                            // onChange={ethMainFormHandler}
                            >
                              {/* {data.map((item) => {
                                  if (item.parentNetworkName === "Ethereum" && item.tokenType === 'free') {
                                    return (
                                      <option value={item.value}>{item.subNetworkName}</option>
                                    )
                                  }
                                  else if (item.parentNetworkName === "Ethereum" && item.tokenType === 'basic') {
                                    <option value={item.value}>{item.subNetworkName}</option>
                                  }
                                  else if (item.parentNetworkName === "Ethereum" && item.tokenType === 'custom') {
                                    <option value={item.value}>{item.subNetworkName}</option>

                                  }
                                })} */}
                              <option value="devnet">Solana Devnet </option>
                              <option
                                value="devnet"
                                disabled
                                style={{ backgroundColor: "#dedede" }}
                              >
                                Solana Mainnet{" "}
                              </option>
                              <option
                                value="devnet"
                                disabled
                                style={{ backgroundColor: "#dedede" }}
                              >
                                Solana Testnet{" "}
                              </option>
                            </select>
                            <span className="form-text text-muted">
                              Select the network on wich you want to deploy your
                              token
                            </span>
                          </div>

                          <h2 className="heading">Transaction</h2>
                          <div className="card-body">
                            <div className="transactionWrap">
                              <div className="Ttext">
                                <p>
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
                                </p>
                              </div>
                              <div
                                className="Tbtn mt-auto mb-auto"
                                style={{ width: "120px" }}
                              >
                                <span className="badge bg-success d-block p-2 ">
                                  {/* {commissionFee
                                      ? commissionFee === "Free"
                                        ? "Free"
                                        : `${commissionFee} ETH`
                                      : "Free"} */}
                                  0.01 SOL
                                </span>
                              </div>
                            </div>
                            <div className="transactionWrap">
                              <div className="Ttext ">
                                <p>
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
                                </p>
                              </div>
                              <div
                                className="Tbtn mt-auto mb-auto"
                                style={{ width: "120px" }}
                              >
                                <span className="badge bg-secondary d-block p-2">
                                  Variable
                                </span>
                              </div>
                            </div>
                          </div>
                          <h2 className="heading">Agreement</h2>
                          <div className="card-body">
                            <div className="form-group">
                              <label className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="agreement"
                                  value={agreement}
                                // onChange={ethMainFormHandler}
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
                                <br />
                                <span className="text-danger">
                                  {err.agreementErr}
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className="d-flex">
                            <button
                              type="button"
                              className="btn form-btn"
                              onClick={() => setStep(1)}
                            >
                              Back
                            </button>
                            <button
                              type="button"
                              className="btn form-btn"
                              //   onClick={async () => {
                              //     if (ethFormData.agreement === false) {
                              //       setErr((prev) => ({
                              //         ...prev,
                              //         agreementErr:
                              //           "Please confirm that you have read and understood our terms of use",
                              //       }))

                              //     }
                              //     else (
                              //       compileContract(ethFormData)
                              //     )
                              //   }}
                              // onClick={(e) => onClick(e, form)}
                              onClick={() => onClick({ tokenName: tokenName, symbol: symbol, decimals: Number(decimals), amount: Number(amount), uri: uri })}
                            // onClick={() => onClick(form)}
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

export default SolanaMain1;
