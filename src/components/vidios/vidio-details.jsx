import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Apiservice } from "../../service-api/apiService"
import { Avatar, Box, Stack, Typography } from "@mui/material"
import ReactPlayer from "react-player"
import { CheckCircle, FavoriteOutlined, MarkChatRead, Visibility } from "@mui/icons-material"
import Loader from "../loader/loader"
import VidiosData from "../vidios-data/vidiosData"

const VidioDetails = () => {
  const [videoDetail, setVideoDetail] = useState();
  const [relatedVideo, setRelatedVideo] = useState(null);
  const {id} = useParams()
  console.log(relatedVideo)

  useEffect(() => {
    const getData = async() => {
      try {
        const data = await Apiservice.fetching(`videos?part=contentDetails,snippet,statistics&id=${id}`)
        setVideoDetail(data.data.items[0])
        const related = await Apiservice.fetching(`search?part=snippet&q=${id}`)
        setRelatedVideo(related.data.items)
      } catch(err) {
        console.log(err)
      }
    }
    getData()

  }, [id])

  // const {snippet: {title, channelId, channelTitle, description, tags, thumbnails}, statistics: {viewCount, likeCount, commentCount}} = videoDetail
  
  if(!videoDetail && !relatedVideo) {
    return <Loader />
  }
  return (
    <Box minHeight={'90vh'} mb={10}>
      <Box display={'flex'} justifyContent={'space-between'} padding={5} gap={4} sx={{flexDirection: {xs: 'column', md:'row'}}}>
        <Box sx={{width: {xs: '100%', md: '70%'}}}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}   className="react-player" controls/>
          <Typography variant="h5" fontWeight={'bold'} p={2}>{videoDetail.snippet.title}</Typography>
          <Typography variant="subtitle2" p={2} sx={{opacity: '.7'}}>{videoDetail.snippet.description}</Typography>
          <Stack direction={'row'} gap={'20px'} alignItems={'center'} py={1} px={2}>
            <Stack sx={{opacity: '0.7'}} direction={'row'}  alignItems={'center'} gap={'3px'}>
              <Visibility/>
              {parseInt(videoDetail.statistics.viewCount).toLocaleString()} views
            </Stack>
            <Stack sx={{opacity: '0.7'}} direction={'row'}  alignItems={'center'} gap={'3px'}>
              <FavoriteOutlined/>
              {parseInt(videoDetail.statistics.likeCount).toLocaleString()} likes
            </Stack>
            <Stack sx={{opacity: '0.7'}} direction={'row'}  alignItems={'center'} gap={'3px'}>
              <MarkChatRead/>
              {parseInt(videoDetail.statistics.commentCount).toLocaleString()} comments
            </Stack>
          </Stack>
          <Stack direction={'row'} py={1} px={2}>
            <Link to={`/chanel/${videoDetail?.snippet?.channelId}`}>
              <Stack direction={'row'} alignItems={'center'} gap='10px' marginTop={'5px'}>
                <Avatar src={`${videoDetail.snippet.thumbnails.default.url}`}/>
                <Typography variant="subtitle2" color="gray">
                  {videoDetail.snippet.channelTitle}
                  <CheckCircle sx={{fontSize: '12px', color: 'gray', ml:'5px'}}/>
                </Typography>
              </Stack>
            </Link>
          </Stack>
        </Box>
        <Box width={{xs: '100%', md: '25%'}} px={2} py={{md: 1, xs: 5}} justifyContent={'center'} alignItems={'center'} overflow={'scroll'} maxHeight={'120vh'}>
          <VidiosData vidios={relatedVideo}/>
        </Box>
      </Box>
    </Box>
  )
}

export default VidioDetails