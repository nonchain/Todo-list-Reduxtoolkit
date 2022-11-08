import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllTodo } from '../redux/features/todoSlice';

function ToDoContent() {
  const data = useSelector(selectAllTodo);

  return (
    <div className='mt-6'>
      <ul className='grid gap-3'>
        {data.map(item => <li className='grid' key={item.id}>{item.title} {item.category} {item.time}</li>)}
      </ul>
    </div>
  )
}

export default ToDoContent