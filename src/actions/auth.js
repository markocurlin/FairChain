import * as ActionTypes from '../constants/actionTypes';

import { SIGNIN } from '../shared/signin';

export const signin = (formData, router) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.AUTH, SIGNIN });
    router.go('/');
  } catch (error) {
    console.log(error);
  }
};
