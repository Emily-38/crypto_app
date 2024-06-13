'use client'
import Image from 'next/image'
import React from 'react'
import { cardCryptoProps } from '../utils/type'

export const CardCrypto = ({width,image, name, value}:cardCryptoProps) => {
  return (
    <div className={`${width} bg-slate-400 h-20 flex flex-row justify-between text-center shadow-xl text-black m-5 items-center rounded-md`}>
        
        <div className='flex flex-row gap-4 items-center font-bold '>
            <Image src={image} width={64} height={64} className='bg-black h-16 w-16 m-4 rounded-full' alt="image moula" />
            <p >{name}</p>
        </div>
        <div className='m-4'>
            <p>{value}</p>
        </div>
    </div>
  )
}
