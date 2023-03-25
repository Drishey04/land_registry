const hre = require("hardhat");

async function main() {
  
  const landRecords = await hre.ethers.getContractFactory("LandRecords");
  const contract = await landRecords.deploy();
  await contract.deployed()

  console.log("Address of Contract :",contract.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
