import { fromJS } from 'immutable';

export const initialState = fromJS({
  value: '',
  selectedOption: 'yoda',
});

function inputFieldReducer (state = initialState, action) {
  switch (action.type) {
    case 'INPUT_SUBMITTED':
      return state.set('value', action.value);
    case 'RADIOBUTTONS_CHOSEN':
      return state.set('selectedOption', action.selectedOption);
    default:
      return state;
  }
}

export default inputFieldReducer;
