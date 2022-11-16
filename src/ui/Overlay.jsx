import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const overlayAnimation = {
   hidden: { opacity: 0 },
   show: { scale: 1, opacity: 1, transition: { delay: 0.05 } },
   exit: { opacity: 0, transition: { delay: 0.15 } },
}

function Overlay({ visibility, setVisibility }) {
   const visibilityHandler = () => {
      setVisibility(!visibility);
   }

   return (
      <AnimatePresence>
         {visibility && <motion.div
            variants={overlayAnimation} initial='hidden' animate='show' exit='exit'
            className='bg-[#00000088] fixed inset-0 z-40'
            onClick={visibilityHandler}>
         </motion.div>}
      </AnimatePresence>
   )
}

export default Overlay