import React from 'react'
import PropTypes from 'prop-types'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'

const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Spinner = ({ isLoading }) => {
  return isLoading && (
    <SpinnerContainer>
      <Loader
        type="ThreeDots"
        color="#6495ED"
        height="100"
        width="100"
      />
    </SpinnerContainer>
  )
}

Spinner.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

export default Spinner
