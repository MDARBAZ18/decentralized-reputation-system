import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

// Replace with your deployed contract address
const CONTRACT_ADDRESS = "0x24b32bA77c1f9178EB560205F459e653b05624eD";

// ABI (simplified for frontend use)
const ABI =[
	{
		"inputs": [],
		"name": "mintSBT",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			}
		],
		"name": "transfer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_points",
				"type": "uint256"
			}
		],
		"name": "updateReputation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getReputation",
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
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "getTokenOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "tokenCounter",
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "tokenOwners",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "reputation",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "hasMinted",
				"type": "bool"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

export default function App() {
  const [account, setAccount] = useState(null);
  const [reputation, setReputation] = useState(0);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      connectWallet();
    }
  }, []);

  async function connectWallet() {
    const provider = new ethers.BrowserProvider(window.ethereum);
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    setAccount(address);

    const repContract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
    setContract(repContract);

    const rep = await repContract.getReputation(address);
    setReputation(Number(rep));
  }

  async function mintSBT() {
    if (!contract) return;
    const tx = await contract.mintSBT();
    await tx.wait();
    alert("SBT Minted Successfully!");
  }

  async function simulateAction() {
    if (!contract) return;
    const tx = await contract.updateReputation(account, 10); // Add 10 points
    await tx.wait();
    const rep = await contract.getReputation(account);
    setReputation(Number(rep));
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Decentralized Reputation DApp</h1>
      {account ? (
        <>
          <p className="mb-2">Connected Wallet: {account}</p>
          <p className="mb-4">Your Reputation Score: {reputation}</p>
          <button
            onClick={simulateAction}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
          >
            Simulate Action (Add 10 Points)
          </button>
          <button
            onClick={mintSBT}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Mint Soulbound Token
          </button>
        </>
      ) : (
        <button
          onClick={connectWallet}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}