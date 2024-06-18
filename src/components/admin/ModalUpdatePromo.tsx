'use client'


import {  UpdatePromocode } from '@/services/auth'
import { promoCodeType } from '@/utils/type'
import { Box, Modal } from '@mui/material'
import React, { useState } from 'react'
import { FaPen } from 'react-icons/fa'

import { IoIosCloseCircleOutline } from 'react-icons/io'
import { toast } from 'react-toastify'

export const ModaleUpdatePromo = ({id}:{id:string}) => {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#405365',
 
    boxShadow: 24,
    p: 4,
  }
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [value, setValue] = useState(0)
  const [name , setname]=useState('')

  function HandlePromo() {
    UpdatePromocode({name,value, id})
      .then((res) => {
        toast.success('success')
        handleClose()
        window.location.reload()
      })
      .catch((e) => console.log(e))
  }

  return (
    <div>
      <button
        onClick={handleOpen}
       className='m-2 cursor-pointer'
      >
        <FaPen />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="text-white w-auto rounded-md shadow-md">
           <div className='flex justify-end'>
        <button
              onClick={handleClose}
              className=" text-black text-right "
            >
              <IoIosCloseCircleOutline size={40} />
            </button>
       </div>
                
               <div className='flex flex-col justify-center items-center mx-auto'>
            
            <div className='m-5 '>
          <p>name:</p> 
          <input
            type="text"
            onChange={(e) => {
                setname(e.target.value)
            }}
            className="text-black indent-3 rounded p-2 "
            placeholder="name"
            required
          />
</div>

        <div className='m-5'>
          <p>value: </p> 
          <input
            type="number"
            onChange={(e) => {
              setValue(Number(e.target.value))
            }}
            className="text-black indent-3 rounded p-2 "
            placeholder="value"
            required
          />
</div>
</div>
          <div className="flex justify-center items-center">
            
            <button
              className="bg-green-700 text-white rounded-md text-center w-32 p-2 m-4 "
              onClick={() => {
                HandlePromo()
              }}
            >
             Update
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
