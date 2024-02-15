import { Routes, Route } from 'react-router-dom'
import NavBar from './Components/Navbar'
import SinglePlayer from './Components/SinglePlayer'
import './App.css'
import AllPlayers from './Components/AllPlayers'
import CreatePuppyForm from './Components/CreatePuppyForm'

function App() {
  return (
   <div>
    <NavBar />
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
        <Route path="/createPuppyForm" element={<CreatePuppyForm />} />
      </Routes>
   </div>
  )
}

export default App
