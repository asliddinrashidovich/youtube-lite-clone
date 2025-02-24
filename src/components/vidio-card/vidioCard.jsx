import { CheckCircle } from "@mui/icons-material";
import { Avatar, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material"
import moment from "moment";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";
// import { colors } from '../../constants/color'

VidioCard.propTypes = {
    vidioItem: PropTypes.object.isRequired,
};

function VidioCard({vidioItem}) {
  return (
    <Card sx={{width: {xs: '100%', sm: '100%', md: '350px'}, boxShadow: 'none', borderRadius: 0}}>
        <Link to={`/video/${vidioItem.id.videoId}`}>
          <CardMedia image={vidioItem?.snippet?.thumbnails?.high?.url} sx={{width:  {xs: '100%', sm: '100%', md: '350px'}, height: {xs: '250px', sm: '230px', md: '180px'}, borderRadius: '15px'}}/>
        </Link>
        <CardContent sx={{backgroun: 'red',  height: '200px', position: 'relative'}}>
          <Link to={`/video/${vidioItem.id.videoId}`}>
            <Typography my={'5px'} sx={{opacity: '.4'}}>
              {moment(vidioItem?.snippet?.publishedAt).fromNow()}
            </Typography>
            <Typography variant="subtitle1" fontWeight={'bold'}>
              {vidioItem?.snippet?.title.slice(0, 50)}
            </Typography>
            <Typography variant="subtitle2" fontWeight={'bold'}>
              {vidioItem?.snippet?.description.slice(0, 70)}
            </Typography>
          </Link>
          <Link to={`/chanel/${vidioItem?.snippet?.channelId}`}>
            <Stack direction={'row'} position={'absolute'} bottom={'10px'} alignItems={'center'} gap={'5px'} >
              <Avatar src={vidioItem?.snippet?.thumbnails?.high?.url} />
              <Typography>
                {vidioItem?.snippet?.channelTitle}
                <CheckCircle sx={{fontSize: '12px', color: 'gray', marginLeft: '5px'}}/>
              </Typography>
            </Stack>
          </Link>
        </CardContent>
    </Card>
  )
}

export default VidioCard