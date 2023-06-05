import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar'
import LandingPage from './screens/LandingPage'
import ExplorePage from './screens/ExplorePage'
import RegisterPage from './screens/RegisterPage'
import SignInPage from './screens/SignInPage'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
    </Router>
  )
}

export default App