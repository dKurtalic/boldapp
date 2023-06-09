import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navBar'
import LandingPage from './screens/LandingPage'
import ExplorePage from './screens/ExplorePage'
import RegisterPage from './screens/RegisterPage'
import SignInPage from './screens/SignInPage'
import ForgotPassword from './screens/ForgotPassword';
import StartupPage from './screens/StartupPage';
import JobPage from './screens/JobPage';
import RegisterStartup from './screens/RegisterStartup';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/startupDetails/:startupName" element={<StartupPage />} />
        <Route path="/startupDetails/:startupName/:jobId" element={<JobPage />} />
        <Route path="/registerStartup" element={<RegisterStartup />} />
      </Routes>
    </Router>
  )
}

export default App