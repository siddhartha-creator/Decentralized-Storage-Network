require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  network: {
    hardhat: {
      chainId: 31337,
    },
  },
  path: {
    artifacts: "./client/src/artifacts",
  },
};
