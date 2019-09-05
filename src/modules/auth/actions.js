// @flow

import * as constants from './constants';

export const checkUserInStorage = (isChecked: Boolean) => async dispatch => {
  dispatch({
    type: constants.CHECK_FOR_USER_IN_STORAGE,
    payload: {isChecked},
  });
};