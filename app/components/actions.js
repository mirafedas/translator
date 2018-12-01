export function inputFieldReducer (textInInput) {
  return {
    type: 'INPUT_SUBMITTED',
    value: textInInput,
  };
}

export function radioButtonsReducer (chosenRadiobutton) {
  return {
    type: 'RADIOBUTTONS_CHOSEN',
    selectedOption: chosenRadiobutton,
  };
}
