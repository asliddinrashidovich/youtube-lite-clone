import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

ChanelCard.propTypes = {
  video: PropTypes.object.isRequired,
};

function ChanelCard({video}) {
  return (
    <Box sx={{boxShadow: 'none', width: {xs: '356px', md: '320px'} , height: '326px', margin: 'auto', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
      <Link to={`/chanel/${video?.id?.chnnelId ? video?.id?.chnnelId : video?.id}`}>
        <CardContent sx={{display: 'flex', flexDirection:'column',textAlign: 'center' ,  justifyContent:'center'}}>
          <CardMedia image={`${video?.snippet?.thumbnails?.high?.url}`} sx={{borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3'}}/>
          <Typography variant="h6">
            {video?.snippet?.title}{' '}
            <CheckCircle sx={{fontSize: '14px', color: 'gray', ml: '5px'}}/>
          </Typography>
          {video?.statistics?.subscriberCount && (
            <Typography sx={{fontSize: '15px', fontWeight: 500, color: 'gray' }}>
              {parseInt(video?.statistics?.subscriberCount).toLocaleString("en-US")} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChanelCard