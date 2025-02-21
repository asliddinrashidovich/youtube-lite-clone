import { Card, CardContent, CardMedia, colors } from "@mui/material"
import PropTypes from "prop-types"

VidioCard.propTypes = {
    vidioItem: PropTypes.object.isRequired,
};

function VidioCard({vidioItem}) {
  console.log(vidioItem)
  return (
    <Card sx={{width: '320px', boxShadow: 'none', borderRadius: 0}}>
        <CardMedia image={vidioItem?.snippet?.thumbnails?.high?.url}/>
        <CardContent sx={{backgroun: colors}}></CardContent>
    </Card>
  )
}

export default VidioCard