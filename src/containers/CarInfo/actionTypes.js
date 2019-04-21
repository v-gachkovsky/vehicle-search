import { addPrefix } from '../../utils';
import { NAMESPACE } from './constants'

const NS = type => addPrefix(NAMESPACE, type);

export const LOAD_CAR_INFO_REQUEST = NS('LOAD_CAR_INFO_REQUEST')
export const LOAD_CAR_INFO_SUCCESS = NS('LOAD_CAR_INFO_SUCCESS')
export const LOAD_CAR_INFO_FAILURE = NS('LOAD_CAR_INFO_FAILURE')

export const RESET_ERROR = NS('RESET_ERROR')
