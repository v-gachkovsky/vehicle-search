import { combineReducers } from 'redux';
import CarInfoReducer from './containers/CarInfo/reducer'
import { NAMESPACE as CAR_INFO_NAMESPACE } from './containers/CarInfo/constants'

export default () => combineReducers({
  [CAR_INFO_NAMESPACE]: CarInfoReducer
})
