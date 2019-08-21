import React from 'react';

class HelloWorld extends React.Component {
  state = {
    who: 'world'
  };
  handleButtonClickWorld = () => {
    this.setState({
    who: 'world'
  })
  }
  handleButtonClickFriend = () => {
    this.setState({
    who: 'friend'
  })
  }
  handleButtonClickReacct = () => {
    this.setState({
    who: 'React'
  })
  }
  render() {
    return (
      <div>
        <p>Hello, {this.state.who}</p>
        <button onClick={this.handleButtonClickWorld}>
          World
        </button>
        <button onClick={this.handleButtonClickFriend}>
          Friend
        </button>
        <button onClick={this.handleButtonClickReact}>
          React
        </button>
      </div>
    )
  }
}

export default HelloWorld