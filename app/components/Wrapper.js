import React from 'react';
import Header from './Header';
import InputField from './InputField';
import RadioButtons from './RadioButtons';
import OutputField from './OutputField';
import Particles from 'react-particles-js';
import './Wrapper.css';

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLanguage: 'yoda',
      receivedData: ''
    };
  }

  handleLanguageChange = (value) => {
    this.setState({
      selectedLanguage: value
    });
  }

  handleDataReceived = (data) => {
    this.setState({
      receivedData: data
    });
  }

  render() {
    const { selectedLanguage, receivedData } = this.state;
    return (
      <div className='wrapper'>
        <Particles />
        <Header />
        <RadioButtons handleLanguageChange={this.handleLanguageChange} />
        <InputField selectedLanguage={selectedLanguage} handleDataReceived={this.handleDataReceived}/>
        <OutputField receivedData={receivedData}/>
      </div>
    )
  }
}

export default Wrapper;
