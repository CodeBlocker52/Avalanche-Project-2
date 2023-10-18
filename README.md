# Assessment-ETH-AVAX

This repository is for the project assessment of the project of the 2nd module of : solidity-avax-intermediate course of Metacrafters academy . The purpose of creating this to prove my learning and to showcase my skill as a solidity developer to the people

## Problem Statement

For this project, create a simple contract with 2-3 functions. Then show the values of those functions in frontend of the application.

## Description
This program is a simple contract written in Solidity, a programming language used for developing smart contracts on the Ethereum blockchain. The contract has different functions that connnects our metacrafter wallet with our site and then there are three functions in the smart contract one is deposite function which is used for depositing second is withdraw function which is used for withdrawing and third is getbalance fuction which will show you your balance.

It's essential to connect the metamask wallet with our websites as all the data of transaction is going to store in the wallet address. Here hardhat node will provide us the local mainnet to test the functioning of the smart contract created.

## Getting Started

### Executing Program

1. Inside the project directory, in the terminal type: npm i
2. Open two additional terminals in your VS code
3. In the second terminal type: npx hardhat node
4. In the second terminal type: npx hardhat compile
5. Copy the Path of the MyContract.json from the artifacts and paste it in index.js where ever <PATH_OF_YOUR_CONTRACT_JSON_FILE> is written in the index.js
6. In the third terminal, type: npx hardhat run --network localhost scripts/deploy.js
7. Copy the COntract address when you deploy the contract and paste it where ever <YOUR_CONTRACT_ADDRESS> is written in  the index.js
8. Back in the first terminal, type npm run dev to launch the front-end.

After this, the project will be running on your localhost. 
Typically at http://localhost:3000/

## Author
CodeBlocker52


## License

This project is licensed under the MIT License - see the LICENSE file for details
