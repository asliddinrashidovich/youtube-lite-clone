import { Box, Container, Stack, Typography } from '@mui/material'
import Category from '../category/category'
import { useEffect, useState } from 'react'
import { colors } from '../../constants/color'
import VidiosData from '../vidios-data/vidiosData'
import { Apiservice } from '../../service-api/apiService'

const MainComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [vidios, setVidios] = useState([])

  useEffect(() => {
    Apiservice.fetching('search').then(data => setVidios(data))
  }, [])
  
  const setCategoryFunc = category => setSelectedCategory(category);
  return (
    <Stack>
      <Category setCategoryFunc={setCategoryFunc} selectedCategory={selectedCategory}/>
      <Box p={2} sx={{height: '90vh'}}>
        <Container maxWidth={'90%'}>
          <Typography variant='h4' fontWeight={'bold'} mb={2}>
            {selectedCategory} <span style={{color: colors.secondary}}>vidios</span>
          </Typography>
          <VidiosData vidios={vidios}/>
        </Container>
      </Box>
    </Stack>
  )
}

export default MainComponent