import React, { useState } from 'react';
import ToDoContent from '../components/ToDoContent'
import ToDoHeader from '../components/ToDoHeader'

function Home() {
   return (
      <React.Fragment>
         <h1 className='mb-8 text-2xl text-gray-800 font-bold lg:text-3xl xl:text-4xl xl:mb-10'>To-Do list</h1>
         <ToDoHeader />
         <ToDoContent />
      </React.Fragment>
   )
}

export default Home