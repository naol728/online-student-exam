import { Button } from '@mui/material'
import React from 'react'
export default function Popupview({content}) {
  return (
    <div className='h-screen bg-transparent flex items-center justify-center  '>
      <div className='p-5 rounded-md w-[50%] h-[50%] bg-slate-300 fixed shadow-xl'>
      {content}
       <div className='absolute bottom-5 right-5'>
      <Button type="outlined" >cancle</Button>
      </div>
      </div>
   
    </div>
  )
}
