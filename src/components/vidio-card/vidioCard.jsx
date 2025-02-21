import { CheckCircle } from "@mui/icons-material";
import { Avatar, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import moment from "moment";
import PropTypes from "prop-types"
// import { colors } from '../../constants/color'

VidioCard.propTypes = {
    vidioItem: PropTypes.object.isRequired,
};

function VidioCard({vidioItem}) {
  console.log(vidioItem?.snippet?.thumbnails?.high?.url)
  return (
    <Card sx={{width: '320px', boxShadow: 'none', borderRadius: 0}}>
        <CardMedia image={vidioItem?.snippet?.thumbnails?.high?.url} sx={{width: '360px', height: '180px'}}/>
        <CardContent sx={{backgroun: 'red',  height: '200px', position: 'relative'}}>
          <>
            <Typography my={'5px'} sx={{opacity: '.4'}}>
              {moment(vidioItem?.snippet?.publishedAt).fromNow()}
            </Typography>
            <Typography variant="subtitle1" fontWeight={'bold'}>
              {vidioItem?.snippet?.title.slice(0, 50)}
            </Typography>
            <Typography variant="subtitle2" fontWeight={'bold'}>
              {vidioItem?.snippet?.description.slice(0, 70)}
            </Typography>
          </>
          <>
            <Stack direction={'row'} position={'absolute'} bottom={'10px'} alignItems={'center'} gap={'5px'} >
              <Avatar src={vidioItem?.snippet?.thumbnails?.high?.url} />
              <Typography>
                {vidioItem?.snippet?.channelTitle}
                <CheckCircle sx={{fontSize: '12px', color: 'gray', marginLeft: '5px'}}/>
              </Typography>
            </Stack>
          </>
        </CardContent>
    </Card>
  )
}

export default VidioCard