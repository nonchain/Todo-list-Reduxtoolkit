import React, { useState } from 'react'

function Overlay({ visibility, setVisibility }) {
   const visibilityHandler = () => {
      setVisibility(!visibility);
   }
   
   if (!visibility) return;

   return (
      <div
         className='bg-[#00000088] fixed inset-0 z-40'
         onClick={visibilityHandler}></div>
   )
}

export default Overlay