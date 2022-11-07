import React, { createContext, useState, useEffect } from "react";
import { ContractFactory, ethers } from "ethers";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
export const GlobalContext = createContext();

export const EtherProvider = ({ children }) => {
  // let provider;
  // let  provider;
  const [accAddress, setAccAddress] = useState([]);
  const [accBalance, setAccBalance] = useState();
  const [chainId, setChainId] = useState();
  // const [provider,setProvider] = useState()

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
    // isMetaMaskInstalled();
    updateAccount();
    updateNetwork()
  });

  // const isMetaMaskInstalled = async () => {
  //   if (window.ethereum) {
  //     provider = new ethers.providers.Web3Provider(window.ethereum);
  //     setProvider(provider)
  //     const { chainId } = await provider.getNetwork();
  //     setChainId(chainId);
  //   } else {
  //     toast.error("Please Intsall Metamask Wallet");
  //   }
  // };

  const updateAccount = async () => {
    if (window.ethereum) {
      let provider = new ethers.providers.Web3Provider(window.ethereum);
      const { chainId } = await provider.getNetwork();
      console.log(chainId,"chain id");
      setChainId(chainId);
      window.ethereum.on("accountsChanged", async function (accounts) {
        console.log(accounts, "account changed");
        if (accounts[0] !== undefined) {
          setAccAddress([accounts[0]]);
          getBalance(accounts[0])
          .then((balance)=>{
            setAccBalance(balance);

          })
        } else {
          setAccAddress([]);
        }
      });
    } else {
      toast.error("Please Install Metamask Wallet");
    }
  };
  //ends here
  const getBalance = async (account) => {
    try {
      console.log(account,"acc pass in bal fn");
      let  provider = new ethers.providers.Web3Provider(window.ethereum);
      const balance = await provider.getBalance(account);
      //  console.log(balance,"ball");
      const balanceInEth = parseFloat(
        ethers.utils.formatEther(balance)
      ).toFixed(5);
      console.log(`balance: ${balanceInEth} ETH balance fn side`);
      // setAccBalance(balanceInEth);
      return balanceInEth
    } catch (error) {
      console.log(error, "error balance get");
    }
  };

  const updateNetwork = () => {
    if (window.ethereum) {
      window.ethereum.on("networkChanged", function (networkId) {
        console.log("networkChanged", networkId);
        console.log(accAddress,"acc adress update side");
        setChainId(networkId);
        getBalance(accAddress[0])
        .then((balance)=>{
          console.log(balance,"balance update network side");
          setAccBalance(balance)

        })
      });
    }
  };

  

  const blockchainNetworks = {
    mainnet: 1,
    gorli: 5,
    rinkeby: 4,
    polygonMainnet: 137,
    polygonMumbai: 80001,
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
        ? toast.error(" Request Rejected !! Token Not Added to The Wallet")
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
        console.log(window.ethereum,"ethereumadd");
        let account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(account, "acccc");
        //set account balance
      let  provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(account[0]);
        console.log(balance,"balance");
        const balanceInEth = parseFloat(
          ethers.utils.formatEther(balance)
        ).toFixed(5);
        console.log(`balance: ${balanceInEth} ETH`);
        setAccBalance(balanceInEth);
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
      console.log(parseChainId, "parseChainId>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

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

  //deploy Contract on blockchain
  const deployContract = async (contractSource, newFormData) => {
   
    try {
      const abi = contractSource.abi;
      const bytecode = contractSource.bytecode;
      // console.log(abi, "abi deploy side");
      // console.log(bytecode, "bytecode deploy side");
      if (!window.ethereum)
        throw toast.error("No crypto wallet found. Please install it.");
      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      console.log(signer,"signerrrrrrrrrrrrrrrrrrrrs");
      const factory = new ContractFactory(abi, bytecode, signer);
      // If your contract requires constructor args, you can specify them here
      const contract = await factory.deploy();
      console.log(contract,"contractsssssssssssssss");
      console.log(contract.address, "deployeed contract address");
      console.log(contract.deployTransaction.hash, "deployeed contract hash");
      if (contract.deployTransaction.hash) {
        setDeploySuccess(true);
        //set seploy data and pass to the child components
        setDeployData((prev) => ({
          ...prev,
          tokenAddress: contract.address,
          tokenSymbol: newFormData.tokenSymbol,
          tokenDecimals: newFormData.decimals,
          txHash: contract.deployTransaction.hash,
          chainID: newFormData.network,
        }));

        axios
          .post("https://tokendetails.herokuapp.com/token/tokendetails", {
            tokenName: newFormData.tokenName,
            tokenType: newFormData.tokenType,
            tokenSymbol: newFormData.tokenSymbol,
            decimals: newFormData.decimals,
            supplyType: newFormData.supplyType,
            initialSupply: newFormData.initialSupply,
            maximumSupply: newFormData.maximumSupply,
            accessType: newFormData.accessType,
            network: newFormData.network,
          })
          .then((res) => {
            console.log(res, "response api");
          })
          .catch((error) => {
            console.log(error, "error api fails");
          });
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
        changeNetwork,
        SignInMetamask: SignInMetamask,
        connectedAccAddress: accAddress,
        setAccAddress: setAccAddress,
        hideAccAddress: hideAccAddress,
        addToken: addToken,
        deploySuccess: deploySuccess,
        deployData: deployData,
        deployContract: deployContract,
        blockchainNetworks: blockchainNetworks,
        accBalance: accBalance,
        chainId: chainId,
      }}
    >
      {console.log(deploySuccess, "deplo success context side")}
      {console.log(accAddress, "acc address context side")}
      {console.log(chainId, "chainId context side")}

      <ToastContainer />
      {/* <FinalMain deploySuccess = {deploySuccess}/> */}
      {children}
    </GlobalContext.Provider>
  );
};
