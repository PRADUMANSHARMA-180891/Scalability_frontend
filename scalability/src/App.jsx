// import { useState } from 'react'

import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: 
  // },
  
]);
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        <div className="App">
      {/* <Home></Home> */}
      <RouterProvider router={router} />
    </div>
    </>
  )
}

export default App
