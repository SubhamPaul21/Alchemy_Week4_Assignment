const hre = require("hardhat");

async function main() {

  const WinnerContract = await hre.ethers.getContractFactory("WinnerContract");

  const contract = await WinnerContract.deploy();

  await contract.waitForDeployment();

  console.log(`Contract Deployed at ${await contract.getAddress()}`);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
