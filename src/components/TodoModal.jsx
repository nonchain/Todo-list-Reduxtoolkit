import React from 'react'
import Button from '../ui/Button'
import ImageButton from '../ui/ImageButton'
import Input from '../ui/Input'
import Select from '../ui/Select'

function TodoModal({ visibility, setVisibility }) {
  const visibilityHandler = () => {
    setVisibility(!visibility);
  }

  if (!visibility) return;

  return (
    <div className='w-80 bg-gray-50 rounded-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
      <div className="px-6 py-5 w-full h-full relative">
        <ImageButton onClick={visibilityHandler}>
          <i className="ri-close-fill text-gray-700 text-xl"></i>
        </ImageButton>

        <h2 className='text-gray-800 text-xl font-bold'>Add new task</h2>
        <form action="" className='mt-5 flex flex-col gap-4'>
          <Input id='task-title' type='text' label='Title' placeholder='e.g Go to gym' />

          <div className='flex flex-col gap-1'>
            <label className='text-base font-bold text-gray-600' htmlFor="category">Category</label>
            <Select id='category' name='category'>
              <option className='option' value="no-category">No Category</option>
              <option className='option' value="personal">Personal</option>
              <option className='option' value="work">Work</option>
              <option className='option' value="course">Course</option>
            </Select>
          </div>

          <div className='mt-8 flex items-center gap-2 place-self-end'>
            <Button type='button' variant='secondary' onClick={visibilityHandler}>Cancel</Button>
            <Button >Add</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TodoModal