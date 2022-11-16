import React, { useEffect } from 'react';
import { useForm, FormProvider } from "react-hook-form";
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addToDo, updateToDo } from '../redux/features/todoSlice';
import { toast } from 'react-hot-toast';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '../ui/Button'
import ImageButton from '../ui/ImageButton'
import Input from '../ui/Input'

const defaultValues = {
  title: '',
  category: 'no-category'
}

const modalAnimation = {
  hidden: { opacity: 0, scale: 0.75, x: '-50%', y: '-50%' },
  show: { scale: 1, opacity: 1, transition: { delay: 0.1 } },
  exit: { scale: 0.75, opacity: 0 },
}

const closeButtonAnimation = {
  hidden: { scaleY: 0.05, originY: '100%' },
  show: { scaleY: 1, transition: { delay: 0.35 } },
}

function TodoModal({ visibility, setVisibility, todo, createMode = true }) {
  const dispatch = useDispatch();
  const formMethods = useForm({ defaultValues: defaultValues });
  const { register, handleSubmit, setValue, reset } = formMethods;

  useEffect(() => {
    if (!createMode && todo) {
      setValue('title', todo.title);
      setValue('category', todo.category);
    }
  }, [createMode, todo, visibility])

  const visibilityHandler = () => {
    reset();
    setVisibility(!visibility);
  }

  const onSubmitHandler = (data) => {
    const id = nanoid();
    const time = new Date().toLocaleDateString();

    // Update task
    if (!createMode) {
      dispatch(updateToDo({ ...todo, ...data }));
      toast.success('Task updated successfully')
      visibilityHandler();
      return;
    }
    // Add new Task
    dispatch(addToDo({ id, time, ...data }));
    toast.success('Task added successfully')
    visibilityHandler();
  }

  return (
    <AnimatePresence>
      {visibility && <motion.div className='w-80 bg-gray-50 rounded-lg fixed absolute-center z-50'
        variants={modalAnimation} initial='hidden' animate='show' exit='exit'>
        <div className="px-6 py-5 w-full h-full relative">
          <ImageButton className='absolute -top-11 right-0 z-30' onClick={visibilityHandler} variants={closeButtonAnimation}>
            <i className="ri-close-fill text-gray-700 text-xl"></i>
          </ImageButton>

          <h2 className='text-gray-800 text-xl font-bold'>{createMode ? 'Add new' : 'Update'} task</h2>
          <FormProvider {...formMethods}>
            <form action="" className='mt-5 flex flex-col gap-4' onSubmit={handleSubmit(onSubmitHandler)}>
              <Input
                id='task-title'
                name='title'
                type='text'
                label='Title'
                placeholder='e.g Go to gym'
                length={16} />

              <div className='flex flex-col gap-1'>
                <label className='text-base font-bold text-gray-600' htmlFor="category">Category</label>
                <select className='select' id='category' name='category' {...register('category')}>
                  <option className='option' value="no-category">No Category</option>
                  <option className='option' value="personal">Personal</option>
                  <option className='option' value="work">Work</option>
                  <option className='option' value="course">Course</option>
                </select>
              </div>

              <div className='mt-8 flex items-center gap-2 place-self-end'>
                <Button type='button' variant='secondary' onClick={visibilityHandler}>Cancel</Button>
                <Button >{createMode ? 'Add' : 'Update'}</Button>
              </div>
            </form>
          </FormProvider>
        </div>
      </motion.div>}
    </AnimatePresence>
  )
}

export default TodoModal