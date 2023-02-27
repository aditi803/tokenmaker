



// // Only Button


// // import assert from 'assert';
// // import React, { useState, useEffect } from 'react';
// // import TronWeb from 'tronweb';
// // import {tronAbi} from "./tronAbi" 
// // import {tronByteCode} from "./tronByteCode"

// // const HttpProvider = TronWeb.providers.HttpProvider;
// // const fullNode = new HttpProvider('https://api.shasta.trongrid.io');
// // const solidityNode = new HttpProvider('https://api.shasta.trongrid.io');
// // const eventServer = 'https://api.shasta.trongrid.io/';
// // const tronWebs= new TronWeb(fullNode, solidityNode, eventServer);


// // const ConnectButton = () => {
// // //   const [tronWeb, setTronWeb] = useState(null);
  
// //   useEffect(() => {
    
// //     async function loadTronWeb() {
// //       if (window.tronWeb) {
// //         // Use TronWeb provided by TronLink
// //         // setTronWeb(window.tronWeb);
// //       } else {
// //         // Create a new instance of TronWeb using HTTP provider
// //         const HttpProvider = TronWeb.providers.HttpProvider;
// //         const tronWeb = new TronWeb({
// //           fullHost: 'https://api.trongrid.io',
// //           headers: { "TRON-PRO-API-KEY": "d397b10a-3173-42b1-87f7-8be090ec07b9" }
// //         });
// //         // setTronWeb(tronWeb);
// //       }
// //     }
// //     loadTronWeb();
// //   }, []);
// //   const privateKey= "3ffefe5285907ebede7e497bedc6ae8686789d21857e6b58a80723733b50ce8b"
// //   const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);
  
// //   const connectTronLink = async () => {
// //     try {
// //         await tronWeb.setAddress(await tronWeb.defaultAddress.base58);
// //         console.log('TronLink is connected');
       



        
      
// //       // Do something after successful connection
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   }

// //   const deploy =async function(){
// //     const tokenName = 'My Token';
// //     const tokenSymbol = 'MYT';
// //     const decimals = 6;
// //     const totalSupply = 100000; // This should be a positive integer value
       
// //     const tokenOptions = {
// //       name: tokenName,
// //       symbol: tokenSymbol,
// //       decimals: decimals,
// //       totalSupply: totalSupply
// //     };
// //     console.log(totalSupply,"sip");
// //     const issuerAddress = await tronWeb.defaultAddress.base58;
// //     const tokenContract = await tronWeb.transactionBuilder.createToken(
// //       issuerAddress,
// //       tokenOptions
// //     );
// //     const signedTokenTransaction = await tronWeb.trx.sign(
// //       tokenContract,
// //       privateKey
// //     );
// //     const result = await tronWeb.trx.sendRawTransaction(signedTokenTransaction);
    
// //     console.log(`Token created with ID: ${result.transaction.txID}`);


// //   }
  
// //   return (
// //     <><button onClick={connectTronLink}>
// //       Connect with TronLink
// //     </button>

// //     <button onClick={deploy}>
// //       Deploy with TronLink
// //     </button>
// //     </>
// //   );
// // };

// // export default ConnectButton;


// // =====================================================


// import React, { useState, useEffect } from "react";
// import Web3 from "web3";
// import { ethers } from "ethers";
// import { addresses } from "@aave/protocol-v2";
// import { getAToken } from "@aave/contract-helpers";

// function App() {
//   const [web3, setWeb3] = useState(null);
//   const [accounts, setAccounts] = useState([]);
//   const [lendingPool, setLendingPool] = useState(null);
//   const [dai, setDai] = useState(null);
//   const [aDai, setADai] = useState(null);

//   useEffect(() => {
//     async function init() {
//       // Initialize Web3
//       const web3 = new Web3(Web3.givenProvider);
//       setWeb3(web3);

//       // Request user accounts
//       const accounts = await web3.eth.getAccounts();
//       setAccounts(accounts);

//       // Initialize the Aave contract addresses for Goerli
//       const lendingPoolAddress = addresses.goerli.LendingPool;
//       const daiAddress = addresses.goerli.DAI;
//       const aDaiAddress = addresses.goerli.aDAI;

//       // Initialize the Aave contract instances
//       const lendingPool = new ethers.Contract(lendingPoolAddress, abi, web3.currentProvider);
//       const dai = new ethers.Contract(daiAddress, erc20Abi, web3.currentProvider);
//       const aDai = new ethers.Contract(aDaiAddress, aTokenAbi, web3.currentProvider);

//       setLendingPool(lendingPool);
//       setDai(dai);
//       setADai(aDai);
//     }
//     init();
//   }, []);

//   async function handleDeposit() {
//     // Approve DAI for the Aave Lending Pool contract
//     const daiAmount = ethers.utils.parseEther("1000");
//     await dai.approve(lendingPool.address, daiAmount);

//     // Deposit DAI into Aave and receive aDAI in return
//     const depositAmount = daiAmount;
//     const referralCode = 0;
//     await lendingPool.deposit(dai.address, depositAmount, accounts[0], referralCode);

//     // Get the user's aDAI balance and convert it back to DAI
//     const aDaiBalance = await aDai.balanceOf(accounts[0]);
//     const daiBalance = await getAToken(aDai.address).redeem(aDaiBalance, accounts[0]);

//     console.log(`DAI balance: ${daiBalance}`);
//   }

//   return (
//     <div>
//       <h1>Aave DApp Example</h1>
//       <p>Connected account: {accounts[0]}</p>
//       <button onClick={handleDeposit}>Deposit DAI into Aave</button>
//     </div>
//   );
// }

// export default App;





