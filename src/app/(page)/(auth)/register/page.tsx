'use client'


import { Button } from '@/components/formulaire/Button'
import { InputForm } from '@/components/formulaire/InputForm'
import { registerForm } from '@/services/auth'
import { registerProps } from '@/utils/type'

import { useRouter } from 'next/navigation'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    pseudo: yup.string().required().min(3,"minimum 3 character"),
    city: yup.string().required(),
    email: yup.string().email("please write a email").required("email required"),
    password:yup.string().matches(/[a-z]/,"need a charactere").matches(/[A-Z]/,"need a capital letter").matches(/[1-9]/,"need a number").required(),
    promoCode: yup.string()

  })
  .required()

const register = () => {
   const router=useRouter()
    const {register,handleSubmit,formState:{errors}}=useForm<registerProps>({mode:'onChange',resolver:yupResolver(schema)})
    const onSubmit: SubmitHandler<registerProps> = (data) => registerForm(data).then((res)=>{ 
        if(res.status=== 201){  
           router.push('/login')
         }
        }
     )
  return (
    <main className=" bg-gray-900 flex  flex-col items-center justify-between ">
    <div className="bg-gray-900  flex flex-col items-center justify-center text-center">
        <div className="text-white">
            <h1 className="text-4xl font-bold">Register</h1> 
        </div>
        <div className="mt-8">
            <form className="flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>
              
        <div className='flex gap-4'>
            <InputForm type='text' placeholder='write your firstname' name='firstName' register={register}  errors={ errors.firstName ? errors.firstName : null} />
            
            <InputForm type='text' placeholder='write your Lastname' name='lastName' register={register}  errors={errors.lastName ? errors.lastName : null}/>
        </div>
        <div className='flex gap-4'>
            <InputForm type='text' placeholder='write your city' name='city' register={register}  errors={errors.city ? errors.city : null}/>  
            <InputForm type='text' placeholder='write your pseudo' name='pseudo' register={register}  errors={errors.pseudo ? errors.pseudo : null} />
            {/* // option={{required:"pseudo required", minLength:{value:5 , message:"entry a minimum of 5 characters"}}} */}
         </div>

        <InputForm type='email' placeholder='write your email' name='email' register={register} errors={errors.email ? errors.email : null} /> 
        {/* option={{required:"email address required", pattern:{value:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ , message:" it is necessary to enter an email address"}}} */}

        <InputForm type='password' placeholder='*****' name='password' register={register}  errors={errors.password ? errors.password : null}/>
       
        <InputForm type='text' placeholder='code promo' name='promoCode' register={register}/>
       
        <Button title='Register'/>
        </form>

        </div>
    </div>
    </main>
  )
}

export default register