// // import React from 'react'
// // const { Aave } = require('@aave/protocol-js');
// // const { EthereumProvider } = require('@aave/protocol-js/dist/providers');
// // const provider = new EthereumProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

// // const aave = new Aave(provider);
// // const userAddress = '0x123abc';


// // export const Test1 = async() => {
// //   const result = await aave.getUserAccountData(userAddress, 'ETH');
// //   console.log(result);
// //   return (
// //     <>
// //     <div>test1


// // </div>
// //     </>


    
// //   )
// //   }
// // // export default Test1



// // dss

// // // export async function getUserAccountData() {
  
// // // }

// // // getUserAccountData();

// import React, { useState } from 'react';
// import TronWeb from 'tronweb';

// function Test1() {
//   // State variables for token parameters
//   const [tokenName, setTokenName] = useState('');
//   const [tokenSymbol, setTokenSymbol] = useState('');
//   const [totalSupply, setTotalSupply] = useState('');
//   const [decimalPlaces, setDecimalPlaces] = useState('');

//   // TronWeb instance and contract ABI
//   const tronWeb = new TronWeb({
//     fullHost: 'https://api.trongrid.io',
//     headers: { 'TRON-PRO-API-KEY': 'd397b10a-3173-42b1-87f7-8be090ec07b9' },
//   });
//   const tokenContractAbi = [
// 	{
// 		"inputs": [],
// 		"stateMutability": "nonpayable",
// 		"type": "constructor"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "owner",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "spender",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "value",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "Approval",
// 		"type": "event"
// 	},
// 	{
// 		"anonymous": false,
// 		"inputs": [
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "from",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": true,
// 				"internalType": "address",
// 				"name": "to",
// 				"type": "address"
// 			},
// 			{
// 				"indexed": false,
// 				"internalType": "uint256",
// 				"name": "value",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "Transfer",
// 		"type": "event"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "owner",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "spender",
// 				"type": "address"
// 			}
// 		],
// 		"name": "allowance",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "spender",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "amount",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "approve",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "account",
// 				"type": "address"
// 			}
// 		],
// 		"name": "balanceOf",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "decimals",
// 		"outputs": [
// 			{
// 				"internalType": "uint8",
// 				"name": "",
// 				"type": "uint8"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "spender",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "subtractedValue",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "decreaseAllowance",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "spender",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "addedValue",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "increaseAllowance",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "name",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "symbol",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "totalSupply",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "to",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "amount",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "transfer",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "from",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "to",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "amount",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "transferFrom",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	}
// ]; 
//   // Replace with token contract ABI

//   // Function to create token contract
//   const createToken = async () => {
//     console.log("hey");
//     // Create token contract instance
//     const tokenContractInstance = await tronWeb.contract().new(
//       tokenName,
//       tokenSymbol,
//       totalSupply,
//       decimalPlaces,
//       {
//         from: 'TTwPMzVQsRBPyie4Wt9GqbtuKGAm3z4Hrd',
//         feeLimit: 100000000,
//         callValue: 0,
//         tokenId: 0,
//         tokenValue: 0,
//         shouldPollResponse: true,
//       }
//     );

//     // Log contract address to console
//     console.log(`Token contract deployed at address: ${tokenContractInstance.address}`);
//   };

//   return (
//     <div>
//       <h1>Create Token</h1>
//       <label>
//         Token Name:
//         <input type="text" value={tokenName} onChange={(e) => setTokenName(e.target.value)} />
//       </label>
//       <label>
//         Token Symbol:
//         <input type="text" value={tokenSymbol} onChange={(e) => setTokenSymbol(e.target.value)} />
//       </label>
//       <label>
//         Total Supply:
//         <input type="number" value={totalSupply} onChange={(e) => setTotalSupply(e.target.value)} />
//       </label>
//       <label>
//         Decimal Places:
//         <input type="number" value={decimalPlaces} onChange={(e) => setDecimalPlaces(e.target.value)} />
//       </label>
//       <button onClick={createToken}>Create Token</button>
//     </div>
//   );
// }

// export default Test1;


// ===============================

import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const web3 = new Web3('https://api.trongrid.io');

  const tokenContractAbi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

