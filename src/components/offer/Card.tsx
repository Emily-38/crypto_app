import { buyOffer } from '@/services/auth'
import { CardType } from '@/utils/type'
import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'
import { toast } from 'react-toastify'

export const Card = ({lien ,name,quantity,value,id,user,setIsReloadNeeded}:CardType,) => {
  function handleCryptoBuy(id :string){
    buyOffer(id).then((res)=>{
      if (res.data) {
        if (res.status === 204) {
          toast.error('Item already sold')
        }

        if (res.status === 201) {
          toast.success('Success')
          setIsReloadNeeded(true)
          window.location.reload()
        }
      }
    }).catch((e) => {
      if (e) {
        toast.error('error')
        console.log(e)
      }
    })
  }
  return (
    
    <div  className='flex flex-col justify-center text-center bg-slate-500 w-96 rounded m-5 '>
        <p className='font-bold m-2 '>{name}</p>
        <Image src={lien} height={1000} width={1000} alt="photo de la crypto" className="w-full h-40 object-cover"/>
    
    <div className='text-left p-4'>
    <p>Seller: {user}</p>
         <p>quantity: {quantity}</p>
         <p>value: {value.toFixed(2)}</p>
      </div>
      <button className='bg-slate-600 p-5 w-32 mx-auto shadow-md rounded-full m-2'  onClick={() => {
            handleCryptoBuy(id)
           
           
          
          }}>Buy</button>
        </div>
    
    
  )
}
