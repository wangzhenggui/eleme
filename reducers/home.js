import { ACTION_TYPE } from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPE.HOME_GET_JSON_DATA:
      return {
        ...state,
        cityNumber: action.payload,
      };
      case ACTION_TYPE.HOME_GET_LOCATION:
      return {
        ...state,
        address: action.payload.address,
        city: action.payload.city,
        district: action.payload.district
      };
    default:
      return state;
  }
};