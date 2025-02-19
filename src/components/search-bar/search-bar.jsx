import { IconButton, Paper } from '@mui/material'
import { Search } from '@mui/icons-material'
import { colors } from '../../constants/color'

const SearchBar = () => {
  return (
    <Paper component={'form'} sx={{border: `1px solid ${colors.secondary}`, pl: 2, boxShadow: 'none'}}>
      <input type="text" placeholder='search...' className='search-bar'/>
      <IconButton>
        <Search/>
      </IconButton>
    </Paper>
  )
}

export default SearchBar