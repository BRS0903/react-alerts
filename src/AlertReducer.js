export const ADD_ALERT = 'ADD_ALERT';
export const REMOVE_ALERT = 'REMOVE_ALERT';

export const AlertReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ALERT:
      return [...state, action.payload];
    case REMOVE_ALERT: {
      let newState = [...state];
      const elementIndex = newState.findIndex(
        (elm) => elm.id === action.payload.id
      );
      newState.splice(elementIndex,1)
      return newState;
    }
    default:
      return state;
  }
};
