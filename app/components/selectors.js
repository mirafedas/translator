import { createSelector } from 'reselect';
import { initialState } from './reducer';

const getCurrentInputState = state => state.get('value', initialState);

const newInput = () =>
  createSelector(getCurrentInputState, inputState => inputState.get('value'));

const getCurrentRadiobuttonState = state => state.get('selectedOption', initialState);

const chosenRadiobutton = () =>
  createSelector(getCurrentRadiobuttonState, inputState => inputState.get('selectedOption'));

export { getCurrentInputState, newInput, getCurrentRadiobuttonState, chosenRadiobutton };

