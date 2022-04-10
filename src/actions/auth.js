import * as ActionTypes from '../constants/actionTypes';

import { SIGNIN } from '../shared/signin';

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: ActionTypes.AUTH, data: SIGNIN });
    navigate('/');
  } catch (error) {
    console.log(error);
  }
};
