'use client'


import { Button } from "@/components/formulaire/Button"
import { InputForm } from "@/components/formulaire/InputForm"
import { loginForm } from "@/services/auth"
import { loginProps } from "@/utils/type"
import { useRouter } from "next/navigation"
import { SubmitHandler, useForm } from "react-hook-form"
import { toast } from "react-toastify"

const login = () => {
    const router=useRouter()
     const {register,handleSubmit,setError,formState:{errors}}=useForm<loginProps>()
     const onSubmit: SubmitHandler<loginProps> = (data) =>
         loginForm(data).then((res)=>{ 
            window.localStorage.setItem('jwt', res.data.access_token)
            toast.success('login successfull')
            if(res.data.user.Role.id === '7f20cb76-409e-406b-8560-a79c56f2bb25'){
            router.push('/Home')}
            else{
                router.push('/adminRoot')
            }
          
         }
      )
      .catch((e)=>{
        toast.error(e.response.data.message)
      })
    
      
   return (
     <main className=" bg-gray-900 flex min-h-screen flex-col items-center justify-between ">
     <div className="bg-gray-900 h-screen flex flex-col items-center justify-center text-center">
         <div className="text-white">
             <h1 className="text-4xl font-bold">Login</h1>
            
         </div>
         <div className="mt-8">
             <form className="flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>

         <InputForm type='email' placeholder='write your email' name='email' register={register} errors={errors.email ? errors.email : null} />
 
         <InputForm type='password' placeholder='*****' name='password' register={register}  errors={errors.password ? errors.password : null}/>
 
         <Button title='Login'/>
         </form>
 
         </div>
     </div>
     </main>
   )
}
 
 export default login