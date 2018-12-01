import React from 'react';
import './RadioButtons.css';
import { chosenRadiobutton } from './selectors';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { radioButtonsReducer } from './actions';

class RadioButtons extends React.Component {
  constructor (props) {
    super(props);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  handleLanguageChange (changeEvent) {
    this.props.handleRadiobuttonChange(changeEvent.target.value);
  }

  render () {
    return (
      <div className="radio-buttons">
        <form>
          <div className="radio">
            <label>
              <input type="radio"
              value="yoda"
              checked={this.props.selectedOption === 'yoda'}
              onChange={this.handleLanguageChange} />
        Yoda
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio"
              value="minion"
              checked={this.props.selectedOption === 'minion'}
              onChange={this.handleLanguageChange} />
        Minion
            </label>
          </div>
          <div className="radio">
            <label>
              <input type="radio"
              value="pirate"
              checked={this.props.selectedOption === 'pirate'}
              onChange={this.handleLanguageChange} />
        Pirate
            </label>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleRadiobuttonChange: data => dispatch(radioButtonsReducer(data))
});

const mapStateToProps = createSelector(chosenRadiobutton(), currentState => ({
  selectedOption: currentState,
}));

export default connect (
  mapStateToProps,
  mapDispatchToProps,
)(RadioButtons);
