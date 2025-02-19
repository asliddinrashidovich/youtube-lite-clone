import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../../constants/category'
import { colors } from '../../constants/color'

const Category = () => {
  return (
    <Stack direction={'row'} sx={{overflowX: 'scroll'}}>
      {categories.map((item) => {
        return (
          <button className='categoryBtn' key={item.name} style={{borderRadius: '0', cursor: 'pointer'}}>
            <span style={{color: colors.secondary, marginRight: '15px'}}>{item.icon}</span>
            <span style={{opacity: '1'}}>{item.name}</span>
          </button>
        )
      })}
    </Stack>
  )
}

export default Category