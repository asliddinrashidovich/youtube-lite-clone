import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Apiservice } from '../../service-api/apiService'

const Chanel = () => {
  const [chanelDetail, setChanelDetail] = useState(null);
  const [video, setVideo] = useState(null);
  const {id} = useParams()

  console.log(chanelDetail)

  useEffect(() => {
    const getData = async () => {
      try {
        const dataChanelDetail = await Apiservice.fetching(`videos?part=contentDetails,snippet,statistics&id=${id}`)
        setChanelDetail(dataChanelDetail)
        const dataVideo = await Apiservice.fetching(`search?channelId=${id}&part=snippet`)
        setVideo(dataVideo)
      }
      catch(err) {
        console.log(err)
      }
    }
    getData()
  }, [id])
  return (
    <Link to={`/`}>
      <Button>Main: {id}</Button>
    </Link>
  )
}

export default Chanel