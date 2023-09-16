const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = INFURA_KEY;
const mnemonic = MNEMONIC_PHRASE;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    sepolia: {
      provider: () => new HDWalletProvider(mnemonic, `https://sepolia.infura.io/v3/${infuraKey}`, 1),
      network_id: 11155111, // Replace with the network ID of the Sepolia testnet
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    }
  },
  compilers: {
    solc: {
      version: "0.8.17",
    }
  }
};
