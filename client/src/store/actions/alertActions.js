import {
  ALERT_SET,
  ALERT_SHOW,
  ALERT_HIDE,
  ALERT_RESET,
} from '../types';

export const setAlert = (alertData) => async (dispatch) => {
  dispatch({
    type: ALERT_SET,
    payload: {
      show: alertData.show,
      text: alertData.text,
      severity: alertData.severity,
      button: {
        to: alertData.button?.to ? alertData.button.to : null,
        label: alertData.button?.label ? alertData.button.label : null,
      },
      code: alertData.code,
    }
  });
};

export const showAlert = () => async (dispatch) => {
  dispatch({ type: ALERT_SHOW });
};

export const hideAlert = () => async (dispatch) => {
  dispatch({ type: ALERT_HIDE });
};

export const resetAlert = () => async (dispatch) => {
  dispatch({ type: ALERT_RESET });
};