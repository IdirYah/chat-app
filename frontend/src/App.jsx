import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./pages/home/Home.jsx"
import Login from "./pages/login/Login.jsx"
import SignUp from "./pages/signup/SignUp.jsx"

function App() {

  return (
    <div className='flex items-center justify-center h-screen p-4'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App
