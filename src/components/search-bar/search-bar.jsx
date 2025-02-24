import { IconButton, Paper } from '@mui/material'
import { Search } from '@mui/icons-material'
import { colors } from '../../constants/color'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [value, setValue] = useState('');
  const navigate = useNavigate()
  
  function changeHandler(e) {
    e.preventDefault();
    if(value.length) {
      console.log(value)
      navigate(`/search/${value}`)
    }
  }

  return (
    <Paper className='search_input' onSubmit={changeHandler} component={'form'} sx={{border: `1px solid ${colors.secondary}`, pl: 2, boxShadow: 'none'}}>
      <input type="text" onChange={(e) => setValue(e.target.value)} placeholder='search...' className='search-bar'/>
      <IconButton type='submit'>
        <Search/>
      </IconButton>
    </Paper>
  )
}

export default SearchBar