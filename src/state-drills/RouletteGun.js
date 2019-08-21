import React from 'react';

class RouletteGun extends React.Component {
  static defaultProps = {
    bulletInChamber: 8
  };
  state = {
    chamber: null,
    spinningTheChamber: false,
  };
  componentWillUnmount() {
    clearTimeout(this.timeout)
  }
  handleButtonClick = () => {
    this.setState({
      spinningTheChamber: true,
    })
    this.timout = setTimeout(() => {
      const randomChamber = Math.ceil(Math.random() * 8)
      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false,
      })
    }, 2000)
  }
  renderDisplay() {
    if (spinningTheChamber) {
      return 'spinning the chamber and pulling the trigger! ....'
    }
    else if (chamber === bulletInChamber) {
      return 'BANG!!!!!!'
    }
    else {
      return 'youre safe!'
    }
  }
  render() {
    return (
      <div>
        <p>{this.renderDisplay()}</p>
        <button onClick={this.handleButtonClick}>
          Pull the trigger!
        </button>
      </div>
    )
  }
}

export default RouletteGun