import { Box} from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Apiservice } from '../../service-api/apiService'
import ChanelCard from '../chanel-card/chanel-card'

const Chanel = () => {
  const [chanelDetail, setChanelDetail] = useState(null);
  const [video, setVideo] = useState(null);
  const {id} = useParams()

  console.log( video)

  useEffect(() => {
    const getData = async () => {
      try {
        const dataChanelDetail = await Apiservice.fetching(`channels?part=snippet&id=${id}`)
        setChanelDetail(dataChanelDetail.data.items[0])
        const dataVideo = await Apiservice.fetching(`search?part=snippet&channelId=${id}`)
        setVideo(dataVideo)
      }
      catch(err) {
        console.log(err)
      }
    }
    getData()
  }, [id])
  return (
    <Box minHeight={'95vh'} mt={'10vh'}>
      <Box>
        <Box width={'100%'} height={'200px'}  zIndex={10} sx={{backgroundImage: `url(${chanelDetail?.brandingSettings?.image?.bannerExternalUrl})`, backgroundPosition: 'center', backgroundSize: 'cover'}}/>
        <ChanelCard video={chanelDetail}/>
      </Box>
    </Box>
  )
}

export default Chanel