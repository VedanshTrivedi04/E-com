import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/style.css'
import Login from './components/Login'
import Show from './components/Show'
import Header from './components/Header'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Register from './components/Register'

function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
     
        <Routes>
          <Route path="/home" element={<Show />} />
          <Route path="/login" element={<Login />} />
          <Route path = "/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter> 
      
    </>


  )
}

export default App
