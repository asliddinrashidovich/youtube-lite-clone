import { Stack } from '@mui/material'
import { categories } from '../../constants/category'
import { colors } from '../../constants/color'
import PropTypes from 'prop-types'


Category.propTypes = {
  selectedCategory: PropTypes.string.isRequired, 
  setCategoryFunc: PropTypes.func.isRequired,
};


function Category({ setCategoryFunc, selectedCategory }) {
  return (
    <Stack direction={'row'} sx={{overflowX: 'scroll'}}>
      {categories.map((item) => {
        let activeBg = selectedCategory == item.name ? colors.secondary : colors.primary 
        let activeColor = selectedCategory == item.name ? '#fff' : colors.secondary 
        return (
          <button onClick={() => setCategoryFunc(item.name)} className='categoryBtn' key={item.name} style={{borderRadius: '0', cursor: 'pointer', background: activeBg, color: activeColor}}>
            <span style={{color: activeColor, marginRight: '15px'}}>{item.icon}</span>
            <span style={{opacity: '1'}}>{item.name}</span>
          </button>
        )
      })}
    </Stack>
  )
}

export default Category