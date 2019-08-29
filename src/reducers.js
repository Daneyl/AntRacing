import {combineReducers} from 'redux';

import ants from './modules/ants/reducers';

const reducer = combineReducers({
  ants,
});

export default reducer;
