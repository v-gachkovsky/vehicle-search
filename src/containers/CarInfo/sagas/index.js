import { fork } from 'redux-saga/effects'
import loadCarInfo from './loadCarInfo'

export default function * carInfoSaga() {
  yield fork(loadCarInfo)
}
