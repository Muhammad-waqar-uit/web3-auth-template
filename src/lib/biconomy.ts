import {
  BiconomySmartAccountV2,
  createSmartAccountClient,
} from "@biconomy/account"
import { ethers } from "ethers"

import { sepoliaConfig } from "config/network"

export const createBiconomySmartAccount = async (
  signer: ethers.providers.JsonRpcSigner
): Promise<BiconomySmartAccountV2> => {
  return await createSmartAccountClient({
    chainId: parseInt(sepoliaConfig.chainConfig.chainId),
    signer: signer,
    biconomyPaymasterApiKey: process.env.NEXT_PUBLIC_BICONOMY_PAYMASTER_API_KEY,
    bundlerUrl: process.env.NEXT_PUBLIC_BICONOMY_BUNDLER_URL as string,
    rpcUrl: sepoliaConfig.chainConfig.rpcTarget,
  })
}


