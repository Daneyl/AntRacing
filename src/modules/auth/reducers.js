import {CHECK_FOR_USER_IN_STORAGE} from './constants';

const INITIAL_STATE = {
  hasCheckedForUserInStorage: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHECK_FOR_USER_IN_STORAGE:
      return {
        ...state,
        hasCheckedForUserInStorage: action.payload,
      };
    default:
      return state;
  }
};