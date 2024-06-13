'use client'
import { ModaleBuy } from '@/components/banks/ModaleBuy'
import { Card } from '@/components/offer/Card'
import { HeaderNav } from '@/components/offer/HeaderNav'
import { ModaleOffert } from '@/components/offer/ModaleOffert'
import { getOffer } from '@/services/auth'
import { allOfferType } from '@/utils/type'



import React, { useEffect, useState } from 'react'
import { IoIosAdd } from 'react-icons/io'

const Offer = () => {
const [offer, setoffer] = useState<allOfferType []>()
const [isReloadNeeded, setIsReloadNeeded] = useState(false)
const jwt=window.localStorage.getItem('jwt')
useEffect(() => {

    getOffer(jwt).then((res)=>{
        setoffer(res.data)
        setIsReloadNeeded(false)
        console.log(res.data)
    }).catch((e)=>{
        setIsReloadNeeded(false)
        console.log(e)
    })

  
}, [isReloadNeeded])


  return (
    <div>
    <HeaderNav name='Banks' lien='/banks'/>
    <h1 className='text-white font-bold text-center text-5xl m-4'>Offers</h1>
    <ModaleOffert crypto={''}/> 
    <div className=' flex flex-rows flex-wrap justify-center'>
    { offer && offer.map((crypto)=>{
        return(
            
            <Card lien={crypto.Crypto.image} user={crypto.User.pseudo} name={crypto.Crypto.name} quantity={crypto.amount} id={crypto.id} value={crypto.Crypto.value} setIsReloadNeeded={setIsReloadNeeded}  />

        )
    })}
     </div>   

    </div>
  )
}

export default Offer