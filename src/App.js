import React, { Component } from 'react'
import './App.css'
import Light from './components/Light.js'
import Header from './components/Header.js'
import Footer from './components/Footer.js'

class App extends Component{
  render(){
    return(
      <>
        <h1>Hello Echo!</h1>
        <br></br>
        <br></br>
        <Header />
        <Light />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      < Footer />
      </>
    )
  }
}
export default App
