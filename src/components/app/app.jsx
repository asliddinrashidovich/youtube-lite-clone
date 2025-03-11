import { Route, Routes } from 'react-router-dom'
import {MainComponent, Navbar, VidioDetails, Search, Chanel} from '../'
import {Box} from '@mui/material'

const App = () => {
  return (
    <Box>
      <Navbar/>
      <Routes>
        <Route path='/' element={<MainComponent/>}/> 
        <Route path='/chanel/:id' element={<Chanel/>}/>
        <Route path='/video/:id' element={<VidioDetails/>}/>
        <Route path='/search/:id' element={<Search/>}/>
      </Routes>
    </Box>
  )
}

export default App