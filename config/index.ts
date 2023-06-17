import { bsc, bscTestnet, goerli, arbitrum, mainnet } from "wagmi/chains";
//test net -> 0x2C70f96e3E54B8F884A17127E0594a4E8117D2b9
export const baseURI = "ipfs://QmRpPDqwVn1EaHgp4tbmQ5XHtDrrbhv3ssetLfHRLC2ocY/";
export const tokenID = 0;
export const currency = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
export const _pricePerToken = 0;
export const pricePerToken = 0;
export const walletLimit = 1;
export const quantityLimitPerWallet = 1;

// AllowlistProof data
export const _allowlistProof = {
  proof: ["0x0000000000000000000000000000000000000000000000000000000000000000"],
  quantityLimitPerWallet: quantityLimitPerWallet,
  pricePerToken: 0,
  currency: currency,
};

export const chianRPC = {
  goerli: "https://rpc.ankr.com/eth_goerli",
  eth: "https://eth-mainnet.g.alchemy.com/v2/VEX4K9WybpzqhfnpF_DhNw2LVyrm6jdP",
};

// U have to change
export const chainRPC = chianRPC.eth; // if goerli =  chiandRPC.goerli
export const chains = [mainnet]; // if goerli =  goerli
export const NFT_CONTRACT = "0xCa91cD9dB50002427C0280F3482EFbb33B822429";
