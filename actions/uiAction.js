import ActionType from './actionType';

export function updateUserData(data) {
  return (dispatch) => {
    dispatch({type: ActionType.UPDATE_USER_DATA, payload: data});
  };
}
