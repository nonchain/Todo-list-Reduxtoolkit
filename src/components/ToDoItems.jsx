import React from 'react';
import { format } from 'date-fns';
import ImageButton from '../ui/ImageButton'

function ToDoItems({ item }) {
   const editHandler = () => {
      console.log('edit')
   }
   const deleteHandler = () => {
      console.log('delete')
   }

   return (
      <li>
         <div className="px-3 py-4 w-full bg-gray-50 flex items-center justify-between rounded shadow-sm">
            <div className='flex flex-col'>
               <h3 className='text-base text-gray-800 font-semibold'>{item.title}</h3>
               <span className='text-sm text-gray-600 font-semibold'>
                  {item.category} - {format(new Date(item.time), 'MM/dd/yyyy')}
               </span>
            </div>
            <div className='flex gap-2'>
               <ImageButton className={'bg-red-400'} onClick={deleteHandler}>
                  <i className="ri-delete-bin-6-fill text-white"></i>
               </ImageButton>
               <ImageButton onClick={editHandler}>
                  <i className="ri-pencil-fill text-gray-700"></i>
               </ImageButton>
            </div>
         </div>
      </li>
   )
}

export default ToDoItems