import { CHAIN_NAMESPACES } from "@web3auth/base"
import { EthereumPrivKeyProviderConfig } from "@web3auth/ethereum-provider"

//Configure Sepolia network
export const sepoliaConfig: EthereumPrivKeyProviderConfig = {
  chainConfig: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: "0x13882",
    rpcTarget: "https://rpc-amoy.polygon.technology",
    displayName: "Polygon Amoy",
    blockExplorerUrl: "https://amoy.polygonscan.com/",
    ticker: "MATIC",
    tickerName: "MATIC",
  },
}
