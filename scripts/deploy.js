const { ethers } = require('hardhat');

async function main() {
  const SimpleWallet = await ethers.getContractFactory('SimpleWallet');
  const simpleWallet = await SimpleWallet.deploy();
  await simpleWallet.deployed();
  console.log('SimpleWallet deployed to:', simpleWallet.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


