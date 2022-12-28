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
import Swal from "sweetalert2"
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";


import { multiStepContext } from "./StepContext";

const SolanaMain1 = (props) => {
  const steps = [" ", " "];

  const { currentStep, submitted } = useContext(multiStepContext);
  const { setStep, userData, setUserData } = useContext(multiStepContext);

  //
  const { connection } = useConnection();
  // console.log(connection,"connection");
  const { publicKey, sendTransaction,signMessage, connected } = useWallet();
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
  console.log(publicKey,"public kaye");
  const [tokenName, setTokenName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [uri, setUri] = useState("safhfsa");
  const [amount, setAmount] = useState("");
  const [decimals, setDecimals] = useState(1);
  console.log(tokenName, "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< Tpokebn Name here >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")

  // const [form, setForm] = useState({
  //   tokenName: tokenName,
  //   symbol: symbol,
  //   uri: metadata,
  //   decimals: decimals,
  //   amount: amount,
  // });
  const handleSubmit = (e) => {
    e.preventDefault();
      // navigate("/generator/final");
      setStep(2)

  };


  const onClick = useCallback(
    async (form) => {
      // console.log(tokenName,"tokennane");
      // console.log("aagya");
      // e.preventDefault();
      // const test = await connection.getSupply();
      console.log(connection,"connection")
      const solbalance = await connection.getBalance(publicKey)
      console.log(solbalance,"balalal")
    
      console.log(`Switched to account ${publicKey.toBase58()}`);
      // console.log(test,"connection>>>");
      const lamports = await getMinimumBalanceForRentExemptMint(connection);
      console.log(lamports,"lamports");
      const mintKeypair = Keypair.generate();
      console.log(mintKeypair,"mintKeypair");
      const metadataPDA = await findMetadataPda(mintKeypair.publicKey);
      console.log(metadataPDA,"metadataPDA");
      const tokenATA = await getAssociatedTokenAddress(
        mintKeypair.publicKey,
        publicKey
      );
    //   const associatedAccount = await getAssociatedTokenAddress(
    //     mintPubkey,
    //     wallet.publicKey,
    //     false,
    //     TOKEN_2022_PROGRAM_ID,
    //  );
      console.log(tokenATA,"tokenATA");
      const tokenMetadata = {
        name: form.tokenName,
        symbol: form.symbol,
        uri: form.uri,
        sellerFeeBasisPoints: 0,
        creators: null,
        collection: null,
        uses: null,
      };
      console.log(tokenMetadata,"token meta datat");
      console.log(form.decimals,"decimL");
      console.log(form.amount,"amount");
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
          form.amount * Math.pow(10,form.decimals)
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
      try {
        await sendTransaction(createNewTokenTransaction, connection, {
          signers: [mintKeypair],
        });  
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your Token has been Created',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (error) {
        // console.log(error,"rejectionerror");
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'User Decline the request!',
          // footer: '<a href="">Why do I have this issue?</a>'
        })
      }
      
      // console.log(form.amount * Math.pow(100,form.decimals),"Aditi data jo nhi atat")

    },
    [publicKey, connection, sendTransaction]
  
    );

    console.log(sendTransaction,"connected",connected,"sendTransaction");
    
  console.log(
    ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,Solana ,,,,,,,,,,,,,,,,,,,,,,"
  );
    
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
                                              <WalletMultiButton style={{color:"green"}} className="btn btn-ghost mr-4" />
                                              {props.children}

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
                              {/* {err.tokenNameErr} */}
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
                              value={symbol}
                              onChange={(e) => setSymbol(e.target.value)}
                            />
                            <span className="form-text text-muted">
                              You token's symbol (ie ETH)
                            </span>
                            <br />
                            <span className="text-danger">
                              {/* {err.tokenSymbolErr} */}
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
                              {/* {err.decimalsErr} */}
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
                              name="initialSupply"
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
                              {/* {err.initialSupplyErr} */}
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
              //             currentStep === 2 ? (
              // <section>
              //     <div className="container">
              //       <div className="row">
              //         <div className="col-lg-12">
              //             <div className="firstForm">
              //                 <h2 className="heading">Options</h2>
              //                 <form>
              //                 <div className="form-group">
              //                               <label className="form-check form-switch">
              //                                 <input
              //                                   name="conforms"
              //                                   className="form-check-input"
              //                                   type="checkbox"
              //                                   disabled={f_conforms}
              //                                   onChange={ethMainFormHandler}
              //                                   defaultChecked={conforms}
              //                                 />
              //                                 <span className="form-check-label">
              //                                   Conforms to BEP20 protocol
              //                                 </span>
              //                               </label>
              //                               <span className="form-text text-muted">
              //                                 Your token will const all the functionalities,
              //                                 and conforms to BEP20 protocol
              //                               </span>
              //                             </div>
              //                             <div className="form-group">
              //                               <label className="form-check form-switch">
              //                                 <input
              //                                   name="verified"
              //                                   className="form-check-input"
              //                                   type="checkbox"
              //                                   onChange={ethMainFormHandler}
              //                                   disabled={f_verified}
              //                                   defaultChecked={verified}
              //                                 />
              //                                 <span className="form-check-label">
              //                                   Verified on Bscscan
              //                                 </span>
              //                               </label>
              //                               <span className="form-text text-muted">
              //                                 The source code of your contract is
              //                                 automatically published and verified
              //                               </span>
              //                             </div>
              //                             <div className="form-group">
              //                               <label className="form-check form-switch">
              //                                 <input
              //                                   className="form-check-input"
              //                                   type="checkbox"
              //                                   name="noCopyrightLink"
              //                                   onChange={ethMainFormHandler}
              //                                   checked={noCopyrightLink}
              //                                   disabled={f_noCopyrightLink}
              //                                 />
              //                                 <span className="form-check-label">
              //                                   No copyright link
              //                                 </span>
              //                               </label>
              //                               <span className="form-text text-muted">
              //                                 A link pointing to this page will be added in
              //                                 the description of your contract (Free and Basic
              //                                 contracts only)
              //                               </span>
              //                             </div>
              //                             <div className="form-group">
              //                               <label className="form-check form-switch">
              //                                 <input
              //                                   className="form-check-input"
              //                                   type="checkbox"
              //                                   checked={mintable}
              //                                   disabled={f_mintable}
              //                                   name="mintable"
              //                                   onChange={ethMainFormHandler}
              //                                 />
              //                                 <span className="form-check-label">
              //                                   {" "}
              //                                   Mintable{" "}
              //                                 </span>
              //                               </label>
              //                               <span className="form-text text-muted">
              //                                 Allow the creation of new tokens in the future
              //                               </span>
              //                             </div>
              //                             <div className="form-group">
              //                               <label className="form-check form-switch">
              //                                 <input
              //                                   className="form-check-input"
              //                                   type="checkbox"
              //                                   name="burnable"
              //                                   checked={burnable}
              //                                   disabled={f_burnable}
              //                                   onChange={ethMainFormHandler}
              //                                 />
              //                                 <span className="form-check-label ">
              //                                   Burnable
              //                                 </span>
              //                               </label>
              //                               <span className="form-text text-muted">
              //                                 Allow your tokens to be burned
              //                               </span>
              //                             </div>
              //                             <div className="form-group">
              //                               <label className="form-check form-switch">
              //                                 <input
              //                                   className="form-check-input"
              //                                   type="checkbox"
              //                                   name="pausable"
              //                                   checked={pausable}
              //                                   disabled={f_pausable}
              //                                   onChange={ethMainFormHandler}
              //                                 />
              //                                 <span className="form-check-label">
              //                                   Pausable
              //                                 </span>
              //                               </label>
              //                               <span className="form-text text-muted">
              //                                 Allow your tokens to be paused
              //                               </span>
              //                             </div>
              //                             <div className='d-flex'>
              //                             <button type="button" className="btn form-btn" onClick={()=>setStep(1)}>
              //                             Back
              //                         </button>
              //                             <button type="button" className="btn form-btn" onClick={()=>setStep(3)}>
              //                             Next
              //                         </button>
              //                             </div>

              //                 </form>

              //             </div>
              //         </div>
              //       </div>
              //     </div>
              //   </section>

              //             ):
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
                                  // value={agreement}
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
                                  {/* {err.agreementErr} */}
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
                              onClick={() => onClick({tokenName: tokenName,symbol: symbol,decimals: Number(decimals), amount: Number(amount),uri:uri  })}
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
