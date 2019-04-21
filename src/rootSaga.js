import { fork } from 'redux-saga/effects';
import CarInfoSagas from './containers/CarInfo/sagas'

export default function * rootSaga() {
  yield fork(CarInfoSagas);
};
