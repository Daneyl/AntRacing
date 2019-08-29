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
      winLikelyhoods: Array(response.data.ants.length).fill(0),
    },
  });

  response.data.ants.forEach((_, index) => {
    promisify(generateAntWinLikelihoodCalculator()).then(ratio => {
      dispatch({
        type: constants.WIN_LIKELYHOOD_LOADED,
        payload: {index, percent: ratio * 100},
      });
    });
  });
};
