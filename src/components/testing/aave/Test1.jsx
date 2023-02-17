import React from 'react'
const { Aave } = require('@aave/protocol-js');
const { EthereumProvider } = require('@aave/protocol-js/dist/providers');
const provider = new EthereumProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

const aave = new Aave(provider);
const userAddress = '0x123abc';


export const Test1 = async() => {
  const result = await aave.getUserAccountData(userAddress, 'ETH');
  console.log(result);
  return (
    <>
    <div>test1


</div>
    </>


    
  )
  }
// export default Test1





// export async function getUserAccountData() {
  
// }

// getUserAccountData();