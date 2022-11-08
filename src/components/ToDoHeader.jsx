import React from 'react'
import Button from '../ui/Button'
import Select from '../ui/Select'

const ToDoHeader = () => {
  return (
    <div className='w-full flex items-center justify-between'>
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