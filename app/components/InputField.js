import React from 'react';
import './InputField.css';

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', language: props.selectedLanguage};
  }

  componentWillReceiveProps(nextProps) {
    this.setState({language: nextProps.selectedLanguage});
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const API = `https://api.funtranslations.com/translate/${this.state.language}.json?text=${this.state.value}`;
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.props.handleDataReceived({ data });
      });
  }

  render() {
    return (
      <div className='input-field'>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="dynamic-label-input">Input your text here:</label>
          <input type="text" id="dynamic-label-input" placeholder="Input your text here:" value={this.state.value} onChange={this.handleChange} />
          <button type="submit" value="Go!">Go!</button>
        </form>
      </div>
    );
  }
}

export default InputField;
