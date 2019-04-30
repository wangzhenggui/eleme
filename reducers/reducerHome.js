import { ACTION_TYPE } from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPE.RESET_ALL:
      return {
        ...state,
        cityNumber: action.data,
      };
    default:
      return state;
  }
};