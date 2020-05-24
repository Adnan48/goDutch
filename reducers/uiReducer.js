import ActionType from '../actions/actionType';

const initState = {
  userData: {},
};

export default function uiReducer(state = initState, action) {
  switch (action.type) {
    case ActionType.UPDATE_USER_DATA: {
      return {
        ...state,
        userData: {
          ...state.userData,
          ...action.payload,
        },
      };
    }
    default:
  }
  return state;
}
