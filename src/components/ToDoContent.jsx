import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllTodo, selectFilterCategory } from '../redux/features/todoSlice';
import ToDoItems from './ToDoItems';

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
    <div className='w-full mt-6'>
      <ul className='grid gap-3'>
        {filteredData?.map(item => <ToDoItems key={item.id} item={item} />)}
      </ul>
    </div>
  )
}

export default ToDoContent