import { AllUserProps } from '@/utils/type'
import Image from 'next/image'
import React from 'react'

export const CardUser = ({firstName,lastName,pseudo, UserHasCrypto, dollarAvailables}:AllUserProps) => {
  return (
    <div className=' bg-slate-400 w-3/12 text-center m-2 rounded'>
        <div >
          <p>{firstName}</p>
          <p>{lastName}</p>
        </div>
        <p>{pseudo}</p>
        <p>money :{dollarAvailables}</p>
        <p>Cryptos:</p>
<div className='flex gap-2 flex-wrap justify-center items-center'>
        {UserHasCrypto && UserHasCrypto.map((crypt)=>{
          return(
          <Image alt='crypto'width={1000} height={1000} src={crypt.Crypto.image} className='rounded-full w-10 h-10 '/>
        )})
       
        }
        </div>
    </div>
  )
}
