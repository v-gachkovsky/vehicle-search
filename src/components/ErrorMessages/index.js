import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Errors = styled.div`
  color: #f00;
  font-size: 12px;
  margin: 1rem;
`

const Error = styled.p``


const ErrorMessages = ({ searchStringFormatError, apiError }) => {
  return (searchStringFormatError || apiError) && (
    <Errors>
      { searchStringFormatError && (
        <Error>
          { searchStringFormatError }
        </Error>
      ) }
      { apiError && (
        <Error>
          { apiError }
        </Error>
      ) }
    </Errors>
  )
}

ErrorMessages.propTypes = {
  searchStringFormatError: PropTypes.string,
  apiError: PropTypes.string
}

export default ErrorMessages
