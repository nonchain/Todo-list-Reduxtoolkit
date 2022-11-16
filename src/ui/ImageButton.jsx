import React from 'react'
import { motion } from 'framer-motion'

function ImageButton({children, className, ...rest}) {
   return (
      <motion.button className={`w-8 h-8 bg-gray-300 rounded flex items-center justify-center ${className}`} {...rest}>
         {children}
      </motion.button>
   )
}

export default ImageButton