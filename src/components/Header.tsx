import React from 'react'
import MenuBurger from './MenuBurger'

export const Header = ({bg}:{bg:string}) => {
  return (
    <div className={bg}>
      <div className='text-left bg-slate-800'>
      <MenuBurger/>
</div>
    </div>
  )
}
