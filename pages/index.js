import React, { useState } from 'react';
import { ethers } from 'ethers';
import SimpleWalletABI from '../artifacts/contracts/SimpleWallet.sol/SimpleWallet.json';// Replace with the actual path after compilation of smart contract

const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // Replace with the actual contract address after deployment

function App() {
  const [amount, setAmount] = useState('');
  const [balance, setBalance] = useState(0);

  const connectToMetamask = async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
    }
  };

  const getBalance = async () => {
    if (!window.ethereum) return;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, SimpleWalletABI.abi, signer);

    try {
      const userBalance = await contract.getBalance();
      setBalance(userBalance.toString());
    } catch (error) {
      console.error('Error fetching balance:', error);
    }
  };

  const deposit = async () => {
    if (!window.ethereum || !amount) return;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, SimpleWalletABI.abi, signer);

    try {
      const tx = await contract.deposit({ value: ethers.utils.parseEther(amount) });
      await tx.wait();
      setAmount('');
      getBalance();
    } catch (error) {
      console.error('Error depositing funds:', error);
    }
  };

  const withdraw = async () => {
    if (!window.ethereum || !amount) return;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, SimpleWalletABI.abi, signer);

    try {
      const tx = await contract.withdraw(ethers.utils.parseEther(amount));
      await tx.wait();
      setAmount('');
      getBalance();
    } catch (error) {
      console.error('Error withdrawing funds:', error);
    }
  };

  return (
    <div>
      <h1>Simple Wallet App</h1>
      <button onClick={connectToMetamask}>Connect to Metamask</button>
      <p>Account Balance: {balance} ETH</p>
      <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={deposit}>Deposit</button>
      <button onClick={withdraw}>Withdraw</button>
    </div>
  );
}

export default App;

