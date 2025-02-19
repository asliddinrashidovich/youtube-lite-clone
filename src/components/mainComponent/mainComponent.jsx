import { Box, Container, Stack, Typography } from '@mui/material'
import Category from '../category/category'
import { useState } from 'react'
import { colors } from '../../constants/color'

const MainComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  return (
    <Stack>
      <Category/>
      <Box p={2} sx={{height: '90vh'}}>
        <Container maxWidth={'90%'}>
          <Typography variant='h4' fontWeight={'bold'} mb={2}>
            {selectedCategory} <span style={{color: colors.secondary}}>vidios</span>
          </Typography>
        </Container>
      </Box>
    </Stack>
  )
}

export default MainComponent