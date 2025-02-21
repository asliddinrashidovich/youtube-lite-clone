import { Box, Stack } from '@mui/material';
import PropTypes from 'prop-types'
import VidioCard from '../vidio-card/vidioCard';
import { v4 as uuidv4 } from 'uuid';

VidiosData.propTypes = {
  vidios: PropTypes.array.isRequired, 
};

function VidiosData ({vidios}) {
  return (
    <Stack width={'100%'} direction={'row'} flexWrap={'wrap'} justifyContent={'start'} alignItems={'center'} gap={2}>
      {vidios.map(item => {
        return (
          <Box key={uuidv4()}>
            {item.id && <VidioCard vidioItem={item}/>}
          </Box>
        )
      })}
    </Stack>
  )
}

export default VidiosData