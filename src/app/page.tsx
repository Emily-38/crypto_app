'use client'

import { Presentation } from "@/components/Presentation";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
 const router= useRouter()
  return (
    <main className=" bg-gray-900 flex min-h-screen flex-col items-center justify-between p-2 ">
      <Image  width={1000} height={1000} src="/acceuil_banner.jpg" alt="banner crypto app" className="w-full h-80 "/>
    <Presentation bg="bg-slate-500" title="Crypto App">
      <button className="bg-gray-900 text-white text-2xl font-bold  rounded-full text-center w-80 p-8 m-4 "
      onClick={()=>{
        router.push('/login')
      }}>Login</button>
    </Presentation>
    
    <Presentation title="what is the crypto money ?" bg="bg-gray-900" >
    <button className="bg-slate-500 text-white text-2xl font-bold rounded-full text-center w-80 p-8 m-4 "
      onClick={()=>{
        router.push('/register')
      }}>Register</button>
      </Presentation>
    </main>
  );
}
