import React, { createContext, useState } from "react";
import { ContractFactory, ethers } from "ethers";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"; 
import { ToastModal } from "../../components/Modal/ToastModal";
// import { Navigate } from "react-router-dom";


export const GlobalContext = createContext();

export const EtherProvider = ({ children }) => {

  const [accAddress,setAccAddress] = useState([])
  const [showModal,setShowModal] = useState(false)
  const [deploySuccess,setDeploySuccess] = useState({
    tokenAddress:"",
    tokenSymbol:"",
    tokenDecimals:null,
    txHash:""
  })
  const [navigateTo,setNavigateTo] = useState(true)

 //Hide the connected account address
  const hideAccAddress = (connectedAccAddress)=>{
    let accAddress
    if(connectedAccAddress!== 0){
      const startAdd = connectedAccAddress.slice(0,6)
      const endAdd = connectedAccAddress.slice(38,42)
      accAddress = startAdd+"...." +endAdd
      return accAddress
    }else{
      return connectedAccAddress
    }
  }
  //ends here

    //add token to wallet function by user
    const addToken = async (contractDetails)=>{
    const tokenAddress = contractDetails.tokenAddress
    const tokenSymbol = contractDetails.tokenSymbol
    const tokenDecimals = contractDetails.tokenDecimals
    
    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
          },
        },
      });
    
      if (wasAdded) {
        console.log('Thanks for your interest!');
      } else {
        console.log('Your loss!');
      }
    } catch (error) {
      console.log(error);
    }
  }
//ends here

//wallet sign in function
  const SignInMetamask = async (e) => {
    // Creating Instance Of Web3
    try {
      e.preventDefault();
      console.log("hello");
      //Check if Metamask is Installed Or Not
      if (window.ethereum) {
        let { ethereum } = window;
        let account = await ethereum.request({ method: "eth_requestAccounts" });
        console.log(account, "acccc");
        //set Account Address of Logged In User
        setAccAddress(account[0]);

      } else {
        //If Metamask Not Installed Or Not Connected
        window.alert("please connect metamask");
      }
    } catch (error) {
      console.log("Something Wrong ", error.message);
    }
  };
  //ends here

 //change RPC network if not equal to selected network
  const changeNetwork = async (networkID) => {
    const chainIdInDecimal = ethers.utils.hexlify(networkID)
    console.log(chainIdInDecimal,"hexadecimal chainid");
    let parseChainId = "" ;
    for(let i=0; i<chainIdInDecimal.length; i++){
      if(chainIdInDecimal[i] > 0){
        console.log(chainIdInDecimal[i],"ifff");
        parseChainId += chainIdInDecimal[i]
      }
    }
    console.log(parseChainId,"parseChainId");

    console.log(networkID,"selectedNetworkID");
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: `0x${parseChainId}` }],
  });
  };
  //ends here
  
//Show Network Toast 
  const showToast = (selectedNetwork) => {
    console.log("toast")
    toast.error(<ToastModal selectedNetwork= {selectedNetwork} changeNetwork={changeNetwork}/>) ;
    };
//ends here

  //deploy Contract on blockchain
  const deployContract = async (contractSource,symbol,decimals) => {
    try {
      const abi = contractSource.abi;
      const bytecode = contractSource.bytecode;
      // console.log(abi, "abi deploy side");
      // console.log(bytecode, "bytecode deploy side");
      if (!window.ethereum)
        throw window.alert("No crypto wallet found. Please install it.");
      // throw new Error("No crypto wallet found. Please install it.");
      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const factory = new ContractFactory(abi, bytecode, signer);
      // If your contract requires constructor args, you can specify them here
      const contract = await factory.deploy();
      console.log(contract.address, "deployeed contract address");
      console.log(contract.deployTransaction, "deployeed contract address");
          //set seploy data and pass to the child components
      setDeploySuccess((prev)=> ({
        ...prev,
        tokenAddress:contract.address,
        tokenSymbol:symbol,
        tokenDecimals:decimals,
        txHash:contract.deployTransaction
      }))

      return contract;
    } catch (err) {
      console.log("errorrr deply fn", err);
      setNavigateTo(false)
      // toast.error()
      return err
    }
  };
  //ends here

  //compile contract and generate bytecode and abi
  const compileContract = async (FormData) => {
    // Navigate 
    console.log(FormData.network,"fromdatanetwork");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const { chainId } = await provider.getNetwork();
    console.log(chainId, "chainid"); // 42
    let selectedNetwork;
    if (FormData.network === "mainnet") {
      selectedNetwork = 1;
    } else if (FormData.network === "gorli") {
      selectedNetwork = 5;
    } else if (FormData.network === "rinkeby") {
      selectedNetwork = 4;
    } else if (FormData.network === "BinanceSmartChain") {
      selectedNetwork = 56;
    } else if (FormData.network === "BinanceSmartChainTestnet") {
      selectedNetwork = 97;
    }

    if (selectedNetwork === chainId) {
        // navigate("/generator/final")
      console.log(selectedNetwork,"currentNetworkID");
      axios
        .post(
          "https://token-maker-blocktech.herokuapp.com/api/v1/compile/contract",
          FormData
        )
        .then((res) => {
          console.log(res, "response");
          // contractSource = res.data.result;
          // console.log(contractSource, "contract Source api side ");
          const deployedData =  deployContract(res.data.result,FormData.tokenSymbol,FormData.decimals);
          // if(deployedData.deployTransaction)
          console.log(deployedData,"deployed data in compile contract side");
          // return deployedData
        });
    }else{
           showToast(selectedNetwork)
          //  setShowModal(true)
        // changeNetwork(selectedNetwork)
    }
  };

  return (
<GlobalContext.Provider
      value={{
        compileContract : compileContract,
        changeNetwork:changeNetwork,
        SignInMetamask:SignInMetamask,
        connectedAccAddress:accAddress ,
        setAccAddress:setAccAddress ,
        hideAccAddress:hideAccAddress,
        addToken:addToken,
        setShowModal:setShowModal,
        showModal:showModal,
        deploySuccess:deploySuccess,
        navigateTo:navigateTo
        
      }}
    >
       <ToastContainer/>
      {children}
    </GlobalContext.Provider>
  )
}
