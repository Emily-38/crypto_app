'use client'
import { getCryptoByName } from '@/services/auth'
import { crypto, cryptoTableaux } from '@/utils/type'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export const Navigation = () => {
  const [search, setSearch] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const jwt: any = window.localStorage.getItem('jwt')
  const [result, setResult] = useState<crypto[]>()
  const router =useRouter()

  useEffect(() => {
    console.log("mysearch", search)
    if (search.length !== 0) {
      setIsLoading(true)
      console.log("Joue la requête !");
    
      getCryptoByName(jwt, search).then((res) => {
        console.log(res);
        setResult(res.data as unknown as crypto[])
      })
      setIsLoading(false)
      console.log(result)
    }
  }, [search])

  if (!result) {
    return (
    <div className='bg-slate-600 flex flex-col p-4 rounded w-full' >
      <p className='text-center m-2 text-black font-bold'>Search cryptos:</p>
      <input type="text" name="search" className="py-2 w-full text-center px-4 bg-white text-black rounded-md focus:outline-none mb-4" onChange={(e) => setSearch(e.target.value)} />
      <div className='text-left flex flex-col gap-2 cursor-pointer'>
        <p onClick={()=>{router.push('/offer')}}>Offer</p>
        <p onClick={()=>{router.push('/banks')}}>Bank Server</p>
        <p onClick={()=>{router.push('/profil')}}>Profil</p>
        <p onClick={()=>{
          localStorage.clear()
          router.push('/')
        }}>Logout</p>

      </div>
    </div>)
  }


  return (
    <div className='bg-slate-600 flex flex-col p-4 rounded w-full' >
      <p className='text-center m-2 text-black font-bold'>Search cryptos:</p>
      <input type="text" name="search" className="py-2 w-full text-center px-4 bg-white text-black rounded-md focus:outline-none " onChange={(e) => setSearch(e.target.value)} />
      {result && result.map((cryptoMoney) => {
        return (
          <p onClick={()=>{
            router.push(`/crypto/${cryptoMoney.name}`)
          }} className='bg-white rounded-md -m-1 cursor-pointer text-black p-2 border border-b-black'>{cryptoMoney.name}</p>
        )
      })}
      <div className='text-left flex flex-col gap-2 cursor-pointer'>
      <p onClick={()=>{router.push('/offer')}}>Offer</p>
        <p>Bank Server</p>
        <p>Profil</p>
        <p onClick={()=>{
          localStorage.clear()
          router.push('/')
        }}>Logout</p>

      </div>
    </div>
  )
}
