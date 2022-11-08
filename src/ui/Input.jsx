import React from 'react'

function Input({ type, id, label, ...rest }) {
   return (
      <div className='flex flex-col gap-1'>
         <label className='text-base font-bold text-gray-600' htmlFor={id}>{label}</label>
         <input className='p-3 w-full text-gray-900 font-semibold border-2 border-gray-400 rounded duration-150 transition focus:border-gray-700 outline-none' type={type} id={id} {...rest} />
      </div>
   )
}

export default Input