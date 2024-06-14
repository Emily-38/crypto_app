'use client'
import { CardCrypto } from '@/components/CardCrypto'
import { Header } from '@/components/Header'
import { Navigation } from '@/components/Navigation'
import { getAllCrypto } from '@/services/auth'
import {  cryptoTableaux } from '@/utils/type'


import React, { useEffect, useState } from 'react'

const HomeUser = () => {
  const [crypto, setCrypto]=useState<cryptoTableaux>()
  // const[ jwt , setjwt]=useState<any>()
  crypto?.data.sort((a,b) => a.value <= b.value)
 

 const jwt = window.localStorage.getItem('jwt')
 

  useEffect(()=>{
     getAllCrypto(jwt).then((res)=>{ setCrypto(res)}
    )},[])

if(!crypto?.data){
  return(<main className='bg-gray-900 flex min-h-screen flex-col text-white text-center '>oups sa mere il manque les cryptos</main>)
}

  return (
    <main className='bg-gray-900 flex  flex-col text-white text-center  ' >
    <Header bg='bg-[url("/ntm.jpg")] w-full h-72'/>
    <h3 className='font-bold text-2xl m-2'>Cryptos</h3> 
    <div className='flex flex-col justify-center w-10/12 mx-auto'>
   

    <CardCrypto width='w-full' image={crypto.data[0].image } name={crypto.data[0].name } value={crypto.data[0].value} />
    <CardCrypto width='w-4/5' image={crypto.data[1].image } name={crypto.data[1].name } value={crypto.data[1].value} />
    <CardCrypto width='w-9/12' image={crypto.data[2].image } name={crypto.data[2].name } value={crypto.data[2].value} />
    <CardCrypto width='w-4/6' image={crypto.data[3].image } name={crypto.data[3].name } value={crypto.data[3].value} />
    <CardCrypto width='w-3/5' image={crypto.data[4].image } name={crypto.data[4].name} value={crypto.data[3].value} />
    {crypto.data[5] && <CardCrypto width='w-6/12' image={crypto.data[5].image } name={crypto.data[5].name} value={crypto.data[3].value} 
    />}
    
  
    </div>

    </main>
  )
}

export default HomeUser