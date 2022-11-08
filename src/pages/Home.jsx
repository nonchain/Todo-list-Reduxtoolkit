import React, { useState } from 'react';
import ReactDom  from 'react-dom';
import TodoModal from '../components/TodoModal'
import Overlay from '../ui/Overlay'
import ToDoContent from '../components/ToDoContent'
import ToDoHeader from '../components/ToDoHeader'

function Home() {
   const [modalVisibility, setModalVisibility] = useState(false)
   return (
      <React.Fragment>
         {/* ===== GLOBAL COMPONENTS ===== */}
         {
            ReactDom.createPortal(<Overlay />, document.getElementById('overlay-root'))
         }
         {
            ReactDom.createPortal(<TodoModal modalVisibility={modalVisibility} setModalVisibility={setModalVisibility}/>, document.getElementById('modal-root'))
         }
         <h1 className='mb-8 text-2xl font-bold'>To-Do list</h1>

         <ToDoHeader />
         <ToDoContent />
      </React.Fragment>
   )
}

export default Home