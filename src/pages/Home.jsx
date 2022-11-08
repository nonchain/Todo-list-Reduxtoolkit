import React, { useState } from 'react';
import ToDoContent from '../components/ToDoContent'
import ToDoHeader from '../components/ToDoHeader'

function Home() {
   return (
      <React.Fragment>
         <h1 className='mb-8 text-2xl font-bold'>To-Do list</h1>
         <ToDoHeader />
         <ToDoContent />
      </React.Fragment>
   )
}

export default Home