'use client'

import { getCryptoName } from '@/services/auth'
import { crypto, propsParams } from '@/utils/type'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Crypto = ({params}:propsParams) => {
    
const jwt= window.localStorage.getItem('jwt')
const[crypto,setCrypto]=useState<crypto>()
console.log(crypto?.image)
    useEffect(()=>{
        getCryptoName(jwt,params.name).then((res)=>{
           setCrypto(res.data[0])}
        )
        },[])
        if(!crypto){
            return <div>erreur de chargement </div>
        }
  return (
    <main className='bg-gray-900 flex min-h-screen flex-col text-white text-center  ' >
        <Image width={1000} height={1000} className="w-full h-64 object-center"src={crypto.image} alt=''/>
         <h1 className='font-bold text-2xl'>{crypto.name}</h1>
         <div className='flex justify-between m-2'>
            <p>quantity: {crypto.quantity}</p>
            <p>current value: {crypto.value}</p>
        </div>
        <div>
           " Graphique x.X "
        </div>
        <button className='bg-slate-500 p-5 shadow-xl m-3 font-extrabold contenaire mx-auto rounded-full w-36'>Buy</button>
        </main>
  )
}

export default Crypto