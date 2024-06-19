'use client'

import { ModaleBuy } from '@/components/banks/ModaleBuy'

import { getCryptoName, getHistory } from '@/services/auth'
import { crypto, propsParams } from '@/utils/type'
import { LineChart } from '@mui/x-charts/LineChart'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Crypto = ({params}:propsParams) => {
    
const jwt= window.localStorage.getItem('jwt')
const[crypto,setCrypto]=useState<crypto>() 
const[chart, setChart]=useState()

    useEffect(()=>{
       getCryptoName(jwt,params.name).then((res)=>{
           setCrypto(res.data[0])
         
           getHistory(crypto?.id).then((res)=>{
            setChart(res.data)
            console.log(res)
           })
    }) 
        },[])

     if(!crypto){
            return <div>erreur de chargement </div>
        }      
 
      
  return (
    <main className='bg-gray-900 flex min-h-screen flex-col text-white text-center  ' >
        <Image width={1000} height={1000} className="w-full h-64 object-center"src={crypto.image} alt=''/>
         <h1 className='font-bold text-2xl'>{crypto.name}</h1>
         <div className='flex flex-col justify-between m-2 md:flex-row'>
            <p>Quantity: {crypto.quantity}</p>
            <p>Current value: {crypto.value.toFixed(2)}</p>
        </div>
        <div>
        <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5],
        },
      ]}
      width={300}
      height={300}
    />

        </div>
       < ModaleBuy crypto={crypto} />
        </main>
  )
}

export default Crypto