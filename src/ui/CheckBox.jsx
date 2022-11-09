import React, { useState } from 'react'

function CheckBox({ id, completedTask, setCompletedTask }) {
   const checkedHandler = () => {
      setCompletedTask(!completedTask);
   }
   return (
      <label className='w-5 h-5 flex items-center gap-1 relative'>
         <input type="checkbox" id={id} onChange={checkedHandler} className='checkbox' />
         <i className={`ri-check-line text-white absolute absolute-center hidden`}></i>
      </label>
   )
}

export default CheckBox