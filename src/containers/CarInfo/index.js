// Libs
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styled from 'styled-components'
// Components
import SearchField from '../../components/SearchField'
import CarInfoTable from '../../components/CarInfoTable'
import ErrorMessages from '../../components/ErrorMessages'
import Spinner from '../../components/Spinner'
// Utils
import { searchFieldPlaceholder, title } from './constants'
import { isSearchStringValid } from './validation'

import * as actions from './actions'
import {
  selectCarInfo,
  selectLoadingStatus,
  selectError
} from './selectors'


const CarInfoContainer = styled.div``

const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-left: 1rem;
  margin-bottom: 0;
  margin-top: 0;
`

const SearchFieldContainer = styled.div`
  padding-top: 1rem;
  background-color: #6495ED;
`

class CarInfo extends PureComponent {
  state = {
    searchStringFormatError: null
  }
  
  searchCarHandler = ({ key, target: { value: searchString } }) => {
    const { loadCarInfo, resetError } = this.props
    
    if (key === 'Enter') {
      // Clear errors first
      resetError()
      this.setState({
        searchStringFormatError: null
      })
      
      if (!isSearchStringValid(searchString)) {
        this.setState({
          searchStringFormatError:
            'Номер авто должен быть в формате: 2 буквы серии для регионов, 4 цифры номера и 2 буквы в конце. Например AB1234CD'
        })
        return null
      }
      
      loadCarInfo(searchString)
    }
  }
  
  render() {
    const { carInfo, loading, error } = this.props
    const { searchStringFormatError } = this.state
    
    return (
      <CarInfoContainer>
        <SearchFieldContainer>
          <Title>
            { title }
          </Title>
          <SearchField
            searchCarHandler={ this.searchCarHandler }
            placeholder={ searchFieldPlaceholder }
            disabled={ loading }
          />
        </SearchFieldContainer>
        
        <ErrorMessages
          searchStringFormatError={ searchStringFormatError }
          apiError={ error }
        />
        
        <Spinner
          isLoading={ loading }
        />
        
        <CarInfoTable
          carInfo={ carInfo }
          isLoading={ loading }
        />
      </CarInfoContainer>
    )
  }
}

CarInfo.propTypes = {
  // Data
  carInfo: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  // Methods
  loadCarInfo: PropTypes.func.isRequired,
  resetError: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  carInfo: selectCarInfo(state),
  loading: selectLoadingStatus(state),
  error: selectError(state)
})

const mapDispatchToProps = {
  loadCarInfo: actions.loadCarInfo,
  resetError: actions.resetError
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarInfo)
