const hre = require("hardhat");

async function main() {
    const ALCHEMY_ADDR = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";
    const WINNER_CONTRACT_ADDR = "0x41bd4A64d5CB45216314fA6343561B7B5EcCFD53";

    const winnerContract = await hre.ethers.getContractAt("WinnerContract", WINNER_CONTRACT_ADDR);

    const tx = await winnerContract.callAttemptFnc(ALCHEMY_ADDR);

    await tx.wait();

    console.log(tx);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
