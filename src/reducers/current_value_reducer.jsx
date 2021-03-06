const currentValueReducer = (state = " ", action) => {
  // TO DO handle actions
  let num;
  switch (action.type) {
    case 'SET_CURRENT_VALUE':
      if (typeof(action.payload) === 'object') {
        return action.payload.answer;
      }
      if (['*', '+', '=', '÷', 'clear', '-'].includes(action.payload)) {
        if (action.payload === 'clear' || action.payload === '=') {
          return " ";
        }
        return action.payload;
      }
      if (['*', '+', '=', '÷', 'clear', '-'].includes(state)) {
        return action.payload;
      }
      num = state.toString() + action.payload.toString();
      return num;
    default:
      return state;
  }
};
export default currentValueReducer;
