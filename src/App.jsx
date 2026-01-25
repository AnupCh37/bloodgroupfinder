import './App.css'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import FindDonor from './pages/FindDonor.jsx'
import RegisterDonor from './pages/RegisterDonor.jsx'
import Login from './pages/Login.jsx'
import Profile from './pages/Profile.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-donor" element={<FindDonor />} />
        <Route path="/register-donor" element={<RegisterDonor />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
