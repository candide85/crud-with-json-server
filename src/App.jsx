import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Create from './components/Create'
import Update from './components/Update'



function App() {

  return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home  />}   />
            <Route path='/create' element={<Create  />}   />
            <Route path='/update/:id' element={<Update  />}   />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
