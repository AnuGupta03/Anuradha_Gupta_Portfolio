import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Maindiv } from './components/Maindiv'
import { Aboutus } from './components/Aboutus'
import { Projects } from './components/Projects'
import { Contacts } from './components/Contacts'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Maindiv/>
      <Aboutus/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default App
