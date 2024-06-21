import React from 'react'
import { createPublicClient, http } from "viem"
import { polygonAmoy } from "viem/chains"

export const publicClient = createPublicClient({
  chain: polygonAmoy,
  transport: http(),
})
import {abi} from "../../utils/ABI.json"

import { constant_Address } from './../../utils/contactaddress';
export const Test = () => {

  const [data,setData]=React.useState<any>();
      
    async function read(){
        const data = await publicClient.readContract({
          address: constant_Address,
          abi: abi,
          functionName: "symbol",
        })
        setData(data)
    }

  return (
    <div className='flex flex-col gap-5 text-white'>Test {data ? data:"no data"}
      <button onClick={read} className='bg-white p-4 m-4 rounded-full text-black'>call</button>
    </div>
  )
}
