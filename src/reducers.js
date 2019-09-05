import {combineReducers} from 'redux';

import ants from './modules/ants/reducers';
import auth from './modules/auth/reducers';

const reducer = combineReducers({
  ants,
  auth
});

export default reducer;
