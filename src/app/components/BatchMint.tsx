import { ethers } from 'ethers'
import React from 'react'
import { constant_Address } from 'utils/contactaddress'
import { abi } from "../../utils/ABI.json"
import { BiconomySmartAccountV2, IHybridPaymaster, PaymasterMode, SponsorUserOperationDto } from '@biconomy/account'
import { Provider } from "@ethersproject/providers"
import toast from 'react-hot-toast'

interface PayFeesWithERC20ButtonProps {
  smartAccount: BiconomySmartAccountV2 | null
  provider: Provider | null
  refresh: () => void
}


const BatchMint = ({ smartAccount, provider, refresh }: PayFeesWithERC20ButtonProps) => {
  const [loading, setLoading] = React.useState<boolean>(false)
    const handleFunction = async () => {
      const request = async () => {
        try {
          if (!smartAccount || !provider) return null
          setLoading(true)
          /***  Claim DAI Token ***/
          const daiAddress = constant_Address// smart contract address
          const daiContract = new ethers.Contract(daiAddress, abi, provider)
          const daiClaimTx = await daiContract.populateTransaction.safeMint("0x615d8986e4aBCE34f7CA9147b7ed52217877eE56")

          const daiTx = {
            to: daiAddress,
            data: daiClaimTx.data as string,
            value: ethers.utils.parseEther("0").toString(),
          }
          const daiTx1 = {
            to: daiAddress,
            data: daiClaimTx.data as string,
            value: ethers.utils.parseEther("0").toString(),
            }
            const daiTx2 = {
              to: daiAddress,
              data: daiClaimTx.data as string,
              value: ethers.utils.parseEther("0").toString(),
            }
          const txs = [daiTx, daiTx1,daiTx2]
         
          const userOpResponseDaiClaim = await smartAccount.sendTransaction(txs, {
            paymasterServiceData: {
              mode: PaymasterMode.SPONSORED,
            },
          })

          const { transactionHash: transactionHashDaiClaim } =
            await userOpResponseDaiClaim.waitForTxHash()

          const userOpReceiptDaiClaim = await userOpResponseDaiClaim.wait()

          if (userOpReceiptDaiClaim.success != "true") {
            throw new Error("Transaction failed")
          } else {
            toast.success(
              <div className="flex flex-col items-center gap-1">
                <strong>Claim DAI Token Successful!</strong>
                <a
                  target="_blank"
                  href={`${process.env.NEXT_PUBLIC_SEPOLIA_TX_EXPLORER}${transactionHashDaiClaim}`}
                >
                  Click to see on Etherscan
                </a>
              </div>
            )
          }
          refresh()
        } catch (error) {
          console.error(error)
          setLoading(false)
          throw new Error("Transaction failed")
        }
      }

      toast.promise(
        request(),
        {
          loading: "Transaction pending. Do not close window.",
          success: <b>Transaction successful!</b>,
          error: <b>Transaction failed</b>,
        },
        {
          style: {
            minWidth: "400px",
          },
        }
      )
    }
  return (
    <div>
      {" "}
      {loading ? (
        <div className="flex items-center justify-center gap-2">
          <div className="h-10 w-10 animate-spin rounded-full border-b-2 border-t-2 border-indigo-500"></div>
        </div>
      ) : (
        <a
          onClick={handleFunction}
          className="block rounded-md bg-white/10 px-3 py-2 text-center text-sm font-semibold leading-6 text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white group-hover:bg-indigo-500"
        >
          Start Transactions
        </a>
      )}
    </div>
  )
}

export default BatchMint;