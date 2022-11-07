import React from 'react';
import { getClasses } from '../../utils/getClasses';

/*
**************************************************
   Button has two state, Size and Variant
   Each of them has two options
   -Default size is normal
   -Default variant is primary
**************************************************
*/

const buttonType = {
   primary: 'bg-blue-500 text-gray-100 transition-color duration-300 hover:bg-blue-600',
   secondary: 'bg-gray-200 text-gray-500 transition-color duration-300 hover:bg-gray-300',
}

const buttonSize = {
   normal: 'px-5 py-3',
   large: 'px-6 py-4',
}


const Button = ({ children, variant = 'primary', size = 'normal', ...rest }) => {
   const btnClasses = [
      'button', 
      buttonType[variant],
      buttonSize[size],
   ]
   return (
      <button className={getClasses(btnClasses)} {...rest}>{children}</button>
      //  <button className={'button'}>{children}</button>
   )
}

export default Button