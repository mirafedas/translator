import React from 'react';
import Header from './Header';
import InputField from './InputField';
import RadioButtons from './RadioButtons';
import OutputField from './OutputField';
import Particles from 'react-particles-js';
import './Wrapper.css';

class Wrapper extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='wrapper'>
        <Particles />
        <Header />
        <RadioButtons />
        <InputField />
        <OutputField />
      </div>
    );
  }
}

export default Wrapper;
