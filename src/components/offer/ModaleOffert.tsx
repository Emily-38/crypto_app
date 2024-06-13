

import { CreateOffert, buyCrypto } from '@/services/auth'
import { CreateOffer,  allOfferType } from '@/utils/type'
import { Box, Modal } from '@mui/material'
import React, { useState } from 'react'
import { IoIosAdd } from 'react-icons/io'

export const ModaleOffert = ({ crypto }: { crypto:allOfferType  }) => {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [amountNum, setAmountNum] = useState(0)

  function HandleCreateOffer() {
    CreateOffert()
      .then((res) => {
        alert('success')
        handleClose()
      })
      .catch((e) => console.log(e))
  }

  return (
    <div>
      <button
        onClick={handleOpen}
       className='bg-slate-600 p-2 flex items-center w-32 mx-auto shadow-md rounded-full font-bold m-2'
      >
       <IoIosAdd size={40} /> create offert
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <input
            type="number"
            onChange={(e) => {
              setAmountNum(Number(e.target.value))
            }}
            className="text-black indent-3 border-2 border-black  w-full"
            placeholder="how many tokens?"
            required
          />

          <div className="flex items-center">
            <button
              onClick={handleClose}
              className="bg-red-400 text-white rounded-md text-center w-32 p-2 m-4 "
            >
              Annuler
            </button>
            <button
              className="bg-green-700 text-white rounded-md text-center w-32 p-2 m-4 "
              onClick={() => {
                HandleCreateOffer(crypto.Crypto.id, crypto.amount)
              }}
            >
              Acheter
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}