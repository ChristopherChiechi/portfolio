// This website is based off of code from the YouTube channel GorkCoder

import React from "react"

import Header from "./Components/Header/Header"
import Home from "./Components/Hero/Home"
import Portfolio from "./Components/Portfolio/Portfolio"
import Blog from "./Components/Blog/Blog"
//import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer"
import "./App.css"

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Portfolio />
      <Blog />
      {/*<Contact />*/}
      <Footer />
    </>
  )
}

export default App;