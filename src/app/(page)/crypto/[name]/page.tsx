'use client'

import Graph from '@/components/graph/Graph'
import { getCryptoName, getHistory } from '@/services/auth'
import { crypto, propsParams } from '@/utils/type'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Crypto = ({params}:propsParams) => {
    
const jwt= window.localStorage.getItem('jwt')
const[crypto,setCrypto]=useState<crypto>() 
const[chart, setChart]=useState()
console.log(crypto?.id)
    useEffect(()=>{
       const search= getCryptoName(jwt,params.name).then((res)=>{
           setCrypto(res.data[0])
           
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
          <Graph/>
        </div>
        <button className='bg-slate-500 p-5 shadow-xl m-3 font-extrabold contenaire mx-auto rounded-full w-36'>Buy</button>
        </main>
  )
}

export default Crypto