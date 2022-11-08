import React from 'react'

function ImageButton({children, className, ...rest}) {
   return (
      <button className={`w-8 h-8 bg-gray-300 rounded flex items-center justify-center ${className}`} {...rest}>
         {children}
      </button>
   )
}

export default ImageButton