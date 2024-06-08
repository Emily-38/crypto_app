'use client'
import { Button } from '@/app/components/Button'

import { InputForm } from '@/app/components/InputForm'
import { registerForm } from '@/app/services/auth'
import { registerProps } from '@/app/utils/type'
import { useRouter } from 'next/navigation'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'




const register = () => {
   const router=useRouter()
    const {register,handleSubmit,formState:{errors}}=useForm()
    const onSubmit: SubmitHandler<registerProps> = (data) => registerForm(data).then((res)=>{ 
        if(res.status=== 201){  
           router.push('/login')
         }
        }
     )
    

  return (
    <main className=" bg-gray-900 flex min-h-screen flex-col items-center justify-between ">
    <div className="bg-gray-900 h-screen flex flex-col items-center justify-center text-center">
        <div className="text-white">
            <h1 className="text-4xl font-bold">Register</h1>
           
        </div>
        <div className="mt-8">
            <form className="flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>
              
        <div className='flex gap-4'>
            <InputForm type='text' placeholder='write your firstname' name='firstName' register={register}  errors={ errors.firstName ? errors.lastName : null}  />
            
            <InputForm type='text' placeholder='write your Lastname' name='lastName' register={register}  errors={errors.lastName ? errors.lastName : null}/>
        </div>
        <div className='flex gap-4'>
            <InputForm type='text' placeholder='write your city' name='city' register={register}  errors={errors.city ? errors.city : null}/>  
            <InputForm type='text' placeholder='write your pseudo' name='pseudo' register={register}  errors={errors.pseudo ? errors.pseudo : null}/>
         </div>

        <InputForm type='email' placeholder='write your email' name='email' register={register} errors={errors.email ? errors.email : null} />

        <InputForm type='password' placeholder='*****' name='password' register={register}  errors={errors.password ? errors.password : null}/>
       
        <InputForm type='text' placeholder='code promo' name='promoCode' register={register}  errors={errors.promoCode ? errors.promoCode : null}/>
       
        <Button title='Register'/>
        </form>

        </div>
    </div>
    </main>
  )
}

export default register