import {
  LOAD_CAR_INFO_REQUEST,
  LOAD_CAR_INFO_SUCCESS,
  LOAD_CAR_INFO_FAILURE,
  RESET_ERROR
} from './actionTypes'

const initialState = {
  carInfo: null,
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  const { type, payload } = action
  
  switch (type) {
    case LOAD_CAR_INFO_REQUEST:
      return {
        ...state,
        carInfo: null,
        loading: true,
        error: null
      }
    case LOAD_CAR_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        carInfo: payload,
        error: null
      }
    case LOAD_CAR_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload
      }
    case RESET_ERROR:
      return {
        ...state,
        error: null
      }
    default:
      return state
  }
}
