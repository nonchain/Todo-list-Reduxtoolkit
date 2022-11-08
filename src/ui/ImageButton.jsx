import React from 'react'

function ImageButton({children, ...rest}) {
   return (
      <button className='w-8 h-8 bg-gray-300 rounded flex items-center justify-center absolute -top-11 right-0' {...rest}>
         {children}
      </button>
   )
}

export default ImageButton