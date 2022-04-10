import { combineReducers } from 'redux';

import { Auth } from './auth';
import { Blockchain } from './blockhain';

export const reducers = combineReducers({
  auth: Auth,
  blockchain: Blockchain,
});
