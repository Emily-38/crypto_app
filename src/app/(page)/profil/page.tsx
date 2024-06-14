'use client'
import { Cryptocard } from '@/components/banks/CryproCard'
import { HeaderNav } from '@/components/offer/HeaderNav'
import { CardUserCryptos } from '@/components/profil/CardUserCryptos'
import { myAsset } from '@/services/auth'
import { CryptoProps, userProps } from '@/utils/type'
import React, { useEffect, useState } from 'react'

const profil = ( ) => {
    const [cryptosList, setCryptosList]= useState<userProps>()
    useEffect(() => {
      myAsset().then((res)=>{
        setCryptosList(res.data)
        
      })
     
    }, [])
    

  return (
    <div >
        <HeaderNav lien='' name=''/>
        <h1 className='font-bold text-5xl text-center text-white'>{cryptosList?.lastName} {cryptosList?.firstName}</h1>
        <div className='text-white flex flex-col justify-between m-2 md:flex-row'>
            <p>pseudo: {cryptosList?.pseudo} </p>
            <p>money current: {cryptosList?.dollarAvailables}</p>
        </div>
        <div className='flex flex-wrap'>
{cryptosList?.UserHasCrypto && cryptosList.UserHasCrypto.map((Cryptos)=>{{console.log(Cryptos)}
    return(
        
            <CardUserCryptos name={Cryptos.Crypto.name} lien={Cryptos.Crypto.image} quantity={Cryptos.amount} value={Cryptos.Crypto.value}/>
        
    )
})}
    </div>

    </div>
  )
}

export default profil