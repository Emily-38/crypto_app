import { CardUserCrypto } from '@/utils/type'
import Image from 'next/image'
import React from 'react'

export const CardUserCryptos = ( {name, lien , quantity, value }:CardUserCrypto) => {
  return (
    <div>
        <div  className='flex flex-col justify-center text-center bg-slate-500 w-80 rounded m-5 '>
            <p className='font-bold m-2 '>{name}</p>
            <Image src={lien} height={1000} width={1000} alt="photo de la crypto" className="w-full h-40 object-cover"/>
        
        <div className='text-left p-4'>
            
            <p>quantity: {quantity}</p>
            <p>value: {value}</p>
        </div> 
         </div>
  </div>  
  
  )
}
