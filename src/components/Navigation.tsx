import React from 'react'
import { InputForm } from './formulaire/InputForm'

export const Navigation = () => {
  return (
    <div className='bg-slate-600 flex flex-col p-4 rounded w-full' >
        <p className='text-center m-2 text-black font-bold'>Search cryptos:</p>
       <input type="text" name="search" className="py-2 w-full text-center px-4 bg-white text-black rounded-md focus:outline-none mb-4" />
       <div className='text-left'>
        <p>User Asset</p>
        <p>Bank Asset</p>
        
        </div>
    </div>
  )
}
