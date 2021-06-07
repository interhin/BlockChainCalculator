// const CALCULATOR_ABI = [
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "a",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "b",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "divide",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "result",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "pure",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "a",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "b",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "minus",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "result",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "pure",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "a",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "b",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "multiply",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "result",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "pure",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "a",
// 				"type": "uint256"
// 			},
// 			{
// 				"internalType": "uint256",
// 				"name": "b",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "plus",
// 		"outputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "result",
// 				"type": "uint256"
// 			}
// 		],
// 		"stateMutability": "pure",
// 		"type": "function"
// 	}
// ]

// const CALCULATOR_ADDRESS = '0x00C1aD490a17dEA5EEFaCe8C174a92b7cb21796c';
const CALCULATOR_ADDRESS = '0x8DE83B6922cF9cb6590491adAA12541824F3AD0a';
const CALCULATOR_ABI = [{"inputs":[{"internalType":"uint256","name":"a","type":"uint256"},{"internalType":"uint256","name":"b","type":"uint256"}],"name":"divide","outputs":[{"internalType":"uint256","name":"result","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"a","type":"uint256"},{"internalType":"uint256","name":"b","type":"uint256"}],"name":"minus","outputs":[{"internalType":"uint256","name":"result","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"a","type":"uint256"},{"internalType":"uint256","name":"b","type":"uint256"}],"name":"multiply","outputs":[{"internalType":"uint256","name":"result","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"a","type":"uint256"},{"internalType":"uint256","name":"b","type":"uint256"}],"name":"plus","outputs":[{"internalType":"uint256","name":"result","type":"uint256"}],"stateMutability":"pure","type":"function"}];

module.exports = {
	CALCULATOR_ABI,
	CALCULATOR_ADDRESS
};