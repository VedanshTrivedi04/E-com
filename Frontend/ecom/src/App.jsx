import { useState } from 'react'
import './App.css'
import './assets/style.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Filter from './components/Filter'
import Header from './components/Header'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     {/* <Navbar/> */}
     <Banner/>
     <Filter/>
     <Footer/>

    </>
  )
}

export default App
