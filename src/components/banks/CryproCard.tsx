
import React from 'react'

import { CryptoProps } from '@/utils/type'
import { ModaleBuy } from './ModaleBuy'

export const Cryptocard = ({ crypto }: { crypto: CryptoProps }) => {
  return (
    <div className='flex flex-col justify-center text-center bg-slate-500 w-80 rounded m-5 '>
      <img
        src={crypto.image}
        alt={crypto.name}
        className="w-full h-48 object-cover rounded-t"
      />
      <p className='font-bold m-2 '>{crypto.name}</p>

      <p className="text-sm">Value: {crypto.value.toFixed(2)}</p>
      <p className="text-sm">Quantity: {crypto.quantity}</p>
      <ModaleBuy crypto={crypto} />
    </div>
  )
}
