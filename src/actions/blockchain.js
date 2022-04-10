import * as ActionTypes from '../constants/actionTypes';
import { BLOCKCHAIN } from '../shared/blockchain';

export const fetchBlockchain = () => (dispatch) => {
  dispatch({
    type: ActionTypes.START_LOADING_BLOCKCHAIN,
  });

  setTimeout(() => {
    dispatch({
      type: ActionTypes.LOAD_BLOCKCHAIN,
      payload: BLOCKCHAIN,
    });
  }, 300);
};
