import { createAction } from '../../utils/redux'
import {
  LOAD_CAR_INFO_REQUEST,
  LOAD_CAR_INFO_SUCCESS,
  LOAD_CAR_INFO_FAILURE,
  RESET_ERROR
} from './actionTypes'

export const loadCarInfo = createAction(LOAD_CAR_INFO_REQUEST)
export const loadCarInfoSuccess = createAction(LOAD_CAR_INFO_SUCCESS)
export const loadCarInfoFailure = createAction(LOAD_CAR_INFO_FAILURE)
export const resetError = createAction(RESET_ERROR)
