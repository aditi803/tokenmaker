import React, { createContext, useState, useEffect } from "react";
import { ContractFactory, ethers } from "ethers";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { error } from "jquery";
export const GlobalContext = createContext();

export const EtherProvider = ({ children }) => {
  // let  provider;
  const [accAddress, setAccAddress] = useState([]);
  const [accBalance, setAccBalance] = useState();
  const [chainId, setChainId] = useState();
  const [toggler, setToggler] = useState(false);
  const [startToggle, setStartToggle] = useState(true);
  const [solDeploy, setSolDeploy] = useState(false);
  const [networkData, setNetworkData] = useState([]);

  const [fullData, setFullData] = useState([])
  const [deployData, setDeployData] = useState({
    tokenAddress: "",
    tokenSymbol: "",
    tokenDecimals: null,
    txHash: "",
    chainID: null,
  });

  const [deploySuccess, setDeploySuccess] = useState(false);
  // const [explorer,setExplorer] = useState()
  // console.log(deploySuccess,"deplo success context side");

  useEffect(() => {
    updateAccount();
    updateNetwork();
    isLogin();
  }, []);

  const isLogin = async () => {
    if (window.ethereum) {
      let provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await provider.listAccounts();
      if (accounts.length !== 0) {
        console.log(accounts, "update acc side list");
        setAccAddress([accounts[0]]);
        const balance = await getBalance(accounts[0]);
        setAccBalance(balance);
      }
    }
  };

  const updateAccount = async () => {
    try {
      if (window.ethereum) {
        let provider = new ethers.providers.Web3Provider(window.ethereum);
        const { chainId } = await provider.getNetwork();
        console.log(chainId, "chain id");
        setChainId(chainId);
        window.ethereum.on("accountsChanged", async function (accounts) {
          console.log(accounts, "account changed");
          if (accounts[0] !== undefined) {
            setAccAddress([accounts[0]]);
            getBalance(accounts[0]).then((balance) => {
              setAccBalance(balance);
            });
          } else {
            setAccAddress([]);
          }
        });
      }
    } catch (error) {
      console.log("error update account side", error);
    }
  };
  //ends here
  const getBalance = async (account) => {
    try {
      console.log(account, "acc pass in bal fn");
      let provider = new ethers.providers.Web3Provider(window.ethereum);
      const balance = await provider.getBalance(account);
      //  console.log(balance,"ball");
      const balanceInEth = parseFloat(
        ethers.utils.formatEther(balance)
      ).toFixed(5);
      console.log(`balance: ${balanceInEth} ETH balance fn side`);
      // setAccBalance(balanceInEth);
      return balanceInEth;
    } catch (error) {
      console.log(error, "error balance get");
    }
  };


  let blockNetwork = {}
  const updateNetwork = async () => {
    try {
      if (window.ethereum) {
        window.ethereum.on("networkChanged", function (networkId) {
          setChainId(parseInt(networkId));
          isLogin();
        });
      }
    } catch (error) {
      console.log("update network side", error);
    }
  };

    const networksData = () => {
      axios.get("https://tokenmaker-apis.block-brew.com/network/fullnetwork")
      .then((res) =>{
        console.log(res.data.msg.items, "Full network data")
        setFullData(res.data.msg.items)        
      })
      .catch((err) => {
        console.log(err, "Full network error")
      })
    }

    useEffect(() => {
      networksData()
    },[])


  const blockchainNetworks = {
    mainnet: 1,
    gorli: 5,
    rinkeby: 4,
    polygonMainnet: 137,
    polygonMumbai: 80001,
    binanceSmartChainTestnet: 97,
    binanceSmartChain: 56,
    moonRiver: 1285,
    moonBaseAlpha: 1287,
    avalanche: 43114,
    avalancheFujiCChain: 43113,
    celoMainnet:42220,
    celoTestnet:44787,
    hecoTestnet:256,  
    hecoMainnet:128,
    optimismMainnet:10,
    optimismGoerli:420,
    iotexMainnet: 4689,
    iotexTestnet:4690,
    fantomMainnet: 250,
    fantomTestnet: 4002,
    fuseMainnet: 122,
    fuseTestnet: 123,
  };

  const urlLinks = {
    97: { link: "https://testnet.bscscan.com/", name: "Bsc Testnet Scan", networkName: "Binance Smart Chain Testnet", symbol: "BNB", rpc: "https://data-seed-prebsc-1-s1.binance.org:8545/" },
    56: { link: "https://bscscan.com/", name: "Bsc Mainnet Scan", networkName: "Binance Smart Chain", symbol: "BNB", rpc: "https://bsc-dataseed.binance.org/" },
    
    137: { link: "https://polygonscan.com/", name: "Polygon Mainnet Scan", networkName: "Polygon Mainnet", symbol: "MATIC", rpc: "https://polygon-mainnet.g.alchemy.com/v2/P11J7QqdiWk7NpU9ldBImA58-VB0mkJ-" },
    80001: { link: "https://mumbai.polygonscan.com/", name: "Polygon Testnet Scan", networkName: "Polygon Mumbai", symbol: "MATIC", rpc: "https://rpc-mumbai.maticvigil.com/" },
   
    1: { link: "https://etherscan.io", name: "Ethereum Mainnet Scan", networkName: "Mainnet", symbol: "ETH", rpc: "https://mainnet.infura.io/v3/" },
    5: { link: "https://goerli.etherscan.io", name: "Goerli Testnet Scan", networkName: "Goerli", symbol: "GoerliETH", rpc: "https://goerli.infura.io/v3/" },
    4: { link: "https://rinkeby.etherscan.io/", name: "RinkeyBy Testnet Scan", networkName: "RinkeyBy", },
    
    1285:{ link: "https://moonriver.moonscan.io/", name: "Moonriver Scan", networkName: "Moon River",symbol:"MOVR",rpc:"https://rpc.api.moonriver.moonbeam.network" },
    1287:{link: "https://moonbase.moonscan.io/", name: "Moonbase Alpha Scan", networkName: "Moon Base Alpha",symbol:"DEV",rpc:"https://rpc.api.moonbase.moonbeam.network"},
    
    43113:{link: "https://testnet.snowtrace.io/", name: "Avalanche Fuji C-Chain Scan", networkName: "Avalanche Fuji C Chain",symbol:"AVAX",rpc:"https://api.avax-test.network/ext/bc/C/rpc"},
    43114:{link: "https://snowtrace.io/", name: "Avalanche Network Scan", networkName: "Avalanche",symbol:"AVAX",rpc:"https://api.avax.network/ext/bc/C/rpc"},
    
    42220:{link: "https://explorer.celo.org", name: "Celo Network Scan", networkName: "Celo Mainnet",symbol:"CELO",rpc:"https://forno.celo.org"},
    44787:{link: "https://alfajores-blockscout.celo-testnet.org/", name: "Celo TestNetwork Scan", networkName: "Celo Testnet",symbol:"A-CELO",rpc:"https://alfajores-forno.celo-testnet.org"},
    
    256:{link: "https://testnet.hecoinfo.com/", name: "Heco TestNetwork Scan", networkName: "Heco Testnet",symbol:"HT",rpc:"https://http-testnet.hecochain.com"},
    128:{link: "https://scan.hecochain.com", name: "Heco Mainnet Scan", networkName: "Heco Mainnet",symbol:"HT",rpc:"https://http-testnet.hecochain.com"},
    
    10:{link: "https://optimistic.etherscan.io", name: "Optimism Mainnet Scan", networkName: "Optimism Mainnet",symbol:"Ether",rpc:"https://mainnet.optimism.io"},
    420:{link: "https://goerli-explorer.optimism.io", name: "Optimism Goerli Scan", networkName: "Optimism Goerli",symbol:"ETH",rpc:"https://goerli.optimism.io"},
    
    4689:{link: "https://iotexscan.io", name: "IoTeX Mainnet Scan", networkName: "Iotex Mainnet",symbol:"IOTX",rpc:"https://babel-api.mainnet.iotex.io"},
    4690:{link: "https://testnet.iotexscan.io/", name: "IoTeX Testnet Scan", networkName: "Iotex Testnet",symbol:"IOTX",rpc:"https://babel-api.testnet.iotex.io"},
    
    250:{link: "https://ftmscan.com/", name: "Fantom Scan", networkName: "Fantom Mainnet",symbol:"FTM",rpc:"https://rpc.ftm.tools/"},
    4002:{link: "https://testnet.ftmscan.com", name: "Fantom testnet Scan", networkName: "Fantom Testnet",symbol:"FTM",rpc:"https://rpc.ankr.com/fantom_testnet"},
    
    122:{link: "https://explorer.fuse.io", name: "Fuse Mainnet Scan", networkName: "Fuse Mainnet",symbol:"FUSE",rpc:"https://rpc.fuse.io"},
    123:{link: "https://docs.fuse.io/general/fuse-network-blockchain/fuse-testnet", name: "Fuse Sparknet Scan", networkName: "Fuse Testnet",symbol:"SPARK",rpc:"https://rpc.fusespark.io"},
    
  }



  //Hide the connected account address
  const hideAccAddress = (connectedAccAddress) => {
    try {
      let accAddress;

      if (connectedAccAddress.length !== 0) {
        const startAdd = connectedAccAddress[0].slice(0, 6);
        const endAdd = connectedAccAddress[0].slice(38, 42);
        accAddress = startAdd + "...." + endAdd;
        return accAddress;
      } else {
        console.log("hide acc else side");
        return connectedAccAddress;
      }
    } catch (error) {
      console.log("error hide acc address side", error);
    }
  };
  //ends here

  //add token to wallet function by user
  const addToken = async () => {
    try {
      const tokenAddress = deployData.tokenAddress;
      const tokenSymbol = deployData.tokenSymbol;
      const tokenDecimals = deployData.tokenDecimals;
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
      wasAdded ? toast.success("Token added successfully to wallet!") : "";
    } catch (error) {
      // eslint-disable-next-line no-unused-expressions
      error.code === 4001
        ? toast.error(" Request Rejected !! Token not added to the wallet!")
        : toast.error(error.message);
      // console.log("err addtoken fn", error);
    }
  };
  //ends here

  //wallet sign in function
  const SignInMetamask = async () => {
    // Creating Instance Of Web3
    try {
      //Check if Metamask is Installed Or Not
      if (window.ethereum) {
        if (!window.ethereum.isMetaMask) {
          console.log("meeeeeeeeeeeeeeta");
        }
        // console.log(window.ethereum, "ethereumadd");
        let account = await window.ethereum.request(
          {
            method: "eth_requestAccounts",
          },
          []
        );
        // console.log(account, "accctc");
        //set account balance
        let provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(account[0]);
        // console.log(balance, "balance");
        const balanceInEth = parseFloat(
          ethers.utils.formatEther(balance)
        ).toFixed(5);
        // console.log(`balance: ${balanceInEth} ETH`);
        setAccBalance(balanceInEth);
        //set Account Address of Logged In User
        setAccAddress([account[0]]);
      } else {
        //If Metamask Not Installed Or Not Connected
        toast.error("Please Install Metamask In Your Browser!!");
      }
    } catch (error) {
      // eslint-disable-next-line no-unused-expressions
      error.code === 4001
        ? toast.error("Please Connect Your Metamask Wallet!! ")
        : toast.error(error.message);
      // console.log("sign in fun err", error);
    }
  };
  //ends here

  //change RPC network if not equal to selected network

  const addNewNetwork = async (networkID) => {

    try {
      const explorer = urlLinks[networkID];
      // console.log(networkID, "netwrk id in change network");
      console.log(networkID, "networkID");
      const chainIdInDecimal = ethers.utils.hexlify(networkID);

      console.log(chainIdInDecimal, "chainid in decimal");

      let parseChainId = chainIdInDecimal.replace("0x0", "");

      console.log(parseChainId, "parseChainId middle");

      if (parseChainId.startsWith("0")) {
        parseChainId = parseChainId.slice(2, chainIdInDecimal.length);
        console.log(parseChainId, "parseChainId inner ");
      }
      console.log(parseChainId, "parseChainId after ");
      // das
      console.log(parseChainId, "parsechainid");
      //
      console.log(
        `0x${parseChainId}`,
        explorer.networkName,
        explorer.rpc,
        explorer.link,
        explorer.symbol,
        "expoor"
      );





      const addNetwork = await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: `0x${parseChainId}`,
            chainName: explorer.networkName,
            rpcUrls: [explorer.rpc],
            blockExplorerUrls: [explorer.link],

            nativeCurrency: {
              // name: currencyName,
              symbol: explorer.symbol, // 2-6 characters long
              decimals: 18,
            },
          },
        ],
      });

      console.log(addNetwork, "addNetwork");
    } catch (error) {
      console.log(error, "addnetwork error")
      toast.error(error)
    }
  }


  const changeNetwork = async (networkID) => {
    try {
      const explorer = urlLinks[networkID];
      // console.log(networkID, "netwrk id in change network");
      console.log(networkID, "networkID");
      const chainIdInDecimal = ethers.utils.hexlify(networkID);

      console.log(chainIdInDecimal, "chainid in decimal");

      let parseChainId = chainIdInDecimal.replace("0x0", "");

      console.log(parseChainId, "parseChainId middle");

      if (parseChainId.startsWith("0")) {
        parseChainId = parseChainId.slice(2, chainIdInDecimal.length);
        console.log(parseChainId, "parseChainId inner ");
      }
      console.log(parseChainId, "parseChainId after ");
      // das
      console.log(parseChainId, "parsechainid");
      //
      console.log(
        `0x${parseChainId}`,
        explorer.networkName,
        explorer.rpc,
        explorer.link,
        explorer.symbol,
        "expoor"
      );

      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${parseChainId}` }],
      });
      setToggler(!toggler);
      return "vicky";
    } catch (error) {
      if (error.code === 4001) {
        toast.error("Please allow to change network to continue!!");
      }
      console.log(error.code, error.message, "mesgandcode");
      if (error.message.startsWith("Unrecognized chain ID")) {
        toast.error("Please add suitable chain in metamask for payment!!");
      }
      console.log("error change network side", error);
    }
  };
  //ends here

  const [payment, setPayment] = useState("");
  useEffect(() => {
    // setLoader(false)
    fetchData();
  }, [setPayment]);

  const fetchData = async () => {
    await axios
      .get("https://tokenmaker-apis.block-brew.com/payment/paymentaddress")
      .then((res) => {
        setPayment(res.data.msg);
        // console.log(res.data.msg, "?>>>>>>>>>>>>>>>>>>PAYMENT ADDRESS MSG>>>>>>>>>>>>>>>>>>>>>>>>>>>")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sendCommision = async (_commissionFee) => {
    try {

      console.log(_commissionFee, "cmsn_fee");
      if (window.ethereum) {
        await window.ethereum.send("eth_requestAccounts");

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        // ethers.utils.getAddress(addr);
        console.log(signer, "signerrrrr");
        const tx = await signer.sendTransaction({
          to: payment.metamaskPaymentAddress,
          value: ethers.utils.parseEther(_commissionFee),
        });
        console.log(tx, "transooc");
        // console.log("tx", tx);
        if (tx.hash) {
          return true;
        } else {
          return false;
        }
      } else {
        toast.error("install metamask");
      }
    } catch (error) {
      console.log("errror");
      if (error.code === -32603) {
        toast.error("Insufficient funds");
      }
      if (error.code === "ACTION_REJECTED") {
        toast.error("User Rejected the request");
      }
      // console.log(error.code,"code");
      console.log(error, "error send commision side");
      if (error.code === "INSUFFICIENT_FUNDS") {
        toast.error("Insufficient funds");
      }
    }
  };

  //deploy Contract on blockchain
  const deployContract = async (contractSource, newFormData) => {
    try {
      let explorer;
      const abi = contractSource.abi;
      const bytecode = contractSource.bytecode;
      // console.log(abi, "abi deploy side");
      // console.log(bytecode, "bytecode deploy side");
      if (!window.ethereum)
        throw toast.error("No crypto wallet found. Please install it.");
      await window.ethereum.send("eth_requestAccounts");
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      // console.log(signer, "signerrrrrrrrrrrrrrrrrrrrs");
      const factory = new ContractFactory(abi, bytecode, signer);
      // If your contract requires constructor args, you can specify them here
      const contract = await factory.deploy();
      if (contract.deployTransaction.hash) {
        setDeploySuccess(true);
        //set seploy data and pass to the child components
        setDeployData((prev) => ({
          ...prev,
          tokenAddress: contract.address,
          tokenSymbol: newFormData.tokenSymbol,
          tokenDecimals: 18,
          txHash: contract.deployTransaction.hash,
          chainID: newFormData.network,
        }));

        // eslint-disable-next-line no-unused-expressions
        urlLinks[newFormData.network]
          ? (explorer = urlLinks[newFormData.network])
          : "";
        // console.log(newFormData.network, "neetwork");
        // console.log(explorer, "expoooo");
        axios
          .post("https://tokenmaker-apis.block-brew.com/token/tokendetails", {
            tokenName: newFormData.tokenName,
            tokenType: newFormData.tokenType,
            tokenSymbol: newFormData.tokenSymbol,
            decimals: newFormData.decimals,
            supplyType: newFormData.supplyType,
            initialSupply: newFormData.initialSupply,
            maximumSupply: newFormData.maximumSupply,
            accessType: newFormData.accessType,
            network: explorer.networkName,
            commissionFee: newFormData.commissionFee,
            txHash: `${explorer.link}/tx/${contract.deployTransaction.hash}`,
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
        startToggle,
        setStartToggle,
        toggler,
        addNewNetwork,
        changeNetwork,
        SignInMetamask: SignInMetamask,
        connectedAccAddress: accAddress,
        setAccAddress: setAccAddress,
        hideAccAddress: hideAccAddress,
        addToken: addToken,
        solDeploy,
        setSolDeploy,
        deploySuccess: deploySuccess,
        setDeploySuccess,

        deployData: deployData,
        setDeployData,
        deployContract: deployContract,
        blockchainNetworks: blockchainNetworks,
        accBalance: accBalance,
        chainId: chainId,
        urlLinks: urlLinks,
        sendCommision: sendCommision,
        networkData,
         setNetworkData
      }}
    >
      <ToastContainer />
      {children}
    </GlobalContext.Provider>
  );
};
