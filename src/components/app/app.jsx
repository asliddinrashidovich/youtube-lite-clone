import React from 'react'
import { Button, Container } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import {MainComponent, Navbar, VidioDetails, Search, Chanel} from '../'
import {Box} from '@mui/material'

const App = () => {
  return (
    <Box>
      <Navbar/>
      <Routes>
        <Route path='/' element={<MainComponent/>}/>
        <Route path='/chanel' element={<Chanel/>}/>
        <Route path='/vidio' element={<VidioDetails/>}/>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </Box>
  )
}

export default App