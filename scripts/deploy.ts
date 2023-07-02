import { ethers } from "hardhat";

async function main() {
  const ipfsMetadataHash = "ipfs://hashOfMetadata";

  const mintNFT = await ethers.deployContract("MintNFT", ipfsMetadataHash);
  await mintNFT.waitForDeployment();

  console.log(
    `MintNFT with ${ipfsMetadataHash} URL deployed to ${mintNFT.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
