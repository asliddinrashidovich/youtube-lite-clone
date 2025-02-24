import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Apiservice } from "../../service-api/apiService";
import { Box, Container, Typography } from "@mui/material";
import { colors } from "../../constants/color";
import VidiosData from "../vidios-data/vidiosData";

const Search = () => {
  const [vidios, setVidios] = useState([]);
  const {id} = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await Apiservice.fetching(`search?part=snippet&q=${id}`)
        setVidios(data.data.items)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [id])

  return (
    <Box p={2} sx={{height: '90vh'}}>
      <Container maxWidth={'90%'}>
        <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
          Search results for <span style={{color: colors.secondary}}>{id}</span> videos
        </Typography>
        <VidiosData vidios={vidios}/>
      </Container>
    </Box>
  )
}

export default Search