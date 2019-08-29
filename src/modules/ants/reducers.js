import {STORE_ANTS, WIN_LIKELYHOOD_LOADED} from './constants';

const INITIAL_STATE = {
  antsList: [],
  winLikelyhoods: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_ANTS:
      return {
        ...state,
        antsList: action.payload.ants,
        winLikelyhoods: action.payload.winLikelyhoods,
      };
    case WIN_LIKELYHOOD_LOADED:
      return {
        ...state,
        winLikelyhoods: [
          ...state.winLikelyhoods.slice(0, action.payload.index - 1),
          action.payload.percent,
          ...state.winLikelyhoods.slice(action.payload.index),
        ],
      };
    default:
      return state;
  }
};
