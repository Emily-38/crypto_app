

import { buyCrypto } from '@/services/auth'
import { CryptoProps } from '@/utils/type'
import { Box, Modal } from '@mui/material'
import React, { useState } from 'react'

export const ModaleBuy = ({ crypto }: { crypto: CryptoProps }) => {
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
  const [amount, setAmount] = useState(0)

  function HandleCrypoBuy() {
    buyCrypto(crypto.id, amount)
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
       className='bg-slate-600 p-5 w-32 mx-auto shadow-md rounded-full font-bold m-2'
      >
        Buy
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
              setAmount(Number(e.target.value))
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
                HandleCrypoBuy()
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
