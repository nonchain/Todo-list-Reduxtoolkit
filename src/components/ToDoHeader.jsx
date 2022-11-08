import React, { useState } from 'react'
import ReactDom  from 'react-dom';
import TodoModal from '../components/TodoModal'
import Overlay from '../ui/Overlay'
import Button from '../ui/Button'
import Select from '../ui/Select'

const ToDoHeader = () => {
  const [modalVisibility, setModalVisibility] = useState(true);

  return (

    <div className='w-full flex items-center justify-between'>
      {/* ===== GLOBAL COMPONENTS ===== */}
      {
        ReactDom.createPortal(<Overlay visibility={modalVisibility} setVisibility={setModalVisibility} />, document.getElementById('overlay-root'))
      }
      {
        ReactDom.createPortal(<TodoModal visibility={modalVisibility} setVisibility={setModalVisibility} />, document.getElementById('modal-root'))
      }

      <Button type='button'>Add Task</Button>
      <Select id='category' name='category'>
        <option value="all">All</option>
        <option value="personal">Personal</option>
        <option value="work">Work</option>
        <option value="course">Course</option>
      </Select>
    </div>
  )
}

export default ToDoHeader