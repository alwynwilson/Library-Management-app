import { Route,Routes } from 'react-router-dom'
import './App.css'
import Landing from './Pages/Landing'
import Store from './Pages/Store'
import Footer from './Components/Footer'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/store' element={<Store/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
