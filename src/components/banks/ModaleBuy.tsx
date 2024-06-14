

import { buyCrypto } from '@/services/auth'
import { CryptoProps } from '@/utils/type'
import { Box, Modal } from '@mui/material'
import React, { useState } from 'react'
import { BiBorderRadius } from 'react-icons/bi'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { toast } from 'react-toastify'

export const ModaleBuy = ({ crypto }: { crypto: CryptoProps }) => {
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
  const [amount, setAmount] = useState(0)

  function HandleCrypoBuy() {
    buyCrypto(crypto.id, amount)
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
       className='bg-slate-600 p-5 w-32 mx-auto shadow-md rounded-full font-bold m-5'
      >
        Buy
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="text-white w-4/5 rounded-md shadow-md">
           <div className='flex justify-end'>
        <button
              onClick={handleClose}
              className=" text-black text-right "
            >
              <IoIosCloseCircleOutline size={40} />
            </button>
        </div> 
            <p className='text-center text-white font-bold text-2xl m-5'>{crypto.name}</p>
            <div className='flex justify-between m-5'>
                <p>Current quantity: {crypto.quantity}</p>
                <p>Value: {crypto.value.toFixed(2)}</p>
            </div>


        <div className='m-5'>
          <p>Desired quantity: </p> 
          <input
            type="number"
            onChange={(e) => {
              setAmount(Number(e.target.value))
            }}
            className="text-black indent-3 rounded p-2 "
            placeholder="how many tokens?"
            required
          />
</div>
          <div className="flex justify-center items-center">
            
            <button
              className="bg-green-700 text-white rounded-md text-center w-32 p-2 m-4 "
              onClick={() => {
                HandleCrypoBuy()
              }}
            >
             Buy
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
