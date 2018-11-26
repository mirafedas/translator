import React from 'react';

class Header extends React.Component {
  render () {
    return (
      <div className='header'>
        <h1>Translator</h1>
        <p>Communication with other creatures has never been easier!
           Choose the language, input text in English and click Go!</p>
      </div>
    );
  }
}

export default Header;
