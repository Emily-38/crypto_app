import React from 'react'
import { buttonProps } from '../../utils/type'

export const Button = ({title}:buttonProps) => {
  return (
    <div>
        <button type="submit" className="bg-blue-500 py-2 px-4 text-white rounded-md hover:bg-blue-600 focus:outline-none" >
            {title}
        </button>
            </div>
  )
}
