import { Box, Stack } from '@mui/material'
import { headerLogo} from '../../constants/images'
import { Link } from 'react-router-dom'
import { colors } from '../../constants/color'
import SearchBar from '../search-bar/search-bar'

const Navbar = () => {
  return (
    <Stack direction={'row'} p={2} sx={{position: 'sticky', top: '0', zIndex: '999', background: colors.primary}} alignItems={'center'} justifyContent={'space-between'}>
      <Link to={'/'}>
        <img src={headerLogo} width={50} alt="header logo" />
      </Link>
      <SearchBar/>
      <Box/>
    </Stack>
  )
}

export default Navbar