import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import AuthContext from './context/AuthContext'
import Contact from './pages/ContactPage/index'
import Home from './pages/HomePage/index'
import LoginPage from './pages/LoginPage/index'

function App() {
  const [isLoggedInCtx, setIsLoggedInCtx] = useState<boolean>(false);

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) setIsLoggedInCtx(true);
  }, [isLoggedInCtx])

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ isLoggedInCtx: isLoggedInCtx, setIsLoggedInCtx: setIsLoggedInCtx }}>
        {isLoggedInCtx ?
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          : (
            <Routes>
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<LoginPage />} />
            </Routes>
          )}
      </AuthContext.Provider>
    </BrowserRouter >
  )
}

export default App
