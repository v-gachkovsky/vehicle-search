import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TextInput = styled.input`
  width: calc(100% - 38px);
  margin: 1rem;
  height: 2rem;
  font-size: 16px;
  outline: none;
`

const SearchField = ({
  searchCarHandler,
  placeholder,
  disabled
}) => (
  <TextInput
    onKeyUp={ searchCarHandler }
    placeholder={ placeholder }
    disabled={ disabled }
  />
)

SearchField.propTypes = {
  // Data
  placeholder: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  // Methods
  searchCarHandler: PropTypes.func.isRequired,
}

export default SearchField
