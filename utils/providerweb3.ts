import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultClient } from "connectkit";
import { publicProvider } from 'wagmi/providers/public'
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect'
import { bsc,bscTestnet,goerli ,arbitrum,mainnet} from "wagmi/chains";
import { ethers } from "ethers";
import { chianIDRPC ,chains} from "../config";
export const provider = new ethers.providers.JsonRpcProvider(chianIDRPC)
const alchemyId = "Tv277_RjwkXDuii_WGiG_X8RL-T56yyG";

export const client = createClient(
    getDefaultClient({
      appName: "minter",
      alchemyId,
      chains
    }),
  );
