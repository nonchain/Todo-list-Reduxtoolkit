import React, { useState } from 'react';
import ReactDom from 'react-dom'
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { deleteToDo } from '../redux/features/todoSlice';
import { toast } from 'react-hot-toast';
import ImageButton from '../ui/ImageButton';
import Overlay from '../ui/Overlay';
import TodoModal from './TodoModal';

function ToDoItems({ item }) {
   const dispatch = useDispatch();
   const [modalVisibility, setModalVisibility] = useState(false);

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
            ReactDom.createPortal(<TodoModal createMode={false} visibility={modalVisibility} setVisibility={setModalVisibility} />, document.getElementById('modal-root'))
         }
         <li>
            <div className="px-3 py-4 w-full bg-gray-50 flex items-center justify-between rounded shadow-sm">
               <div className='flex flex-col'>
                  <h3 className='text-base text-gray-800 font-semibold'>{item.title}</h3>
                  <span className='text-sm text-gray-600 font-semibold'>
                     {item.category} - {format(new Date(item.time), 'MM/dd/yyyy')}
                  </span>
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
         </li>
      </React.Fragment>
   )
}

export default ToDoItems