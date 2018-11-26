import React from 'react';
import './RadioButtons.css';

class RadioButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: 'yoda'
    };
  }
      handleLanguageChange = (changeEvent) => {
        this.setState({
          selectedOption: changeEvent.target.value
        });
        this.props.handleLanguageChange(changeEvent.target.value)
      }

  render() {
    return (
      <div className="container" className="radio-buttons">
  <div className="row">
    <div className="col-sm-12">

      <form>
        <div className="radio">
          <label>
            <input type="radio" value="yoda" checked={this.state.selectedOption === 'yoda'} onChange={this.handleLanguageChange} />
            Yoda
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="minion" checked={this.state.selectedOption === 'minion'} onChange={this.handleLanguageChange} />
            Minion
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" value="pirate" checked={this.state.selectedOption === 'pirate'} onChange={this.handleLanguageChange} />
            Pirate
          </label>
        </div>
      </form>

    </div>
  </div>
</div>
    );
  }
}

export default RadioButtons;
