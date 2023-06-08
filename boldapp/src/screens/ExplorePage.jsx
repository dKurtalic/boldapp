import React from 'react'
import SearchComponent from '../components/searchComponent'
import NavBar from '../components/navBar'
import StartupContainer from '../components/startupContainer'
import Footer from '../components/footer'
import Values from '../components/values'

const ExplorePage = () => {
  return (
    <div>
      <SearchComponent />
      <StartupContainer />
      <Values />
      <Footer />
    </div>

  )
}

export default ExplorePage;