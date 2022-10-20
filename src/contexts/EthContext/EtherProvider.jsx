import React, { createContext, useState } from "react";
import { ContractFactory, ethers } from "ethers";
import axios from "axios";

export const GlobalContext = createContext();

export const EtherProvider = ({ children }) => {

  const [accAddress,setAccAddress] = useState()
  
    //add token to wallet function by user
    const addToken = async ()=>{
    const tokenAddress = '0xEAC3ce292F95d779732e7a26c95c57A742cf5119';
    const tokenSymbol = 'TUT';
    const tokenDecimals = 18;
    
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
    for(let i=0; i<chainIdInDecimal; i++){
      if(chainIdInDecimal[i] > 0){
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

  //deploy Contract on blockchain
  const deployContract = async (contractSource) => {
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
      return contract;
    } catch (err) {
      console.log("errorrr", err);
    }
  };
  //ends here

  //compile contract and generate bytecode and abi
  const compileContract = async (FormData) => {
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
          const deployedData = deployContract(res.data.result);
          return deployedData
        });
    }else{
        changeNetwork(selectedNetwork)
    }
  };

  return (
<GlobalContext.Provider
      value={{
        compileContract : compileContract,
        changeNetwork:changeNetwork,
        SignInMetamask:SignInMetamask,
        connectedAccAddress:accAddress
        
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
