import React, { createContext, useState, useEffect } from "react";
import { ContractFactory, ethers } from "ethers";
// import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { ToastModal } from "../../components/Modal/ToastModal";
export const GlobalContext = createContext();

export const EtherProvider = ({ children }) => {
  const [accAddress, setAccAddress] = useState([]);
  //  const[metaError , setMetaError] = useState(false)

  const [deployData, setDeployData] = useState({
    tokenAddress: "",
    tokenSymbol: "",
    tokenDecimals: null,
    txHash: "",
    chainID: null,
  });

  const [deploySuccess, setDeploySuccess] = useState(false);
  // console.log(deploySuccess,"deplo success context side");

  useEffect(() => {
    window.ethereum.on("accountsChanged", async function (accounts) {
      console.log(accounts, "account changed");
      // eslint-disable-next-line no-unused-expressions
      accounts[0] !== undefined
        ? setAccAddress([accounts[0]])
        : setAccAddress([]);
    });
  });

  const blockchainNetworks = {
    mainnet: 1,
    gorli: 5,
    rinkeby: 4,
    polygonMainnet: 137,
    polygonMumbai: 8001,
    binanceSmartChainTestnet: 97,
    binanceSmartChain: 56,
  };

  //Hide the connected account address
  const hideAccAddress = (connectedAccAddress) => {
    let accAddress;
    console.log(connectedAccAddress, "hide acc side ");
    console.log(connectedAccAddress.length, "acc hide side length");
    console.log(connectedAccAddress[0], "acc hide  side value  ");

    if (connectedAccAddress.length !== 0) {
      const startAdd = connectedAccAddress[0].slice(0, 6);
      const endAdd = connectedAccAddress[0].slice(38, 42);
      accAddress = startAdd + "...." + endAdd;
      console.log(startAdd, "startadd if side");
      return accAddress;
    } else {
      console.log("hide acc else side");
      return connectedAccAddress;
    }
  };
  //ends here

  //add token to wallet function by user
  const addToken = async () => {
    const tokenAddress = deployData.tokenAddress;
    const tokenSymbol = deployData.tokenSymbol;
    const tokenDecimals = deployData.tokenDecimals;

    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20", // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
          },
        },
      });

      // eslint-disable-next-line no-unused-expressions
      wasAdded ? toast.success("Token Added Successfully To Wallet") : "";
    } catch (error) {
      // eslint-disable-next-line no-unused-expressions
      error.code === 4001
        ? toast.error(" Request Rejected !! Token Not Added")
        : toast.error(error.message);
      console.log("err addtoken fn", error);
    }
  };
  //ends here

  //wallet sign in function
  const SignInMetamask = async () => {
    // Creating Instance Of Web3
    try {
      // e.preventDefault();
      //Check if Metamask is Installed Or Not
      if (window.ethereum) {
        let account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(account, "acccc");

        //set Account Address of Logged In User
        setAccAddress([account[0]]);
      } else {
        //If Metamask Not Installed Or Not Connected
        toast.error("Please Install Metamask In Your Browser");
      }
    } catch (error) {
      // eslint-disable-next-line no-unused-expressions
      error.code === 4001
        ? toast.error("Please Connect Your Metamask Wallet ")
        : toast.error(error.message);
      console.log("sign in fun err", error);
    }
  };
  //ends here

  //change RPC network if not equal to selected network
  const changeNetwork = async (networkID) => {
    try {
      console.log(networkID, "netwrk id in change netwrk");
      const chainIdInDecimal = ethers.utils.hexlify(networkID);
      console.log(chainIdInDecimal, "hexadecimal chainid");
      let parseChainId = "";
      for (let i = 0; i < chainIdInDecimal.length; i++) {
        if (chainIdInDecimal[i] > 0) {
          console.log(chainIdInDecimal[i], "ifff");
          parseChainId += chainIdInDecimal[i];
        }
      }
      console.log(parseChainId, "parseChainId");

      console.log(networkID, "selectedNetworkID");
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${parseChainId}` }],
      });
    } catch (error) {
      error.code === 4001
        ? toast.error("Please Allow To Change Network To Continue!!")
        : toast.error(error.message);
      console.log("err change netwrk side", error);
    }
  };
  //ends here

  //Show Network Toast
  const showToast = (selectedNetwork) => {
    try {
      console.log("toast");
      toast.warning(
        <ToastModal
          selectedNetwork={selectedNetwork}
          changeNetwork={changeNetwork}
        />
      );
    } catch (error) {
      toast.error(error.message);
      console.log("show toast side err", error);
    }
  };
  //ends here

  //deploy Contract on blockchain
  const deployContract = async (contractSource, symbol, decimals, chainID) => {
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
      console.log(contract.deployTransaction.hash, "deployeed contract hash");
      if (contract.deployTransaction.hash) {
        setDeploySuccess(true);
        //set seploy data and pass to the child components
        setDeployData((prev) => ({
          ...prev,
          tokenAddress: contract.address,
          tokenSymbol: symbol,
          tokenDecimals: decimals,
          txHash: contract.deployTransaction.hash,
          chainID: chainID,
        }));
      }

      return contract;
    } catch (err) {
      console.log("errorrr deply msg fn", err);
      return { error: err };
    }
  };
  //ends here

  return (
    <GlobalContext.Provider
      value={{
        // compileContract : compileContract,
        changeNetwork: changeNetwork,
        SignInMetamask: SignInMetamask,
        connectedAccAddress: accAddress,
        setAccAddress: setAccAddress,
        hideAccAddress: hideAccAddress,
        addToken: addToken,
        deploySuccess: deploySuccess,
        deployData: deployData,
        deployContract: deployContract,
        showToast: showToast,
        blockchainNetworks: blockchainNetworks,
      }}
    >
      {console.log(deploySuccess, "deplo success context side")}
      {console.log(accAddress, "acc address context side")}

      <ToastContainer />
      {/* <FinalMain deploySuccess = {deploySuccess}/> */}
      {children}
    </GlobalContext.Provider>
  );
};
