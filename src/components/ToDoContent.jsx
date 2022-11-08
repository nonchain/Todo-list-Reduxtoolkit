import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllTodo } from '../redux/features/todoSlice';
import ToDoItems from './ToDoItems';

function ToDoContent() {
  const data = useSelector(selectAllTodo);
  const sortedData = [...data];
  sortedData.sort((a, b) => new Date(b.time) - new Date(a.time))


  return (
    <div className='w-full mt-6'>
      <ul className='grid gap-3'>
        {sortedData?.map(item => <ToDoItems key={item.id} item={item}/>)}
      </ul>
    </div>
  )
}

export default ToDoContent