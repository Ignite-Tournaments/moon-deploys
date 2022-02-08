const hre = require("hardhat");
require('dotenv').config({path: '../.env'});

web3 = require('web3');
const toWei = (x) => web3.utils.toWei(x.toString());

async function main() {

  const HelloWorld = await ethers.getContractFactory("HelloWorld");
  const helloWorld = await HelloWorld.deploy();
  await helloWorld.deployed();
  console.log("sample contract deployed to:", helloWorld.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
