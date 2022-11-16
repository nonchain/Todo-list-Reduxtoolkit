import React, { useState } from 'react';
import ReactDom from 'react-dom'
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { deleteToDo } from '../redux/features/todoSlice';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';
import ImageButton from '../ui/ImageButton';
import Overlay from '../ui/Overlay';
import TodoModal from './TodoModal';
import CheckBox from '../ui/CheckBox';

const toDoCategory = {
   'no-category': 'No Category',
   'personal': 'Personal',
   'work': 'Work',
   'course': 'Course',
}

function ToDoItems({ item, ...rest }) {
   const dispatch = useDispatch();
   const [modalVisibility, setModalVisibility] = useState(false);
   const [completedTask, setCompletedTask] = useState(false);

   const editHandler = () => {
      setModalVisibility(true);
   }
   const deleteHandler = () => {
      toast('Task deleted', {
         icon: '💢',
         duration: 1200,
      })
      dispatch(deleteToDo(item.id))
   }

   return (
      <React.Fragment>
         {/* ===== GLOBAL COMPONENTS ===== */}
         {
            ReactDom.createPortal(<Overlay visibility={modalVisibility} setVisibility={setModalVisibility} />, document.getElementById('overlay-root'))
         }
         {
            ReactDom.createPortal(<TodoModal todo={item} createMode={false} visibility={modalVisibility} setVisibility={setModalVisibility} />, document.getElementById('modal-root'))
         }
         <motion.li {...rest}>
            <div className="px-3 py-4 w-full bg-gray-50 flex items-center justify-between rounded shadow-sm">
               <div className="flex gap-4 items-center">
                  <CheckBox completedTask={completedTask} setCompletedTask={setCompletedTask}/>
                  <div className='flex flex-col'>
                     <h3 className={`text-base text-gray-800 font-semibold duration-150 transition ${completedTask ? 'line-through opacity-75' : ''}`}>{item.title}</h3>
                     <span className='text-[13px] text-gray-600 font-semibold'>
                        {toDoCategory[item.category]} - {format(new Date(item.time), 'MM/dd/yyyy')}
                     </span>
                  </div>
               </div>

               <div className='flex gap-2'>
                  <ImageButton onClick={deleteHandler}>
                     <i className="ri-delete-bin-6-fill text-red-500"></i>
                  </ImageButton>
                  <ImageButton onClick={editHandler}>
                     <i className="ri-pencil-fill text-gray-700"></i>
                  </ImageButton>
               </div>
            </div>
         </motion.li>
      </React.Fragment>
   )
}

export default ToDoItems