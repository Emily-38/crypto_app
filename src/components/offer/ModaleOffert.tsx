

import { CreateOffert, myAsset } from '@/services/auth'
import { CreateOffer, userProps } from '@/utils/type'
import { Box, Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { IoIosAdd, IoIosCloseCircleOutline } from 'react-icons/io'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'


export const ModaleOffert = () => {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
       
        bgcolor: '#405365',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const {register,handleSubmit}=useForm<CreateOffer>({mode:'onSubmit'})
  const onSubmit: SubmitHandler<CreateOffer> = (data) =>
  CreateOffert(data).then((res)=>{ 
    
    if(res.status=== 201){  
      toast.success('Create offer successfull')
     }
    }
 )

  const [cryptos, setcryptos]= useState<userProps>()


  
  useEffect(() => {
  function getCrytoOffer() {
    myAsset()
      .then((res) => {
      setcryptos(res.data)
        handleClose()
      })
      .catch((e) => console.log(e))
  }
  getCrytoOffer()
}, [])
  return (
    <div>
      <button
        onClick={handleOpen}
       className='bg-slate-600 p-2 flex items-center w-42 mx-auto shadow-md rounded-full font-bold m-2'
      >
       <IoIosAdd size={40} /> create offert
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="w-4/5 text-white ">
        <div className='flex justify-end'>
        <button
              onClick={handleClose}
              className=" text-black  text-right "
            >
              <IoIosCloseCircleOutline size={40} />
            </button>
        </div> 
        <form className="flex flex-col items-center gap-5" onSubmit={handleSubmit(onSubmit)}>
            <p>Crypto: </p>
            <select className='p-2 rounded text-black'  id="crypto"{...register('id_crypto')}>
                {cryptos && cryptos?.UserHasCrypto.map((crypt)=>{
                    return (
                        <option value={crypt.Crypto.id} >
                        {crypt.Crypto.name}
                        </option>
                    )
                })}
                
            </select>
            <p>Quantity:</p>
          <input
            type="number"
            {...register('amount')}
            className="text-black indent-3 rounded p-2 "
            placeholder="how many tokens?"
            required
          />

          <div className="flex items-center">
         
            <button
              className="bg-green-700 text-white rounded-md text-center w-32 p-2 m-4 "
              type='submit'
            >
             Sell
            </button>
          </div>
          </form>
        </Box>
      </Modal>
    </div>
  )
}