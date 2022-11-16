import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllTodo, selectFilterCategory } from '../redux/features/todoSlice';
import { AnimatePresence, motion } from 'framer-motion'
import ToDoItems from './ToDoItems';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  },
}
const child = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },

}

function ToDoContent() {
  const data = useSelector(selectAllTodo);
  const category = useSelector(selectFilterCategory);
  const sortedData = [...data];
  let filteredData = [];
  sortedData.sort((a, b) => new Date(b.time) - new Date(a.time))

  if (category !== 'all') {
    filteredData = sortedData.filter(todo => todo.category === category);
  }
  else {
    filteredData = sortedData;
  }

  return (

    <motion.ul className='grid gap-3 w-full mt-6' variants={container} initial='hidden' animate='show'>
      <AnimatePresence>
        {filteredData && filteredData.length > 0 ?
          filteredData?.map(item => <ToDoItems key={item.id} item={item} variants={child}/>) :
          <motion.p className='p-3 w-full bg-gray-200 rounded text-center text-base text-gray-800 font-semibold'
            variants={child}  >
            No todo found
          </motion.p>}
      </AnimatePresence>

    </motion.ul>

  )
}

export default ToDoContent