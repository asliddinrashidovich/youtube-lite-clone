import PropTypes from 'prop-types'


VidiosData.propTypes = {
  vidios: PropTypes.array.isRequired, 
};

const VidiosData = ({vidios}) => {
  console.log(vidios)
  return (
    <div>VidiosData</div>
  )
}

export default VidiosData