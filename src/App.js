import React, { Component } from 'react'
import './App.css'
import Light from './components/Light'
import Header from './components/Header'
import Footer from './components/Footer'

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
