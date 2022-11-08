import React from 'react'
import Home from './pages/Home';
import {Toaster} from 'react-hot-toast';

const App = () => {
  return (
    <div className="px-5 py-8 min-h-screen bg-gray-100 flex items-center flex-col">      
      <Home />
      <Toaster toastOptions={{
        style: {
          fontSize: '1.25rem',
          fontWeight: 600,
        }
      }}/>
    </div>
  )
}

export default App