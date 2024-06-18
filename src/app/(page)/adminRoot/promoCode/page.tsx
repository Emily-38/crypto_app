'use client'
import { ModalepPromo } from '@/components/admin/ModalPromo'
import { ModaleUpdatePromo } from '@/components/admin/ModalUpdatePromo'
import { DeletePromocode, UpdatePromocode, getallPromocode } from '@/services/auth'
import { promoCodeType } from '@/utils/type'
import React, { useEffect, useState } from 'react'
import { FaPen, FaTrash } from "react-icons/fa";
import { toast } from 'react-toastify'

const promoCode = () => {
    const [promos, setPromos] = useState<promoCodeType[]>()
    useEffect(() => {
        getallPromocode().then((res)=>{ 
           
            setPromos(res.data)
           
        })

    }, [])
    
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='font-bold text-5xl text-white text-center p-2'>
            welcome to the place where you can create promocodes as well as view all the promocodes
             </h1>
        <ModalepPromo />
        <div className=' flex flex-wrap items-center justify-center w-50'>
        {promos && promos.map((element)=>{ 
            
            return(
                <div className='border text-center py-10 bg-yellow-500 w-40 h-40 rounded-full m-5 p-6'>
                  <p> name: {element.name}</p>
                   <p> valeur: {element.value}</p>
                   <div className='flex justify-center gap-2'>
                   <p className='m-2 cursor-pointer' onClick={()=>{
                    DeletePromocode(element.id).then((res)=>{
                       
                        if(res.status===204){
                         toast.success('delete successfull')
                    window.location.reload()   
                        }else{
                            toast.error('delete not success')
                        }
                    })
                    
                   }}><FaTrash /></p>


                <ModaleUpdatePromo id={element.id}/>
                   </div>
                </div>
            )

        })}
        </div>
        <p>the promocode will be used to register and get some money</p>
        
        </div>
  )
}

export default promoCode