import * as constants from './constants';
import {getAnts} from './services';
import {generateAntWinLikelihoodCalculator} from '../ants/services';
import {promisify} from '../../utilities';

export const loadAnts = () => async dispatch => {
  const response = await getAnts();

  dispatch({
    type: constants.STORE_ANTS,
    payload: {
      ants: response.data.ants,
    },
  });
};

export const startRace = ants => async dispatch => {
  dispatch({
    type: constants.RACE_STARTED,
  });

  const promises = ants.map((_, index) =>
    promisify(generateAntWinLikelihoodCalculator()).then(ratio => {
      dispatch({
        type: constants.WIN_LIKELYHOOD_LOADED,
        payload: {index, percent: ratio * 100},
      });
    }),
  );

  Promise.all(promises).then(() => {
    dispatch({
      type: constants.ON_RACE_END,
    });
  });
};

export const resetRace = () => async dispatch => {
  dispatch({
    type: constants.RESET_RACE,
  });
}
