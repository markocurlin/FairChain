import { combineReducers } from 'redux';

import { Auth } from './auth';

export const reducers = combineReducers({
  auth: Auth,
});
