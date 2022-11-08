import React from 'react';
import { useFormContext } from 'react-hook-form';
import { toast } from 'react-hot-toast';

/*
**************************************************
   For input validation I use 'register' from react-hook-form
   For validation you should pass 3 parameters:
   -id, name, length(maxLength)
**************************************************
*/

function Input({ id, label, name, length,...rest }) {
   const { register, formState: { errors } } = useFormContext();

   return (
      <div className='flex flex-col gap-1'>
         <label className='text-base font-bold text-gray-600' htmlFor={id}>{label}</label>
         <input
            className='p-3 w-full text-gray-900 font-semibold border-2 border-gray-400 rounded duration-150 transition focus:border-gray-700 outline-none'

            id={id}
            {...rest} 
            {...register(name , {
               required: { value: true, message: `The ${name} field can not be blank` },
               maxLength: { value: length, message: `${name} is more than ${length} characters` },
            })}/>

            {errors[name]?.message && <span className='text-sm text-red-500 font-semibold'>{errors[name]?.message}</span>}
      </div>
   )
}

export default Input