import React from 'react'


export default function Authlayout({children}: {
    children: React.ReactNode
}) {
   
  return (
    <div className='flex flex-col justify-center items-center bg-blue-900 h-screen'>
       
        {children}
    </div>
  )
}