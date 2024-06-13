'use client'


import { Cryptocard } from '@/components/banks/CryproCard'
import { HeaderNav } from '@/components/offer/HeaderNav'
import { getAllCryptos } from '@/services/auth'

import { CryptoProps } from '@/utils/type'

import React, { useEffect, useState } from 'react'

const page = () => {
  const [cryptosList, setCryptosList] = useState<CryptoProps[]>()

  useEffect(() => {
    getAllCryptos()
      .then((res) => setCryptosList(res.data))
      .catch((e) => {
        console.log(e)
      })
  }, [])

  return (
    <div >
        <HeaderNav name='Offer' lien='/offer'/>
        <h1 className='text-white font-bold text-center text-5xl m-4'>Banks</h1>
        <div  className='flex flex-rows flex-wrap justify-center '>
      {cryptosList &&
        cryptosList?.map((crypto) => {
          return (
            <div
              key={crypto.id}
            
            >
              <Cryptocard crypto={crypto} />
            </div>
          )
        })}
        </div>
    </div>
  )
}

export default page
