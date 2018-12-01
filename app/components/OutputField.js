import React from 'react';
import './OutputField.css';
import { newInput } from './selectors';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

class OutputField extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='output-field'>
        Your translation here:<br />
        <div className='output'>{this.props.value}</div>
      </div>
    );
  }
}

const mapStateToProps = createSelector(newInput(), currentState => ({
  value: currentState
}));

export default connect(
  mapStateToProps,
  null,
)(OutputField);
