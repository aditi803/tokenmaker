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
// 
import { Metadata } from '@metaplex-foundation/mpl-token-metadata';
import { WebBundlr } from '@bundlr-network/client';
import { sign } from 'tweetnacl';
import { SolanaHeader } from "./SolanaHeader";
import { PublicKey, PublicKeyInitData } from '@solana/web3.js';
import { Buffer } from 'buffer';

import { HiInformationCircle } from "react-icons/hi";
// import Link from "react-router-dom";
import Tooltip from "../../Layots/ToolTip";
// import wallet_model from "../../Modal/Multi-WalletModal";
//
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { Keypair, SystemProgram, Transaction,LAMPORTS_PER_SOL } from "@solana/web3.js";
import {
  MINT_SIZE,
  TOKEN_PROGRAM_ID,
  createInitializeMintInstruction,
  getMinimumBalanceForRentExemptMint,
  getAssociatedTokenAddress,
  createAssociatedTokenAccountInstruction,
  createMintToInstruction,
} from "@solana/spl-token";
import Base58 from "base-58";

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
  const [tokenType, setTokenType] = useState()
  const [errNet, setErrNet] = useState(false)
  console.log(props, "ADITI SET NET")
  const [commissonFee, setCommissonFee] = useState("free")
  const { setNet, net } = props;
  const steps = [" ", " "];
  const { solDeploy, setSolDeploy, setDeployData } = useContext(GlobalContext);

  const {
    solNetworkName,
    setSolNetworkName
  } = useContext(GlobalContext);
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
  const [data, setData] = useState([])
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
  const navigate = useNavigate();

  const [agreement, setAgreement] = useState(false)

  console.log(agreement, 'aditi agre')

  const [err, setErr] = useState({
    tokenNameErr: "",
    tokenSymbolErr: "",
    agreementErr: "",
    decimalsErr: "",
    amountErr: ""
  });
  const [payment, setPayment] = useState("")
  useEffect(() => {
    // setLoader(false)
    fetchData()
  }, [setPayment])

  useEffect(() => {
    if(net){
      setErrNet(false)
    }

    console.log(data, "VAMPIRE")
    data.forEach((item) => {
      if(item.parentNetworkName === "Solana" && item.value === net && item.tokenType === tokenType ){
        setCommissonFee(item.networkCommissionFee)
        console.log(item , "VAMPIRE 1")
      }
    })





  }, [net, data])


  const fetchData = async () => {
    await axios
      .get("https://tokenmaker-apis.block-brew.com/payment/paymentaddress")
      .then(res => {
        setPayment(res.data.msg)
        console.log(res.data.msg, "?>>>>>>>>>>>>>>>>>>Solana PAYMENT ADDRESS MSG>>>>>>>>>>>>>>>>>>>>>>>>>>>")
      })
      .catch(err => {
        console.log(err);
      })
  }
  console.log(payment.solanaPaymentAddress,"PAyment addrress solana")
  const [provider, setProvider] = useState(null);
  const wallet = useWallet();
  useEffect(() => {
    if (wallet && wallet.connected) {

      async function connectProvider() {
        console.log(wallet,"wallet");
        await wallet.connect();
        const provider = wallet.wallet.adapter;
        console.log(provider,"provider");
        
        await provider.connect();
        setProvider(provider);
      }
      connectProvider();
    }
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
  }, [agreement, tokenName, symbol, decimals, amount]);


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
          "Please confirm that you have read and understood our terms of use.",
      }));

    }
    if (decimals >= 21 || decimals <= 6) {
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

      console.log(err, "da");
    }
    if (tokenName !== "" && symbol !== "" && amount !== "" && decimals !== null) {
      // navigate("/generator/final");
      setStep(2);
    }
  };

  // };
  const [walletBalance, setWalletBalance] = useState()
  useEffect(() => {
    (async () => {
      // const message = new TextEncoder().encode('Hello, world!');
      // const signatures = await signMessage(message);
      // if (!sign.detached.verify(message, signature, publicKey.toBytes())) throw new Error('Invalid signature!');
      // const vicky = Keypair.generate()
      const vicky  = "r5wGTPdSNn1kEesgj2aoJ1PyvgHD5MC72xHPW83wGbd"
      console.log(vicky,"buf");
      // var bufView = new Uint16Array(vicky);
      // var bufView = new TextEncoder().encode(vicky)
      // var stringview = bufView.toBytes()
      // console.log(bufView,"vicky");
      // console.log(stringview,"stringview");
      let solbalance 
      if(!publicKey){
        solbalance= 'd'
      }else{
        solbalance = await connection.getBalance(publicKey)
        setWalletBalance(solbalance)
      }
      
      console.log(solbalance,"soolbala");
    console.log(solbalance/LAMPORTS_PER_SOL,"balalal")
    })();

    // return () => {
    //   // this now gets called when the component unmounts
    // };

  })

  
  const getNetworks = () => {
    axios.get("https://tokenmaker-apis.block-brew.com/commission/commissiondetails")
      .then((res) => {
        setData(res.data.msg.items)
        console.log(res.data.msg.items, "Aditii ddata jo ni aata solana>>>>>>>>>>>>>>> ");
      })
      .catch((err) => {
        console.log(err, "Error")
      })
  }

  useEffect(() => {
    getNetworks()
  }, [setData])


  console.log(agreement, "DITI")

  const onClick = useCallback(
    async (form) => {

      if(!net){
        setErrNet(true)
        return
      }

      if (agreement === false) {
        // return;
      }
      console.log(connection, "DITI")
      // const solbalance = await connection.getBalance(publicKey)
      // console.log(solbalance,"balalal")

      // console.log(`Switched to account ${publicKey.toBase58()}`);
      // console.log(test,"connection>>>");
      if (!publicKey) {
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
      // const commisionerAcc = "GEtzEteYKhYnjkqCitFMjpo3BgnamVuKgbrgRiV7WvDf"
      const commisionerAcc = payment.solanaPaymentAddress
      
    // const base = Base58.encode(new Buffer(commisionerAcc))
          console.log(commisionerAcc,"cacc");
          // console.log(base,"base");
   
          
          const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: commisionerAcc,
        lamports: 1912900,
      })
    );
      
    try{
        const signature = await sendTransaction(transaction, connection);
        console.log(signature,"signature");
        props.setShow(false)
    
        const signpay = await connection.confirmTransaction(signature, "processed");
        console.log(signpay,"signpay");
          // props.setshow(false)
          console.log("transaction ke ooperss");

        const myTransaction = await sendTransaction(createNewTokenTransaction, connection, {
          signers: [mintKeypair],
        });  
        // let txid = await connection.confirmTransaction(signature);


        
        console.log(myTransaction,"trap");
        if(myTransaction){
          setDeployData((prev) => ({
            ...prev,
            tokenAddress: myTransaction
          }));
          setSolDeploy(true)
        console.log(myTransaction,"myTransaction");
        }
      }catch(error){

        console.log(error, "user rejected","error123")
        if(error)
          console.log("Executing1");
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Some error has occured!',
          // footer: '<a href="">Why do I have this issue?</a>'
        })
        props.setShow(true)

        navigate("/generator/solana");
      }
       
        

      // console.log(form.amount * Math.pow(100,form.decimals),"Aditi data jo nhi atat")

    },
    [publicKey, connection, sendTransaction]

  );

  // console.log("connected", connected);

  // console.log(
  //   ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,Solana ,,,,,,,,,,,,,,,,,,,,,,"
  // );

  const networkName = (name) => {
    setNet(name.target.value)
    console.log(name.target.value, "Network Name solana")
  }


  return (
    <>

      <SolanaHeader walletBalance={walletBalance} publicKey={publicKey} />
      <div className="page-content">
        <main>
          <div className="hero-form mb-3 ">
            <div className="container">
              <h1>
                <span className="sub-highlight">
                  Create Your Solana Token
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

            {currentStep === 1 ? (
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
                              onChange={(e) => setTokenType(e.target.value)}
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
                              min='6'
                              max='21'
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
                              onChange={networkName}
                            >
                              <option>Select your netowrk</option>
                              {data.map((item) => {
                                if (item.parentNetworkName === "Solana" && item.tokenType === 'free') {
                                  return (
                                    <option className={(item.value === "solanaMainnet" || item.value === "solanaTestnet")  ? 'disabled' : ''} value={item.value} disabled={item.value === "solanaMainnet" || item.value === "solanaTestnet" }>{item.subNetworkName}</option>
                                  )
                                }
                                else if (item.parentNetworkName === "Solana" && item.tokenType === 'basic') {
                                  <option className={(item.value === "solanaMainnet" || item.value === "solanaTestnet")  ? 'disabled' : ''} value={item.value} disabled={item.value === "solanaMainnet" || item.value === "solanaTestnet" }>{item.subNetworkName}</option>
                                }
                                else if (item.parentNetworkName === "Solana" && item.tokenType === 'custom') {
                                  <option className={(item.value === "solanaMainnet" || item.value === "solanaTestnet")  ? 'disabled' : ''} value={item.value} disabled={item.value === "solanaMainnet" || item.value === "solanaTestnet" }>{item.subNetworkName}</option>

                                }
                              })}
                            </select>
                            {errNet && <p style={{color:"red"}}>Please select network.</p>}
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
                                  {commissonFee
                                      ? commissonFee === "free"
                                        ? "Free"
                                        : `${commissonFee} SOL`
                                      : "Free"}
                                  {/* 0.01 SOL
                                  {/* {commissonFee} */}
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
                                  onChange={(e) => {
                                    setErr((prev) => ({
                                        ...prev,
                                      agreementErr : ""
                                    } ))
                                    setAgreement(e.target.checked)
                                  }}
                                />

                                <span className="form-check-label">
                                  I have read, understood and agreed to the{" "}
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
                              onClick={() => {
                                if (agreement === false) {
                                  setErr((prev) => ({
                                    ...prev,
                                    agreementErr:
                                      "Please confirm that you have read and understood our terms of use",
                                  }))

                                }else{
                                onClick({ tokenName: tokenName, symbol: symbol, decimals: Number(decimals), amount: Number(amount), uri: uri })

                                }
                              
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

export default SolanaMain1;
