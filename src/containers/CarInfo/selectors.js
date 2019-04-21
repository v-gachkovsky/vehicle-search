import { NAMESPACE } from './constants'

// I like to use `reselect`. But current approach isn't bad in this case :)
export const selectCarInfo = state => state[NAMESPACE].carInfo
export const selectLoadingStatus = state => state[NAMESPACE].loading
export const selectError = state => state[NAMESPACE].error
