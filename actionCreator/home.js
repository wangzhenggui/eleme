import { ACTION_TYPE } from '../constants';

export const getLocation = (data) => ({
  type: ACTION_TYPE.HOME_GET_LOCATION,
  payload: data,
})

export const getJsonData = (data) => ({
  type: ACTION_TYPE.HOME_GET_JSON_DATA,
  payload: data,
})
