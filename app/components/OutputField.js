import React from 'react';
import './OutputField.css';

class OutputField extends React.Component {
  constructor (props) {
    super(props);
    this.state = {value: ''};
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.receivedData && nextProps.receivedData.data) {
      const { contents, error } = nextProps.receivedData.data;
      const value = contents && contents.translated || (error && error.message) || 'ERROR';
      this.setState({ value });
    }
  }

  render () {
    return (
      <div className='outputField'>
        Your translation here:<br />
        <div id='output'>{this.state.value}</div>
      </div>
    );
  }
}

export default OutputField;
