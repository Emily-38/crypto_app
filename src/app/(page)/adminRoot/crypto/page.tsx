
'use client'
import { CreateCrypto } from '@/services/auth'
import { CreateCryptoType } from '@/utils/type'
import { useRouter } from 'next/navigation'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { error } from 'console'
import { toast } from 'react-toastify'
const crypto = () => {
    const schema = yup
    .object({
      name: yup.string().required(),
      value: yup.number().min(1).required(),
      quantity: yup.number().min(1).required(),
      image: yup.string().required()
    })

    const router=useRouter()
    const {register,handleSubmit}=useForm<CreateCryptoType>({mode:'onSubmit',resolver:yupResolver(schema)})
    const onSubmit: SubmitHandler<CreateCryptoType> = (data) => CreateCrypto(data)
    .then((res)=>{ 
        if(res.status=== 201){  
            toast.success('you succeed you will be rich')
            setTimeout(() => {
              router.push('/adminRoot')  
            }, 1500);
           
         }
       
        else{
            toast.error('delete not success')
        }
    })
        

  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='font-bold text-5xl text-white text-center p-2'>become a crypto mastermind by creating your own crypto! </h1>

        <form className="flex flex-col items-center m-10 bg-slate-500 p-3 rounded" onSubmit={handleSubmit(onSubmit)}>
            
            <input type="text" placeholder='Crypto name'{...register('name')} className="py-2 w-full px-4 bg-gray-800 text-white rounded-md focus:outline-none mb-4 "/>
            
              
            <input type="number" placeholder='Value'{...register('value')} className="py-2 w-full px-4 bg-gray-800 text-white rounded-md focus:outline-none mb-4 " />
           
            
            <input type="number" placeholder='Quantity' {...register('quantity')} className="py-2 w-full px-4 bg-gray-800 text-white rounded-md focus:outline-none mb-4 "/>
           
            
            <input type="text" placeholder=' Link image'{...register('image')} className="py-2 w-full px-4 bg-gray-800 text-white rounded-md focus:outline-none mb-4 "  />
           
           <button type='submit'  className="py-2 w-full px-4 bg-gray-800 text-white rounded-md focus:outline-none mb-4 " >
            Create
            </button>
        </form>
    </div>
  )
}

export default crypto