const CreateTokenButton = () => {
  const [account, setAccount] = useState(null);
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [totalSupply, setTotalSupply] = useState(0);
  
  const connectWithTronLink = async () => {
    if (window.tronWeb) {
      const tronWeb = window.tronWeb;
      const address = tronWeb.defaultAddress.base58;
      setAccount(address);
    } else {
      alert('Please install TronLink to connect with Tron');
    }
  }

  const createToken = async () => {
    try {
        const bytecode = {
            "functionDebugData": {
                "@_44": {
                    "entryPoint": null,
                    "id": 44,
                    "parameterSlots": 2,
                    "returnSlots": 0
                },
                "@_735": {
                    "entryPoint": null,
                    "id": 735,
                    "parameterSlots": 0,
                    "returnSlots": 0
                },
                "@_afterTokenTransfer_585": {
                    "entryPoint": 611,
                    "id": 585,
                    "parameterSlots": 3,
                    "returnSlots": 0
                },
                "@_beforeTokenTransfer_574": {
                    "entryPoint": 606,
                    "id": 574,
                    "parameterSlots": 3,
                    "returnSlots": 0
                },
                "@_mint_403": {
                    "entryPoint": 241,
                    "id": 403,
                    "parameterSlots": 2,
                    "returnSlots": 0
                },
                "@decimals_74": {
                    "entryPoint": 232,
                    "id": 74,
                    "parameterSlots": 0,
                    "returnSlots": 1
                },
                "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack": {
                    "entryPoint": 2095,
                    "id": null,
                    "parameterSlots": 1,
                    "returnSlots": 1
                },
                "abi_encode_t_uint256_to_t_uint256_fromStack": {
                    "entryPoint": 2227,
                    "id": null,
                    "parameterSlots": 2,
                    "returnSlots": 0
                },
                "abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed": {
                    "entryPoint": 2134,
                    "id": null,
                    "parameterSlots": 1,
                    "returnSlots": 1
                },
                "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed": {
                    "entryPoint": 2244,
                    "id": null,
                    "parameterSlots": 2,
                    "returnSlots": 1
                },
                "array_dataslot_t_string_storage": {
                    "entryPoint": 774,
                    "id": null,
                    "parameterSlots": 1,
                    "returnSlots": 1
                },
                "array_length_t_string_memory_ptr": {
                    "entryPoint": 616,
                    "id": null,
                    "parameterSlots": 1,
                    "returnSlots": 1
                },
                "array_storeLengthForEncoding_t_string_memory_ptr_fromStack": {
                    "entryPoint": 2037,
                    "id": null,
                    "parameterSlots": 2,
                    "returnSlots": 1
                },
                "checked_add_t_uint256": {
                    "entryPoint": 2168,
                    "id": null,
                    "parameterSlots": 2,
                    "returnSlots": 1
                },
                "checked_exp_helper": {
                    "entryPoint": 1541,
                    "id": null,
                    "parameterSlots": 4,
                    "returnSlots": 2
                },
                "checked_exp_t_uint256_t_uint8": {
                    "entryPoint": 1881,
                    "id": null,
                    "parameterSlots": 2,
                    "returnSlots": 1
                },
                "checked_exp_unsigned": {
                    "entryPoint": 1632,
                    "id": null,
                    "parameterSlots": 3,
                    "returnSlots": 1
                },
                "checked_mul_t_uint256": {
                    "entryPoint": 1962,
                    "id": null,
                    "parameterSlots": 2,
                    "returnSlots": 1
                },
                "clean_up_bytearray_end_slots_t_string_storage": {
                    "entryPoint": 1095,
                    "id": null,
                    "parameterSlots": 3,
                    "returnSlots": 0
                },
                "cleanup_t_uint256": {
                    "entryPoint": 910,
                    "id": null,
                    "parameterSlots": 1,
                    "returnSlots": 1
                },
                "cleanup_t_uint8": {
                    "entryPoint": 1868,
                    "id": null,
                    "parameterSlots": 1,
                    "returnSlots": 1
                },
                "clear_storage_range_t_bytes1": {
                    "entryPoint": 1056,
                    "id": null,
                    "parameterSlots": 2,
                    "returnSlots": 0
                },
                "convert_t_uint256_to_t_uint256": {
                    "entryPoint": 930,
                    "id": null,
                    "parameterSlots": 1,
                    "returnSlots": 1
                },
                "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage": {
                    "entryPoint": 1250,
                    "id": null,
                    "parameterSlots": 2,
                    "returnSlots": 0
                },
                "divide_by_32_ceil": {
                    "entryPoint": 795,
                    "id": null,
                    "parameterSlots": 1,
                    "returnSlots": 1
                },
                "extract_byte_array_length": {
                    "entryPoint": 721,
                    "id": null,
                    "parameterSlots": 1,
                    "returnSlots": 1
                },
                "extract_used_part_and_set_length_of_short_byte_array": {
                    "entryPoint": 1220,
                    "id": null,
                    "parameterSlots": 2,
                    "returnSlots": 1
                },
                "identity": {
                    "entryPoint": 920,
                    "id": null,
                    "parameterSlots": 1,
                    "returnSlots": 1
                },
                "mask_bytes_dynamic": {
                    "entryPoint": 1188,
                    "id": null,
                    "parameterSlots": 2,
                    "returnSlots": 1
                },
                "panic_error_0x11": {
                    "entryPoint": 1481,
                    "id": null,
                    "parameterSlots": 0,
                    "returnSlots": 0
                },
                "panic_error_0x22": {
                    "entryPoint": 674,
                    "id": null,
                    "parameterSlots": 0,
                    "returnSlots": 0
                },
                "panic_error_0x41": {
                    "entryPoint": 627,
                    "id": null,
                    "parameterSlots": 0,
                    "returnSlots": 0
                },
                "prepare_store_t_uint256": {
                    "entryPoint": 970,
                    "id": null,
                    "parameterSlots": 1,
                    "returnSlots": 1
                },
                "shift_left_dynamic": {
                    "entryPoint": 811,
                    "id": null,
                    "parameterSlots": 2,
                    "returnSlots": 1
                },
                "shift_right_1_unsigned": {
                    "entryPoint": 1528,
                    "id": null,
                    "parameterSlots": 1,
                    "returnSlots": 1
                },
                "shift_right_unsigned_dynamic": {
                    "entryPoint": 1175,
                    "id": null,
                    "parameterSlots": 2,
                    "returnSlots": 1
                },
                "storage_set_to_zero_t_uint256": {
                    "entryPoint": 1028,
                    "id": null,
                    "parameterSlots": 2,
                    "returnSlots": 0
                },
                "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e": {
                    "entryPoint": 2054,
                    "id": null,
                    "parameterSlots": 1,
                    "returnSlots": 0
                },
                "update_byte_slice_dynamic32": {
                    "entryPoint": 824,
                    "id": null,
                    "parameterSlots": 3,
                    "returnSlots": 1
                },
                "update_storage_value_t_uint256_to_t_uint256": {
                    "entryPoint": 980,
                    "id": null,
                    "parameterSlots": 3,
                    "returnSlots": 0
                },
                "zero_value_for_split_t_uint256": {
                    "entryPoint": 1023,
                    "id": null,
                    "parameterSlots": 0,
                    "returnSlots": 1
                }
            },
            "generatedSources": [
                {
                    "ast": {
                        "nodeType": "YulBlock",
                        "src": "0:9961:5",
                        "statements": [
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "66:40:5",
                                    "statements": [
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "77:22:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "value",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "93:5:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "mload",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "87:5:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "87:12:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "length",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "77:6:5"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "name": "array_length_t_string_memory_ptr",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "value",
                                        "nodeType": "YulTypedName",
                                        "src": "49:5:5",
                                        "type": ""
                                    }
                                ],
                                "returnVariables": [
                                    {
                                        "name": "length",
                                        "nodeType": "YulTypedName",
                                        "src": "59:6:5",
                                        "type": ""
                                    }
                                ],
                                "src": "7:99:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "140:152:5",
                                    "statements": [
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "157:1:5",
                                                        "type": "",
                                                        "value": "0"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "160:77:5",
                                                        "type": "",
                                                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "mstore",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "150:6:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "150:88:5"
                                            },
                                            "nodeType": "YulExpressionStatement",
                                            "src": "150:88:5"
                                        },
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "254:1:5",
                                                        "type": "",
                                                        "value": "4"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "257:4:5",
                                                        "type": "",
                                                        "value": "0x41"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "mstore",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "247:6:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "247:15:5"
                                            },
                                            "nodeType": "YulExpressionStatement",
                                            "src": "247:15:5"
                                        },
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "278:1:5",
                                                        "type": "",
                                                        "value": "0"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "281:4:5",
                                                        "type": "",
                                                        "value": "0x24"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "revert",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "271:6:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "271:15:5"
                                            },
                                            "nodeType": "YulExpressionStatement",
                                            "src": "271:15:5"
                                        }
                                    ]
                                },
                                "name": "panic_error_0x41",
                                "nodeType": "YulFunctionDefinition",
                                "src": "112:180:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "326:152:5",
                                    "statements": [
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "343:1:5",
                                                        "type": "",
                                                        "value": "0"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "346:77:5",
                                                        "type": "",
                                                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "mstore",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "336:6:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "336:88:5"
                                            },
                                            "nodeType": "YulExpressionStatement",
                                            "src": "336:88:5"
                                        },
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "440:1:5",
                                                        "type": "",
                                                        "value": "4"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "443:4:5",
                                                        "type": "",
                                                        "value": "0x22"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "mstore",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "433:6:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "433:15:5"
                                            },
                                            "nodeType": "YulExpressionStatement",
                                            "src": "433:15:5"
                                        },
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "464:1:5",
                                                        "type": "",
                                                        "value": "0"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "467:4:5",
                                                        "type": "",
                                                        "value": "0x24"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "revert",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "457:6:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "457:15:5"
                                            },
                                            "nodeType": "YulExpressionStatement",
                                            "src": "457:15:5"
                                        }
                                    ]
                                },
                                "name": "panic_error_0x22",
                                "nodeType": "YulFunctionDefinition",
                                "src": "298:180:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "535:269:5",
                                    "statements": [
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "545:22:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "data",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "559:4:5"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "565:1:5",
                                                        "type": "",
                                                        "value": "2"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "div",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "555:3:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "555:12:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "length",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "545:6:5"
                                                }
                                            ]
                                        },
                                        {
                                            "nodeType": "YulVariableDeclaration",
                                            "src": "576:38:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "data",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "606:4:5"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "612:1:5",
                                                        "type": "",
                                                        "value": "1"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "and",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "602:3:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "602:12:5"
                                            },
                                            "variables": [
                                                {
                                                    "name": "outOfPlaceEncoding",
                                                    "nodeType": "YulTypedName",
                                                    "src": "580:18:5",
                                                    "type": ""
                                                }
                                            ]
                                        },
                                        {
                                            "body": {
                                                "nodeType": "YulBlock",
                                                "src": "653:51:5",
                                                "statements": [
                                                    {
                                                        "nodeType": "YulAssignment",
                                                        "src": "667:27:5",
                                                        "value": {
                                                            "arguments": [
                                                                {
                                                                    "name": "length",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "681:6:5"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "689:4:5",
                                                                    "type": "",
                                                                    "value": "0x7f"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "and",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "677:3:5"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "677:17:5"
                                                        },
                                                        "variableNames": [
                                                            {
                                                                "name": "length",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "667:6:5"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            "condition": {
                                                "arguments": [
                                                    {
                                                        "name": "outOfPlaceEncoding",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "633:18:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "iszero",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "626:6:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "626:26:5"
                                            },
                                            "nodeType": "YulIf",
                                            "src": "623:81:5"
                                        },
                                        {
                                            "body": {
                                                "nodeType": "YulBlock",
                                                "src": "756:42:5",
                                                "statements": [
                                                    {
                                                        "expression": {
                                                            "arguments": [],
                                                            "functionName": {
                                                                "name": "panic_error_0x22",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "770:16:5"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "770:18:5"
                                                        },
                                                        "nodeType": "YulExpressionStatement",
                                                        "src": "770:18:5"
                                                    }
                                                ]
                                            },
                                            "condition": {
                                                "arguments": [
                                                    {
                                                        "name": "outOfPlaceEncoding",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "720:18:5"
                                                    },
                                                    {
                                                        "arguments": [
                                                            {
                                                                "name": "length",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "743:6:5"
                                                            },
                                                            {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "751:2:5",
                                                                "type": "",
                                                                "value": "32"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "lt",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "740:2:5"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "740:14:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "eq",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "717:2:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "717:38:5"
                                            },
                                            "nodeType": "YulIf",
                                            "src": "714:84:5"
                                        }
                                    ]
                                },
                                "name": "extract_byte_array_length",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "data",
                                        "nodeType": "YulTypedName",
                                        "src": "519:4:5",
                                        "type": ""
                                    }
                                ],
                                "returnVariables": [
                                    {
                                        "name": "length",
                                        "nodeType": "YulTypedName",
                                        "src": "528:6:5",
                                        "type": ""
                                    }
                                ],
                                "src": "484:320:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "864:87:5",
                                    "statements": [
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "874:11:5",
                                            "value": {
                                                "name": "ptr",
                                                "nodeType": "YulIdentifier",
                                                "src": "882:3:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "data",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "874:4:5"
                                                }
                                            ]
                                        },
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "902:1:5",
                                                        "type": "",
                                                        "value": "0"
                                                    },
                                                    {
                                                        "name": "ptr",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "905:3:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "mstore",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "895:6:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "895:14:5"
                                            },
                                            "nodeType": "YulExpressionStatement",
                                            "src": "895:14:5"
                                        },
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "918:26:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "936:1:5",
                                                        "type": "",
                                                        "value": "0"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "939:4:5",
                                                        "type": "",
                                                        "value": "0x20"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "keccak256",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "926:9:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "926:18:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "data",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "918:4:5"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "name": "array_dataslot_t_string_storage",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "ptr",
                                        "nodeType": "YulTypedName",
                                        "src": "851:3:5",
                                        "type": ""
                                    }
                                ],
                                "returnVariables": [
                                    {
                                        "name": "data",
                                        "nodeType": "YulTypedName",
                                        "src": "859:4:5",
                                        "type": ""
                                    }
                                ],
                                "src": "810:141:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "1001:49:5",
                                    "statements": [
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "1011:33:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "name": "value",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "1029:5:5"
                                                            },
                                                            {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "1036:2:5",
                                                                "type": "",
                                                                "value": "31"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "add",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1025:3:5"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "1025:14:5"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "1041:2:5",
                                                        "type": "",
                                                        "value": "32"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "div",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1021:3:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "1021:23:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "result",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1011:6:5"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "name": "divide_by_32_ceil",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "value",
                                        "nodeType": "YulTypedName",
                                        "src": "984:5:5",
                                        "type": ""
                                    }
                                ],
                                "returnVariables": [
                                    {
                                        "name": "result",
                                        "nodeType": "YulTypedName",
                                        "src": "994:6:5",
                                        "type": ""
                                    }
                                ],
                                "src": "957:93:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "1109:54:5",
                                    "statements": [
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "1119:37:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "bits",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1144:4:5"
                                                    },
                                                    {
                                                        "name": "value",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1150:5:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "shl",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1140:3:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "1140:16:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "newValue",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1119:8:5"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "name": "shift_left_dynamic",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "bits",
                                        "nodeType": "YulTypedName",
                                        "src": "1084:4:5",
                                        "type": ""
                                    },
                                    {
                                        "name": "value",
                                        "nodeType": "YulTypedName",
                                        "src": "1090:5:5",
                                        "type": ""
                                    }
                                ],
                                "returnVariables": [
                                    {
                                        "name": "newValue",
                                        "nodeType": "YulTypedName",
                                        "src": "1100:8:5",
                                        "type": ""
                                    }
                                ],
                                "src": "1056:107:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "1245:317:5",
                                    "statements": [
                                        {
                                            "nodeType": "YulVariableDeclaration",
                                            "src": "1255:35:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "shiftBytes",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1276:10:5"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "1288:1:5",
                                                        "type": "",
                                                        "value": "8"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "mul",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1272:3:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "1272:18:5"
                                            },
                                            "variables": [
                                                {
                                                    "name": "shiftBits",
                                                    "nodeType": "YulTypedName",
                                                    "src": "1259:9:5",
                                                    "type": ""
                                                }
                                            ]
                                        },
                                        {
                                            "nodeType": "YulVariableDeclaration",
                                            "src": "1299:109:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "shiftBits",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1330:9:5"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "1341:66:5",
                                                        "type": "",
                                                        "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "shift_left_dynamic",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1311:18:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "1311:97:5"
                                            },
                                            "variables": [
                                                {
                                                    "name": "mask",
                                                    "nodeType": "YulTypedName",
                                                    "src": "1303:4:5",
                                                    "type": ""
                                                }
                                            ]
                                        },
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "1417:51:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "shiftBits",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1448:9:5"
                                                    },
                                                    {
                                                        "name": "toInsert",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1459:8:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "shift_left_dynamic",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1429:18:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "1429:39:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "toInsert",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1417:8:5"
                                                }
                                            ]
                                        },
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "1477:30:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "value",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1490:5:5"
                                                    },
                                                    {
                                                        "arguments": [
                                                            {
                                                                "name": "mask",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "1501:4:5"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "not",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1497:3:5"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "1497:9:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "and",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1486:3:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "1486:21:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "value",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1477:5:5"
                                                }
                                            ]
                                        },
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "1516:40:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "value",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "1529:5:5"
                                                    },
                                                    {
                                                        "arguments": [
                                                            {
                                                                "name": "toInsert",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "1540:8:5"
                                                            },
                                                            {
                                                                "name": "mask",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "1550:4:5"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "and",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1536:3:5"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "1536:19:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "or",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1526:2:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "1526:30:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "result",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1516:6:5"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "name": "update_byte_slice_dynamic32",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "value",
                                        "nodeType": "YulTypedName",
                                        "src": "1206:5:5",
                                        "type": ""
                                    },
                                    {
                                        "name": "shiftBytes",
                                        "nodeType": "YulTypedName",
                                        "src": "1213:10:5",
                                        "type": ""
                                    },
                                    {
                                        "name": "toInsert",
                                        "nodeType": "YulTypedName",
                                        "src": "1225:8:5",
                                        "type": ""
                                    }
                                ],
                                "returnVariables": [
                                    {
                                        "name": "result",
                                        "nodeType": "YulTypedName",
                                        "src": "1238:6:5",
                                        "type": ""
                                    }
                                ],
                                "src": "1169:393:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "1613:32:5",
                                    "statements": [
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "1623:16:5",
                                            "value": {
                                                "name": "value",
                                                "nodeType": "YulIdentifier",
                                                "src": "1634:5:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "cleaned",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1623:7:5"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "name": "cleanup_t_uint256",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "value",
                                        "nodeType": "YulTypedName",
                                        "src": "1595:5:5",
                                        "type": ""
                                    }
                                ],
                                "returnVariables": [
                                    {
                                        "name": "cleaned",
                                        "nodeType": "YulTypedName",
                                        "src": "1605:7:5",
                                        "type": ""
                                    }
                                ],
                                "src": "1568:77:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "1683:28:5",
                                    "statements": [
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "1693:12:5",
                                            "value": {
                                                "name": "value",
                                                "nodeType": "YulIdentifier",
                                                "src": "1700:5:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "ret",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1693:3:5"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "name": "identity",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "value",
                                        "nodeType": "YulTypedName",
                                        "src": "1669:5:5",
                                        "type": ""
                                    }
                                ],
                                "returnVariables": [
                                    {
                                        "name": "ret",
                                        "nodeType": "YulTypedName",
                                        "src": "1679:3:5",
                                        "type": ""
                                    }
                                ],
                                "src": "1651:60:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "1777:82:5",
                                    "statements": [
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "1787:66:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "name": "value",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "1845:5:5"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "cleanup_t_uint256",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "1827:17:5"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "1827:24:5"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "identity",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "1818:8:5"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "1818:34:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "cleanup_t_uint256",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1800:17:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "1800:53:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "converted",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1787:9:5"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "name": "convert_t_uint256_to_t_uint256",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "value",
                                        "nodeType": "YulTypedName",
                                        "src": "1757:5:5",
                                        "type": ""
                                    }
                                ],
                                "returnVariables": [
                                    {
                                        "name": "converted",
                                        "nodeType": "YulTypedName",
                                        "src": "1767:9:5",
                                        "type": ""
                                    }
                                ],
                                "src": "1717:142:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "1912:28:5",
                                    "statements": [
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "1922:12:5",
                                            "value": {
                                                "name": "value",
                                                "nodeType": "YulIdentifier",
                                                "src": "1929:5:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "ret",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "1922:3:5"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "name": "prepare_store_t_uint256",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "value",
                                        "nodeType": "YulTypedName",
                                        "src": "1898:5:5",
                                        "type": ""
                                    }
                                ],
                                "returnVariables": [
                                    {
                                        "name": "ret",
                                        "nodeType": "YulTypedName",
                                        "src": "1908:3:5",
                                        "type": ""
                                    }
                                ],
                                "src": "1865:75:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "2022:193:5",
                                    "statements": [
                                        {
                                            "nodeType": "YulVariableDeclaration",
                                            "src": "2032:63:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "value_0",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2087:7:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "convert_t_uint256_to_t_uint256",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2056:30:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "2056:39:5"
                                            },
                                            "variables": [
                                                {
                                                    "name": "convertedValue_0",
                                                    "nodeType": "YulTypedName",
                                                    "src": "2036:16:5",
                                                    "type": ""
                                                }
                                            ]
                                        },
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "name": "slot",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2111:4:5"
                                                    },
                                                    {
                                                        "arguments": [
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "name": "slot",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "2151:4:5"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "sload",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2145:5:5"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "2145:11:5"
                                                            },
                                                            {
                                                                "name": "offset",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2158:6:5"
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "name": "convertedValue_0",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "2190:16:5"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "prepare_store_t_uint256",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2166:23:5"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "2166:41:5"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "update_byte_slice_dynamic32",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "2117:27:5"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "2117:91:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "sstore",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2104:6:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "2104:105:5"
                                            },
                                            "nodeType": "YulExpressionStatement",
                                            "src": "2104:105:5"
                                        }
                                    ]
                                },
                                "name": "update_storage_value_t_uint256_to_t_uint256",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "slot",
                                        "nodeType": "YulTypedName",
                                        "src": "1999:4:5",
                                        "type": ""
                                    },
                                    {
                                        "name": "offset",
                                        "nodeType": "YulTypedName",
                                        "src": "2005:6:5",
                                        "type": ""
                                    },
                                    {
                                        "name": "value_0",
                                        "nodeType": "YulTypedName",
                                        "src": "2013:7:5",
                                        "type": ""
                                    }
                                ],
                                "src": "1946:269:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "2270:24:5",
                                    "statements": [
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "2280:8:5",
                                            "value": {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "2287:1:5",
                                                "type": "",
                                                "value": "0"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "ret",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2280:3:5"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "name": "zero_value_for_split_t_uint256",
                                "nodeType": "YulFunctionDefinition",
                                "returnVariables": [
                                    {
                                        "name": "ret",
                                        "nodeType": "YulTypedName",
                                        "src": "2266:3:5",
                                        "type": ""
                                    }
                                ],
                                "src": "2221:73:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "2353:136:5",
                                    "statements": [
                                        {
                                            "nodeType": "YulVariableDeclaration",
                                            "src": "2363:46:5",
                                            "value": {
                                                "arguments": [],
                                                "functionName": {
                                                    "name": "zero_value_for_split_t_uint256",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2377:30:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "2377:32:5"
                                            },
                                            "variables": [
                                                {
                                                    "name": "zero_0",
                                                    "nodeType": "YulTypedName",
                                                    "src": "2367:6:5",
                                                    "type": ""
                                                }
                                            ]
                                        },
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "name": "slot",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2462:4:5"
                                                    },
                                                    {
                                                        "name": "offset",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2468:6:5"
                                                    },
                                                    {
                                                        "name": "zero_0",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2476:6:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "update_storage_value_t_uint256_to_t_uint256",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2418:43:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "2418:65:5"
                                            },
                                            "nodeType": "YulExpressionStatement",
                                            "src": "2418:65:5"
                                        }
                                    ]
                                },
                                "name": "storage_set_to_zero_t_uint256",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "slot",
                                        "nodeType": "YulTypedName",
                                        "src": "2339:4:5",
                                        "type": ""
                                    },
                                    {
                                        "name": "offset",
                                        "nodeType": "YulTypedName",
                                        "src": "2345:6:5",
                                        "type": ""
                                    }
                                ],
                                "src": "2300:189:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "2545:136:5",
                                    "statements": [
                                        {
                                            "body": {
                                                "nodeType": "YulBlock",
                                                "src": "2612:63:5",
                                                "statements": [
                                                    {
                                                        "expression": {
                                                            "arguments": [
                                                                {
                                                                    "name": "start",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2656:5:5"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "2663:1:5",
                                                                    "type": "",
                                                                    "value": "0"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "storage_set_to_zero_t_uint256",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2626:29:5"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2626:39:5"
                                                        },
                                                        "nodeType": "YulExpressionStatement",
                                                        "src": "2626:39:5"
                                                    }
                                                ]
                                            },
                                            "condition": {
                                                "arguments": [
                                                    {
                                                        "name": "start",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2565:5:5"
                                                    },
                                                    {
                                                        "name": "end",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2572:3:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "lt",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2562:2:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "2562:14:5"
                                            },
                                            "nodeType": "YulForLoop",
                                            "post": {
                                                "nodeType": "YulBlock",
                                                "src": "2577:26:5",
                                                "statements": [
                                                    {
                                                        "nodeType": "YulAssignment",
                                                        "src": "2579:22:5",
                                                        "value": {
                                                            "arguments": [
                                                                {
                                                                    "name": "start",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2592:5:5"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "2599:1:5",
                                                                    "type": "",
                                                                    "value": "1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2588:3:5"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2588:13:5"
                                                        },
                                                        "variableNames": [
                                                            {
                                                                "name": "start",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2579:5:5"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            "pre": {
                                                "nodeType": "YulBlock",
                                                "src": "2559:2:5",
                                                "statements": []
                                            },
                                            "src": "2555:120:5"
                                        }
                                    ]
                                },
                                "name": "clear_storage_range_t_bytes1",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "start",
                                        "nodeType": "YulTypedName",
                                        "src": "2533:5:5",
                                        "type": ""
                                    },
                                    {
                                        "name": "end",
                                        "nodeType": "YulTypedName",
                                        "src": "2540:3:5",
                                        "type": ""
                                    }
                                ],
                                "src": "2495:186:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "2766:464:5",
                                    "statements": [
                                        {
                                            "body": {
                                                "nodeType": "YulBlock",
                                                "src": "2792:431:5",
                                                "statements": [
                                                    {
                                                        "nodeType": "YulVariableDeclaration",
                                                        "src": "2806:54:5",
                                                        "value": {
                                                            "arguments": [
                                                                {
                                                                    "name": "array",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2854:5:5"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "array_dataslot_t_string_storage",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2822:31:5"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2822:38:5"
                                                        },
                                                        "variables": [
                                                            {
                                                                "name": "dataArea",
                                                                "nodeType": "YulTypedName",
                                                                "src": "2810:8:5",
                                                                "type": ""
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "nodeType": "YulVariableDeclaration",
                                                        "src": "2873:63:5",
                                                        "value": {
                                                            "arguments": [
                                                                {
                                                                    "name": "dataArea",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "2896:8:5"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "startIndex",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "2924:10:5"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "divide_by_32_ceil",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "2906:17:5"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "2906:29:5"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "add",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "2892:3:5"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "2892:44:5"
                                                        },
                                                        "variables": [
                                                            {
                                                                "name": "deleteStart",
                                                                "nodeType": "YulTypedName",
                                                                "src": "2877:11:5",
                                                                "type": ""
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "body": {
                                                            "nodeType": "YulBlock",
                                                            "src": "3093:27:5",
                                                            "statements": [
                                                                {
                                                                    "nodeType": "YulAssignment",
                                                                    "src": "3095:23:5",
                                                                    "value": {
                                                                        "name": "dataArea",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "3110:8:5"
                                                                    },
                                                                    "variableNames": [
                                                                        {
                                                                            "name": "deleteStart",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "3095:11:5"
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        "condition": {
                                                            "arguments": [
                                                                {
                                                                    "name": "startIndex",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "3077:10:5"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "3089:2:5",
                                                                    "type": "",
                                                                    "value": "32"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "lt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "3074:2:5"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "3074:18:5"
                                                        },
                                                        "nodeType": "YulIf",
                                                        "src": "3071:49:5"
                                                    },
                                                    {
                                                        "expression": {
                                                            "arguments": [
                                                                {
                                                                    "name": "deleteStart",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "3162:11:5"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "dataArea",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "3179:8:5"
                                                                        },
                                                                        {
                                                                            "arguments": [
                                                                                {
                                                                                    "name": "len",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "3207:3:5"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "divide_by_32_ceil",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "3189:17:5"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "3189:22:5"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "add",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "3175:3:5"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "3175:37:5"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "clear_storage_range_t_bytes1",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "3133:28:5"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "3133:80:5"
                                                        },
                                                        "nodeType": "YulExpressionStatement",
                                                        "src": "3133:80:5"
                                                    }
                                                ]
                                            },
                                            "condition": {
                                                "arguments": [
                                                    {
                                                        "name": "len",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "2783:3:5"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "2788:2:5",
                                                        "type": "",
                                                        "value": "31"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "gt",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "2780:2:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "2780:11:5"
                                            },
                                            "nodeType": "YulIf",
                                            "src": "2777:446:5"
                                        }
                                    ]
                                },
                                "name": "clean_up_bytearray_end_slots_t_string_storage",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "array",
                                        "nodeType": "YulTypedName",
                                        "src": "2742:5:5",
                                        "type": ""
                                    },
                                    {
                                        "name": "len",
                                        "nodeType": "YulTypedName",
                                        "src": "2749:3:5",
                                        "type": ""
                                    },
                                    {
                                        "name": "startIndex",
                                        "nodeType": "YulTypedName",
                                        "src": "2754:10:5",
                                        "type": ""
                                    }
                                ],
                                "src": "2687:543:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "3299:54:5",
                                    "statements": [
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "3309:37:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "bits",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3334:4:5"
                                                    },
                                                    {
                                                        "name": "value",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3340:5:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "shr",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3330:3:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "3330:16:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "newValue",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3309:8:5"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "name": "shift_right_unsigned_dynamic",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "bits",
                                        "nodeType": "YulTypedName",
                                        "src": "3274:4:5",
                                        "type": ""
                                    },
                                    {
                                        "name": "value",
                                        "nodeType": "YulTypedName",
                                        "src": "3280:5:5",
                                        "type": ""
                                    }
                                ],
                                "returnVariables": [
                                    {
                                        "name": "newValue",
                                        "nodeType": "YulTypedName",
                                        "src": "3290:8:5",
                                        "type": ""
                                    }
                                ],
                                "src": "3236:117:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "3410:118:5",
                                    "statements": [
                                        {
                                            "nodeType": "YulVariableDeclaration",
                                            "src": "3420:68:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "3469:1:5",
                                                                        "type": "",
                                                                        "value": "8"
                                                                    },
                                                                    {
                                                                        "name": "bytes",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "3472:5:5"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "mul",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "3465:3:5"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "3465:13:5"
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "3484:1:5",
                                                                        "type": "",
                                                                        "value": "0"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "not",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "3480:3:5"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "3480:6:5"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "shift_right_unsigned_dynamic",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3436:28:5"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "3436:51:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "not",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3432:3:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "3432:56:5"
                                            },
                                            "variables": [
                                                {
                                                    "name": "mask",
                                                    "nodeType": "YulTypedName",
                                                    "src": "3424:4:5",
                                                    "type": ""
                                                }
                                            ]
                                        },
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "3497:25:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "data",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3511:4:5"
                                                    },
                                                    {
                                                        "name": "mask",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3517:4:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "and",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3507:3:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "3507:15:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "result",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3497:6:5"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "name": "mask_bytes_dynamic",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "data",
                                        "nodeType": "YulTypedName",
                                        "src": "3387:4:5",
                                        "type": ""
                                    },
                                    {
                                        "name": "bytes",
                                        "nodeType": "YulTypedName",
                                        "src": "3393:5:5",
                                        "type": ""
                                    }
                                ],
                                "returnVariables": [
                                    {
                                        "name": "result",
                                        "nodeType": "YulTypedName",
                                        "src": "3403:6:5",
                                        "type": ""
                                    }
                                ],
                                "src": "3359:169:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "3614:214:5",
                                    "statements": [
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "3747:37:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "data",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3774:4:5"
                                                    },
                                                    {
                                                        "name": "len",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3780:3:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "mask_bytes_dynamic",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3755:18:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "3755:29:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "data",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3747:4:5"
                                                }
                                            ]
                                        },
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "3793:29:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "data",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3804:4:5"
                                                    },
                                                    {
                                                        "arguments": [
                                                            {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "3814:1:5",
                                                                "type": "",
                                                                "value": "2"
                                                            },
                                                            {
                                                                "name": "len",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "3817:3:5"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "mul",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "3810:3:5"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "3810:11:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "or",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3801:2:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "3801:21:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "used",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3793:4:5"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "name": "extract_used_part_and_set_length_of_short_byte_array",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "data",
                                        "nodeType": "YulTypedName",
                                        "src": "3595:4:5",
                                        "type": ""
                                    },
                                    {
                                        "name": "len",
                                        "nodeType": "YulTypedName",
                                        "src": "3601:3:5",
                                        "type": ""
                                    }
                                ],
                                "returnVariables": [
                                    {
                                        "name": "used",
                                        "nodeType": "YulTypedName",
                                        "src": "3609:4:5",
                                        "type": ""
                                    }
                                ],
                                "src": "3533:295:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "3925:1303:5",
                                    "statements": [
                                        {
                                            "nodeType": "YulVariableDeclaration",
                                            "src": "3936:51:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "src",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "3983:3:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "array_length_t_string_memory_ptr",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "3950:32:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "3950:37:5"
                                            },
                                            "variables": [
                                                {
                                                    "name": "newLen",
                                                    "nodeType": "YulTypedName",
                                                    "src": "3940:6:5",
                                                    "type": ""
                                                }
                                            ]
                                        },
                                        {
                                            "body": {
                                                "nodeType": "YulBlock",
                                                "src": "4072:22:5",
                                                "statements": [
                                                    {
                                                        "expression": {
                                                            "arguments": [],
                                                            "functionName": {
                                                                "name": "panic_error_0x41",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "4074:16:5"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "4074:18:5"
                                                        },
                                                        "nodeType": "YulExpressionStatement",
                                                        "src": "4074:18:5"
                                                    }
                                                ]
                                            },
                                            "condition": {
                                                "arguments": [
                                                    {
                                                        "name": "newLen",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4044:6:5"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "4052:18:5",
                                                        "type": "",
                                                        "value": "0xffffffffffffffff"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "gt",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4041:2:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "4041:30:5"
                                            },
                                            "nodeType": "YulIf",
                                            "src": "4038:56:5"
                                        },
                                        {
                                            "nodeType": "YulVariableDeclaration",
                                            "src": "4104:52:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "name": "slot",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "4150:4:5"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "sload",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "4144:5:5"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "4144:11:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "extract_byte_array_length",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4118:25:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "4118:38:5"
                                            },
                                            "variables": [
                                                {
                                                    "name": "oldLen",
                                                    "nodeType": "YulTypedName",
                                                    "src": "4108:6:5",
                                                    "type": ""
                                                }
                                            ]
                                        },
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "name": "slot",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4249:4:5"
                                                    },
                                                    {
                                                        "name": "oldLen",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4255:6:5"
                                                    },
                                                    {
                                                        "name": "newLen",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4263:6:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "clean_up_bytearray_end_slots_t_string_storage",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4203:45:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "4203:67:5"
                                            },
                                            "nodeType": "YulExpressionStatement",
                                            "src": "4203:67:5"
                                        },
                                        {
                                            "nodeType": "YulVariableDeclaration",
                                            "src": "4280:18:5",
                                            "value": {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "4297:1:5",
                                                "type": "",
                                                "value": "0"
                                            },
                                            "variables": [
                                                {
                                                    "name": "srcOffset",
                                                    "nodeType": "YulTypedName",
                                                    "src": "4284:9:5",
                                                    "type": ""
                                                }
                                            ]
                                        },
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "4308:17:5",
                                            "value": {
                                                "kind": "number",
                                                "nodeType": "YulLiteral",
                                                "src": "4321:4:5",
                                                "type": "",
                                                "value": "0x20"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "srcOffset",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4308:9:5"
                                                }
                                            ]
                                        },
                                        {
                                            "cases": [
                                                {
                                                    "body": {
                                                        "nodeType": "YulBlock",
                                                        "src": "4372:611:5",
                                                        "statements": [
                                                            {
                                                                "nodeType": "YulVariableDeclaration",
                                                                "src": "4386:37:5",
                                                                "value": {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "newLen",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "4405:6:5"
                                                                        },
                                                                        {
                                                                            "arguments": [
                                                                                {
                                                                                    "kind": "number",
                                                                                    "nodeType": "YulLiteral",
                                                                                    "src": "4417:4:5",
                                                                                    "type": "",
                                                                                    "value": "0x1f"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "not",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "4413:3:5"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "4413:9:5"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "and",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "4401:3:5"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "4401:22:5"
                                                                },
                                                                "variables": [
                                                                    {
                                                                        "name": "loopEnd",
                                                                        "nodeType": "YulTypedName",
                                                                        "src": "4390:7:5",
                                                                        "type": ""
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "nodeType": "YulVariableDeclaration",
                                                                "src": "4437:51:5",
                                                                "value": {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "slot",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "4483:4:5"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "array_dataslot_t_string_storage",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "4451:31:5"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "4451:37:5"
                                                                },
                                                                "variables": [
                                                                    {
                                                                        "name": "dstPtr",
                                                                        "nodeType": "YulTypedName",
                                                                        "src": "4441:6:5",
                                                                        "type": ""
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "nodeType": "YulVariableDeclaration",
                                                                "src": "4501:10:5",
                                                                "value": {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "4510:1:5",
                                                                    "type": "",
                                                                    "value": "0"
                                                                },
                                                                "variables": [
                                                                    {
                                                                        "name": "i",
                                                                        "nodeType": "YulTypedName",
                                                                        "src": "4505:1:5",
                                                                        "type": ""
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "body": {
                                                                    "nodeType": "YulBlock",
                                                                    "src": "4569:163:5",
                                                                    "statements": [
                                                                        {
                                                                            "expression": {
                                                                                "arguments": [
                                                                                    {
                                                                                        "name": "dstPtr",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4594:6:5"
                                                                                    },
                                                                                    {
                                                                                        "arguments": [
                                                                                            {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "name": "src",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "4612:3:5"
                                                                                                    },
                                                                                                    {
                                                                                                        "name": "srcOffset",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "4617:9:5"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "add",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "4608:3:5"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "4608:19:5"
                                                                                            }
                                                                                        ],
                                                                                        "functionName": {
                                                                                            "name": "mload",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4602:5:5"
                                                                                        },
                                                                                        "nodeType": "YulFunctionCall",
                                                                                        "src": "4602:26:5"
                                                                                    }
                                                                                ],
                                                                                "functionName": {
                                                                                    "name": "sstore",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "4587:6:5"
                                                                                },
                                                                                "nodeType": "YulFunctionCall",
                                                                                "src": "4587:42:5"
                                                                            },
                                                                            "nodeType": "YulExpressionStatement",
                                                                            "src": "4587:42:5"
                                                                        },
                                                                        {
                                                                            "nodeType": "YulAssignment",
                                                                            "src": "4646:24:5",
                                                                            "value": {
                                                                                "arguments": [
                                                                                    {
                                                                                        "name": "dstPtr",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4660:6:5"
                                                                                    },
                                                                                    {
                                                                                        "kind": "number",
                                                                                        "nodeType": "YulLiteral",
                                                                                        "src": "4668:1:5",
                                                                                        "type": "",
                                                                                        "value": "1"
                                                                                    }
                                                                                ],
                                                                                "functionName": {
                                                                                    "name": "add",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "4656:3:5"
                                                                                },
                                                                                "nodeType": "YulFunctionCall",
                                                                                "src": "4656:14:5"
                                                                            },
                                                                            "variableNames": [
                                                                                {
                                                                                    "name": "dstPtr",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "4646:6:5"
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "nodeType": "YulAssignment",
                                                                            "src": "4687:31:5",
                                                                            "value": {
                                                                                "arguments": [
                                                                                    {
                                                                                        "name": "srcOffset",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4704:9:5"
                                                                                    },
                                                                                    {
                                                                                        "kind": "number",
                                                                                        "nodeType": "YulLiteral",
                                                                                        "src": "4715:2:5",
                                                                                        "type": "",
                                                                                        "value": "32"
                                                                                    }
                                                                                ],
                                                                                "functionName": {
                                                                                    "name": "add",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "4700:3:5"
                                                                                },
                                                                                "nodeType": "YulFunctionCall",
                                                                                "src": "4700:18:5"
                                                                            },
                                                                            "variableNames": [
                                                                                {
                                                                                    "name": "srcOffset",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "4687:9:5"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                "condition": {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "i",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "4535:1:5"
                                                                        },
                                                                        {
                                                                            "name": "loopEnd",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "4538:7:5"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "lt",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "4532:2:5"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "4532:14:5"
                                                                },
                                                                "nodeType": "YulForLoop",
                                                                "post": {
                                                                    "nodeType": "YulBlock",
                                                                    "src": "4547:21:5",
                                                                    "statements": [
                                                                        {
                                                                            "nodeType": "YulAssignment",
                                                                            "src": "4549:17:5",
                                                                            "value": {
                                                                                "arguments": [
                                                                                    {
                                                                                        "name": "i",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4558:1:5"
                                                                                    },
                                                                                    {
                                                                                        "kind": "number",
                                                                                        "nodeType": "YulLiteral",
                                                                                        "src": "4561:4:5",
                                                                                        "type": "",
                                                                                        "value": "0x20"
                                                                                    }
                                                                                ],
                                                                                "functionName": {
                                                                                    "name": "add",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "4554:3:5"
                                                                                },
                                                                                "nodeType": "YulFunctionCall",
                                                                                "src": "4554:12:5"
                                                                            },
                                                                            "variableNames": [
                                                                                {
                                                                                    "name": "i",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "4549:1:5"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                "pre": {
                                                                    "nodeType": "YulBlock",
                                                                    "src": "4528:3:5",
                                                                    "statements": []
                                                                },
                                                                "src": "4524:208:5"
                                                            },
                                                            {
                                                                "body": {
                                                                    "nodeType": "YulBlock",
                                                                    "src": "4768:156:5",
                                                                    "statements": [
                                                                        {
                                                                            "nodeType": "YulVariableDeclaration",
                                                                            "src": "4786:43:5",
                                                                            "value": {
                                                                                "arguments": [
                                                                                    {
                                                                                        "arguments": [
                                                                                            {
                                                                                                "name": "src",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "4813:3:5"
                                                                                            },
                                                                                            {
                                                                                                "name": "srcOffset",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "4818:9:5"
                                                                                            }
                                                                                        ],
                                                                                        "functionName": {
                                                                                            "name": "add",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4809:3:5"
                                                                                        },
                                                                                        "nodeType": "YulFunctionCall",
                                                                                        "src": "4809:19:5"
                                                                                    }
                                                                                ],
                                                                                "functionName": {
                                                                                    "name": "mload",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "4803:5:5"
                                                                                },
                                                                                "nodeType": "YulFunctionCall",
                                                                                "src": "4803:26:5"
                                                                            },
                                                                            "variables": [
                                                                                {
                                                                                    "name": "lastValue",
                                                                                    "nodeType": "YulTypedName",
                                                                                    "src": "4790:9:5",
                                                                                    "type": ""
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            "expression": {
                                                                                "arguments": [
                                                                                    {
                                                                                        "name": "dstPtr",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4853:6:5"
                                                                                    },
                                                                                    {
                                                                                        "arguments": [
                                                                                            {
                                                                                                "name": "lastValue",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "4880:9:5"
                                                                                            },
                                                                                            {
                                                                                                "arguments": [
                                                                                                    {
                                                                                                        "name": "newLen",
                                                                                                        "nodeType": "YulIdentifier",
                                                                                                        "src": "4895:6:5"
                                                                                                    },
                                                                                                    {
                                                                                                        "kind": "number",
                                                                                                        "nodeType": "YulLiteral",
                                                                                                        "src": "4903:4:5",
                                                                                                        "type": "",
                                                                                                        "value": "0x1f"
                                                                                                    }
                                                                                                ],
                                                                                                "functionName": {
                                                                                                    "name": "and",
                                                                                                    "nodeType": "YulIdentifier",
                                                                                                    "src": "4891:3:5"
                                                                                                },
                                                                                                "nodeType": "YulFunctionCall",
                                                                                                "src": "4891:17:5"
                                                                                            }
                                                                                        ],
                                                                                        "functionName": {
                                                                                            "name": "mask_bytes_dynamic",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4861:18:5"
                                                                                        },
                                                                                        "nodeType": "YulFunctionCall",
                                                                                        "src": "4861:48:5"
                                                                                    }
                                                                                ],
                                                                                "functionName": {
                                                                                    "name": "sstore",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "4846:6:5"
                                                                                },
                                                                                "nodeType": "YulFunctionCall",
                                                                                "src": "4846:64:5"
                                                                            },
                                                                            "nodeType": "YulExpressionStatement",
                                                                            "src": "4846:64:5"
                                                                        }
                                                                    ]
                                                                },
                                                                "condition": {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "loopEnd",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "4751:7:5"
                                                                        },
                                                                        {
                                                                            "name": "newLen",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "4760:6:5"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "lt",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "4748:2:5"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "4748:19:5"
                                                                },
                                                                "nodeType": "YulIf",
                                                                "src": "4745:179:5"
                                                            },
                                                            {
                                                                "expression": {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "slot",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "4944:4:5"
                                                                        },
                                                                        {
                                                                            "arguments": [
                                                                                {
                                                                                    "arguments": [
                                                                                        {
                                                                                            "name": "newLen",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "4958:6:5"
                                                                                        },
                                                                                        {
                                                                                            "kind": "number",
                                                                                            "nodeType": "YulLiteral",
                                                                                            "src": "4966:1:5",
                                                                                            "type": "",
                                                                                            "value": "2"
                                                                                        }
                                                                                    ],
                                                                                    "functionName": {
                                                                                        "name": "mul",
                                                                                        "nodeType": "YulIdentifier",
                                                                                        "src": "4954:3:5"
                                                                                    },
                                                                                    "nodeType": "YulFunctionCall",
                                                                                    "src": "4954:14:5"
                                                                                },
                                                                                {
                                                                                    "kind": "number",
                                                                                    "nodeType": "YulLiteral",
                                                                                    "src": "4970:1:5",
                                                                                    "type": "",
                                                                                    "value": "1"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "add",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "4950:3:5"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "4950:22:5"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "sstore",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "4937:6:5"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "4937:36:5"
                                                                },
                                                                "nodeType": "YulExpressionStatement",
                                                                "src": "4937:36:5"
                                                            }
                                                        ]
                                                    },
                                                    "nodeType": "YulCase",
                                                    "src": "4365:618:5",
                                                    "value": {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "4370:1:5",
                                                        "type": "",
                                                        "value": "1"
                                                    }
                                                },
                                                {
                                                    "body": {
                                                        "nodeType": "YulBlock",
                                                        "src": "5000:222:5",
                                                        "statements": [
                                                            {
                                                                "nodeType": "YulVariableDeclaration",
                                                                "src": "5014:14:5",
                                                                "value": {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "5027:1:5",
                                                                    "type": "",
                                                                    "value": "0"
                                                                },
                                                                "variables": [
                                                                    {
                                                                        "name": "value",
                                                                        "nodeType": "YulTypedName",
                                                                        "src": "5018:5:5",
                                                                        "type": ""
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "body": {
                                                                    "nodeType": "YulBlock",
                                                                    "src": "5051:67:5",
                                                                    "statements": [
                                                                        {
                                                                            "nodeType": "YulAssignment",
                                                                            "src": "5069:35:5",
                                                                            "value": {
                                                                                "arguments": [
                                                                                    {
                                                                                        "arguments": [
                                                                                            {
                                                                                                "name": "src",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "5088:3:5"
                                                                                            },
                                                                                            {
                                                                                                "name": "srcOffset",
                                                                                                "nodeType": "YulIdentifier",
                                                                                                "src": "5093:9:5"
                                                                                            }
                                                                                        ],
                                                                                        "functionName": {
                                                                                            "name": "add",
                                                                                            "nodeType": "YulIdentifier",
                                                                                            "src": "5084:3:5"
                                                                                        },
                                                                                        "nodeType": "YulFunctionCall",
                                                                                        "src": "5084:19:5"
                                                                                    }
                                                                                ],
                                                                                "functionName": {
                                                                                    "name": "mload",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "5078:5:5"
                                                                                },
                                                                                "nodeType": "YulFunctionCall",
                                                                                "src": "5078:26:5"
                                                                            },
                                                                            "variableNames": [
                                                                                {
                                                                                    "name": "value",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "5069:5:5"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                "condition": {
                                                                    "name": "newLen",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "5044:6:5"
                                                                },
                                                                "nodeType": "YulIf",
                                                                "src": "5041:77:5"
                                                            },
                                                            {
                                                                "expression": {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "slot",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "5138:4:5"
                                                                        },
                                                                        {
                                                                            "arguments": [
                                                                                {
                                                                                    "name": "value",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "5197:5:5"
                                                                                },
                                                                                {
                                                                                    "name": "newLen",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "5204:6:5"
                                                                                }
                                                                            ],
                                                                            "functionName": {
                                                                                "name": "extract_used_part_and_set_length_of_short_byte_array",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "5144:52:5"
                                                                            },
                                                                            "nodeType": "YulFunctionCall",
                                                                            "src": "5144:67:5"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "sstore",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "5131:6:5"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "5131:81:5"
                                                                },
                                                                "nodeType": "YulExpressionStatement",
                                                                "src": "5131:81:5"
                                                            }
                                                        ]
                                                    },
                                                    "nodeType": "YulCase",
                                                    "src": "4992:230:5",
                                                    "value": "default"
                                                }
                                            ],
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "name": "newLen",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "4345:6:5"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "4353:2:5",
                                                        "type": "",
                                                        "value": "31"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "gt",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "4342:2:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "4342:14:5"
                                            },
                                            "nodeType": "YulSwitch",
                                            "src": "4335:887:5"
                                        }
                                    ]
                                },
                                "name": "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "slot",
                                        "nodeType": "YulTypedName",
                                        "src": "3914:4:5",
                                        "type": ""
                                    },
                                    {
                                        "name": "src",
                                        "nodeType": "YulTypedName",
                                        "src": "3920:3:5",
                                        "type": ""
                                    }
                                ],
                                "src": "3833:1395:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "5262:152:5",
                                    "statements": [
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "5279:1:5",
                                                        "type": "",
                                                        "value": "0"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "5282:77:5",
                                                        "type": "",
                                                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "mstore",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5272:6:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "5272:88:5"
                                            },
                                            "nodeType": "YulExpressionStatement",
                                            "src": "5272:88:5"
                                        },
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "5376:1:5",
                                                        "type": "",
                                                        "value": "4"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "5379:4:5",
                                                        "type": "",
                                                        "value": "0x11"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "mstore",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5369:6:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "5369:15:5"
                                            },
                                            "nodeType": "YulExpressionStatement",
                                            "src": "5369:15:5"
                                        },
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "5400:1:5",
                                                        "type": "",
                                                        "value": "0"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "5403:4:5",
                                                        "type": "",
                                                        "value": "0x24"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "revert",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5393:6:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "5393:15:5"
                                            },
                                            "nodeType": "YulExpressionStatement",
                                            "src": "5393:15:5"
                                        }
                                    ]
                                },
                                "name": "panic_error_0x11",
                                "nodeType": "YulFunctionDefinition",
                                "src": "5234:180:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "5471:51:5",
                                    "statements": [
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "5481:34:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "5506:1:5",
                                                        "type": "",
                                                        "value": "1"
                                                    },
                                                    {
                                                        "name": "value",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "5509:5:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "shr",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5502:3:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "5502:13:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "newValue",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5481:8:5"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "name": "shift_right_1_unsigned",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "value",
                                        "nodeType": "YulTypedName",
                                        "src": "5452:5:5",
                                        "type": ""
                                    }
                                ],
                                "returnVariables": [
                                    {
                                        "name": "newValue",
                                        "nodeType": "YulTypedName",
                                        "src": "5462:8:5",
                                        "type": ""
                                    }
                                ],
                                "src": "5420:102:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "5601:775:5",
                                    "statements": [
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "5611:15:5",
                                            "value": {
                                                "name": "_power",
                                                "nodeType": "YulIdentifier",
                                                "src": "5620:6:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "power",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5611:5:5"
                                                }
                                            ]
                                        },
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "5635:14:5",
                                            "value": {
                                                "name": "_base",
                                                "nodeType": "YulIdentifier",
                                                "src": "5644:5:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "base",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5635:4:5"
                                                }
                                            ]
                                        },
                                        {
                                            "body": {
                                                "nodeType": "YulBlock",
                                                "src": "5693:677:5",
                                                "statements": [
                                                    {
                                                        "body": {
                                                            "nodeType": "YulBlock",
                                                            "src": "5781:22:5",
                                                            "statements": [
                                                                {
                                                                    "expression": {
                                                                        "arguments": [],
                                                                        "functionName": {
                                                                            "name": "panic_error_0x11",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "5783:16:5"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "5783:18:5"
                                                                    },
                                                                    "nodeType": "YulExpressionStatement",
                                                                    "src": "5783:18:5"
                                                                }
                                                            ]
                                                        },
                                                        "condition": {
                                                            "arguments": [
                                                                {
                                                                    "name": "base",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "5759:4:5"
                                                                },
                                                                {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "max",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "5769:3:5"
                                                                        },
                                                                        {
                                                                            "name": "base",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "5774:4:5"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "div",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "5765:3:5"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "5765:14:5"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "gt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "5756:2:5"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "5756:24:5"
                                                        },
                                                        "nodeType": "YulIf",
                                                        "src": "5753:50:5"
                                                    },
                                                    {
                                                        "body": {
                                                            "nodeType": "YulBlock",
                                                            "src": "5848:419:5",
                                                            "statements": [
                                                                {
                                                                    "nodeType": "YulAssignment",
                                                                    "src": "6228:25:5",
                                                                    "value": {
                                                                        "arguments": [
                                                                            {
                                                                                "name": "power",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "6241:5:5"
                                                                            },
                                                                            {
                                                                                "name": "base",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "6248:4:5"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "mul",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "6237:3:5"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "6237:16:5"
                                                                    },
                                                                    "variableNames": [
                                                                        {
                                                                            "name": "power",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "6228:5:5"
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        },
                                                        "condition": {
                                                            "arguments": [
                                                                {
                                                                    "name": "exponent",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "5823:8:5"
                                                                },
                                                                {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "5833:1:5",
                                                                    "type": "",
                                                                    "value": "1"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "and",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "5819:3:5"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "5819:16:5"
                                                        },
                                                        "nodeType": "YulIf",
                                                        "src": "5816:451:5"
                                                    },
                                                    {
                                                        "nodeType": "YulAssignment",
                                                        "src": "6280:23:5",
                                                        "value": {
                                                            "arguments": [
                                                                {
                                                                    "name": "base",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6292:4:5"
                                                                },
                                                                {
                                                                    "name": "base",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6298:4:5"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "mul",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "6288:3:5"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "6288:15:5"
                                                        },
                                                        "variableNames": [
                                                            {
                                                                "name": "base",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "6280:4:5"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "nodeType": "YulAssignment",
                                                        "src": "6316:44:5",
                                                        "value": {
                                                            "arguments": [
                                                                {
                                                                    "name": "exponent",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "6351:8:5"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "shift_right_1_unsigned",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "6328:22:5"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "6328:32:5"
                                                        },
                                                        "variableNames": [
                                                            {
                                                                "name": "exponent",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "6316:8:5"
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            "condition": {
                                                "arguments": [
                                                    {
                                                        "name": "exponent",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "5669:8:5"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "5679:1:5",
                                                        "type": "",
                                                        "value": "1"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "gt",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "5666:2:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "5666:15:5"
                                            },
                                            "nodeType": "YulForLoop",
                                            "post": {
                                                "nodeType": "YulBlock",
                                                "src": "5682:2:5",
                                                "statements": []
                                            },
                                            "pre": {
                                                "nodeType": "YulBlock",
                                                "src": "5662:3:5",
                                                "statements": []
                                            },
                                            "src": "5658:712:5"
                                        }
                                    ]
                                },
                                "name": "checked_exp_helper",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "_power",
                                        "nodeType": "YulTypedName",
                                        "src": "5556:6:5",
                                        "type": ""
                                    },
                                    {
                                        "name": "_base",
                                        "nodeType": "YulTypedName",
                                        "src": "5564:5:5",
                                        "type": ""
                                    },
                                    {
                                        "name": "exponent",
                                        "nodeType": "YulTypedName",
                                        "src": "5571:8:5",
                                        "type": ""
                                    },
                                    {
                                        "name": "max",
                                        "nodeType": "YulTypedName",
                                        "src": "5581:3:5",
                                        "type": ""
                                    }
                                ],
                                "returnVariables": [
                                    {
                                        "name": "power",
                                        "nodeType": "YulTypedName",
                                        "src": "5589:5:5",
                                        "type": ""
                                    },
                                    {
                                        "name": "base",
                                        "nodeType": "YulTypedName",
                                        "src": "5596:4:5",
                                        "type": ""
                                    }
                                ],
                                "src": "5528:848:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "6442:1013:5",
                                    "statements": [
                                        {
                                            "body": {
                                                "nodeType": "YulBlock",
                                                "src": "6637:20:5",
                                                "statements": [
                                                    {
                                                        "nodeType": "YulAssignment",
                                                        "src": "6639:10:5",
                                                        "value": {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "6648:1:5",
                                                            "type": "",
                                                            "value": "1"
                                                        },
                                                        "variableNames": [
                                                            {
                                                                "name": "power",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "6639:5:5"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "nodeType": "YulLeave",
                                                        "src": "6650:5:5"
                                                    }
                                                ]
                                            },
                                            "condition": {
                                                "arguments": [
                                                    {
                                                        "name": "exponent",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "6627:8:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "iszero",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "6620:6:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "6620:16:5"
                                            },
                                            "nodeType": "YulIf",
                                            "src": "6617:40:5"
                                        },
                                        {
                                            "body": {
                                                "nodeType": "YulBlock",
                                                "src": "6682:20:5",
                                                "statements": [
                                                    {
                                                        "nodeType": "YulAssignment",
                                                        "src": "6684:10:5",
                                                        "value": {
                                                            "kind": "number",
                                                            "nodeType": "YulLiteral",
                                                            "src": "6693:1:5",
                                                            "type": "",
                                                            "value": "0"
                                                        },
                                                        "variableNames": [
                                                            {
                                                                "name": "power",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "6684:5:5"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "nodeType": "YulLeave",
                                                        "src": "6695:5:5"
                                                    }
                                                ]
                                            },
                                            "condition": {
                                                "arguments": [
                                                    {
                                                        "name": "base",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "6676:4:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "iszero",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "6669:6:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "6669:12:5"
                                            },
                                            "nodeType": "YulIf",
                                            "src": "6666:36:5"
                                        },
                                        {
                                            "cases": [
                                                {
                                                    "body": {
                                                        "nodeType": "YulBlock",
                                                        "src": "6812:20:5",
                                                        "statements": [
                                                            {
                                                                "nodeType": "YulAssignment",
                                                                "src": "6814:10:5",
                                                                "value": {
                                                                    "kind": "number",
                                                                    "nodeType": "YulLiteral",
                                                                    "src": "6823:1:5",
                                                                    "type": "",
                                                                    "value": "1"
                                                                },
                                                                "variableNames": [
                                                                    {
                                                                        "name": "power",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6814:5:5"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "nodeType": "YulLeave",
                                                                "src": "6825:5:5"
                                                            }
                                                        ]
                                                    },
                                                    "nodeType": "YulCase",
                                                    "src": "6805:27:5",
                                                    "value": {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "6810:1:5",
                                                        "type": "",
                                                        "value": "1"
                                                    }
                                                },
                                                {
                                                    "body": {
                                                        "nodeType": "YulBlock",
                                                        "src": "6856:176:5",
                                                        "statements": [
                                                            {
                                                                "body": {
                                                                    "nodeType": "YulBlock",
                                                                    "src": "6891:22:5",
                                                                    "statements": [
                                                                        {
                                                                            "expression": {
                                                                                "arguments": [],
                                                                                "functionName": {
                                                                                    "name": "panic_error_0x11",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "6893:16:5"
                                                                                },
                                                                                "nodeType": "YulFunctionCall",
                                                                                "src": "6893:18:5"
                                                                            },
                                                                            "nodeType": "YulExpressionStatement",
                                                                            "src": "6893:18:5"
                                                                        }
                                                                    ]
                                                                },
                                                                "condition": {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "exponent",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "6876:8:5"
                                                                        },
                                                                        {
                                                                            "kind": "number",
                                                                            "nodeType": "YulLiteral",
                                                                            "src": "6886:3:5",
                                                                            "type": "",
                                                                            "value": "255"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "gt",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6873:2:5"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "6873:17:5"
                                                                },
                                                                "nodeType": "YulIf",
                                                                "src": "6870:43:5"
                                                            },
                                                            {
                                                                "nodeType": "YulAssignment",
                                                                "src": "6926:25:5",
                                                                "value": {
                                                                    "arguments": [
                                                                        {
                                                                            "kind": "number",
                                                                            "nodeType": "YulLiteral",
                                                                            "src": "6939:1:5",
                                                                            "type": "",
                                                                            "value": "2"
                                                                        },
                                                                        {
                                                                            "name": "exponent",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "6942:8:5"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "exp",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6935:3:5"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "6935:16:5"
                                                                },
                                                                "variableNames": [
                                                                    {
                                                                        "name": "power",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6926:5:5"
                                                                    }
                                                                ]
                                                            },
                                                            {
                                                                "body": {
                                                                    "nodeType": "YulBlock",
                                                                    "src": "6982:22:5",
                                                                    "statements": [
                                                                        {
                                                                            "expression": {
                                                                                "arguments": [],
                                                                                "functionName": {
                                                                                    "name": "panic_error_0x11",
                                                                                    "nodeType": "YulIdentifier",
                                                                                    "src": "6984:16:5"
                                                                                },
                                                                                "nodeType": "YulFunctionCall",
                                                                                "src": "6984:18:5"
                                                                            },
                                                                            "nodeType": "YulExpressionStatement",
                                                                            "src": "6984:18:5"
                                                                        }
                                                                    ]
                                                                },
                                                                "condition": {
                                                                    "arguments": [
                                                                        {
                                                                            "name": "power",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "6970:5:5"
                                                                        },
                                                                        {
                                                                            "name": "max",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "6977:3:5"
                                                                        }
                                                                    ],
                                                                    "functionName": {
                                                                        "name": "gt",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "6967:2:5"
                                                                    },
                                                                    "nodeType": "YulFunctionCall",
                                                                    "src": "6967:14:5"
                                                                },
                                                                "nodeType": "YulIf",
                                                                "src": "6964:40:5"
                                                            },
                                                            {
                                                                "nodeType": "YulLeave",
                                                                "src": "7017:5:5"
                                                            }
                                                        ]
                                                    },
                                                    "nodeType": "YulCase",
                                                    "src": "6841:191:5",
                                                    "value": {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "6846:1:5",
                                                        "type": "",
                                                        "value": "2"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "name": "base",
                                                "nodeType": "YulIdentifier",
                                                "src": "6762:4:5"
                                            },
                                            "nodeType": "YulSwitch",
                                            "src": "6755:277:5"
                                        },
                                        {
                                            "body": {
                                                "nodeType": "YulBlock",
                                                "src": "7164:123:5",
                                                "statements": [
                                                    {
                                                        "nodeType": "YulAssignment",
                                                        "src": "7178:28:5",
                                                        "value": {
                                                            "arguments": [
                                                                {
                                                                    "name": "base",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "7191:4:5"
                                                                },
                                                                {
                                                                    "name": "exponent",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "7197:8:5"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "exp",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "7187:3:5"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "7187:19:5"
                                                        },
                                                        "variableNames": [
                                                            {
                                                                "name": "power",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "7178:5:5"
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "body": {
                                                            "nodeType": "YulBlock",
                                                            "src": "7237:22:5",
                                                            "statements": [
                                                                {
                                                                    "expression": {
                                                                        "arguments": [],
                                                                        "functionName": {
                                                                            "name": "panic_error_0x11",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "7239:16:5"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "7239:18:5"
                                                                    },
                                                                    "nodeType": "YulExpressionStatement",
                                                                    "src": "7239:18:5"
                                                                }
                                                            ]
                                                        },
                                                        "condition": {
                                                            "arguments": [
                                                                {
                                                                    "name": "power",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "7225:5:5"
                                                                },
                                                                {
                                                                    "name": "max",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "7232:3:5"
                                                                }
                                                            ],
                                                            "functionName": {
                                                                "name": "gt",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "7222:2:5"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "7222:14:5"
                                                        },
                                                        "nodeType": "YulIf",
                                                        "src": "7219:40:5"
                                                    },
                                                    {
                                                        "nodeType": "YulLeave",
                                                        "src": "7272:5:5"
                                                    }
                                                ]
                                            },
                                            "condition": {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "name": "base",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "7067:4:5"
                                                                    },
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "7073:2:5",
                                                                        "type": "",
                                                                        "value": "11"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "lt",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "7064:2:5"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "7064:12:5"
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "name": "exponent",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "7081:8:5"
                                                                    },
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "7091:2:5",
                                                                        "type": "",
                                                                        "value": "78"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "lt",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "7078:2:5"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "7078:16:5"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "and",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "7060:3:5"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "7060:35:5"
                                                    },
                                                    {
                                                        "arguments": [
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "name": "base",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "7116:4:5"
                                                                    },
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "7122:3:5",
                                                                        "type": "",
                                                                        "value": "307"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "lt",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "7113:2:5"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "7113:13:5"
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "name": "exponent",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "7131:8:5"
                                                                    },
                                                                    {
                                                                        "kind": "number",
                                                                        "nodeType": "YulLiteral",
                                                                        "src": "7141:2:5",
                                                                        "type": "",
                                                                        "value": "32"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "lt",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "7128:2:5"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "7128:16:5"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "and",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "7109:3:5"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "7109:36:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "or",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "7044:2:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "7044:111:5"
                                            },
                                            "nodeType": "YulIf",
                                            "src": "7041:246:5"
                                        },
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "7297:57:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "7331:1:5",
                                                        "type": "",
                                                        "value": "1"
                                                    },
                                                    {
                                                        "name": "base",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "7334:4:5"
                                                    },
                                                    {
                                                        "name": "exponent",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "7340:8:5"
                                                    },
                                                    {
                                                        "name": "max",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "7350:3:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "checked_exp_helper",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "7312:18:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "7312:42:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "power",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "7297:5:5"
                                                },
                                                {
                                                    "name": "base",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "7304:4:5"
                                                }
                                            ]
                                        },
                                        {
                                            "body": {
                                                "nodeType": "YulBlock",
                                                "src": "7393:22:5",
                                                "statements": [
                                                    {
                                                        "expression": {
                                                            "arguments": [],
                                                            "functionName": {
                                                                "name": "panic_error_0x11",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "7395:16:5"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "7395:18:5"
                                                        },
                                                        "nodeType": "YulExpressionStatement",
                                                        "src": "7395:18:5"
                                                    }
                                                ]
                                            },
                                            "condition": {
                                                "arguments": [
                                                    {
                                                        "name": "power",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "7370:5:5"
                                                    },
                                                    {
                                                        "arguments": [
                                                            {
                                                                "name": "max",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "7381:3:5"
                                                            },
                                                            {
                                                                "name": "base",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "7386:4:5"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "div",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "7377:3:5"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "7377:14:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "gt",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "7367:2:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "7367:25:5"
                                            },
                                            "nodeType": "YulIf",
                                            "src": "7364:51:5"
                                        },
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "7424:25:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "power",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "7437:5:5"
                                                    },
                                                    {
                                                        "name": "base",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "7444:4:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "mul",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "7433:3:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "7433:16:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "power",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "7424:5:5"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "name": "checked_exp_unsigned",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "base",
                                        "nodeType": "YulTypedName",
                                        "src": "6412:4:5",
                                        "type": ""
                                    },
                                    {
                                        "name": "exponent",
                                        "nodeType": "YulTypedName",
                                        "src": "6418:8:5",
                                        "type": ""
                                    },
                                    {
                                        "name": "max",
                                        "nodeType": "YulTypedName",
                                        "src": "6428:3:5",
                                        "type": ""
                                    }
                                ],
                                "returnVariables": [
                                    {
                                        "name": "power",
                                        "nodeType": "YulTypedName",
                                        "src": "6436:5:5",
                                        "type": ""
                                    }
                                ],
                                "src": "6382:1073:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "7504:43:5",
                                    "statements": [
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "7514:27:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "value",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "7529:5:5"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "7536:4:5",
                                                        "type": "",
                                                        "value": "0xff"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "and",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "7525:3:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "7525:16:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "cleaned",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "7514:7:5"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "name": "cleanup_t_uint8",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "value",
                                        "nodeType": "YulTypedName",
                                        "src": "7486:5:5",
                                        "type": ""
                                    }
                                ],
                                "returnVariables": [
                                    {
                                        "name": "cleaned",
                                        "nodeType": "YulTypedName",
                                        "src": "7496:7:5",
                                        "type": ""
                                    }
                                ],
                                "src": "7461:86:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "7617:217:5",
                                    "statements": [
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "7627:31:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "base",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "7653:4:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "cleanup_t_uint256",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "7635:17:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "7635:23:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "base",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "7627:4:5"
                                                }
                                            ]
                                        },
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "7667:37:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "exponent",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "7695:8:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "cleanup_t_uint8",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "7679:15:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "7679:25:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "exponent",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "7667:8:5"
                                                }
                                            ]
                                        },
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "7714:113:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "base",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "7744:4:5"
                                                    },
                                                    {
                                                        "name": "exponent",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "7750:8:5"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "7760:66:5",
                                                        "type": "",
                                                        "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "checked_exp_unsigned",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "7723:20:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "7723:104:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "power",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "7714:5:5"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "name": "checked_exp_t_uint256_t_uint8",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "base",
                                        "nodeType": "YulTypedName",
                                        "src": "7592:4:5",
                                        "type": ""
                                    },
                                    {
                                        "name": "exponent",
                                        "nodeType": "YulTypedName",
                                        "src": "7598:8:5",
                                        "type": ""
                                    }
                                ],
                                "returnVariables": [
                                    {
                                        "name": "power",
                                        "nodeType": "YulTypedName",
                                        "src": "7611:5:5",
                                        "type": ""
                                    }
                                ],
                                "src": "7553:281:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "7888:362:5",
                                    "statements": [
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "7898:25:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "x",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "7921:1:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "cleanup_t_uint256",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "7903:17:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "7903:20:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "x",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "7898:1:5"
                                                }
                                            ]
                                        },
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "7932:25:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "y",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "7955:1:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "cleanup_t_uint256",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "7937:17:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "7937:20:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "y",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "7932:1:5"
                                                }
                                            ]
                                        },
                                        {
                                            "nodeType": "YulVariableDeclaration",
                                            "src": "7966:28:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "x",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "7989:1:5"
                                                    },
                                                    {
                                                        "name": "y",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "7992:1:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "mul",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "7985:3:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "7985:9:5"
                                            },
                                            "variables": [
                                                {
                                                    "name": "product_raw",
                                                    "nodeType": "YulTypedName",
                                                    "src": "7970:11:5",
                                                    "type": ""
                                                }
                                            ]
                                        },
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "8003:41:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "product_raw",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8032:11:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "cleanup_t_uint256",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "8014:17:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "8014:30:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "product",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "8003:7:5"
                                                }
                                            ]
                                        },
                                        {
                                            "body": {
                                                "nodeType": "YulBlock",
                                                "src": "8221:22:5",
                                                "statements": [
                                                    {
                                                        "expression": {
                                                            "arguments": [],
                                                            "functionName": {
                                                                "name": "panic_error_0x11",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8223:16:5"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "8223:18:5"
                                                        },
                                                        "nodeType": "YulExpressionStatement",
                                                        "src": "8223:18:5"
                                                    }
                                                ]
                                            },
                                            "condition": {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "name": "x",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8154:1:5"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "iszero",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8147:6:5"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "8147:9:5"
                                                            },
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "name": "y",
                                                                        "nodeType": "YulIdentifier",
                                                                        "src": "8177:1:5"
                                                                    },
                                                                    {
                                                                        "arguments": [
                                                                            {
                                                                                "name": "product",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "8184:7:5"
                                                                            },
                                                                            {
                                                                                "name": "x",
                                                                                "nodeType": "YulIdentifier",
                                                                                "src": "8193:1:5"
                                                                            }
                                                                        ],
                                                                        "functionName": {
                                                                            "name": "div",
                                                                            "nodeType": "YulIdentifier",
                                                                            "src": "8180:3:5"
                                                                        },
                                                                        "nodeType": "YulFunctionCall",
                                                                        "src": "8180:15:5"
                                                                    }
                                                                ],
                                                                "functionName": {
                                                                    "name": "eq",
                                                                    "nodeType": "YulIdentifier",
                                                                    "src": "8174:2:5"
                                                                },
                                                                "nodeType": "YulFunctionCall",
                                                                "src": "8174:22:5"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "or",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "8127:2:5"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "8127:83:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "iszero",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "8107:6:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "8107:113:5"
                                            },
                                            "nodeType": "YulIf",
                                            "src": "8104:139:5"
                                        }
                                    ]
                                },
                                "name": "checked_mul_t_uint256",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "x",
                                        "nodeType": "YulTypedName",
                                        "src": "7871:1:5",
                                        "type": ""
                                    },
                                    {
                                        "name": "y",
                                        "nodeType": "YulTypedName",
                                        "src": "7874:1:5",
                                        "type": ""
                                    }
                                ],
                                "returnVariables": [
                                    {
                                        "name": "product",
                                        "nodeType": "YulTypedName",
                                        "src": "7880:7:5",
                                        "type": ""
                                    }
                                ],
                                "src": "7840:410:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "8352:73:5",
                                    "statements": [
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "name": "pos",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8369:3:5"
                                                    },
                                                    {
                                                        "name": "length",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8374:6:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "mstore",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "8362:6:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "8362:19:5"
                                            },
                                            "nodeType": "YulExpressionStatement",
                                            "src": "8362:19:5"
                                        },
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "8390:29:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "pos",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8409:3:5"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "8414:4:5",
                                                        "type": "",
                                                        "value": "0x20"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "add",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "8405:3:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "8405:14:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "updated_pos",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "8390:11:5"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "pos",
                                        "nodeType": "YulTypedName",
                                        "src": "8324:3:5",
                                        "type": ""
                                    },
                                    {
                                        "name": "length",
                                        "nodeType": "YulTypedName",
                                        "src": "8329:6:5",
                                        "type": ""
                                    }
                                ],
                                "returnVariables": [
                                    {
                                        "name": "updated_pos",
                                        "nodeType": "YulTypedName",
                                        "src": "8340:11:5",
                                        "type": ""
                                    }
                                ],
                                "src": "8256:169:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "8537:75:5",
                                    "statements": [
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "name": "memPtr",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "8559:6:5"
                                                            },
                                                            {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "8567:1:5",
                                                                "type": "",
                                                                "value": "0"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "add",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "8555:3:5"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "8555:14:5"
                                                    },
                                                    {
                                                        "hexValue": "45524332303a206d696e7420746f20746865207a65726f2061646472657373",
                                                        "kind": "string",
                                                        "nodeType": "YulLiteral",
                                                        "src": "8571:33:5",
                                                        "type": "",
                                                        "value": "ERC20: mint to the zero address"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "mstore",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "8548:6:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "8548:57:5"
                                            },
                                            "nodeType": "YulExpressionStatement",
                                            "src": "8548:57:5"
                                        }
                                    ]
                                },
                                "name": "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "memPtr",
                                        "nodeType": "YulTypedName",
                                        "src": "8529:6:5",
                                        "type": ""
                                    }
                                ],
                                "src": "8431:181:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "8764:220:5",
                                    "statements": [
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "8774:74:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "pos",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8840:3:5"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "8845:2:5",
                                                        "type": "",
                                                        "value": "31"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "8781:58:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "8781:67:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "pos",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "8774:3:5"
                                                }
                                            ]
                                        },
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "name": "pos",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8946:3:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "8857:88:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "8857:93:5"
                                            },
                                            "nodeType": "YulExpressionStatement",
                                            "src": "8857:93:5"
                                        },
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "8959:19:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "pos",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "8970:3:5"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "8975:2:5",
                                                        "type": "",
                                                        "value": "32"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "add",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "8966:3:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "8966:12:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "end",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "8959:3:5"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "name": "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "pos",
                                        "nodeType": "YulTypedName",
                                        "src": "8752:3:5",
                                        "type": ""
                                    }
                                ],
                                "returnVariables": [
                                    {
                                        "name": "end",
                                        "nodeType": "YulTypedName",
                                        "src": "8760:3:5",
                                        "type": ""
                                    }
                                ],
                                "src": "8618:366:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "9161:248:5",
                                    "statements": [
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "9171:26:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "headStart",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9183:9:5"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "9194:2:5",
                                                        "type": "",
                                                        "value": "32"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "add",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "9179:3:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "9179:18:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "tail",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "9171:4:5"
                                                }
                                            ]
                                        },
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "arguments": [
                                                            {
                                                                "name": "headStart",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "9218:9:5"
                                                            },
                                                            {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "9229:1:5",
                                                                "type": "",
                                                                "value": "0"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "add",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "9214:3:5"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "9214:17:5"
                                                    },
                                                    {
                                                        "arguments": [
                                                            {
                                                                "name": "tail",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "9237:4:5"
                                                            },
                                                            {
                                                                "name": "headStart",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "9243:9:5"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "sub",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "9233:3:5"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "9233:20:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "mstore",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "9207:6:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "9207:47:5"
                                            },
                                            "nodeType": "YulExpressionStatement",
                                            "src": "9207:47:5"
                                        },
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "9263:139:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "tail",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9397:4:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "9271:124:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "9271:131:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "tail",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "9263:4:5"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                "name": "abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "headStart",
                                        "nodeType": "YulTypedName",
                                        "src": "9141:9:5",
                                        "type": ""
                                    }
                                ],
                                "returnVariables": [
                                    {
                                        "name": "tail",
                                        "nodeType": "YulTypedName",
                                        "src": "9156:4:5",
                                        "type": ""
                                    }
                                ],
                                "src": "8990:419:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "9459:147:5",
                                    "statements": [
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "9469:25:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "x",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9492:1:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "cleanup_t_uint256",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "9474:17:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "9474:20:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "x",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "9469:1:5"
                                                }
                                            ]
                                        },
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "9503:25:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "y",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9526:1:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "cleanup_t_uint256",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "9508:17:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "9508:20:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "y",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "9503:1:5"
                                                }
                                            ]
                                        },
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "9537:16:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "x",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9548:1:5"
                                                    },
                                                    {
                                                        "name": "y",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9551:1:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "add",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "9544:3:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "9544:9:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "sum",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "9537:3:5"
                                                }
                                            ]
                                        },
                                        {
                                            "body": {
                                                "nodeType": "YulBlock",
                                                "src": "9577:22:5",
                                                "statements": [
                                                    {
                                                        "expression": {
                                                            "arguments": [],
                                                            "functionName": {
                                                                "name": "panic_error_0x11",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "9579:16:5"
                                                            },
                                                            "nodeType": "YulFunctionCall",
                                                            "src": "9579:18:5"
                                                        },
                                                        "nodeType": "YulExpressionStatement",
                                                        "src": "9579:18:5"
                                                    }
                                                ]
                                            },
                                            "condition": {
                                                "arguments": [
                                                    {
                                                        "name": "x",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9569:1:5"
                                                    },
                                                    {
                                                        "name": "sum",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9572:3:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "gt",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "9566:2:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "9566:10:5"
                                            },
                                            "nodeType": "YulIf",
                                            "src": "9563:36:5"
                                        }
                                    ]
                                },
                                "name": "checked_add_t_uint256",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "x",
                                        "nodeType": "YulTypedName",
                                        "src": "9446:1:5",
                                        "type": ""
                                    },
                                    {
                                        "name": "y",
                                        "nodeType": "YulTypedName",
                                        "src": "9449:1:5",
                                        "type": ""
                                    }
                                ],
                                "returnVariables": [
                                    {
                                        "name": "sum",
                                        "nodeType": "YulTypedName",
                                        "src": "9455:3:5",
                                        "type": ""
                                    }
                                ],
                                "src": "9415:191:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "9677:53:5",
                                    "statements": [
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "name": "pos",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9694:3:5"
                                                    },
                                                    {
                                                        "arguments": [
                                                            {
                                                                "name": "value",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "9717:5:5"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "cleanup_t_uint256",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "9699:17:5"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "9699:24:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "mstore",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "9687:6:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "9687:37:5"
                                            },
                                            "nodeType": "YulExpressionStatement",
                                            "src": "9687:37:5"
                                        }
                                    ]
                                },
                                "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "value",
                                        "nodeType": "YulTypedName",
                                        "src": "9665:5:5",
                                        "type": ""
                                    },
                                    {
                                        "name": "pos",
                                        "nodeType": "YulTypedName",
                                        "src": "9672:3:5",
                                        "type": ""
                                    }
                                ],
                                "src": "9612:118:5"
                            },
                            {
                                "body": {
                                    "nodeType": "YulBlock",
                                    "src": "9834:124:5",
                                    "statements": [
                                        {
                                            "nodeType": "YulAssignment",
                                            "src": "9844:26:5",
                                            "value": {
                                                "arguments": [
                                                    {
                                                        "name": "headStart",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9856:9:5"
                                                    },
                                                    {
                                                        "kind": "number",
                                                        "nodeType": "YulLiteral",
                                                        "src": "9867:2:5",
                                                        "type": "",
                                                        "value": "32"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "add",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "9852:3:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "9852:18:5"
                                            },
                                            "variableNames": [
                                                {
                                                    "name": "tail",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "9844:4:5"
                                                }
                                            ]
                                        },
                                        {
                                            "expression": {
                                                "arguments": [
                                                    {
                                                        "name": "value0",
                                                        "nodeType": "YulIdentifier",
                                                        "src": "9924:6:5"
                                                    },
                                                    {
                                                        "arguments": [
                                                            {
                                                                "name": "headStart",
                                                                "nodeType": "YulIdentifier",
                                                                "src": "9937:9:5"
                                                            },
                                                            {
                                                                "kind": "number",
                                                                "nodeType": "YulLiteral",
                                                                "src": "9948:1:5",
                                                                "type": "",
                                                                "value": "0"
                                                            }
                                                        ],
                                                        "functionName": {
                                                            "name": "add",
                                                            "nodeType": "YulIdentifier",
                                                            "src": "9933:3:5"
                                                        },
                                                        "nodeType": "YulFunctionCall",
                                                        "src": "9933:17:5"
                                                    }
                                                ],
                                                "functionName": {
                                                    "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                                                    "nodeType": "YulIdentifier",
                                                    "src": "9880:43:5"
                                                },
                                                "nodeType": "YulFunctionCall",
                                                "src": "9880:71:5"
                                            },
                                            "nodeType": "YulExpressionStatement",
                                            "src": "9880:71:5"
                                        }
                                    ]
                                },
                                "name": "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
                                "nodeType": "YulFunctionDefinition",
                                "parameters": [
                                    {
                                        "name": "headStart",
                                        "nodeType": "YulTypedName",
                                        "src": "9806:9:5",
                                        "type": ""
                                    },
                                    {
                                        "name": "value0",
                                        "nodeType": "YulTypedName",
                                        "src": "9818:6:5",
                                        "type": ""
                                    }
                                ],
                                "returnVariables": [
                                    {
                                        "name": "tail",
                                        "nodeType": "YulTypedName",
                                        "src": "9829:4:5",
                                        "type": ""
                                    }
                                ],
                                "src": "9736:222:5"
                            }
                        ]
                    },
                    "contents": "{\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function array_dataslot_t_string_storage(ptr) -> data {\n        data := ptr\n\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n\n    }\n\n    function divide_by_32_ceil(value) -> result {\n        result := div(add(value, 31), 32)\n    }\n\n    function shift_left_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shl(bits, value)\n\n    }\n\n    function update_byte_slice_dynamic32(value, shiftBytes, toInsert) -> result {\n        let shiftBits := mul(shiftBytes, 8)\n        let mask := shift_left_dynamic(shiftBits, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n        toInsert := shift_left_dynamic(shiftBits, toInsert)\n        value := and(value, not(mask))\n        result := or(value, and(toInsert, mask))\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint256_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_uint256(value)))\n    }\n\n    function prepare_store_t_uint256(value) -> ret {\n        ret := value\n    }\n\n    function update_storage_value_t_uint256_to_t_uint256(slot, offset, value_0) {\n        let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)\n        sstore(slot, update_byte_slice_dynamic32(sload(slot), offset, prepare_store_t_uint256(convertedValue_0)))\n    }\n\n    function zero_value_for_split_t_uint256() -> ret {\n        ret := 0\n    }\n\n    function storage_set_to_zero_t_uint256(slot, offset) {\n        let zero_0 := zero_value_for_split_t_uint256()\n        update_storage_value_t_uint256_to_t_uint256(slot, offset, zero_0)\n    }\n\n    function clear_storage_range_t_bytes1(start, end) {\n        for {} lt(start, end) { start := add(start, 1) }\n        {\n            storage_set_to_zero_t_uint256(start, 0)\n        }\n    }\n\n    function clean_up_bytearray_end_slots_t_string_storage(array, len, startIndex) {\n\n        if gt(len, 31) {\n            let dataArea := array_dataslot_t_string_storage(array)\n            let deleteStart := add(dataArea, divide_by_32_ceil(startIndex))\n            // If we are clearing array to be short byte array, we want to clear only data starting from array data area.\n            if lt(startIndex, 32) { deleteStart := dataArea }\n            clear_storage_range_t_bytes1(deleteStart, add(dataArea, divide_by_32_ceil(len)))\n        }\n\n    }\n\n    function shift_right_unsigned_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shr(bits, value)\n\n    }\n\n    function mask_bytes_dynamic(data, bytes) -> result {\n        let mask := not(shift_right_unsigned_dynamic(mul(8, bytes), not(0)))\n        result := and(data, mask)\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used {\n        // we want to save only elements that are part of the array after resizing\n        // others should be set to zero\n        data := mask_bytes_dynamic(data, len)\n        used := or(data, mul(2, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src) {\n\n        let newLen := array_length_t_string_memory_ptr(src)\n        // Make sure array length is sane\n        if gt(newLen, 0xffffffffffffffff) { panic_error_0x41() }\n\n        let oldLen := extract_byte_array_length(sload(slot))\n\n        // potentially truncate data\n        clean_up_bytearray_end_slots_t_string_storage(slot, oldLen, newLen)\n\n        let srcOffset := 0\n\n        srcOffset := 0x20\n\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(0x1f))\n\n            let dstPtr := array_dataslot_t_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, 0x20) } {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, 32)\n            }\n            if lt(loopEnd, newLen) {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, mask_bytes_dynamic(lastValue, and(newLen, 0x1f)))\n            }\n            sstore(slot, add(mul(newLen, 2), 1))\n        }\n        default {\n            let value := 0\n            if newLen {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function shift_right_1_unsigned(value) -> newValue {\n        newValue :=\n\n        shr(1, value)\n\n    }\n\n    function checked_exp_helper(_power, _base, exponent, max) -> power, base {\n        power := _power\n        base  := _base\n        for { } gt(exponent, 1) {}\n        {\n            // overflow check for base * base\n            if gt(base, div(max, base)) { panic_error_0x11() }\n            if and(exponent, 1)\n            {\n                // No checks for power := mul(power, base) needed, because the check\n                // for base * base above is sufficient, since:\n                // |power| <= base (proof by induction) and thus:\n                // |power * base| <= base * base <= max <= |min| (for signed)\n                // (this is equally true for signed and unsigned exp)\n                power := mul(power, base)\n            }\n            base := mul(base, base)\n            exponent := shift_right_1_unsigned(exponent)\n        }\n    }\n\n    function checked_exp_unsigned(base, exponent, max) -> power {\n        // This function currently cannot be inlined because of the\n        // \"leave\" statements. We have to improve the optimizer.\n\n        // Note that 0**0 == 1\n        if iszero(exponent) { power := 1 leave }\n        if iszero(base) { power := 0 leave }\n\n        // Specializations for small bases\n        switch base\n        // 0 is handled above\n        case 1 { power := 1 leave }\n        case 2\n        {\n            if gt(exponent, 255) { panic_error_0x11() }\n            power := exp(2, exponent)\n            if gt(power, max) { panic_error_0x11() }\n            leave\n        }\n        if or(\n            and(lt(base, 11), lt(exponent, 78)),\n            and(lt(base, 307), lt(exponent, 32))\n        )\n        {\n            power := exp(base, exponent)\n            if gt(power, max) { panic_error_0x11() }\n            leave\n        }\n\n        power, base := checked_exp_helper(1, base, exponent, max)\n\n        if gt(power, div(max, base)) { panic_error_0x11() }\n        power := mul(power, base)\n    }\n\n    function cleanup_t_uint8(value) -> cleaned {\n        cleaned := and(value, 0xff)\n    }\n\n    function checked_exp_t_uint256_t_uint8(base, exponent) -> power {\n        base := cleanup_t_uint256(base)\n        exponent := cleanup_t_uint8(exponent)\n\n        power := checked_exp_unsigned(base, exponent, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n\n    }\n\n    function checked_mul_t_uint256(x, y) -> product {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        let product_raw := mul(x, y)\n        product := cleanup_t_uint256(product_raw)\n\n        // overflow, if x != 0 and y != product/x\n        if iszero(\n            or(\n                iszero(x),\n                eq(y, div(product, x))\n            )\n        ) { panic_error_0x11() }\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(memPtr) {\n\n        mstore(add(memPtr, 0), \"ERC20: mint to the zero address\")\n\n    }\n\n    function abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack(pos) -> end {\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, 31)\n        store_literal_in_memory_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e(pos)\n        end := add(pos, 32)\n    }\n\n    function abi_encode_tuple_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e__to_t_string_memory_ptr__fromStack_reversed(headStart ) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_stringliteral_fc0b381caf0a47702017f3c4b358ebe3d3aff6c60ce819a8bf3ef5a95d4f202e_to_t_string_memory_ptr_fromStack( tail)\n\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n        sum := add(x, y)\n\n        if gt(x, sum) { panic_error_0x11() }\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n}\n",
                    "id": 5,
                    "language": "Yul",
                    "name": "#utility.yul"
                }
            ],
            "linkReferences": {},
            "object": "60806040523480156200001157600080fd5b506040518060400160405280600581526020017f7669636b790000000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f564b59000000000000000000000000000000000000000000000000000000000081525081600390816200008f9190620004e2565b508060049081620000a19190620004e2565b505050620000e233620000b9620000e860201b60201c565b600a620000c7919062000759565b61022b620000d69190620007aa565b620000f160201b60201c565b620008e1565b60006012905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160362000163576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200015a9062000856565b60405180910390fd5b62000177600083836200025e60201b60201c565b80600260008282546200018b919062000878565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200023e9190620008c4565b60405180910390a36200025a600083836200026360201b60201c565b5050565b505050565b505050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620002ea57607f821691505b6020821081036200030057620002ff620002a2565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200036a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200032b565b6200037686836200032b565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620003c3620003bd620003b7846200038e565b62000398565b6200038e565b9050919050565b6000819050919050565b620003df83620003a2565b620003f7620003ee82620003ca565b84845462000338565b825550505050565b600090565b6200040e620003ff565b6200041b818484620003d4565b505050565b5b8181101562000443576200043760008262000404565b60018101905062000421565b5050565b601f82111562000492576200045c8162000306565b62000467846200031b565b8101602085101562000477578190505b6200048f62000486856200031b565b83018262000420565b50505b505050565b600082821c905092915050565b6000620004b76000198460080262000497565b1980831691505092915050565b6000620004d28383620004a4565b9150826002028217905092915050565b620004ed8262000268565b67ffffffffffffffff81111562000509576200050862000273565b5b620005158254620002d1565b6200052282828562000447565b600060209050601f8311600181146200055a576000841562000545578287015190505b620005518582620004c4565b865550620005c1565b601f1984166200056a8662000306565b60005b8281101562000594578489015182556001820191506020850194506020810190506200056d565b86831015620005b45784890151620005b0601f891682620004a4565b8355505b6001600288020188555050505b505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008160011c9050919050565b6000808291508390505b600185111562000657578086048111156200062f576200062e620005c9565b5b60018516156200063f5780820291505b80810290506200064f85620005f8565b94506200060f565b94509492505050565b60008262000672576001905062000745565b8162000682576000905062000745565b81600181146200069b5760028114620006a657620006dc565b600191505062000745565b60ff841115620006bb57620006ba620005c9565b5b8360020a915084821115620006d557620006d4620005c9565b5b5062000745565b5060208310610133831016604e8410600b8410161715620007165782820a90508381111562000710576200070f620005c9565b5b62000745565b62000725848484600162000605565b925090508184048111156200073f576200073e620005c9565b5b81810290505b9392505050565b600060ff82169050919050565b600062000766826200038e565b915062000773836200074c565b9250620007a27fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848462000660565b905092915050565b6000620007b7826200038e565b9150620007c4836200038e565b9250828202620007d4816200038e565b91508282048414831517620007ee57620007ed620005c9565b5b5092915050565b600082825260208201905092915050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b60006200083e601f83620007f5565b91506200084b8262000806565b602082019050919050565b6000602082019050818103600083015262000871816200082f565b9050919050565b600062000885826200038e565b915062000892836200038e565b9250828201905080821115620008ad57620008ac620005c9565b5b92915050565b620008be816200038e565b82525050565b6000602082019050620008db6000830184620008b3565b92915050565b61122f80620008f16000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461016857806370a082311461019857806395d89b41146101c8578063a457c2d7146101e6578063a9059cbb14610216578063dd62ed3e14610246576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100fc57806323b872dd1461011a578063313ce5671461014a575b600080fd5b6100b6610276565b6040516100c39190610b0c565b60405180910390f35b6100e660048036038101906100e19190610bc7565b610308565b6040516100f39190610c22565b60405180910390f35b61010461032b565b6040516101119190610c4c565b60405180910390f35b610134600480360381019061012f9190610c67565b610335565b6040516101419190610c22565b60405180910390f35b610152610364565b60405161015f9190610cd6565b60405180910390f35b610182600480360381019061017d9190610bc7565b61036d565b60405161018f9190610c22565b60405180910390f35b6101b260048036038101906101ad9190610cf1565b6103a4565b6040516101bf9190610c4c565b60405180910390f35b6101d06103ec565b6040516101dd9190610b0c565b60405180910390f35b61020060048036038101906101fb9190610bc7565b61047e565b60405161020d9190610c22565b60405180910390f35b610230600480360381019061022b9190610bc7565b6104f5565b60405161023d9190610c22565b60405180910390f35b610260600480360381019061025b9190610d1e565b610518565b60405161026d9190610c4c565b60405180910390f35b60606003805461028590610d8d565b80601f01602080910402602001604051908101604052809291908181526020018280546102b190610d8d565b80156102fe5780601f106102d3576101008083540402835291602001916102fe565b820191906000526020600020905b8154815290600101906020018083116102e157829003601f168201915b5050505050905090565b60008061031361059f565b90506103208185856105a7565b600191505092915050565b6000600254905090565b60008061034061059f565b905061034d858285610770565b6103588585856107fc565b60019150509392505050565b60006012905090565b60008061037861059f565b905061039981858561038a8589610518565b6103949190610ded565b6105a7565b600191505092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6060600480546103fb90610d8d565b80601f016020809104026020016040519081016040528092919081815260200182805461042790610d8d565b80156104745780601f1061044957610100808354040283529160200191610474565b820191906000526020600020905b81548152906001019060200180831161045757829003601f168201915b5050505050905090565b60008061048961059f565b905060006104978286610518565b9050838110156104dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d390610e93565b60405180910390fd5b6104e982868684036105a7565b60019250505092915050565b60008061050061059f565b905061050d8185856107fc565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610616576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161060d90610f25565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610685576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067c90610fb7565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516107639190610c4c565b60405180910390a3505050565b600061077c8484610518565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146107f657818110156107e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107df90611023565b60405180910390fd5b6107f584848484036105a7565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361086b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610862906110b5565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036108da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d190611147565b60405180910390fd5b6108e5838383610a72565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561096b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610962906111d9565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610a599190610c4c565b60405180910390a3610a6c848484610a77565b50505050565b505050565b505050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610ab6578082015181840152602081019050610a9b565b60008484015250505050565b6000601f19601f8301169050919050565b6000610ade82610a7c565b610ae88185610a87565b9350610af8818560208601610a98565b610b0181610ac2565b840191505092915050565b60006020820190508181036000830152610b268184610ad3565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610b5e82610b33565b9050919050565b610b6e81610b53565b8114610b7957600080fd5b50565b600081359050610b8b81610b65565b92915050565b6000819050919050565b610ba481610b91565b8114610baf57600080fd5b50565b600081359050610bc181610b9b565b92915050565b60008060408385031215610bde57610bdd610b2e565b5b6000610bec85828601610b7c565b9250506020610bfd85828601610bb2565b9150509250929050565b60008115159050919050565b610c1c81610c07565b82525050565b6000602082019050610c376000830184610c13565b92915050565b610c4681610b91565b82525050565b6000602082019050610c616000830184610c3d565b92915050565b600080600060608486031215610c8057610c7f610b2e565b5b6000610c8e86828701610b7c565b9350506020610c9f86828701610b7c565b9250506040610cb086828701610bb2565b9150509250925092565b600060ff82169050919050565b610cd081610cba565b82525050565b6000602082019050610ceb6000830184610cc7565b92915050565b600060208284031215610d0757610d06610b2e565b5b6000610d1584828501610b7c565b91505092915050565b60008060408385031215610d3557610d34610b2e565b5b6000610d4385828601610b7c565b9250506020610d5485828601610b7c565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610da557607f821691505b602082108103610db857610db7610d5e565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610df882610b91565b9150610e0383610b91565b9250828201905080821115610e1b57610e1a610dbe565b5b92915050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000610e7d602583610a87565b9150610e8882610e21565b604082019050919050565b60006020820190508181036000830152610eac81610e70565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000610f0f602483610a87565b9150610f1a82610eb3565b604082019050919050565b60006020820190508181036000830152610f3e81610f02565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000610fa1602283610a87565b9150610fac82610f45565b604082019050919050565b60006020820190508181036000830152610fd081610f94565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b600061100d601d83610a87565b915061101882610fd7565b602082019050919050565b6000602082019050818103600083015261103c81611000565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061109f602583610a87565b91506110aa82611043565b604082019050919050565b600060208201905081810360008301526110ce81611092565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611131602383610a87565b915061113c826110d5565b604082019050919050565b6000602082019050818103600083015261116081611124565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006111c3602683610a87565b91506111ce82611167565b604082019050919050565b600060208201905081810360008301526111f2816111b6565b905091905056fea264697066735822122047de6ec6459f1d101ff0ae51ff2fe5853393fd71f493a2eda802659141f3fb5a64736f6c63430008110033",
            "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH3 0x11 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x5 DUP2 MSTORE PUSH1 0x20 ADD PUSH32 0x7669636B79000000000000000000000000000000000000000000000000000000 DUP2 MSTORE POP PUSH1 0x40 MLOAD DUP1 PUSH1 0x40 ADD PUSH1 0x40 MSTORE DUP1 PUSH1 0x3 DUP2 MSTORE PUSH1 0x20 ADD PUSH32 0x564B590000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE POP DUP2 PUSH1 0x3 SWAP1 DUP2 PUSH3 0x8F SWAP2 SWAP1 PUSH3 0x4E2 JUMP JUMPDEST POP DUP1 PUSH1 0x4 SWAP1 DUP2 PUSH3 0xA1 SWAP2 SWAP1 PUSH3 0x4E2 JUMP JUMPDEST POP POP POP PUSH3 0xE2 CALLER PUSH3 0xB9 PUSH3 0xE8 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST PUSH1 0xA PUSH3 0xC7 SWAP2 SWAP1 PUSH3 0x759 JUMP JUMPDEST PUSH2 0x22B PUSH3 0xD6 SWAP2 SWAP1 PUSH3 0x7AA JUMP JUMPDEST PUSH3 0xF1 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST PUSH3 0x8E1 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x12 SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SUB PUSH3 0x163 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH3 0x15A SWAP1 PUSH3 0x856 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH3 0x177 PUSH1 0x0 DUP4 DUP4 PUSH3 0x25E PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST DUP1 PUSH1 0x2 PUSH1 0x0 DUP3 DUP3 SLOAD PUSH3 0x18B SWAP2 SWAP1 PUSH3 0x878 JUMP JUMPDEST SWAP3 POP POP DUP2 SWAP1 SSTORE POP DUP1 PUSH1 0x0 DUP1 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP3 DUP3 SLOAD ADD SWAP3 POP POP DUP2 SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF DUP4 PUSH1 0x40 MLOAD PUSH3 0x23E SWAP2 SWAP1 PUSH3 0x8C4 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 PUSH3 0x25A PUSH1 0x0 DUP4 DUP4 PUSH3 0x263 PUSH1 0x20 SHL PUSH1 0x20 SHR JUMP JUMPDEST POP POP JUMP JUMPDEST POP POP POP JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x41 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x2 DUP3 DIV SWAP1 POP PUSH1 0x1 DUP3 AND DUP1 PUSH3 0x2EA JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 SUB PUSH3 0x300 JUMPI PUSH3 0x2FF PUSH3 0x2A2 JUMP JUMPDEST JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP DUP2 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 PUSH1 0x1F DUP4 ADD DIV SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 SHL SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x8 DUP4 MUL PUSH3 0x36A PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 PUSH3 0x32B JUMP JUMPDEST PUSH3 0x376 DUP7 DUP4 PUSH3 0x32B JUMP JUMPDEST SWAP6 POP DUP1 NOT DUP5 AND SWAP4 POP DUP1 DUP7 AND DUP5 OR SWAP3 POP POP POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x3C3 PUSH3 0x3BD PUSH3 0x3B7 DUP5 PUSH3 0x38E JUMP JUMPDEST PUSH3 0x398 JUMP JUMPDEST PUSH3 0x38E JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH3 0x3DF DUP4 PUSH3 0x3A2 JUMP JUMPDEST PUSH3 0x3F7 PUSH3 0x3EE DUP3 PUSH3 0x3CA JUMP JUMPDEST DUP5 DUP5 SLOAD PUSH3 0x338 JUMP JUMPDEST DUP3 SSTORE POP POP POP POP JUMP JUMPDEST PUSH1 0x0 SWAP1 JUMP JUMPDEST PUSH3 0x40E PUSH3 0x3FF JUMP JUMPDEST PUSH3 0x41B DUP2 DUP5 DUP5 PUSH3 0x3D4 JUMP JUMPDEST POP POP POP JUMP JUMPDEST JUMPDEST DUP2 DUP2 LT ISZERO PUSH3 0x443 JUMPI PUSH3 0x437 PUSH1 0x0 DUP3 PUSH3 0x404 JUMP JUMPDEST PUSH1 0x1 DUP2 ADD SWAP1 POP PUSH3 0x421 JUMP JUMPDEST POP POP JUMP JUMPDEST PUSH1 0x1F DUP3 GT ISZERO PUSH3 0x492 JUMPI PUSH3 0x45C DUP2 PUSH3 0x306 JUMP JUMPDEST PUSH3 0x467 DUP5 PUSH3 0x31B JUMP JUMPDEST DUP2 ADD PUSH1 0x20 DUP6 LT ISZERO PUSH3 0x477 JUMPI DUP2 SWAP1 POP JUMPDEST PUSH3 0x48F PUSH3 0x486 DUP6 PUSH3 0x31B JUMP JUMPDEST DUP4 ADD DUP3 PUSH3 0x420 JUMP JUMPDEST POP POP JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 SHR SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x4B7 PUSH1 0x0 NOT DUP5 PUSH1 0x8 MUL PUSH3 0x497 JUMP JUMPDEST NOT DUP1 DUP4 AND SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x4D2 DUP4 DUP4 PUSH3 0x4A4 JUMP JUMPDEST SWAP2 POP DUP3 PUSH1 0x2 MUL DUP3 OR SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH3 0x4ED DUP3 PUSH3 0x268 JUMP JUMPDEST PUSH8 0xFFFFFFFFFFFFFFFF DUP2 GT ISZERO PUSH3 0x509 JUMPI PUSH3 0x508 PUSH3 0x273 JUMP JUMPDEST JUMPDEST PUSH3 0x515 DUP3 SLOAD PUSH3 0x2D1 JUMP JUMPDEST PUSH3 0x522 DUP3 DUP3 DUP6 PUSH3 0x447 JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 SWAP1 POP PUSH1 0x1F DUP4 GT PUSH1 0x1 DUP2 EQ PUSH3 0x55A JUMPI PUSH1 0x0 DUP5 ISZERO PUSH3 0x545 JUMPI DUP3 DUP8 ADD MLOAD SWAP1 POP JUMPDEST PUSH3 0x551 DUP6 DUP3 PUSH3 0x4C4 JUMP JUMPDEST DUP7 SSTORE POP PUSH3 0x5C1 JUMP JUMPDEST PUSH1 0x1F NOT DUP5 AND PUSH3 0x56A DUP7 PUSH3 0x306 JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP3 DUP2 LT ISZERO PUSH3 0x594 JUMPI DUP5 DUP10 ADD MLOAD DUP3 SSTORE PUSH1 0x1 DUP3 ADD SWAP2 POP PUSH1 0x20 DUP6 ADD SWAP5 POP PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH3 0x56D JUMP JUMPDEST DUP7 DUP4 LT ISZERO PUSH3 0x5B4 JUMPI DUP5 DUP10 ADD MLOAD PUSH3 0x5B0 PUSH1 0x1F DUP10 AND DUP3 PUSH3 0x4A4 JUMP JUMPDEST DUP4 SSTORE POP JUMPDEST PUSH1 0x1 PUSH1 0x2 DUP9 MUL ADD DUP9 SSTORE POP POP POP JUMPDEST POP POP POP POP POP POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 DUP2 PUSH1 0x1 SHR SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP1 DUP3 SWAP2 POP DUP4 SWAP1 POP JUMPDEST PUSH1 0x1 DUP6 GT ISZERO PUSH3 0x657 JUMPI DUP1 DUP7 DIV DUP2 GT ISZERO PUSH3 0x62F JUMPI PUSH3 0x62E PUSH3 0x5C9 JUMP JUMPDEST JUMPDEST PUSH1 0x1 DUP6 AND ISZERO PUSH3 0x63F JUMPI DUP1 DUP3 MUL SWAP2 POP JUMPDEST DUP1 DUP2 MUL SWAP1 POP PUSH3 0x64F DUP6 PUSH3 0x5F8 JUMP JUMPDEST SWAP5 POP PUSH3 0x60F JUMP JUMPDEST SWAP5 POP SWAP5 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 PUSH3 0x672 JUMPI PUSH1 0x1 SWAP1 POP PUSH3 0x745 JUMP JUMPDEST DUP2 PUSH3 0x682 JUMPI PUSH1 0x0 SWAP1 POP PUSH3 0x745 JUMP JUMPDEST DUP2 PUSH1 0x1 DUP2 EQ PUSH3 0x69B JUMPI PUSH1 0x2 DUP2 EQ PUSH3 0x6A6 JUMPI PUSH3 0x6DC JUMP JUMPDEST PUSH1 0x1 SWAP2 POP POP PUSH3 0x745 JUMP JUMPDEST PUSH1 0xFF DUP5 GT ISZERO PUSH3 0x6BB JUMPI PUSH3 0x6BA PUSH3 0x5C9 JUMP JUMPDEST JUMPDEST DUP4 PUSH1 0x2 EXP SWAP2 POP DUP5 DUP3 GT ISZERO PUSH3 0x6D5 JUMPI PUSH3 0x6D4 PUSH3 0x5C9 JUMP JUMPDEST JUMPDEST POP PUSH3 0x745 JUMP JUMPDEST POP PUSH1 0x20 DUP4 LT PUSH2 0x133 DUP4 LT AND PUSH1 0x4E DUP5 LT PUSH1 0xB DUP5 LT AND OR ISZERO PUSH3 0x716 JUMPI DUP3 DUP3 EXP SWAP1 POP DUP4 DUP2 GT ISZERO PUSH3 0x710 JUMPI PUSH3 0x70F PUSH3 0x5C9 JUMP JUMPDEST JUMPDEST PUSH3 0x745 JUMP JUMPDEST PUSH3 0x725 DUP5 DUP5 DUP5 PUSH1 0x1 PUSH3 0x605 JUMP JUMPDEST SWAP3 POP SWAP1 POP DUP2 DUP5 DIV DUP2 GT ISZERO PUSH3 0x73F JUMPI PUSH3 0x73E PUSH3 0x5C9 JUMP JUMPDEST JUMPDEST DUP2 DUP2 MUL SWAP1 POP JUMPDEST SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0xFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x766 DUP3 PUSH3 0x38E JUMP JUMPDEST SWAP2 POP PUSH3 0x773 DUP4 PUSH3 0x74C JUMP JUMPDEST SWAP3 POP PUSH3 0x7A2 PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP5 DUP5 PUSH3 0x660 JUMP JUMPDEST SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x7B7 DUP3 PUSH3 0x38E JUMP JUMPDEST SWAP2 POP PUSH3 0x7C4 DUP4 PUSH3 0x38E JUMP JUMPDEST SWAP3 POP DUP3 DUP3 MUL PUSH3 0x7D4 DUP2 PUSH3 0x38E JUMP JUMPDEST SWAP2 POP DUP3 DUP3 DIV DUP5 EQ DUP4 ISZERO OR PUSH3 0x7EE JUMPI PUSH3 0x7ED PUSH3 0x5C9 JUMP JUMPDEST JUMPDEST POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x45524332303A206D696E7420746F20746865207A65726F206164647265737300 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x83E PUSH1 0x1F DUP4 PUSH3 0x7F5 JUMP JUMPDEST SWAP2 POP PUSH3 0x84B DUP3 PUSH3 0x806 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH3 0x871 DUP2 PUSH3 0x82F JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH3 0x885 DUP3 PUSH3 0x38E JUMP JUMPDEST SWAP2 POP PUSH3 0x892 DUP4 PUSH3 0x38E JUMP JUMPDEST SWAP3 POP DUP3 DUP3 ADD SWAP1 POP DUP1 DUP3 GT ISZERO PUSH3 0x8AD JUMPI PUSH3 0x8AC PUSH3 0x5C9 JUMP JUMPDEST JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH3 0x8BE DUP2 PUSH3 0x38E JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH3 0x8DB PUSH1 0x0 DUP4 ADD DUP5 PUSH3 0x8B3 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0x122F DUP1 PUSH3 0x8F1 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN INVALID PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x4 CALLDATASIZE LT PUSH2 0xA9 JUMPI PUSH1 0x0 CALLDATALOAD PUSH1 0xE0 SHR DUP1 PUSH4 0x39509351 GT PUSH2 0x71 JUMPI DUP1 PUSH4 0x39509351 EQ PUSH2 0x168 JUMPI DUP1 PUSH4 0x70A08231 EQ PUSH2 0x198 JUMPI DUP1 PUSH4 0x95D89B41 EQ PUSH2 0x1C8 JUMPI DUP1 PUSH4 0xA457C2D7 EQ PUSH2 0x1E6 JUMPI DUP1 PUSH4 0xA9059CBB EQ PUSH2 0x216 JUMPI DUP1 PUSH4 0xDD62ED3E EQ PUSH2 0x246 JUMPI PUSH2 0xA9 JUMP JUMPDEST DUP1 PUSH4 0x6FDDE03 EQ PUSH2 0xAE JUMPI DUP1 PUSH4 0x95EA7B3 EQ PUSH2 0xCC JUMPI DUP1 PUSH4 0x18160DDD EQ PUSH2 0xFC JUMPI DUP1 PUSH4 0x23B872DD EQ PUSH2 0x11A JUMPI DUP1 PUSH4 0x313CE567 EQ PUSH2 0x14A JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH2 0xB6 PUSH2 0x276 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xC3 SWAP2 SWAP1 PUSH2 0xB0C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0xE6 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0xE1 SWAP2 SWAP1 PUSH2 0xBC7 JUMP JUMPDEST PUSH2 0x308 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0xF3 SWAP2 SWAP1 PUSH2 0xC22 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x104 PUSH2 0x32B JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x111 SWAP2 SWAP1 PUSH2 0xC4C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x134 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x12F SWAP2 SWAP1 PUSH2 0xC67 JUMP JUMPDEST PUSH2 0x335 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x141 SWAP2 SWAP1 PUSH2 0xC22 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x152 PUSH2 0x364 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x15F SWAP2 SWAP1 PUSH2 0xCD6 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x182 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x17D SWAP2 SWAP1 PUSH2 0xBC7 JUMP JUMPDEST PUSH2 0x36D JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x18F SWAP2 SWAP1 PUSH2 0xC22 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x1B2 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x1AD SWAP2 SWAP1 PUSH2 0xCF1 JUMP JUMPDEST PUSH2 0x3A4 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1BF SWAP2 SWAP1 PUSH2 0xC4C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x1D0 PUSH2 0x3EC JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x1DD SWAP2 SWAP1 PUSH2 0xB0C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x200 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x1FB SWAP2 SWAP1 PUSH2 0xBC7 JUMP JUMPDEST PUSH2 0x47E JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x20D SWAP2 SWAP1 PUSH2 0xC22 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x230 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x22B SWAP2 SWAP1 PUSH2 0xBC7 JUMP JUMPDEST PUSH2 0x4F5 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x23D SWAP2 SWAP1 PUSH2 0xC22 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH2 0x260 PUSH1 0x4 DUP1 CALLDATASIZE SUB DUP2 ADD SWAP1 PUSH2 0x25B SWAP2 SWAP1 PUSH2 0xD1E JUMP JUMPDEST PUSH2 0x518 JUMP JUMPDEST PUSH1 0x40 MLOAD PUSH2 0x26D SWAP2 SWAP1 PUSH2 0xC4C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x60 PUSH1 0x3 DUP1 SLOAD PUSH2 0x285 SWAP1 PUSH2 0xD8D JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0x2B1 SWAP1 PUSH2 0xD8D JUMP JUMPDEST DUP1 ISZERO PUSH2 0x2FE JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x2D3 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x2FE JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x2E1 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x313 PUSH2 0x59F JUMP JUMPDEST SWAP1 POP PUSH2 0x320 DUP2 DUP6 DUP6 PUSH2 0x5A7 JUMP JUMPDEST PUSH1 0x1 SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x2 SLOAD SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x340 PUSH2 0x59F JUMP JUMPDEST SWAP1 POP PUSH2 0x34D DUP6 DUP3 DUP6 PUSH2 0x770 JUMP JUMPDEST PUSH2 0x358 DUP6 DUP6 DUP6 PUSH2 0x7FC JUMP JUMPDEST PUSH1 0x1 SWAP2 POP POP SWAP4 SWAP3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x12 SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x378 PUSH2 0x59F JUMP JUMPDEST SWAP1 POP PUSH2 0x399 DUP2 DUP6 DUP6 PUSH2 0x38A DUP6 DUP10 PUSH2 0x518 JUMP JUMPDEST PUSH2 0x394 SWAP2 SWAP1 PUSH2 0xDED JUMP JUMPDEST PUSH2 0x5A7 JUMP JUMPDEST PUSH1 0x1 SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x60 PUSH1 0x4 DUP1 SLOAD PUSH2 0x3FB SWAP1 PUSH2 0xD8D JUMP JUMPDEST DUP1 PUSH1 0x1F ADD PUSH1 0x20 DUP1 SWAP2 DIV MUL PUSH1 0x20 ADD PUSH1 0x40 MLOAD SWAP1 DUP2 ADD PUSH1 0x40 MSTORE DUP1 SWAP3 SWAP2 SWAP1 DUP2 DUP2 MSTORE PUSH1 0x20 ADD DUP3 DUP1 SLOAD PUSH2 0x427 SWAP1 PUSH2 0xD8D JUMP JUMPDEST DUP1 ISZERO PUSH2 0x474 JUMPI DUP1 PUSH1 0x1F LT PUSH2 0x449 JUMPI PUSH2 0x100 DUP1 DUP4 SLOAD DIV MUL DUP4 MSTORE SWAP2 PUSH1 0x20 ADD SWAP2 PUSH2 0x474 JUMP JUMPDEST DUP3 ADD SWAP2 SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 JUMPDEST DUP2 SLOAD DUP2 MSTORE SWAP1 PUSH1 0x1 ADD SWAP1 PUSH1 0x20 ADD DUP1 DUP4 GT PUSH2 0x457 JUMPI DUP3 SWAP1 SUB PUSH1 0x1F AND DUP3 ADD SWAP2 JUMPDEST POP POP POP POP POP SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x489 PUSH2 0x59F JUMP JUMPDEST SWAP1 POP PUSH1 0x0 PUSH2 0x497 DUP3 DUP7 PUSH2 0x518 JUMP JUMPDEST SWAP1 POP DUP4 DUP2 LT ISZERO PUSH2 0x4DC JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x4D3 SWAP1 PUSH2 0xE93 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x4E9 DUP3 DUP7 DUP7 DUP5 SUB PUSH2 0x5A7 JUMP JUMPDEST PUSH1 0x1 SWAP3 POP POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH2 0x500 PUSH2 0x59F JUMP JUMPDEST SWAP1 POP PUSH2 0x50D DUP2 DUP6 DUP6 PUSH2 0x7FC JUMP JUMPDEST PUSH1 0x1 SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1 PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 CALLER SWAP1 POP SWAP1 JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SUB PUSH2 0x616 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x60D SWAP1 PUSH2 0xF25 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SUB PUSH2 0x685 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x67C SWAP1 PUSH2 0xFB7 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP1 PUSH1 0x1 PUSH1 0x0 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP DUP2 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0x8C5BE1E5EBEC7D5BD14F71427D1E84F3DD0314C0F7B2291E5B200AC8C7C3B925 DUP4 PUSH1 0x40 MLOAD PUSH2 0x763 SWAP2 SWAP1 PUSH2 0xC4C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x77C DUP5 DUP5 PUSH2 0x518 JUMP JUMPDEST SWAP1 POP PUSH32 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP2 EQ PUSH2 0x7F6 JUMPI DUP2 DUP2 LT ISZERO PUSH2 0x7E8 JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x7DF SWAP1 PUSH2 0x1023 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x7F5 DUP5 DUP5 DUP5 DUP5 SUB PUSH2 0x5A7 JUMP JUMPDEST JUMPDEST POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP4 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SUB PUSH2 0x86B JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x862 SWAP1 PUSH2 0x10B5 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND SUB PUSH2 0x8DA JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x8D1 SWAP1 PUSH2 0x1147 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST PUSH2 0x8E5 DUP4 DUP4 DUP4 PUSH2 0xA72 JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 SLOAD SWAP1 POP DUP2 DUP2 LT ISZERO PUSH2 0x96B JUMPI PUSH1 0x40 MLOAD PUSH32 0x8C379A000000000000000000000000000000000000000000000000000000000 DUP2 MSTORE PUSH1 0x4 ADD PUSH2 0x962 SWAP1 PUSH2 0x11D9 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 REVERT JUMPDEST DUP2 DUP2 SUB PUSH1 0x0 DUP1 DUP7 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 DUP2 SWAP1 SSTORE POP DUP2 PUSH1 0x0 DUP1 DUP6 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP2 MSTORE PUSH1 0x20 ADD SWAP1 DUP2 MSTORE PUSH1 0x20 ADD PUSH1 0x0 KECCAK256 PUSH1 0x0 DUP3 DUP3 SLOAD ADD SWAP3 POP POP DUP2 SWAP1 SSTORE POP DUP3 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND DUP5 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF AND PUSH32 0xDDF252AD1BE2C89B69C2B068FC378DAA952BA7F163C4A11628F55A4DF523B3EF DUP5 PUSH1 0x40 MLOAD PUSH2 0xA59 SWAP2 SWAP1 PUSH2 0xC4C JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 LOG3 PUSH2 0xA6C DUP5 DUP5 DUP5 PUSH2 0xA77 JUMP JUMPDEST POP POP POP POP JUMP JUMPDEST POP POP POP JUMP JUMPDEST POP POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 MLOAD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP3 DUP3 MSTORE PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 JUMPDEST DUP4 DUP2 LT ISZERO PUSH2 0xAB6 JUMPI DUP1 DUP3 ADD MLOAD DUP2 DUP5 ADD MSTORE PUSH1 0x20 DUP2 ADD SWAP1 POP PUSH2 0xA9B JUMP JUMPDEST PUSH1 0x0 DUP5 DUP5 ADD MSTORE POP POP POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x1F NOT PUSH1 0x1F DUP4 ADD AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xADE DUP3 PUSH2 0xA7C JUMP JUMPDEST PUSH2 0xAE8 DUP2 DUP6 PUSH2 0xA87 JUMP JUMPDEST SWAP4 POP PUSH2 0xAF8 DUP2 DUP6 PUSH1 0x20 DUP7 ADD PUSH2 0xA98 JUMP JUMPDEST PUSH2 0xB01 DUP2 PUSH2 0xAC2 JUMP JUMPDEST DUP5 ADD SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0xB26 DUP2 DUP5 PUSH2 0xAD3 JUMP JUMPDEST SWAP1 POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x0 PUSH20 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xB5E DUP3 PUSH2 0xB33 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0xB6E DUP2 PUSH2 0xB53 JUMP JUMPDEST DUP2 EQ PUSH2 0xB79 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0xB8B DUP2 PUSH2 0xB65 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP2 SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0xBA4 DUP2 PUSH2 0xB91 JUMP JUMPDEST DUP2 EQ PUSH2 0xBAF JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP JUMP JUMPDEST PUSH1 0x0 DUP2 CALLDATALOAD SWAP1 POP PUSH2 0xBC1 DUP2 PUSH2 0xB9B JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0xBDE JUMPI PUSH2 0xBDD PUSH2 0xB2E JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0xBEC DUP6 DUP3 DUP7 ADD PUSH2 0xB7C JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH2 0xBFD DUP6 DUP3 DUP7 ADD PUSH2 0xBB2 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 DUP2 ISZERO ISZERO SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0xC1C DUP2 PUSH2 0xC07 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0xC37 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0xC13 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH2 0xC46 DUP2 PUSH2 0xB91 JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0xC61 PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0xC3D JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x0 PUSH1 0x60 DUP5 DUP7 SUB SLT ISZERO PUSH2 0xC80 JUMPI PUSH2 0xC7F PUSH2 0xB2E JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0xC8E DUP7 DUP3 DUP8 ADD PUSH2 0xB7C JUMP JUMPDEST SWAP4 POP POP PUSH1 0x20 PUSH2 0xC9F DUP7 DUP3 DUP8 ADD PUSH2 0xB7C JUMP JUMPDEST SWAP3 POP POP PUSH1 0x40 PUSH2 0xCB0 DUP7 DUP3 DUP8 ADD PUSH2 0xBB2 JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 POP SWAP3 JUMP JUMPDEST PUSH1 0x0 PUSH1 0xFF DUP3 AND SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH2 0xCD0 DUP2 PUSH2 0xCBA JUMP JUMPDEST DUP3 MSTORE POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP PUSH2 0xCEB PUSH1 0x0 DUP4 ADD DUP5 PUSH2 0xCC7 JUMP JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 DUP5 SUB SLT ISZERO PUSH2 0xD07 JUMPI PUSH2 0xD06 PUSH2 0xB2E JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0xD15 DUP5 DUP3 DUP6 ADD PUSH2 0xB7C JUMP JUMPDEST SWAP2 POP POP SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH1 0x0 DUP1 PUSH1 0x40 DUP4 DUP6 SUB SLT ISZERO PUSH2 0xD35 JUMPI PUSH2 0xD34 PUSH2 0xB2E JUMP JUMPDEST JUMPDEST PUSH1 0x0 PUSH2 0xD43 DUP6 DUP3 DUP7 ADD PUSH2 0xB7C JUMP JUMPDEST SWAP3 POP POP PUSH1 0x20 PUSH2 0xD54 DUP6 DUP3 DUP7 ADD PUSH2 0xB7C JUMP JUMPDEST SWAP2 POP POP SWAP3 POP SWAP3 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x22 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH1 0x2 DUP3 DIV SWAP1 POP PUSH1 0x1 DUP3 AND DUP1 PUSH2 0xDA5 JUMPI PUSH1 0x7F DUP3 AND SWAP2 POP JUMPDEST PUSH1 0x20 DUP3 LT DUP2 SUB PUSH2 0xDB8 JUMPI PUSH2 0xDB7 PUSH2 0xD5E JUMP JUMPDEST JUMPDEST POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x4E487B7100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 MSTORE PUSH1 0x11 PUSH1 0x4 MSTORE PUSH1 0x24 PUSH1 0x0 REVERT JUMPDEST PUSH1 0x0 PUSH2 0xDF8 DUP3 PUSH2 0xB91 JUMP JUMPDEST SWAP2 POP PUSH2 0xE03 DUP4 PUSH2 0xB91 JUMP JUMPDEST SWAP3 POP DUP3 DUP3 ADD SWAP1 POP DUP1 DUP3 GT ISZERO PUSH2 0xE1B JUMPI PUSH2 0xE1A PUSH2 0xDBE JUMP JUMPDEST JUMPDEST SWAP3 SWAP2 POP POP JUMP JUMPDEST PUSH32 0x45524332303A2064656372656173656420616C6C6F77616E63652062656C6F77 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x207A65726F000000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xE7D PUSH1 0x25 DUP4 PUSH2 0xA87 JUMP JUMPDEST SWAP2 POP PUSH2 0xE88 DUP3 PUSH2 0xE21 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0xEAC DUP2 PUSH2 0xE70 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x45524332303A20617070726F76652066726F6D20746865207A65726F20616464 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x7265737300000000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xF0F PUSH1 0x24 DUP4 PUSH2 0xA87 JUMP JUMPDEST SWAP2 POP PUSH2 0xF1A DUP3 PUSH2 0xEB3 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0xF3E DUP2 PUSH2 0xF02 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x45524332303A20617070726F766520746F20746865207A65726F206164647265 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x7373000000000000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0xFA1 PUSH1 0x22 DUP4 PUSH2 0xA87 JUMP JUMPDEST SWAP2 POP PUSH2 0xFAC DUP3 PUSH2 0xF45 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0xFD0 DUP2 PUSH2 0xF94 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x45524332303A20696E73756666696369656E7420616C6C6F77616E6365000000 PUSH1 0x0 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x100D PUSH1 0x1D DUP4 PUSH2 0xA87 JUMP JUMPDEST SWAP2 POP PUSH2 0x1018 DUP3 PUSH2 0xFD7 JUMP JUMPDEST PUSH1 0x20 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x103C DUP2 PUSH2 0x1000 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x45524332303A207472616E736665722066726F6D20746865207A65726F206164 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x6472657373000000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x109F PUSH1 0x25 DUP4 PUSH2 0xA87 JUMP JUMPDEST SWAP2 POP PUSH2 0x10AA DUP3 PUSH2 0x1043 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x10CE DUP2 PUSH2 0x1092 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x45524332303A207472616E7366657220746F20746865207A65726F2061646472 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x6573730000000000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x1131 PUSH1 0x23 DUP4 PUSH2 0xA87 JUMP JUMPDEST SWAP2 POP PUSH2 0x113C DUP3 PUSH2 0x10D5 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x1160 DUP2 PUSH2 0x1124 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH32 0x45524332303A207472616E7366657220616D6F756E7420657863656564732062 PUSH1 0x0 DUP3 ADD MSTORE PUSH32 0x616C616E63650000000000000000000000000000000000000000000000000000 PUSH1 0x20 DUP3 ADD MSTORE POP JUMP JUMPDEST PUSH1 0x0 PUSH2 0x11C3 PUSH1 0x26 DUP4 PUSH2 0xA87 JUMP JUMPDEST SWAP2 POP PUSH2 0x11CE DUP3 PUSH2 0x1167 JUMP JUMPDEST PUSH1 0x40 DUP3 ADD SWAP1 POP SWAP2 SWAP1 POP JUMP JUMPDEST PUSH1 0x0 PUSH1 0x20 DUP3 ADD SWAP1 POP DUP2 DUP2 SUB PUSH1 0x0 DUP4 ADD MSTORE PUSH2 0x11F2 DUP2 PUSH2 0x11B6 JUMP JUMPDEST SWAP1 POP SWAP2 SWAP1 POP JUMP INVALID LOG2 PUSH5 0x6970667358 0x22 SLT KECCAK256 SELFBALANCE 0xDE PUSH15 0xC6459F1D101FF0AE51FF2FE5853393 REVERT PUSH18 0xF493A2EDA802659141F3FB5A64736F6C6343 STOP ADDMOD GT STOP CALLER ",
            "sourceMap": "120:126:4:-:0;;;150:94;;;;;;;;;;1976:113:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2050:5;2042;:13;;;;;;:::i;:::-;;2075:7;2065;:17;;;;;;:::i;:::-;;1976:113;;196:41:4::1;202:10;226;:8;;;:10;;:::i;:::-;220:2;:16;;;;:::i;:::-;214:3;:22;;;;:::i;:::-;196:5;;;:41;;:::i;:::-;120:126:::0;;3091:91:0;3149:5;3173:2;3166:9;;3091:91;:::o;8567:535::-;8669:1;8650:21;;:7;:21;;;8642:65;;;;;;;;;;;;:::i;:::-;;;;;;;;;8718:49;8747:1;8751:7;8760:6;8718:20;;;:49;;:::i;:::-;8794:6;8778:12;;:22;;;;;;;:::i;:::-;;;;;;;;8968:6;8946:9;:18;8956:7;8946:18;;;;;;;;;;;;;;;;:28;;;;;;;;;;;9020:7;8999:37;;9016:1;8999:37;;;9029:6;8999:37;;;;;;:::i;:::-;;;;;;;;9047:48;9075:1;9079:7;9088:6;9047:19;;;:48;;:::i;:::-;8567:535;;:::o;12180:121::-;;;;:::o;12889:120::-;;;;:::o;7:99:5:-;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:180::-;160:77;157:1;150:88;257:4;254:1;247:15;281:4;278:1;271:15;298:180;346:77;343:1;336:88;443:4;440:1;433:15;467:4;464:1;457:15;484:320;528:6;565:1;559:4;555:12;545:22;;612:1;606:4;602:12;633:18;623:81;;689:4;681:6;677:17;667:27;;623:81;751:2;743:6;740:14;720:18;717:38;714:84;;770:18;;:::i;:::-;714:84;535:269;484:320;;;:::o;810:141::-;859:4;882:3;874:11;;905:3;902:1;895:14;939:4;936:1;926:18;918:26;;810:141;;;:::o;957:93::-;994:6;1041:2;1036;1029:5;1025:14;1021:23;1011:33;;957:93;;;:::o;1056:107::-;1100:8;1150:5;1144:4;1140:16;1119:37;;1056:107;;;;:::o;1169:393::-;1238:6;1288:1;1276:10;1272:18;1311:97;1341:66;1330:9;1311:97;:::i;:::-;1429:39;1459:8;1448:9;1429:39;:::i;:::-;1417:51;;1501:4;1497:9;1490:5;1486:21;1477:30;;1550:4;1540:8;1536:19;1529:5;1526:30;1516:40;;1245:317;;1169:393;;;;;:::o;1568:77::-;1605:7;1634:5;1623:16;;1568:77;;;:::o;1651:60::-;1679:3;1700:5;1693:12;;1651:60;;;:::o;1717:142::-;1767:9;1800:53;1818:34;1827:24;1845:5;1827:24;:::i;:::-;1818:34;:::i;:::-;1800:53;:::i;:::-;1787:66;;1717:142;;;:::o;1865:75::-;1908:3;1929:5;1922:12;;1865:75;;;:::o;1946:269::-;2056:39;2087:7;2056:39;:::i;:::-;2117:91;2166:41;2190:16;2166:41;:::i;:::-;2158:6;2151:4;2145:11;2117:91;:::i;:::-;2111:4;2104:105;2022:193;1946:269;;;:::o;2221:73::-;2266:3;2221:73;:::o;2300:189::-;2377:32;;:::i;:::-;2418:65;2476:6;2468;2462:4;2418:65;:::i;:::-;2353:136;2300:189;;:::o;2495:186::-;2555:120;2572:3;2565:5;2562:14;2555:120;;;2626:39;2663:1;2656:5;2626:39;:::i;:::-;2599:1;2592:5;2588:13;2579:22;;2555:120;;;2495:186;;:::o;2687:543::-;2788:2;2783:3;2780:11;2777:446;;;2822:38;2854:5;2822:38;:::i;:::-;2906:29;2924:10;2906:29;:::i;:::-;2896:8;2892:44;3089:2;3077:10;3074:18;3071:49;;;3110:8;3095:23;;3071:49;3133:80;3189:22;3207:3;3189:22;:::i;:::-;3179:8;3175:37;3162:11;3133:80;:::i;:::-;2792:431;;2777:446;2687:543;;;:::o;3236:117::-;3290:8;3340:5;3334:4;3330:16;3309:37;;3236:117;;;;:::o;3359:169::-;3403:6;3436:51;3484:1;3480:6;3472:5;3469:1;3465:13;3436:51;:::i;:::-;3432:56;3517:4;3511;3507:15;3497:25;;3410:118;3359:169;;;;:::o;3533:295::-;3609:4;3755:29;3780:3;3774:4;3755:29;:::i;:::-;3747:37;;3817:3;3814:1;3810:11;3804:4;3801:21;3793:29;;3533:295;;;;:::o;3833:1395::-;3950:37;3983:3;3950:37;:::i;:::-;4052:18;4044:6;4041:30;4038:56;;;4074:18;;:::i;:::-;4038:56;4118:38;4150:4;4144:11;4118:38;:::i;:::-;4203:67;4263:6;4255;4249:4;4203:67;:::i;:::-;4297:1;4321:4;4308:17;;4353:2;4345:6;4342:14;4370:1;4365:618;;;;5027:1;5044:6;5041:77;;;5093:9;5088:3;5084:19;5078:26;5069:35;;5041:77;5144:67;5204:6;5197:5;5144:67;:::i;:::-;5138:4;5131:81;5000:222;4335:887;;4365:618;4417:4;4413:9;4405:6;4401:22;4451:37;4483:4;4451:37;:::i;:::-;4510:1;4524:208;4538:7;4535:1;4532:14;4524:208;;;4617:9;4612:3;4608:19;4602:26;4594:6;4587:42;4668:1;4660:6;4656:14;4646:24;;4715:2;4704:9;4700:18;4687:31;;4561:4;4558:1;4554:12;4549:17;;4524:208;;;4760:6;4751:7;4748:19;4745:179;;;4818:9;4813:3;4809:19;4803:26;4861:48;4903:4;4895:6;4891:17;4880:9;4861:48;:::i;:::-;4853:6;4846:64;4768:156;4745:179;4970:1;4966;4958:6;4954:14;4950:22;4944:4;4937:36;4372:611;;;4335:887;;3925:1303;;;3833:1395;;:::o;5234:180::-;5282:77;5279:1;5272:88;5379:4;5376:1;5369:15;5403:4;5400:1;5393:15;5420:102;5462:8;5509:5;5506:1;5502:13;5481:34;;5420:102;;;:::o;5528:848::-;5589:5;5596:4;5620:6;5611:15;;5644:5;5635:14;;5658:712;5679:1;5669:8;5666:15;5658:712;;;5774:4;5769:3;5765:14;5759:4;5756:24;5753:50;;;5783:18;;:::i;:::-;5753:50;5833:1;5823:8;5819:16;5816:451;;;6248:4;6241:5;6237:16;6228:25;;5816:451;6298:4;6292;6288:15;6280:23;;6328:32;6351:8;6328:32;:::i;:::-;6316:44;;5658:712;;;5528:848;;;;;;;:::o;6382:1073::-;6436:5;6627:8;6617:40;;6648:1;6639:10;;6650:5;;6617:40;6676:4;6666:36;;6693:1;6684:10;;6695:5;;6666:36;6762:4;6810:1;6805:27;;;;6846:1;6841:191;;;;6755:277;;6805:27;6823:1;6814:10;;6825:5;;;6841:191;6886:3;6876:8;6873:17;6870:43;;;6893:18;;:::i;:::-;6870:43;6942:8;6939:1;6935:16;6926:25;;6977:3;6970:5;6967:14;6964:40;;;6984:18;;:::i;:::-;6964:40;7017:5;;;6755:277;;7141:2;7131:8;7128:16;7122:3;7116:4;7113:13;7109:36;7091:2;7081:8;7078:16;7073:2;7067:4;7064:12;7060:35;7044:111;7041:246;;;7197:8;7191:4;7187:19;7178:28;;7232:3;7225:5;7222:14;7219:40;;;7239:18;;:::i;:::-;7219:40;7272:5;;7041:246;7312:42;7350:3;7340:8;7334:4;7331:1;7312:42;:::i;:::-;7297:57;;;;7386:4;7381:3;7377:14;7370:5;7367:25;7364:51;;;7395:18;;:::i;:::-;7364:51;7444:4;7437:5;7433:16;7424:25;;6382:1073;;;;;;:::o;7461:86::-;7496:7;7536:4;7529:5;7525:16;7514:27;;7461:86;;;:::o;7553:281::-;7611:5;7635:23;7653:4;7635:23;:::i;:::-;7627:31;;7679:25;7695:8;7679:25;:::i;:::-;7667:37;;7723:104;7760:66;7750:8;7744:4;7723:104;:::i;:::-;7714:113;;7553:281;;;;:::o;7840:410::-;7880:7;7903:20;7921:1;7903:20;:::i;:::-;7898:25;;7937:20;7955:1;7937:20;:::i;:::-;7932:25;;7992:1;7989;7985:9;8014:30;8032:11;8014:30;:::i;:::-;8003:41;;8193:1;8184:7;8180:15;8177:1;8174:22;8154:1;8147:9;8127:83;8104:139;;8223:18;;:::i;:::-;8104:139;7888:362;7840:410;;;;:::o;8256:169::-;8340:11;8374:6;8369:3;8362:19;8414:4;8409:3;8405:14;8390:29;;8256:169;;;;:::o;8431:181::-;8571:33;8567:1;8559:6;8555:14;8548:57;8431:181;:::o;8618:366::-;8760:3;8781:67;8845:2;8840:3;8781:67;:::i;:::-;8774:74;;8857:93;8946:3;8857:93;:::i;:::-;8975:2;8970:3;8966:12;8959:19;;8618:366;;;:::o;8990:419::-;9156:4;9194:2;9183:9;9179:18;9171:26;;9243:9;9237:4;9233:20;9229:1;9218:9;9214:17;9207:47;9271:131;9397:4;9271:131;:::i;:::-;9263:139;;8990:419;;;:::o;9415:191::-;9455:3;9474:20;9492:1;9474:20;:::i;:::-;9469:25;;9508:20;9526:1;9508:20;:::i;:::-;9503:25;;9551:1;9548;9544:9;9537:16;;9572:3;9569:1;9566:10;9563:36;;;9579:18;;:::i;:::-;9563:36;9415:191;;;;:::o;9612:118::-;9699:24;9717:5;9699:24;:::i;:::-;9694:3;9687:37;9612:118;;:::o;9736:222::-;9829:4;9867:2;9856:9;9852:18;9844:26;;9880:71;9948:1;9937:9;9933:17;9924:6;9880:71;:::i;:::-;9736:222;;;;:::o;120:126:4:-;;;;;;;"
        }
      const tronWeb = window.tronWeb;
      const accounts = await tronWeb.defaultAddress.base58;
      const tokenContract = new tronWeb.eth.Contract(tokenContractAbi);
      const result = await tokenContract.deploy({
        data: '0x' + bytecode,
        arguments: [tokenName, tokenSymbol, totalSupply]
      }).send({
        from: accounts,
        gas: 1000000,
        gasPrice: 1000000000
      });
      console.log('Token created with address: ', result.options.address);
    } catch (err) {
      console.error(err);
    }
  }
// getting out
  return (
    <div>
      <button onClick={connectWithTronLink}>Connect with TronLink</button>
      <div>
        <label>Token Name:</label>
        <input type="text" value={tokenName} onChange={(e) => setTokenName(e.target.value)} />
      </div>
      <div>
        <label>Token Symbol:</label>
        <input type="text" value={tokenSymbol} onChange={(e) => setTokenSymbol(e.target.value)} />
      </div>
      <div>
        <label>Total Supply:</label>
        <input type="number" value={totalSupply} onChange={(e) => setTotalSupply(e.target.value)} />
      </div>
      {account &&
        <button onClick={createToken}>Create Token</button>
      }
    </div>
  );
}

export default CreateTokenButton;