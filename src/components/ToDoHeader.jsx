import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterCategory, selectFilterCategory } from '../redux/features/todoSlice';
import ReactDom from 'react-dom';
import TodoModal from '../components/TodoModal'
import Overlay from '../ui/Overlay'
import Button from '../ui/Button'
import Select from '../ui/Select'

const ToDoHeader = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(selectFilterCategory)
  const [modalVisibility, setModalVisibility] = useState(false);

  const visibilityHandler = () => {
    setModalVisibility(true);
  }

  const filterCategoryHandler = (e) => {
    const value = e.target.value;
    dispatch(filterCategory(value));
  }

  return (

    <div className='w-full flex items-center justify-between'>
      {/* ===== GLOBAL COMPONENTS ===== */}
      {
        ReactDom.createPortal(<Overlay visibility={modalVisibility} setVisibility={setModalVisibility} />, document.getElementById('overlay-root'))
      }
      {
        ReactDom.createPortal(<TodoModal visibility={modalVisibility} setVisibility={setModalVisibility} />, document.getElementById('modal-root'))
      }

      <Button type='button' onClick={visibilityHandler}>Add Task</Button>
      <Select id='category' name='category' value={selectedCategory} onChange={filterCategoryHandler}>
        <option value="all">All</option>
        <option value="personal">Personal</option>
        <option value="work">Work</option>
        <option value="course">Course</option>
      </Select>
    </div>
  )
}

export default ToDoHeader