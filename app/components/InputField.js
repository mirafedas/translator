import React from 'react';
import './InputField.css';
import { chosenRadiobutton } from './selectors';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { inputFieldReducer } from './actions';

class InputField extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit (event) {
    event.preventDefault();
    if (!navigator.onLine) {
      return alert('No connection!');
    }
    const API = 'http://api.funtranslations.com/translate/' + this.props.selectedOption +
    '.json?text=' + this.state.value;
    fetch(API)
      .then(response => response.json())
      .then(data => {
        let value = 'Something went wrong';
        if (data) {
          const { contents, error } = data;
          value = contents && contents.translated || (error && error.message) || 'ERROR';
        }
        this.props.handleInputChange(value);
      });
  }

  render () {
    return (
      <div className='input-field'>
        <form onSubmit={this.handleSubmit}>
          <label>Input your text here:</label>
          <input
            type="text"
            placeholder="Input your text here:"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit" value="Go!">Go!</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleInputChange: data => dispatch(inputFieldReducer(data))
});

const mapStateToProps = createSelector(chosenRadiobutton(), currentState => ({
  selectedOption: currentState
}));

export default connect (
  mapStateToProps,
  mapDispatchToProps,
)(InputField);
