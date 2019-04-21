import { takeLatest } from 'redux-saga/effects'
import { LOAD_CAR_INFO_REQUEST } from '../../actionTypes'
import loadCarInfo from './loadCarInfo'

export default function * watchLoadCarInfo() {
  yield takeLatest(LOAD_CAR_INFO_REQUEST, loadCarInfo)
}
