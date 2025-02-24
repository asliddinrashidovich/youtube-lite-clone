import { Box, Stack } from '@mui/material';
import PropTypes from 'prop-types'
import VidioCard from '../vidio-card/vidioCard';
import { v4 as uuidv4 } from 'uuid';
import ChanelCard from '../chanel-card/chanel-card';
import Loader from '../loader/loader';

VidiosData.propTypes = {
  vidios: PropTypes.array.isRequired, 
};

function VidiosData ({vidios}) {
  if(!vidios) {
    return <Loader/>
  }
  return (
    <Stack width={'100%'} direction={'row'} flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'} gap={'40px'}>
      {vidios.map(item => {
        return (
          <Box key={uuidv4()}>
            {item.id.videoId && <VidioCard vidioItem={item}/>}
            {item.id.channelId && <ChanelCard video={item}/>}
          </Box>
        )
      })}
    </Stack>
  )
}

export default VidiosData