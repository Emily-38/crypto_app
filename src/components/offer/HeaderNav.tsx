import { HeaderNavProps } from '@/utils/type'
import { useRouter } from 'next/navigation'
import React from 'react'
import { IoHomeSharp } from 'react-icons/io5'

export const HeaderNav = ({name, lien}: HeaderNavProps) => {
  const router=useRouter()
  return (
    <div className='flex flex-row justify-between text-white  '>
      <div className='flex flex-row gap-5 m-4'>
      <IoHomeSharp size={30} onClick={()=>{
        router.push('/Home')
      }} />
        
        <p onClick={()=>{
          router.push(`${lien}`)
        }} className='cursor-pointer'>{name}</p>
       </div>

       <div className='flex flex-row gap-5 m-4'>
        <p>Profil</p>
        <p onClick={()=>{
          localStorage.clear()
          router.push('/')
        }}>Logout</p>
       </div>
    </div>
  )
}
