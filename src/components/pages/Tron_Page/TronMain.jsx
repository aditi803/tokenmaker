// import React, { useState, useEffect } from 'react';
// import TronWeb from 'tronweb';

// const CreateToken = () => {
//   const [loading, setLoading] = useState(false);
//   const [txHash, setTxHash] = useState(null);

//   useEffect(() => {
//     async function createToken() { 
//       setLoading(true);
//       const fullNode = 'https://api.trongrid.io';
//       const solidityNode = 'https://api.trongrid.io';
//       const eventServer = 'https://api.trongrid.io/';
//       const privateKey = 'your_private_key';

//       const tronWeb = new TronWeb(
//         fullNode,
//         solidityNode,
//         eventServer,
//         privateKey
//       );

//       const contract = await tronWeb.contract().new({
//         abi: [], // ABI of the token contract
//         bytecode: '', // bytecode of the token contract
//         feeLimit: 100000000,
//         callValue: 0,
//         userFeePercentage: 100,
//         parameters: [
//           {
//             type: 'string',
//             value: 'My Token'
//           },
//           {
//             type: 'string',
//             value: 'MTK'
//           },
//           {
//             type: 'uint8',
//             value: 18
//           },
//           {
//             type: 'uint64',
//             value: 100000000
//           }
//         ]
//       });
//       const tx = await contract.deploy();
//       setTxHash(tx.transaction.txID);
//       setLoading(false);
//     }

//     createToken();
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <p>Creating token...</p>
//       ) : txHash ? (
//         <p>Token created. Tx hash: {txHash}</p>
//       ) : (
//         <p>Failed to create token</p>
//       )}
//     </div>
//   );
// };

// export default CreateToken;



// ==================================================


// import React, { useState, useEffect } from "react";
// import tronWeb from "tronweb";

// const App = () => {
//   const [balance, setBalance] = useState(0);
//   useEffect(() => {
//     async function getBalance() {
//       const tron = tronWeb();
//       const contract = await tron.contract().at("0xe3600776b3B31B507AD355E7C4f12FE3Dc51AAE5");
//       const balance = await contract.balanceOf().call();
//       setBalance(balance);
//     }
//     getBalance();
//   }, []);

//   return (
//     <div>
//       <h1>Token Balance</h1>
//       <p>{balance}</p>
//     </div>
//   );
// };

// export default App;
// ====================================================


import { useState } from "react";
import { FinalMain } from "../Main_page/FinalMain";
import { StepContext } from "./StepContext";
export const TronMain= () => {
  const [showComponent, setShowComponent] = useState(true);

  return (
    <>
      {showComponent ? (
        <StepContext setShow={setShowComponent}></StepContext>
      ) : (
        <FinalMain/>
      )}
    </>
  );
};
