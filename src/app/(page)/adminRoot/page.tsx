'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const adminRoot = () => {
    const router= useRouter()
  return (
    <div >
        <h1 className='font-bold text-5xl text-white'>congratulations you are admin ! now you can go spy on everyone and make promocodes it's up to you admin</h1>
        <div className='flex flex-col mx-auto my-12 w-3/12 gap-6 justify-center items-center text-center font-bold text-2xl'>
        <p> choice 1:<span className='hover:underline' onClick={()=>{
            router.push('/adminRoot/crypto')
        }}> Create your crypto </span></p>
        <p> choice 2:<span className='hover:underline' onClick={()=>{
            router.push('/adminRoot/user')
        }}> Users </span></p>
        <p> choice 3:<span className='hover:underline' onClick={()=>{
            router.push('/adminRoot/promoCode')
        }}> PromoCode</span></p>
         <p> choice 4:<span className='hover:underline' onClick={()=>{
            router.push('/login')
            localStorage.clear()
        }}> go away</span></p>
        </div>
    </div>
  )
}

export default adminRoot