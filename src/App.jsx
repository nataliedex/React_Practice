import { useState } from 'react'
import './App.css'
import React from 'react'
import Heading from './Heading'
import Greeting from './Greeting'
import Footer from './Footer'
import ExpenseGroup from './ExpenseGroup'
import Card from './Card'



const App = () => {
  return(
    <div>
      <Heading />
      <Greeting />
      <ExpenseGroup />
      <Card />
      


      <Footer />
    </div>
  )
}

export default App;