import { HeaderNavProps } from '@/utils/type'
import { useRouter } from 'next/navigation'
import React from 'react'
import { IoHomeSharp } from 'react-icons/io5'

export const HeaderNav = () => {
  const router=useRouter()
  return (
    <div className='flex flex-row justify-between text-white  '>
      <div className='flex flex-row gap-5 m-4'>
      <IoHomeSharp size={30} onClick={()=>{
        router.push('/AdminRoot')
      }} />
        
       </div>

       <div className='flex flex-row gap-5 m-4'>
        <p className='cursor-pointer' onClick={()=>{
       router.push('/AdminRoot/user')
      }}>Profil</p>
        <p className='cursor-pointer' onClick={()=>{
          localStorage.clear()
          router.push('/AdminRoot/traders')
        }}>Logout</p>
       </div>
    </div>
  )
}