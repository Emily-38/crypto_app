import React from 'react'
import { inputProps } from '../../utils/type'

export const InputForm = ({type, placeholder, name, register, errors ,option }:inputProps) => {
  console.log("test errors",errors)
  return (
    <div className='flex w-full flex-col items-start'>
    <label className='text-white p-3 '>{name}</label>
            <input 
                type={type}
                name={name}
                placeholder={placeholder}
                {...register(`${name}`,option)}
                className="py-2 w-full px-4 bg-gray-800 text-white rounded-md focus:outline-none mb-4 "
                />
                    {errors && (
        <p className="text-red-600">{errors.message}</p>
      )}
              
    </div>

  )
}
