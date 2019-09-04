import {
  STORE_ANTS,
  WIN_LIKELYHOOD_LOADED,
  RACE_STARTED,
  ON_RACE_END,
  RESET_RACE,
} from './constants';

const INITIAL_STATE = {
  antsList: [],
  isRacing: false,
  isRaceFinished: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STORE_ANTS:
      return {
        ...state,
        antsList: action.payload.ants.map(ant => {
          return {
            ...ant,
            winLikelyhood: 0,
            state: 'Not yet run',
          };
        }),
      };
    case RACE_STARTED:
      return {
        ...state,
        antsList: state.antsList.map(ant => {
          return {
            ...ant,
            winLikelyhood: 0,
            state: 'In progress',
          };
        }),
        isRacing: true,
        isRaceFinished: false,
      };
    case WIN_LIKELYHOOD_LOADED:
      return {
        ...state,
        antsList: [
          ...state.antsList.slice(0, action.payload.index),
          {
            ...state.antsList[action.payload.index],
            winLikelyhood: action.payload.percent,
            state: 'All calculated',
          },
          ...state.antsList.slice(action.payload.index + 1),
        ],
      };
    case ON_RACE_END:
      return {
        ...state,
        isRacing: false,
        isRaceFinished: true,
      };
    case RESET_RACE:
      return {
        ...state,
        antsList: state.antsList.map(ant => {
          return {
            ...ant,
            winLikelyhood: 0,
            state: 'Not yet run',
          };
        }),
        isRaceFinished: false,
        isRacing: false,
      };
    default:
      return state;
  }
};
