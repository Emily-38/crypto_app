import React from 'react'
import { formulaireProps } from '../utils/type'

export const Formulaire = ({ title ,children, onSubmit, handleSubmit}:formulaireProps) => {
  return (

    <div className="bg-gray-900 h-screen flex flex-col items-center justify-center text-center">
        <div className="text-white">
            <h1 className="text-4xl font-bold">{title}</h1>
           
        </div>
        <div className="mt-8">
            <form className="flex flex-col items-center" onSubmit={handleSubmit(onSubmit)}>
                {children}
            </form>
        </div>
    </div>
  )
}
