import { call, put, delay } from 'redux-saga/effects'
import { get } from '../../../../services/api'
import { loadCarInfoSuccess, loadCarInfoFailure } from '../../actions'

export default function * loadCarInfo({ payload: carNumber }) {
  try {
    const { data: { result: carInfo } } = yield call(get, `/car-info/${carNumber}`)
    
    // Simulate a long loading for spinner demo :)
    yield delay(2000)
    
    yield put(loadCarInfoSuccess(carInfo))
  } catch (e) {
    yield put(loadCarInfoFailure('Во время поиска произошла ошибка. Пожалуйста, попробуйте позже'))
  }
}
