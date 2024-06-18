'use client'
import { CardUser } from '@/components/admin/CardUser'
import { getallUser } from '@/services/auth'
import { AllUserProps } from '@/utils/type'
import React, { useEffect, useState } from 'react'

const user = () => {
    const [user, setUser]=useState<AllUserProps[]>()
    useEffect(() => {
        getallUser().then((res)=>{
          
          setUser(res.data)
          console.log(user)
        })  
        getallUser()
    }, [])
    
  return (
    <div>
        <h1 className='text-2xl font-bold text-white text-center'>Users</h1>
        <div className='flex flex-wrap justify-center'>
        {user && user.map((element)=>{
            return(
            <CardUser firstName={element.firstName} lastName={element.lastName} pseudo={element.pseudo} UserHasCrypto={element.UserHasCrypto} dollarAvailables={element.dollarAvailables}/>    
            )
        })}
           </div>  
        

    </div>
  )
}

export default user